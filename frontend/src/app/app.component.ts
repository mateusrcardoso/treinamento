import { Component } from '@angular/core';
import { Produto } from 'src/models/produto';
import { ProdutoService } from 'src/services/produto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  produto: Produto = new Produto(1, 'Produto 1', 'Descrição Produto 1', 101);
  listaProduto: Produto[] = [];

  constructor(private produtoService: ProdutoService) { }

  consultar() {
    this.produtoService.consultar().subscribe(listaProduto => {
      this.listaProduto = listaProduto;
      console.log(this.listaProduto);
    })
  }

  cadastrar() {
    this.produtoService.cadastrar(this.produto).subscribe(produto => {
      this.listaProduto.push(produto);
      console.log(this.listaProduto);
      alert('Cadastro realizado com sucesso!');
    })
  }
}
