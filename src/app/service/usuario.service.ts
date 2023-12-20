import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  private url = environment.api;
  constructor(private http: HttpClient) {}

  login(data: any): Observable<any[]> {
    return this.http.post<any>(`${this.url}/login`, data);
  }

  registrar(data: any): Observable<any[]> {
    return this.http.post<any>(`${this.url}/createUser`, data);
  }

  listar(data: any): Observable<any[]> {
    return this.http.post<any>(`${this.url}/listUsario`, data);
  }
}
