import { Injectable } from '@angular/core' ;
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';

@Injectable()
export class ValidacionService{
  url: string;

  constructor(private _http: HttpClient){
    this.url = 'http://localhost:8500/';
  }

  enviarDatos(user:User): Observable<any>{
    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url+'enviar-datos', params,{headers:headers});
  }


}


