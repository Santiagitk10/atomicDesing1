import { Injectable, OnInit } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  private contacts:Contact[] = new Array<Contact>();

  constructor() { 

  }

  populateArray(){
    const newContact1 : Contact = {
        id: 1,
        name: "Santiago Sierra",
        photo: "assets/images/PhotoChat.PNG",
        lastMessage: "Hi! Whatsapp?",
        hourLastMessage: "00:00"
    }

    const newContact2 : Contact = {
      id: 2,
      name: "Lorena Mesa",
      photo: "assets/images/sharapova.PNG",
      lastMessage: "Hi! Whatsapp?",
      hourLastMessage: "00:00"
    }

    const newContact3 : Contact = {
      id: 3,
      name: "Delia Herrera",
      photo: "assets/images/sharapova.PNG",
      lastMessage: "Hi! Whatsapp?",
      hourLastMessage: "00:00"
    }

    const newContact4 : Contact = {
      id: 4,
      name: "Sebatian Montoya",
      photo: "assets/images/PhotoChat.PNG",
      lastMessage: "Hi! Whatsapp?",
      hourLastMessage: "00:00"
    }

    const newContact5 : Contact = {
      id: 5,
      name: "Rafael Nadal",
      photo: "assets/images/nadal.PNG",
      lastMessage: "Hi! Whatsapp?",
      hourLastMessage: "00:00"
    } 

    const newContact6 : Contact = {
      id: 6,
      name: "Rogger Federer",
      photo: "assets/images/rogger.PNG",
      lastMessage: "Hi! Whatsapp?",
      hourLastMessage: "00:00"
    }

    const newContact7 : Contact = {
      id: 7,
      name: "David Nalbandián",
      photo: "assets/images/nadal.PNG",
      lastMessage: "Hi! Whatsapp?",
      hourLastMessage: "00:00"
    }


    const newContact8 : Contact = {
      id: 8,
      name: "Novak Djokovic",
      photo: "assets/images/rogger.PNG",
      lastMessage: "Hi! Whatsapp?",
      hourLastMessage: "00:00"
    }

    const newContact9 : Contact = {
      id: 9,
      name: "Daddy Yankee",
      photo: "assets/images/nadal.PNG",
      lastMessage: "Hi! Whatsapp?",
      hourLastMessage: "00:00"
    }

    const newContact10 : Contact = {
      id: 10,
      name: "Fernando Alonso",
      photo: "assets/images/nadal.PNG",
      lastMessage: "Hi! Whatsapp?",
      hourLastMessage: "00:00"
    }

    const newContact11 : Contact = {
      id: 11,
      name: "Warren Buffet",
      photo: "assets/images/warren.PNG",
      lastMessage: "Hi! Whatsapp?",
      hourLastMessage: "00:00"
    }

    const newContact12 : Contact = {
      id: 12,
      name: "Bill Gates",
      photo: "assets/images/warren.PNG",
      lastMessage: "Hi! Whatsapp?",
      hourLastMessage: "00:00"
    }

    const newContact13 : Contact = {
      id: 13,
      name: "Ben Graham",
      photo: "assets/images/warren.PNG",
      lastMessage: "Hi! Whatsapp?",
      hourLastMessage: "00:00"
    }

    const newContact14 : Contact = {
      id: 14,
      name: "Wawrinka",
      photo: "assets/images/rogger.PNG",
      lastMessage: "Hi! Whatsapp?",
      hourLastMessage: "00:00"
    }

    const newContact15 : Contact = {
      id: 15,
      name: "Luisa Gaviria",
      photo: "assets/images/sharapova.PNG",
      lastMessage: "Hi! Whatsapp?",
      hourLastMessage: "00:00"
    }

    this.contacts.push(newContact1);
    this.contacts.push(newContact2);
    this.contacts.push(newContact1);
    this.contacts.push(newContact3);
    this.contacts.push(newContact4);
    this.contacts.push(newContact5);
    this.contacts.push(newContact6);
    this.contacts.push(newContact7);
    this.contacts.push(newContact8);
    this.contacts.push(newContact9);
    this.contacts.push(newContact10);
    this.contacts.push(newContact11);
    this.contacts.push(newContact12);
    this.contacts.push(newContact13);
    this.contacts.push(newContact14);
    this.contacts.push(newContact15);

  
  }

  getData(){
    return this.contacts;
  }


}
