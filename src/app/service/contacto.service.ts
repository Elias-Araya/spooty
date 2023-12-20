import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ContactoService {
  private url = environment.api;
  constructor(private http: HttpClient) {}

  obtenerContacto(data: any): Observable<any[]> {
    return this.http.post<any>(`${this.url}/listContactoUsuario`, data);
  }

  crearContacto(data: any): Observable<any[]> {
    return this.http.post<any>(`${this.url}/crearContacto`, data);
  }
}
