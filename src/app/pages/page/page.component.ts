import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  contacts: Contact[] = [];
  selectedContact: Contact;


  constructor(private dataService: DataService){

  }

  ngOnInit(): void {
    this.dataService.populateArray();
    this.contacts = this.dataService.getData();
  }
 
  storeSelectedContact(contact: Contact){
    this.selectedContact = contact;
  }



}
