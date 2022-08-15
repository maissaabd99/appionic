import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  title = 'Bienvenue dans l‘Application TODOList ';
  text = 'some text here';
  todolists: any = [];
  constructor(private crudservice: CrudService, @Inject(DOCUMENT)private document: Document) { }
  ngOnInit() {
    this.loadLists();
  }
    loadLists(){
      this.crudservice.getAllTODOLists().subscribe((res) => {
        console.log(res);
        this.todolists = [...this.todolists, ...res];
      });
  }
  deleteonClick(id) {
    this.crudservice.deleteTODOList(id).subscribe((res) => { console.log('item deleted'); });
    //window.location.reload();
  }
}
