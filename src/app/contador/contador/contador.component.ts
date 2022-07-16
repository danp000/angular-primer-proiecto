import { Component } from '@angular/core';


@Component({
  selector: 'app-contador',
  template: `
    <h2>{{ title }}</h2>
    <h3>La base es: <strong> {{ base }} </strong></h3>
    
    <button (click)=" multi(base) "> * {{ base }} </button>
    
    <span> {{ numero }} </span>
    
    <button (click)=" divi(base) "> / {{ base }} </button>
  `
})
export class ContadorComponent {
  public title: string = 'bases angular';
  numero: number = 10;
  base: number = 2;

  multi( valor: number ) {
    this.numero = this.numero * valor;
  }
  divi( valor: number ) {
    this.numero = this.numero / valor;
  }
}