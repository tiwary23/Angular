import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public searArt;
  public searAlb;
  public searchDetail=[];
  constructor(private router:ActivatedRoute, private service:ServiceService) { }

  ngOnInit() {

    let serAl=this.router.snapshot.paramMap.get('album');
    let serAt=this.router.snapshot.paramMap.get('artist');
    this.searAlb=serAl;
    this.searArt=serAt;
    this.service.getDetails(this.searAlb,this.searArt);
    this.service.getSearchDetail().subscribe(data => this.searchDetail = data);
  }

}
