import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from './../model/cliente';
import { ClienteService } from './../services/cliente.service';

@Component({
  selector: 'app-inserir-cliente',
  templateUrl: './inserir-cliente.component.html',
  styleUrls: ['./inserir-cliente.component.css']
})
export class InserirClienteComponent implements OnInit {
  codigo!: number;
  cliente: Cliente = new Cliente();
  documento: string = '';
  documentoInvalido: boolean = false;

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {

  }

  retornar() {
    this.router.navigate(['listar-clientes']);
  }

  onSubmit() {

    this.cliente.codigo = 0;
    this.atualizarDocumento();

    if (!this.documentoInvalido) {
      this.clienteService.incluirCliente(this.cliente).subscribe(data => {
        console.log('Cliente cadastrado:', data);
        this.retornar();
      });
    } else {
      console.error('Documento inválido. Não foi possível cadastrar o cliente.');
    }
  }

  atualizarDocumento() {
    const documentoLimpo = this.documento.replace(/\D/g, '');

    if (documentoLimpo.length === 11) {
      this.cliente.cpf = documentoLimpo;
      this.cliente.cnpj = undefined;
      this.documentoInvalido = false;
    } else if (documentoLimpo.length === 14) {
      this.cliente.cnpj = documentoLimpo;
      this.cliente.cpf = undefined;
      this.documentoInvalido = false;
    } else {
      this.documentoInvalido = true;
      this.cliente.cpf = undefined;
      this.cliente.cnpj = undefined;
    }
  }
}
