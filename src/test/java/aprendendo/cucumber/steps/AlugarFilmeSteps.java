package aprendendo.cucumber.steps;

import java.util.Calendar;
import java.util.Date;

import org.junit.Assert;

import aprendendo.cucumber.entidades.Aluguel;
import aprendendo.cucumber.entidades.Filme;
import aprendendo.cucumber.entidades.NotaAluguel;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AlugarFilmeSteps {

	private Filme filme;
	private Aluguel aluguel = new Aluguel();
	private NotaAluguel nota;

	@Given("^um filme com estoque de (\\d+) unidades$")
	public void umFilmeComEstoqueDeUnidades(int estoque) throws Throwable {
		filme = new Filme();
		filme.setEstoque(estoque);
		System.out.println(estoque);
	}

	@Given("^que o preco do aluguel seja R\\$ (\\d+)$")
	public void que_o_preco_do_aluguel_seja_R$(int preco) throws Throwable {
		filme.setPreco(preco);
		System.out.println(preco);

	}

	@Given("^o tipo do aluguel seja extendido$")
	public void o_tipo_do_aluguel_seja_extendido() throws Throwable {
		aluguel.setaluguelExtendido();
	}

	@When("^alugar$")
	public void alugar() {
		nota = aluguel.alugarFilme(filme);
		System.out.println(aluguel);

	}

	@Then("^o preco do aluguel sera R\\$ (\\d+)$")
	public void o_preco_do_aluguel_sera_R$(int preco) throws Throwable {
		nota.setPreco(preco);
		System.out.println(nota.getPreco());
		Assert.assertEquals(preco, nota.getPreco());

	}

	@Then("^nao sera possivel por falta de estoque$")
	public void nao_sera_possivel_por_falta_de_estoque() {
		Assert.assertEquals(0, nota.getEstoqueAluguel());

	}

	@Then("^a data de entrega sera no dia seguinte$")
	public void a_data_de_entrega_sera_no_dia_seguinte() throws Throwable {
		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.DAY_OF_MONTH, 1);

		Date dataRetorno = nota.getDataEntrega();
		Calendar calRetorno = Calendar.getInstance();
		calRetorno.setTime(dataRetorno);

		Assert.assertEquals(cal.get(Calendar.DAY_OF_MONTH), calRetorno.get(Calendar.DAY_OF_MONTH));
	}

	@Then("^a data de entrega sera em (\\d+) dias$")
	public void a_data_de_entrega_sera_em_dias(int arg1) throws Throwable {
		nota.setDataEntregaEx(arg1);
	}

	@Then("^e o estoque do filme sera (\\d+) unidade$")
	public void e_o_estoque_do_filme_sera_unidade(int arg1) throws Throwable {

		Assert.assertEquals(arg1, nota.getEstoqueAluguel());
	}

}
