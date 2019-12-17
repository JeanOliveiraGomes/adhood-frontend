import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/apiProvider/api.service';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private path = 'pessoa';

  constructor( private api: ApiService ) {

  }
  public findByNome(nome: string): Observable<any> {
    return this.api
      .get(`${this.path}/findByNome?nome=${nome}`);
  }

}
