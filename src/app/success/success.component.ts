import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: [],
})
export class SuccessComponent implements OnInit {

  ServerSituation= 'non server Created'
  neveshte= 'testServer'
  

  constructor() { }

  serverId: number= 10;
  serverStatus: string= 'online'

  ngOnInit(): void {
  }

  vorodi(event: Event){
    this.neveshte = (<HTMLInputElement>event.target).value
  }

  onCreateServer(){
    this.ServerSituation = 'server is Created' + ' ' + this.neveshte
  }

}
