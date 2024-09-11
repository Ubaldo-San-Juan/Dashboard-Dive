import { Component, input } from '@angular/core';
import { NewTicketComponent } from "../new-ticket/new-ticket.component";
import { TicketsComponent } from "../tickets.component";
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [NewTicketComponent, TicketsComponent],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {

}
