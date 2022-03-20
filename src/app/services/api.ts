import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class api {
    constructor(private httpclinet: HttpClient) {}
    getapi(query: string = 'https://www.palmsbet.com/static/games_bg.json'): Observable<any>{ 
        
        return this.httpclinet.get(query)
    }
    
}
