import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './../model/cliente';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  private url = "http://localhost:8080/clientes";

  constructor(private httpClient: HttpClient) { }

  //Listar
  listarCliente(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url);
  }


  //Incluir
  incluirCliente(dados: Cliente): Observable<Object> {
    return this.httpClient.post(this.url, dados);
  }

  //Alterar
  alterarCliente(codigo: number, dados: Cliente): Observable<Object> {
    return this.httpClient.put(`${this.url}/${codigo}`, dados);
  }

  //Excluir
  excluirCliente(codigo: number): Observable<Object> {
    return this.httpClient.delete(`${this.url}/${codigo}`);
  }

  //Consultar
  consultarCliente(codigo: number): Observable<any> {
    return this.httpClient.get(`${this.url}/${codigo}`);
  }
}
