import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/apiProvider/api.service';
import { Observable } from 'rxjs';
import { CampanhaEntity } from 'src/app/entidades/campanha';

@Injectable({
  providedIn: 'root'
})
export class CampanhaService {
  private path = 'campanha';

  constructor(private api: ApiService) { }

  public save( campanha: CampanhaEntity): Observable<any> {
    return this.api
      .post(`${this.path}`,  campanha);
  }

  public findAll(): Observable<any> {
    return this.api
      .get(`${this.path}`);
  }

  public delete(id: number): Observable<any> {
    return this.api
      .get(`${this.path}/delete?id=${id}`);
  }
}
