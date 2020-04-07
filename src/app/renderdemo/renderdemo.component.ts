import { Component, OnInit, Renderer2 } from '@angular/core';
// import {Renderer2 } from '@angular/'

@Component({
  selector: 'app-renderdemo',
  templateUrl: './renderdemo.component.html',
  styleUrls: ['./renderdemo.component.css']
})
export class RenderdemoComponent implements OnInit {

users: Array<object>;
clearElement: HTMLElement;

  constructor(private ren: Renderer2) {
    this.users = [
        {nombre: 'David', id: 1},
        {nombre: 'Pedro', id: 2}
    ];
   }

  ngOnInit(): void {
  }
  activeMethod(element:HTMLElement){
    if(this.clearElement){
      this.ren.removeClass(this.clearElement, 'miclase');
    }
    this.ren.addClass(element, 'miclase');
    this.ren.setAttribute(element, "data-select", "true");

    let nuevoElemento = this.ren.createElement("span");
    this.ren.setProperty(nuevoElemento, "innerHTML", "");
    this.ren.appendChild(element, nuevoElemento);

    this.clearElement = element;
  }
}
