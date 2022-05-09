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

  dateTime: any;
  description: any;
  value: any;
  type: any;

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

  save(): void {
    console.log(this.selectedClient)
    const transition = {
      value: this.value,
      description: this.description,
      type: this.type,
      accountId: this.selectedClient.id,
      dateTime: this.dateTime
    };

    console.log(transition);

    this.transitionService.create(transition)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
  }
}
