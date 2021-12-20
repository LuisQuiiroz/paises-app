import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  // Página origen: https://restcountries.com
  private apiUrl: string = 'https://restcountries.com/v3.1';
  private apiUrlRegion: string = 'https://restcountries.com/v2';


  get getHttpParams(){
    return new HttpParams().set('fields', 'flags,capital,name,population,cca2');
  }
  constructor( private http: HttpClient ) { }

  buscarPais( pais: string ): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${pais}`;
    return this.http.get<Country[]>(url, {params: this.getHttpParams}); // manda la informacion que se obtiene
    // retorna un observable
    // Los params enviados, son para obtener solo la informacion especificada y hacer más ligera la obtencion de datos, es decir, se consultan los paises acorde al nombre especificado, los busca y solo extrae la informacion establecida en los params, haciendo mas rápida y ligera la peticion
  }

  buscarCapital(capital: string): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${capital}`;
    return this.http.get<Country[]>(url, {params: this.getHttpParams});
  }

  getPaisPorAlpha(id: string): Observable<Country>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  buscarRegion(region: string): Observable<Country[]>{
    const url = `${this.apiUrlRegion}/regionalbloc/${region}`;
    return this.http.get<Country[]>(url, { params: this.getHttpParams })
      .pipe(
        tap(console.log) // muestra los datos obtenidos
      );
  }
}

