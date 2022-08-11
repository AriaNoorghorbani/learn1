import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

serverName= 'testServer';
serverCreation= 'no server created'

  thisOk: boolean = false;

  constructor() {
      setTimeout(() => {
        this.thisOk = true
      }, 2000);
   }

   onInputChange(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreation = 'server is cerated' +' '+ this.serverName
  }



}
