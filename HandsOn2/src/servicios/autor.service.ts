import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { Autor } from '../app/modelos/autor';

const URLAPI = 'http://localhost:3000/datos/1';

@Injectable()
export class AutorService {
    private sURL: string;
    private oAutor: any;
/* asdfas */
    constructor (public http: HttpClient) {
        this.sURL = URLAPI;
        this.oAutor = [];
    }

    getAutor() {
        // const aLibros: Array<string>  = [];
        return this.http.get(this.sURL).toPromise()
        .then((response: any) => {
          this.oAutor = response;
          return this.oAutor;
        });
    }

    editEntrada(oAutor: Autor) {
      return this.http.put(this.sURL, oAutor).toPromise();
    }
}
