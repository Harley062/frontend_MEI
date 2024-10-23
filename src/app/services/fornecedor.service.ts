import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fornecedor } from './../model/fornecedor';

@Injectable({
  providedIn: 'root'
})

export class FornecedorService {

  private url = "http://localhost:8080/fornecedores";

  constructor(private httpClient: HttpClient) { }

  //Listar
  listarFornecedor(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url);
  }


  //Incluir
  incluirFornecedor(dados: Fornecedor): Observable<Object> {
    return this.httpClient.post(this.url, dados);
  }

  //Alterar
  alterarFornecedor(codigo: number, dados: Fornecedor): Observable<Object> {
    return this.httpClient.put(`${this.url}/${codigo}`, dados);
  }

  //Excluir
  excluirFornecedor(codigo: number): Observable<Object> {
    return this.httpClient.delete(`${this.url}/${codigo}`);
  }

  //Consultar
  consultarFornecedor(codigo: number): Observable<any> {
    return this.httpClient.get(`${this.url}/${codigo}`);
  }
}
