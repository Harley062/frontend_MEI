import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../model/fornecedor';
import { FornecedorService } from '../services/fornecedor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-fornecedor',
  templateUrl: './editar-fornecedor.component.html',
  styleUrls: ['./editar-fornecedor.component.css']
})
export class EditarFornecedorComponent implements OnInit {
  codigo!: number;
  fornecedor!: Fornecedor;
  documento!: string;
  documentoInvalido: boolean = false;

  constructor(
    private fornecedorService: FornecedorService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.codigo = this.activatedRoute.snapshot.params['codigo'];
    this.fornecedor = new Fornecedor();
    this.fornecedorService.consultarFornecedor(this.codigo).subscribe(data => {
      this.fornecedor = data;
      this.documento = this.fornecedor.cnpj || '';
    });
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

  retornar(): void {
    this.router.navigate(['listar-fornecedores']);
  }

  onSubmit(): void {
    this.atualizarDocumento();

    if (this.documentoInvalido) {
      alert('O CNPJ informado é inválido.');
      return;
    }
    this.fornecedorService.alterarFornecedor(this.codigo, this.fornecedor).subscribe(data => {
      console.log(data);
      this.retornar();
    });
  }
}
