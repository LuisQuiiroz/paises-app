import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
      cursor:pointer
    }
    `
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;

  paises: Country[] = [];
  paisesSugeridos: Country[] = [];

  mostrarSugerencias: boolean = false;
  

  constructor( private paisService: PaisService) { } // Consumir el servicio

  
  buscar( termino: string ){
    this.mostrarSugerencias = false;
    this.hayError = false;
    // console.log(this.termino);
    this.termino = termino;

    this.paisService.buscarPais(this.termino)
      .subscribe( (paises) => { // next
        console.log(paises);
        this.paises = paises;

      }, () => { // error
        this.hayError = true;
        this.paises = [];

      }, () => { // Complete
        console.log('complete');

      }
      );
      // para que el Observable de la función buscarPais() se dispare se necesita el subscribe()

      // Otra manera de usar el subcribe()
      // .subscribe({
      //     next: (v) => console.log(v),
      //     error: (e) => console.error(e),
      //     complete: () => console.info('complete') 
      // })
  }

  sugerencias(termino: string ){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais( termino )
    .subscribe(
        paises => this.paisesSugeridos = paises.splice(0,5),
        (err) => this.paisesSugeridos = []);
  }

  // buscarSugerido(termino:string){
  //   this.buscar( termino );
  // }
}
