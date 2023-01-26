import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-search',
  templateUrl: './contact-search.component.html',
  styleUrls: ['./contact-search.component.css']
})
export class ContactSearchComponent {
  @Input() contact: Contact;
  @Output() selectedContact = new EventEmitter<Contact>();






  bringContactData(contact: Contact){
    this.selectedContact.emit(contact);
  }

}
