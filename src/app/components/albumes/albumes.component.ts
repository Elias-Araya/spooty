import { Component } from "@angular/core";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { GuardarAlbumComponent } from "../modals/guardar-album/guardar-album.component";
import { BandaService } from "src/app/service/banda.service";
import { AlbumService } from "src/app/service/album.service";

@Component({
  selector: "app-albumes",
  templateUrl: "./albumes.component.html",
  styleUrls: ["./albumes.component.scss"],
})
export class AlbumesComponent {
  modalRef: NgbModalRef | undefined;
  id_banda: any;
  albumArray: any[] = [];
  constructor(private modalService: NgbModal, private bandaSvc: BandaService, private albumSvc: AlbumService) {
    let obj = {
      id_usuario: localStorage.getItem("id_usuario"),
    };
    this.bandaSvc.obtenerBanda(obj).subscribe({
      next: (success: any) => {
        console.log("Banda obtenida exitosamente", success);
        if (success.data) {
          this.id_banda = success.data.id_banda;
          this.obtenerAlbumes();
        }
      },
      error: (e) => {
        console.log("Error en la wea", e);
        console.log("ERROR MENSAJE ", e.error.mensaje);
        /* this.logFailed(e.error.mensaje); */
      },
    });
  }

  obtenerAlbumes() {
    let obj = {
      id_banda: this.id_banda,
    };
    this.albumSvc.obtenerAlbumes(obj).subscribe({
      next: (success: any) => {
        console.log("Albumes obtenidos exitosamente", success);
        success.data.forEach((element: any) => {
          element = { ...element, img: "https://picsum.photos/1000/1000" };
          this.albumArray.push(element);
        });
        console.log("THIS ALBUM ", this.albumArray);
      },
      error: (e) => {
        console.log("Error en la wea", e);
        console.log("ERROR MENSAJE ", e.error.mensaje);
        /* this.logFailed(e.error.mensaje); */
      },
    });
  }
  abrirModal() {
    this.modalRef = this.modalService.open(GuardarAlbumComponent, { size: "lg" });
    this.modalRef.componentInstance.id_banda = this.id_banda;

    this.modalRef.result.then((result) => {
      console.log;
      console.log("Resultado ", result.participante);
      if (result.estado) {
        this.albumArray.push(result.data);
        console.log("THIS ", this.albumArray);
      }
    });
  }
}
