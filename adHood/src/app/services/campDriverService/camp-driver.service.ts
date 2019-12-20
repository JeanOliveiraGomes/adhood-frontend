import { Injectable } from '@angular/core';
import { CampDriverEntity } from 'src/app/entidades/campDriverEntity';
import { ApiService } from 'src/app/apiProvider/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampDriverService {
  private path = 'campdriver';

  constructor(private api: ApiService) { }

  public save( campanha: CampDriverEntity): Observable<any> {
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
