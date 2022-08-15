import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DefaultTitleStrategy } from '@angular/router';
import { DatetimeChangeEventDetail } from '@ionic/angular';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
  providers: [DatePipe]
})
export class CreatePage implements OnInit {
  titre: string;
  description: string;
  duedate: string;
  cd: any;
  constructor(private crudservice: CrudService, private datePipe: DatePipe) {
    //this.cd = this.datePipe.transform(this.cd, 'yyyy-MM-dd');
  }
  ngOnInit() {
    this.cd = new Date().toISOString().slice(0, 10);
  }
  clickme() {
    console.log(this.titre);
    console.log(this.description);
    console.log(this.duedate);
    console.log(this.cd);
    this.crudservice.postTODOList(this.titre, this.description, this.duedate, this.cd)
      .subscribe((res) => { console.log(res); });
  }
}
