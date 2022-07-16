import { Component, OnInit } from '@angular/core';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] 
  = ['Batman', 'Ironman', 'Wonder Woman', 'The Wasp', 'Tigra'];
  hers:string[] = []; 
  heror:string = '';
  resMes:string = '';

  borrarHeroe() {

    console.log(this.heroes);
    const herBor = this.heroes.shift();
    if (herBor !== undefined) {
      this.heror = herBor;
      this.resMes = '';
    }
    
    if (herBor !== undefined && this.hers[0] !== herBor) {
      this.hers.unshift(herBor); 
      console.log(this.hers);
    }

    if (herBor === undefined) {
      this.heroes = this.hers;
      this.heror = '';
    }

    if (this.hers === this.heroes) {
      this.hers = [];
    }
    
  }

  backupHeroe() {
    
    if (this.heror && this.heroes[0] !== this.heroes[1] && this.heroes[0] !== this.heror) {
      this.heroes.unshift(this.heror);
      this.resMes = 'Heroe restored!';
    }

    if (this.heror === this.heroes[0]) {
      this.heror ='';
    }
  }

  messBtn() {
    return this.heroes.length > 0 ? 'Borrar' : 'Restore';
  }


  
}
