import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {

  @Input() contacts: Contact[] = [];
  @Output() selectedContact = new EventEmitter<Contact>();

  ngOnInit(): void {
  }


  assignSelectedContact(contact: Contact){
    this.selectedContact.emit(contact);
  }



}
