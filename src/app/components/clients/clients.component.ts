import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  name: any;
  cpf: any;
  clients: any;

  constructor() { }

  ngOnInit(): void {
  }

  save() {

  }
}
