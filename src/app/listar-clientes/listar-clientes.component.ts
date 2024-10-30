import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Router } from '@angular/router';
import { Cliente } from './../model/cliente';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClienteComponent implements OnInit{

  clientes!: Cliente[];

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
      this.listarClientes();
  }

  private listarClientes() {
    this.clienteService.listarCliente().subscribe(data => {
      this.clientes = data;
    });
  }

  excluirCliente(codigo: number) {
    if(confirm("Deseja realmente excluir?")){
      this.clienteService.excluirCliente(codigo).subscribe(data => {
        console.log(data);
        this.listarClientes();
      })
    }
  }

  incluirCliente() {
    this.router.navigate(['inserir-cliente']);
  }

  alterarCliente(codigo: number) {
    this.router.navigate(['editar-cliente', codigo]);
  }

  retornar() {
    this.router.navigate(['inicio']);
  }
}
