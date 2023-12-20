import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AlbumService {
  private url = environment.api;
  constructor(private http: HttpClient) {}

  obtenerAlbumes(data: any): Observable<any[]> {
    return this.http.post<any>(`${this.url}/listarAlbum`, data);
  }

  crearAlbum(data: any): Observable<any[]> {
    return this.http.post<any>(`${this.url}/createAlbum`, data);
  }
}
