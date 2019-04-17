package aprendendo.cucumber.entidades;

import java.util.Calendar;

public class Aluguel {
	boolean aluguelExtendido;

	public void setaluguelExtendido() {
		this.aluguelExtendido = true;
	}
	
	public NotaAluguel alugarFilme(Filme filme) {
		NotaAluguel nota = new NotaAluguel();
		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.DAY_OF_MONTH, 1);

		if (aluguelExtendido) {
			nota.getDataEntregaEx();
		} else {
			nota.setDataEntrega(cal.getTime());
		}
		
		nota.setPreco(filme.getPreco());

		if (filme.getEstoque() <= 0) {
			nota.setEstoqueAluguel(filme.getEstoque());
		} else {
			nota.setEstoqueAluguel(filme.getEstoque() - 1);

		}
		
		return nota;

	}

}
