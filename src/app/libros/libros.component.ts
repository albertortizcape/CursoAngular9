import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { LibroclickedService } from '../libroclicked.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  libros: any;
  errorHttp: boolean = false;
  cargando: boolean = true;

  constructor(private http: HttpClient, public Libroclicked: LibroclickedService) { 
    
  }

  ngOnInit(): void {
    this.cargarLista();
  }

  cargarLista() : void{
    // Se puede llamar a servicios externos como:
    // https://jsonplaceholder.typicode.com/
    this.http.get('assets/lista-libros.json').subscribe(
      (respuesta: Response) => {this.libros = respuesta; this.cargando = false;},
      (respuesta: Response) => {this.errorHttp = true;}
    );
  }

  agregarLibro(_libroVisto){
    this.Libroclicked.libroVisto(_libroVisto);
  }

}
