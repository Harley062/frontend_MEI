import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {
  codigo!: number;
  cliente!: Cliente;
  documento!: string;
  documentoInvalido: boolean = false;

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.codigo = this.activatedRoute.snapshot.params['codigo'];
    this.cliente = new Cliente();
    this.clienteService.consultarCliente(this.codigo).subscribe(data => {
      this.cliente = data;
      this.documento = this.cliente.cpf || this.cliente.cnpj || '';
    });
  }

  atualizarDocumento(): void {
    if (this.documento.length <= 11) {
      this.cliente.cpf = this.documento;
      this.cliente.cnpj = undefined;
      this.documentoInvalido = this.documento.length !== 11;
    } else {
      this.cliente.cnpj = this.documento;
      this.cliente.cpf = undefined;
      this.documentoInvalido = this.documento.length !== 14;
    }
  }

  retornar(): void {
    this.router.navigate(['listar-clientes']);
  }

  onSubmit(): void {
    this.atualizarDocumento();
    if (this.documentoInvalido) {
      alert('O documento informado é inválido. Verifique o CPF (11 dígitos) ou CNPJ (14 dígitos).');
      return;
    }
    this.clienteService.alterarCliente(this.codigo, this.cliente).subscribe(data => {
      console.log(data);
      this.retornar();
    });
  }
}
