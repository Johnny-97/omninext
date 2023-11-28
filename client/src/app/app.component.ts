import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'GiovanniGiura';

  constructor(private fb:FormBuilder){}

  form = this.fb.group({
    nome: [''],
    cognome: [''],
    sesso: [false],
    maggiorenne: [false],
  });

}
