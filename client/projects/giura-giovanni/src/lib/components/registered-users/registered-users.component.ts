import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Column, Utente } from '../../interfaces';
import { LocalStorageService } from '../../services/';

@Component({
  selector: 'gg-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.less']
})
export class RegisteredUsersComponent {

  paginator = true;

  users$: Observable<Utente[]>;

  cols: Column[]=[
    {
      label: 'Nome',
      transform: a=>a.nome
    },
    {
      label: 'Cognome',
      transform: a=>a.cognome
    },
    {
      label: 'Sesso',
      transform: a=>a.uomo ? 'Uomo':'Donna'
    },
    {
      label: 'Maggiorenne',
      transform: a=>a.maggiorenne ? 'Si':'No'
    },
  ]

  constructor(private storage: LocalStorageService) { 
    this.users$ = this.storage.getDataAsArray<Utente>('utenti').pipe(
      tap(values=>{
        this.paginator = values.length>10;
      })
    );
  }
}
