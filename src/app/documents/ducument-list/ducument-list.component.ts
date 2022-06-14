import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'cms-ducument-list',
  templateUrl: './ducument-list.component.html',
  styleUrls: ['./ducument-list.component.css']

})
export class DucumentListComponent implements OnInit {


  @Output() selectedDocumentEvent = new EventEmitter<Document>();
 //array/list of dummy documents
 documents: Document[] = [
  new Document('1', 'CIT 260: Object Oriented Programming', 'Used mostly for Web Development', 'https://www.w3schools.com/whatis/whatis_js.asp', null),
  new Document('2', 'CIT 366: Full Stack Development', 'Used mostly for styling documents', 'https://www.w3schools.com/whatis/whatis_css.asp', null),
  new Document('3', 'CIT 425: Data Wirehousing', 'A subset of JavaScript that is strongly typed', 'https://www.typescriptlang.org/', null),
  new Document('4', 'CIT 46O: Enterprise Development', 'An MVC Framework for Front End Development', 'https://angular.io/', null)
]

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }


}
