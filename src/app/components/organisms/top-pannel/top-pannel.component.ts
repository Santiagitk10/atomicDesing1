import { Component, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-top-pannel',
  templateUrl: './top-pannel.component.html',
  styleUrls: ['./top-pannel.component.css']
})
export class TopPannelComponent {
  @Input() selectedContact: Contact;
}
