import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiData } from './apidata'
import { searchDetail } from './searchDetail';
import { favourite } from './favourite';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  public _url1="http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=india&limit=20&api_key=c3910e8ae45bbeb436b05a75dcc0d048&format=json";
  public _urlAlbum: string;
  public _urlArtist: string;
  public _urlTrack: string;
  public _urlDetail:string;
  public _urlFavData="http://localhost:3000/album";
  constructor(private http: HttpClient) { }

  getdata(): Observable <apiData[]>{
    return this.http.get<apiData[]>(this._url1)
  }
  getSearchAlbum():Observable <any[]>{
    return this.http.get<any[]>(this._urlAlbum)
  }
  // getSearchArtist():Observable <any[]>{
  //   return this.http.get<any[]>(this._urlArtist)
  // }
  // getSearchTrack():Observable <any[]>{
  //   return this.http.get<any[]>(this._urlAlbum)
  // }
  getSearchDetail():Observable<favourite[]>{
      return this.http.get<favourite[]>(this._urlDetail);
  }
  getFavData():Observable<any[]>{
    return this.http.get<any[]>(this._urlFavData);
  }
  // addFav(){
  //   console.log(this.searchDetail);
  //   this.http.post<any[]>(this.urlFav,this.searchDetail).subscribe();
  //   }
  getsearch(value:string)
  {
    console.log(value);
    this._urlAlbum="http://ws.audioscrobbler.com/2.0/?method=album.search&album="+value+"&api_key=c3910e8ae45bbeb436b05a75dcc0d048&format=json"
    // this._urlArtist="http://ws.audioscrobbler.com/2.0/?method=artist.search&artist="+value+"&api_key=c3910e8ae45bbeb436b05a75dcc0d048&format=json"
    // this._urlTrack="http://ws.audioscrobbler.com/2.0/?method=track.search&track="+value+"&api_key=c3910e8ae45bbeb436b05a75dcc0d048&format=json"
  }
  getDetails(album,artist){
    this._urlDetail="http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=c3910e8ae45bbeb436b05a75dcc0d048&artist="+artist+"&album="+album+"&format=json"

  }

  
  
}
