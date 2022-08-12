import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server2',
  templateUrl: './server2.component.html',
  styleUrls: ['./server2.component.css']
})
export class Server2Component implements OnInit {

  serverName= 'server2'
  isServerCreated= 'no any server created'
  button: boolean = false;

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

  onClickButton(){
    this.isServerCreated = this.serverName + ' server is created'
  }

}
