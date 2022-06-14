import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [
    new Message('8', 'Meeting', 'I would like to talk to you about our meeting', 'Lesliee'),
    new Message('9', 'Exam', 'I need details for Exam, thanks', 'Andy'),
    new Message('10', 'Project', 'I need details for Project, thanks', 'Pame')
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onAddMessage(message: Message) {
    //push message to array of messages
    this.messages.push(message);
  }

}