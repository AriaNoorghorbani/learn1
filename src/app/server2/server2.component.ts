import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server2',
  templateUrl: './server2.component.html',
  styleUrls: ['./server2.component.css']
})
export class Server2Component implements OnInit {

  serverName= 'Testserver bid'
  serverCreationStatus= 'no any server created'
  button: boolean = false;
  serverCreated = false;
  servers= ['testServer', 'testServer2'];

  constructor() { 
setTimeout(() => {
  this.button = true
}, 2000);
  }

  ngOnInit(): void {
  }

  onInputChange1(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus = this.serverName + ' server is created'
  }

}
