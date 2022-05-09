import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  name: any;
  cpf: any;
  clients: any;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.listClients();
  }

  listClients(): void {
    this.clientService.list()
      .subscribe(
        data => {
          this.clients = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  save(): void {
    const client = {
      cpf: this.cpf,
      name: this.name
    };
    console.log(client);
    this.clientService.create(client)
      .subscribe(
        response => {
          console.log(response);
          this.listClients();
        },
        error => {
          console.log(error);
        });
  }
}
