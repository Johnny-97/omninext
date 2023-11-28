import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getDataAsArray<T>(key:string): Observable<Array<T>>{
    return of(JSON.parse(localStorage.getItem(key)!) as T[]).pipe(
      tap(values=>{
        if(!values || !values.length){
          throw new Error('Non esiste alcun dato alla chiave specificata');
        }
      })
    );
  }
  
  getData<T>(key:string):Observable<T>{
    return of(JSON.parse(localStorage.getItem(key)!) as T).pipe(
      tap(value=>{
        if(!value){
          throw new Error('Non esiste alcun dato alla chiave specificata');
        }
      })
    );
  }

  setData(key:string, value: any){
    localStorage.setItem(key, JSON.stringify(value));
  }
}
