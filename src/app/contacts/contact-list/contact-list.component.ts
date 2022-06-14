import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
    //object to emit event
    @Output() selectedContactEvent = new EventEmitter<Contact>();
    //list of contacts
  contacts: Contact[] = [
    new Contact('1', 'R. Kent Jackson', 'jackson@byui.edu', '208-496-3771', '../../assets/images/jacksonk.jpg', null),
    new Contact ('2', 'Rex Barzee', 'barzeer@byui.edu','208-496-3768', '../../assets/images/barzeer.jpg',null)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  //method to emit event
  onSelected(contact: Contact) {
    //emit event passing the contact as data
    this.selectedContactEvent.emit(contact);
  }

}
