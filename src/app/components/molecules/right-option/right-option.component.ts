import { Component, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-right-option',
  templateUrl: './right-option.component.html',
  styleUrls: ['./right-option.component.css']
})
export class RightOptionComponent {
  @Input() selectedContact: Contact;
}
