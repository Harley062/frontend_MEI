import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { InicioComponent } from './inicio/inicio.component';

import { ListarAgendasComponent } from './listar-agendas/listar-agendas.component';
import { InserirAgendamentoComponent } from './inserir-agendamento/inserir-agendamento.component';

import { AlterarAgendamentoComponent } from './alterar-agendamento/alterar-agendamento.component';
import { ListarServicosComponent } from './listar-servico/listar-servico.component';

import { InserirServicoComponent } from './inserir-servico/inserir-servico.component';
import { AlterarServicoComponent } from './alterar-servico/alterar-servico.component';

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
    
    ListarServicosComponent,
    InserirServicoComponent,

    AlterarServicoComponent,
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
