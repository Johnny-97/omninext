import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Utente } from 'src/app/interfaces';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-platform-stats',
  templateUrl: './platform-stats.component.html',
  styleUrls: ['./platform-stats.component.less']
})
export class PlatformStatsComponent implements OnInit {

  utenti: Utente[] = [];

  data: any;

  constructor(private ms: MessageService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(utenti=>{
      this.utenti = utenti;
      this.updateChart();
    })
  }

  updateChart(){
    let uomini = 0, donne = 0;
    this.utenti.forEach(utente=>{
      utente.sesso ? uomini++ : donne++;
    });
    this.data = {
      labels: ['Uomini', 'Donne'],
      datasets: [
        {
          data: [(uomini/this.utenti.length*100).toFixed(2), (donne/this.utenti.length*100).toFixed(2)],
          backgroundColor:[
            'cyan',
            'pink'
          ]
        }
      ]
    }
  }

  info(){
    let msg = `Attualmente sono registrati ${this.utenti.length} utenti`;
    
    this.ms.add({key: 'tr', severity:'info', summary: 'Utenti registrati', detail: msg});
  }

}
