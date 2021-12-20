import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!:Country; // ! puede ser null y lo se por eso se usa !, para indicar que sé que va a retornar null, pero no lo va a hacer, porque le voy a mandar datos

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      //Recibe un observable y regresa un observable
      switchMap( ({id}) => this.paisService.getPaisPorAlpha( id )),
      tap(console.log) // tap() recibe el prodcuto del observable de arriba y lo imprime
      // recibe el valor del observable params y retorna un nuevo observable con la información del pais
    )
    .subscribe( pais => this.pais = pais[0] );
    
      // Otra forma de hacerlo
    // this.activatedRoute.params
    // .subscribe( ({ id })  =>{// se suscribe al url con el id
    //   console.log(id); // obtiene el alpha del pais
    //   this.paisService.getPaisPorAlpha( id )
    //   .subscribe( pais => {
    //     console.log( pais ); // Obtiene toda la informacion del pais 
    //   })
    // });
  }

}
