import { Component, OnInit } from '@angular/core';
import { TransitionService } from 'src/app/services/transition.service';
import { ClientService } from 'src/app/services/client.service';


@Component({
  selector: 'app-transitions-list',
  templateUrl: './transitions-list.component.html',
  styleUrls: ['./transitions-list.component.css']
})
export class TransitionsListComponent implements OnInit {
  transitions: any;
  clients: any;
  selectedClient: any;

  constructor(
    private transitionService: TransitionService,
    private clientService: ClientService
  ) { }

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
        }
      );
  }

  listTransitions(): void {
    this.transitionService.findByAccountId(this.selectedClient.id)
      .subscribe(
        data => {
          this.transitions = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

}
