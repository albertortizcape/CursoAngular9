import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detallelibro',
  templateUrl: './detallelibro.component.html',
  styleUrls: ['./detallelibro.component.css']
})
export class DetallelibroComponent implements OnInit {

  libros: Array<object>;
  libroId: number;
  libroClick: object;

  constructor(private rutausuario: ActivatedRoute) { 

    // Esto debería estar en un servicio
    this.libros =[
      {
        "id": 1,
        "titulo": "Te veré bajo el hielo",
        "autor": "Robert Bryndza"
      },
      {
        "id": 2,
        "titulo": "Dime quién soy",
        "autor": "Julia Navarro"
      },
      {
        "id": 3,
        "titulo": "El día que se perdió la cordura",
        "autor": "Javier Castillo"
      }
    ]
  }

  ngOnInit(): void {
    // Cuando se llama a este componente

    // Método observable, muy importante
    this.rutausuario.params.subscribe(params => {
      // Método asíncrono, va a esperar a que haya un resultado
      this.libroId = params['libroId'];
      this.libroClick = this.libroBuscador();
    });
  }

  filtroId(libro) {
    return libro.Id == this;
  }

  libroBuscador() {
    return this.libros.filter(this.filtroId, this.libroId)[0];
  }
}