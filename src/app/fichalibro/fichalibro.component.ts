import { Component, OnInit, Input } from '@angular/core';
import { LibroclickedService } from '../libroclicked.service';

@Component({
  selector: 'app-fichalibro',
  templateUrl: './fichalibro.component.html',
  styleUrls: ['./fichalibro.component.css']
})
export class FichalibroComponent implements OnInit {

  @Input() libro: any;

  constructor(public Libroclicked: LibroclickedService) { }

  ngOnInit(): void {
  }

  agregarLibro(_libroVisto){
    this.Libroclicked.libroVisto(_libroVisto);
  }

}
