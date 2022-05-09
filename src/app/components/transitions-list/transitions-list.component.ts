import { Component, OnInit } from '@angular/core';
import { TransitionService } from 'src/app/services/transition.service';


@Component({
  selector: 'app-transitions-list',
  templateUrl: './transitions-list.component.html',
  styleUrls: ['./transitions-list.component.css']
})
export class TransitionsListComponent implements OnInit {
  transitions: any;
  clients: any;
  selectedClient: any;

  constructor(private transitionService: TransitionService) { }

  ngOnInit(): void {
    this.listTransitions();
  }

  listTransitions(): void {
    this.transitionService.list()
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
