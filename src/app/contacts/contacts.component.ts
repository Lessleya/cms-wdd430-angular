import { Component, Input, OnInit } from '@angular/core';
import { Contact } from './contact.model';
import { ContactService} from './contact.service';

@Component({
  selector: 'cms-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
    //object for the selected contact

    @Input() selectedContact: Contact;

    constructor(private contactService: ContactService) { }

    ngOnInit(): void {
      this.contactService.contactChangedEvent.subscribe((contact: Contact) => {
        this.selectedContact = contact;
      })
    }
  
  }
