import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {

   //property for search term
   term: String = '';

  // list of contacts
  contacts: Contact[] = [];

  private subscription: Subscription;

  //inject contact service
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {

    this.subscription = this.contactService.contactListChangedEvent
      .subscribe((contacts: Contact[]) => {
        this.contacts = contacts;
      });

      this.contactService.getContacts();

  }

  // //method to emit event
  // onSelected(contact: Contact) {
  //   //emit event passing the contact as data
  //   this.contactService.contactSelectedEvent.emit(contact);
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

   //method to react on key press for search
   onKeyPress(value: String) {
    //assign the value to the term prop
    this.term = value;
  }



}



