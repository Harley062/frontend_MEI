import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AlterarAgendamentoComponent } from './alterar-agendamento/alterar-agendamento.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';

import { ListarAgendasComponent } from './listar-agendas/listar-agendas.component';
import { InserirAgendamentoComponent } from './inserir-agendamento/inserir-agendamento.component';

import { ListarServicoComponent } from './listar-servico/listar-servico.component';
import { InserirServicoComponent } from './inserir-servico/inserir-servico.component';
import { EditarServicoComponent } from './editar-servico/editar-servico.component';

import { ListarClienteComponent } from './listar-clientes/listar-clientes.component';
import { InserirClienteComponent } from './inserir-cliente/inserir-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';

import { ListarFornecedoresComponent } from './listar-fornecedores/listar-fornecedores.component';
import { InserirFornecedorComponent } from './inserir-fornecedor/inserir-fornecedor.component';
import { EditarFornecedorComponent } from './editar-fornecedor/editar-fornecedor.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,

    ListarAgendasComponent,
    InserirAgendamentoComponent,
    AlterarAgendamentoComponent,

    ListarServicoComponent,
    InserirServicoComponent,
    EditarServicoComponent,

    ListarClienteComponent,
    InserirClienteComponent,
    EditarClienteComponent,

    ListarFornecedoresComponent,
    InserirFornecedorComponent,
    EditarFornecedorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
