import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Utente } from 'src/app/interfaces';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registered-users',
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
      transform: a=>a.sesso ? 'Uomo':'Donna'
    },
    {
      label: 'Maggiorenne',
      transform: a=>a.maggiorenne ? 'Si':'No'
    },
  ]

  constructor(private userService: UserService, private sanitizer: DomSanitizer, private router: Router) { 
    this.users$ = this.userService.getAllUsers().pipe(
      tap(values=>{
        this.paginator = values.length>10;
      })
    );
  }

  navigateTo(url: string){
    this.router.navigateByUrl(url);
  }

}

export interface Column{
  label: string;
  transform: (a: Utente)=>string;
}
