import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class BandaService {
  private url = environment.api;
  constructor(private http: HttpClient) {}

  obtenerBanda(data: any): Observable<any[]> {
    return this.http.post<any>(`${this.url}/listBandasUsuario`, data);
  }

  crearBanda(data: any): Observable<any[]> {
    return this.http.post<any>(`${this.url}/crearBanda`, data);
  }
}
