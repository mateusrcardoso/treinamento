import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from 'src/models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private httpClient: HttpClient) { }

  consultar(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(`https://localhost:5001/produto`);
  }

  cadastrar(produto: Produto): Observable<Produto> {
    return this.httpClient.post<Produto>(`https://localhost:5001/produto`, produto);
  }
}
