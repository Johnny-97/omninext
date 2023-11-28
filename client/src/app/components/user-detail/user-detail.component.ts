import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Utente } from 'src/app/interfaces';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.less']
})
export class UserDetailComponent implements OnInit {

  showError = false;
  user: Utente;
  id: string;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params)=>{
        this.id = params.get('id')!;
        return this.userService.getUserById(this.id);
      })
    ).subscribe(user => {
      if(typeof user === "string"){
        this.showError = true;
      }else{
        this.user = user;
      }
    })
  }

}
