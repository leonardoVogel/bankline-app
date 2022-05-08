import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { TransitionService } from 'src/app/services/transition.service';

@Component({
  selector: 'app-new-transition',
  templateUrl: './new-transition.component.html',
  styleUrls: ['./new-transition.component.css']
})
export class NewTransitionComponent implements OnInit {
  clients: any;
  selectedClient: any;

  constructor(
    private clientService: ClientService,
    private transitionService: TransitionService
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

}
