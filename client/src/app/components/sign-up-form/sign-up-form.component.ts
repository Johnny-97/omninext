import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Utente } from '../../interfaces';
import { AuthValidator } from '../../validators/validator';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.less']
})
export class SignUpFormComponent implements OnInit {

  private isSaved = false;

  data: any;

  constructor(private fb: FormBuilder,
    private userService: UserService) { }

  form = this.fb.group({
    nome: ['', Validators.required],
    cognome: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', Validators.required],
    conferma: ['', Validators.required],
    sesso: [false],
    maggiorenne: [false],
  },
  {
    validators: [AuthValidator.matchPassword('password', 'conferma')]
  }
  );

  ngOnInit(){

  }

  save(){
    this.isSaved = true;
    // const utenti = this.storage.getData<Utente []>('utenti');
    // utenti.push({
    //   nome: this.nome.value!,
    //   cognome: this.cognome.value!,
    //   password: this.password.value!,
    //   uomo: this.sesso.value!,
    //   maggiorenne: this.maggiorenne.value!,
    // });
    // this.storage.setData('utenti', utenti);
    this.userService.createUser(this.form.value as Utente).subscribe(value=>{
      console.log(value)
    });
  }

  get nome(){
    return this.form.controls['nome'];
  }

  get cognome(){
    return this.form.controls['cognome'];
  }

  get password(){
    return this.form.controls['password'];
  }

  get conferma(){
    return this.form.controls['conferma'];
  }

  get sesso(){
    return this.form.controls['sesso'];
  }

  get maggiorenne(){
    return this.form.controls['maggiorenne'];
  }

  get passwordMatchError(){
    return this.form.getError('mismatch') && this.password.dirty && this.conferma.dirty;
  }

  hasError(field: FormControl){
    return (this.isSaved && field.errors && field.touched)? 'ng-invalid ng-dirty': '';
  }

}
