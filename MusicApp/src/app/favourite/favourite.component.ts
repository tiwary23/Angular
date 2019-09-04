import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { favourite } from '../favourite';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  public favData;
  public _urlFavData="http://localhost:3000/album";
  constructor(private service: ServiceService, private http:HttpClient ) { }

  ngOnInit() {
    this.service.getFavData().subscribe( data => {this.favData = data;console.log(this.favData)});
  }
  // deleteFav(id:number){}

  deleteFav(id:number){
    console.log(id);
    this.http.delete(`${this._urlFavData}/${id}`).subscribe();
  }
}
