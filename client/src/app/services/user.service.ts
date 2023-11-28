import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utente } from '../interfaces';
import { CREATE_USER, GET_ALL_USERS, GET_USER_BY_ID } from './UrlAPI';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUserById(id: number | string){
    return this.http.get<Utente | string>(GET_USER_BY_ID + "/" + id);
  }

  getAllUsers(){
    return this.http.get<Utente[]>(GET_ALL_USERS);
  }

  createUser(user: Utente){
    return this.http.post<string>(CREATE_USER, user);
  }
}
