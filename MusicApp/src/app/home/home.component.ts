import { Component, OnInit, EventEmitter } from '@angular/core';
import { ServiceService } from '../service.service';
import { SearchService } from '../search/search.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  public datas=[];
  constructor(private service: ServiceService,
    ) { }

  ngOnInit() {
    this.service.getdata().subscribe(data => {console.log(data); this.datas = data;})
  }

}
