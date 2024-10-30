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
  fornecedor: Fornecedor = new Fornecedor();
  documento: string = '';
  documentoInvalido: boolean = false;

  constructor(private fornecedorService: FornecedorService, private router: Router) { }

  ngOnInit(): void {

  }

  retornar() {
    this.router.navigate(['listar-fornecedores']);
  }

  onSubmit() {

    this.fornecedor.codigo = 0;
    this.atualizarDocumento();

    if (!this.documentoInvalido) {
      this.fornecedorService.incluirFornecedor(this.fornecedor).subscribe(data => {
        console.log('Fornecedor cadastrado:', data);
        this.retornar();
      });
    } else {
      console.error('CNPJ inválido. Não foi possível cadastrar o fornecedor.');
    }
  }

  atualizarDocumento() {
    const documentoLimpo = this.documento.replace(/\D/g, '');

    if (documentoLimpo.length === 14) {
      this.fornecedor.cnpj = documentoLimpo;
      this.documentoInvalido = false;
    } else {
      this.documentoInvalido = true;
      this.fornecedor.cnpj = '';
    }
  }
}
