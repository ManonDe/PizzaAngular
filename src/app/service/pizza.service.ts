import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable()
export class ContactService {
  //Tableau de contacts
  private contacts = [{id: '0', name: 'Manon', age: '24', num: '0652545158'},
    {id: '1', name: 'Surya', age: '26', num: '0632313534'},
    {id: '2', name: 'Marvyn', age: '17', num: '0654585956'}];

  constructor() { }

  get(): Contact[] {
    return this.contacts;
  }

  getById(id): Contact {
    console.log(id);
    if (!id) {
      return new Contact('', '', '');       //retourne objet vide
    } else {
      return this.contacts[id];
    }
  }

  add(contact) {
    console.log(contact.id);
    if (contact.id || parseInt(contact.id, 10) === 0) {
      this.contacts[contact.id] = contact;
    }else {
      contact.id = this.contacts.length + 1;
      this.contacts.push(contact);
    }
  }


}
