import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fornecedor } from './../model/fornecedor';
import { FornecedorService } from './../services/fornecedor.service';

@Component({
  selector: 'app-editar-fornecedor',
  templateUrl: './editar-fornecedor.component.html',
  styleUrls: ['./editar-fornecedor.component.css']
})
export class EditarFornecedorComponent {
  codigo!: number;
  fornecedor!: Fornecedor;

  constructor(private fornecedorService: FornecedorService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.codigo = this.activatedRoute.snapshot.params['codigo'];
    this.fornecedor = new Fornecedor();
    this.fornecedorService.consultarFornecedor(this.codigo).subscribe(data => {
      this.fornecedor = data;
    });
  }

  retornar(): void {
    this.router.navigate(['listar-fornecedores']);
  }

  onSubmit() {
    this.fornecedorService.alterarFornecedor(this.codigo, this.fornecedor).subscribe(data => {
      console.log(data);
      this.retornar();
    })
  }
}
