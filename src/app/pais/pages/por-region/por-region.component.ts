import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent  {
  
  regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'];
  regionActiva: string = '';
  paises: Country[] = [];

  termino: string = '';
  hayError: boolean = false;


  getClassCSS( region: string): string{
    return ( region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  constructor( private paisService: PaisService) { } // Consumir el servicio


  activarRegion(region: string){

    if( region === this.regionActiva) return;

    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarRegion( region )
      .subscribe(paises => this.paises = paises);
  }

}
