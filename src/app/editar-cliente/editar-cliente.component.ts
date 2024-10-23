import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from './../services/cliente.service';
import { Cliente } from './../model/cliente';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent {
  codigo!: number;
  cliente!: Cliente;

  constructor(private clienteService: ClienteService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.codigo = this.activatedRoute.snapshot.params['codigo'];
    this.cliente = new Cliente();
    this.clienteService.consultarCliente(this.codigo).subscribe(data => {
      this.cliente = data;
    });
  }

  retornar(): void {
    this.router.navigate(['listar-clientes']);
  }

  onSubmit() {
    this.clienteService.alterarCliente(this.codigo, this.cliente).subscribe(data => {
      console.log(data);
      this.retornar();
    })
  }
}
