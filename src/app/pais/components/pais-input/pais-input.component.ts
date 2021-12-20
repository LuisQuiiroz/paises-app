import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit  {

  // Emite un evento
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  ngOnInit() { // Se dispara una sola vez, y es cuando el componentes es creado
    // me suscribo a sus eventos
    this.debouncer
    .pipe( // Transforma la salida del subcribe
      debounceTime(300)
    )
    .subscribe( valor => { // debouncer es un observable
      this.onDebounce.emit( valor );
    })
  }
  // No se emite el subcribe hasta que el observable deje de emitir valores por los proximos 300 ms

  buscar(){
    this.onEnter.emit( this.termino); // emit() : emite el método y recibe como parámetro aquel dato que queramos hacer llegar al padre.
  }

  teclaPresionada(){
    // Manda el siguiente valor
    this.debouncer.next( this.termino );
  }



}
