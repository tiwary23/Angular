import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public datas=[];
  constructor(private apiservice: ApiService) { }

  ngOnInit() {
    this.apiservice.gettoken().subscribe(data => this.datas = data);
  }

}
