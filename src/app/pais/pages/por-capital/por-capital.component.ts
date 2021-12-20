import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  

  constructor( private PaisService: PaisService) { } // Consumir el servicio
  
  buscar( termino: string ){
    this.hayError = false;
    // console.log(this.termino);
    this.termino = termino;

    this.PaisService.buscarCapital(this.termino)
      .subscribe( (paises) => { // next
        // console.log(paises);
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
    // TODO: crear sugerencias
  }

}
