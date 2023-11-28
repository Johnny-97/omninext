import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { MessageService } from 'primeng/api';
import { map } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class ZeroUsersGuard implements CanActivate {

  constructor(private ms: MessageService, private user: UserService){}

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot) {
    return this.user.getAllUsers().pipe(
      map(utenti=>{
        if(!utenti || utenti.length === 0){
          this.ms.add({key: 'tr', severity:'info', summary: 'Attenzione', detail: 'Per accedere a questa pagina bisogna registrare almeno un utente'});
          return false;
        }
        return true;
      })
    )
  }
  
}
