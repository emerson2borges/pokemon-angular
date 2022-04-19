import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from './../shared/pokemon.model';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  readonly url = ' http://127.0.0.1:8000/api/pokemon';

  constructor(private httpClient: HttpClient) { }

    // Headers
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    getAllPokemons(): Observable<any[]> {
      console.log('zxczxczxczxcz');
      return this.httpClient.get<any[]>(this.url)
        .pipe(
          retry(2),
          catchError(this.handleError)) || []
    }

    getOnePokemon(id: number): Observable<Pokemon> {
      return this.httpClient.get<Pokemon>(this.url + '/' + id)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
    }

    handleError(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Erro ocorreu no lado do client
        errorMessage = error.error.message;
      } else {
        // Erro ocorreu no lado do servidor
        errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(() => new Error(errorMessage));
    };
}
