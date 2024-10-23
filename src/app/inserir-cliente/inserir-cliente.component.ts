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

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {

  }

  retornar() {
    this.router.navigate(['listar-clientes']);
  }

  onSubmit() {
    this.cliente.codigo = 0;
    this.clienteService.incluirCliente(this.cliente).subscribe(data => {
      console.log(data);
      this.retornar();
    });
  }
}
