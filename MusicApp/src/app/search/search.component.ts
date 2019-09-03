import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';
import { Key } from 'protractor';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  
  public j;
  public searchData=[];
  // public searchDataArtist=[];
  // public searchDataTrack=[];

  
  
  constructor(private service: ServiceService, private router:ActivatedRoute) { }

  ngOnInit() {
    
    
    let k=this.router.snapshot.paramMap.get('key');
    this.j=k;
    this.service.getsearch(this.j);
    this.service.getSearchAlbum().subscribe( data => {this.searchData= data;console.log(data)});
    // this.service.getSearchArtist().subscribe( data2 => this.searchDataArtist = data2);
    // this.service.getSearchTrack().subscribe( data3=> this.searchDataTrack = data3);
  }

  
}
