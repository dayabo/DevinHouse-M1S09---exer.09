import { Component, OnInit } from '@angular/core';
import {Produto} from "src/assets/exercicio09"

@Component({
  selector: 'exp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, Produto{
  title = 'exercicio09';
  valorTotal: number = 0;

  //molde do produto
	nome: string = "";
	valor: number = 0;
	codigo: number = 0;
	quantidade: number = 0;
	emEstoque: boolean = true;

  //utilizando o molde produto
  sofa: Produto = {
		nome: "Sofá 4 lugares",
		valor: 120,
		codigo: 1,
		quantidade: 30,
		emEstoque: true,
	};

    comprar(produto:Produto, quantidade:number){
      alert(`Há ${produto.quantidade} unidades no estoque`) 
    
      if(produto.emEstoque && produto.quantidade >=quantidade){
       this.valorTotal += produto.valor * quantidade 
        produto.quantidade -= quantidade
        
          
        if(!produto.quantidade){
          produto.emEstoque = false;
        }
       
      }else{
      alert(`Quantidade de ${quantidade} unidade é maior que contém no estoque !!! Contém no estoque : ${produto.quantidade} unidades`)
    }
  }
    ngOnInit(): void {
      this.comprar(this.sofa,30);
      this.comprar(this.sofa,10);
     
    }
}



