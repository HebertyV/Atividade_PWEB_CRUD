import { Component } from "@angular/core";
import { filme } from "../shared/model/filmes";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  titulo = "Lista de Filmes";
  subtitulo1 = "Adicionar Filme";
  subtitulo2 = "Lista de Filmes";
  filme: filme = new filme();
  filmes: filme[] = [];

  adicionar(): void {
    this.filmes.push(this.filme);
    this.filme = new filme();
  }
}
