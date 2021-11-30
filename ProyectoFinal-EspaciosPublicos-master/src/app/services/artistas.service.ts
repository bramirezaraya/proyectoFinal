import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArtistasService {

  constructor(private http:HttpClient) {

   }

   GetPostgres():Observable<any>{
    return this.http.get(`${environment.hostname}/postgres`);
   }
   GetPostgres2():Observable<any>{
    return this.http.get(`${environment.hostname}/Noticias`);
   }
}
