import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Key } from 'protractor';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  
  public j;
  public searchData=[];
  public searchalbum;
  public searchartist;
  // public searchDataArtist=[];
  // public searchDataTrack=[];

 

  
  
  constructor(private service: ServiceService, private router:ActivatedRoute, private route:Router) { }

  ngOnInit() {
    
    
    let k=this.router.snapshot.paramMap.get('key');
    this.j=k;
    this.service.getsearch(this.j);
    this.service.getSearchAlbum().subscribe( data => {this.searchData= data;console.log(data)});
    // this.service.getSearchArtist().subscribe( data2 => this.searchDataArtist = data2);
    // this.service.getSearchTrack().subscribe( data3=> this.searchDataTrack = data3);
  }

   details(album, artist){
    this.searchalbum=album;
    this.searchartist=artist;
    console.log(this.searchalbum,this.searchartist);
    this.route.navigateByUrl(`detail/${album}/${artist}`);
  }
}
