import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import {ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detallelibro',
  templateUrl: './detallelibro.component.html',
  styleUrls: ['./detallelibro.component.css']
})
export class DetallelibroComponent implements OnInit {

  libros: any;
  libroId: number;
  libroClick: any;
  errorHttp: boolean = false;
  cargando: boolean = true;

  constructor(private http: HttpClient,private rutausuario: ActivatedRoute) { }

  ngOnInit(): void {
    // Cuando se llama a este componente

    this.cargarLista();

    // Método observable, muy importante
    this.rutausuario.params.subscribe(params => {
      // Método asíncrono, va a esperar a que haya un resultado
      this.libroId = params['libroId'];
      this.libroClick = this.libroBuscador();
    });
  }

  cargarLista() : void{
    // Se puede llamar a servicios externos como:
    // https://jsonplaceholder.typicode.com/
    this.http.get('assets/lista-libros.json').subscribe(
      (respuesta: Response) => {this.libros = respuesta; this.cargando = false;},
      (respuesta: Response) => {this.errorHttp = true;}
    );
  }

  filtroId(libro) {
    return libro.id == this;
  }

  libroBuscador() {
    return this.libros.filter(this.filtroId, this.libroId)[0];
  }
}