import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../model/fornecedor';
import { Router } from '@angular/router';
import { FornecedorService } from './../services/fornecedor.service';

@Component({
  selector: 'app-listar-fornecedores',
  templateUrl: './listar-fornecedores.component.html',
  styleUrls: ['./listar-fornecedores.component.css']
})
export class ListarFornecedoresComponent implements OnInit{

  fornecedores!: Fornecedor[];

  constructor(private fornecedorService: FornecedorService, private router: Router) { }

  ngOnInit(): void {
      this.listarFornecedores();
  }

  private listarFornecedores() {
    this.fornecedorService.listarFornecedor().subscribe(data => {
      this.fornecedores = data;
    });
  }

  excluirFornecedor(codigo: number) {
    if(confirm("Deseja realmente excluir?")){
      this.fornecedorService.excluirFornecedor(codigo).subscribe(data => {
        console.log(data);
        this.listarFornecedores();
      })
    }
  }

  incluirFornecedor() {
    this.router.navigate(['inserir-fornecedor']);
  }

  alterarFornecedor(codigo: number) {
    this.router.navigate(['editar-fornecedor', codigo]);
  }

  retornar() {
    this.router.navigate(['inicio']);
  }
}
