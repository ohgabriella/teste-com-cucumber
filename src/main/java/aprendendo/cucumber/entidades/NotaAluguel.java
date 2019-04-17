package aprendendo.cucumber.entidades;

import java.util.Date;

public class NotaAluguel {
	private int preco;
	private Date dataEntrega;
	private int dataEntregaEx;
	private int estoqueAluguel;

	public int getPreco() {
		return preco;
	}

	public void setPreco(int preco) {
		this.preco = preco;
	}

	public Date getDataEntrega() {
		return dataEntrega;
	}

	public void setDataEntrega(Date dataEntrega) {
		this.dataEntrega = dataEntrega;
	}

	public int getEstoqueAluguel() {
		return estoqueAluguel;
	}

	public void setEstoqueAluguel(int estoqueAluguel) {
		this.estoqueAluguel = estoqueAluguel;
	}

	public int getDataEntregaEx() {
		return dataEntregaEx;
	}

	public void setDataEntregaEx(int date) {
		this.dataEntregaEx = date;
	}

		

}
