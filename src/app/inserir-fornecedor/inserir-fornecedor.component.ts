import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fornecedor } from './../model/fornecedor';
import { FornecedorService } from './../services/fornecedor.service';

@Component({
  selector: 'app-inserir-fornecedor',
  templateUrl: './inserir-fornecedor.component.html',
  styleUrls: ['./inserir-fornecedor.component.css']
})
export class InserirFornecedorComponent implements OnInit {
  codigo!: number;
  fornecedor: Fornecedor = new Fornecedor();

  constructor(private fornecedorService: FornecedorService, private router: Router) { }

  ngOnInit(): void {

  }

  retornar() {
    this.router.navigate(['listar-fornecedores']);
  }

  onSubmit() {
    this.fornecedor.codigo = 0;
    this.fornecedorService.incluirFornecedor(this.fornecedor).subscribe(data => {
      console.log(data);
      this.retornar();
    });
  }
}
