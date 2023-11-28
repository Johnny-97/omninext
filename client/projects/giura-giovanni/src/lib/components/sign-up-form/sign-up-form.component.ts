import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AuthValidator } from '../../validators/';
import { LocalStorageService } from '../../services/';
import { Utente } from '../../interfaces';

@Component({
  selector: 'gg-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.less']
})
export class SignUpFormComponent implements OnInit {

  private isSaved = false;

  utenti: Utente[] = [];

  data: any;

  constructor(private fb: FormBuilder,
    private ms: MessageService,
    private storage: LocalStorageService) { }

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

  ngOnInit() {
    this.storage.getDataAsArray<Utente>('utenti').subscribe({
      next: (values) => {
        this.utenti = values;
        this.updateChart();
      },
      error: (err) => {
        this.ms.add({ key: 'tr', severity: 'error', summary: 'Errore', detail: err });
      }
    }
    );
  }

  updateChart() {
    let uomini = 0, donne = 0;
    this.utenti.forEach(utente => {
      utente.uomo ? uomini++ : donne++;
    });
    this.data = {
      labels: ['Uomini', 'Donne'],
      datasets: [
        {
          data: [(uomini / this.utenti.length * 100).toFixed(2), (donne / this.utenti.length * 100).toFixed(2)],
          backgroundColor: [
            'cyan',
            'pink'
          ]
        }
      ]
    }
  }

  save() {
    this.isSaved = true;
    if (this.form.valid) {
      this.utenti.push({
        nome: this.nome.value!,
        cognome: this.cognome.value!,
        password: this.password.value!,
        uomo: this.sesso.value!,
        maggiorenne: this.maggiorenne.value!,
      });
      this.storage.setData('utenti', this.utenti);
      this.updateChart();
    }
  }

  get nome() {
    return this.form.controls['nome'];
  }

  get cognome() {
    return this.form.controls['cognome'];
  }

  get password() {
    return this.form.controls['password'];
  }

  get conferma() {
    return this.form.controls['conferma'];
  }

  get sesso() {
    return this.form.controls['sesso'];
  }

  get maggiorenne() {
    return this.form.controls['maggiorenne'];
  }

  get passwordMatchError() {
    return this.form.getError('mismatch') && this.password.dirty && this.conferma.dirty;
  }

  hasError(field: FormControl) {
    return (this.isSaved && field.errors && field.touched) ? 'ng-invalid ng-dirty' : '';
  }

  info() {
    let msg = `Attualmente sono registrati ${this.utenti.length} utenti`;

    this.ms.add({ key: 'tr', severity: 'info', summary: 'Utenti registrati', detail: msg });
  }

}
