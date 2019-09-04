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
  
  // declaration of variable
  public _url1="http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=india&limit=20&api_key=c3910e8ae45bbeb436b05a75dcc0d048&format=json";
  public _urlAlbum: string;
  public _urlArtist: string;
  public _urlTrack: string;
  public _urlDetail:string;
  public _urlFavData="http://localhost:3000/album";

  constructor(private http: HttpClient) { }

  // fetchin data of topartists and displaying in home component
  getdata(): Observable <apiData[]>{
    return this.http.get<apiData[]>(this._url1)
  }

  // fetching data after search result
  getSearchAlbum():Observable <any[]>{
    return this.http.get<any[]>(this._urlAlbum)
  }
  
  // fetching data from detail
  getSearchDetail():Observable<favourite[]>{
      return this.http.get<favourite[]>(this._urlDetail);
  }

  // fetching data from favourite-data
  getFavData():Observable<any[]>{
    return this.http.get<any[]>(this._urlFavData);
  }
  
  getsearch(value:string)
  {
    console.log(value);
    this._urlAlbum="http://ws.audioscrobbler.com/2.0/?method=album.search&album="+value+"&api_key=c3910e8ae45bbeb436b05a75dcc0d048&format=json"
    }

    // details of search result
  getDetails(album,artist){
    this._urlDetail="http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=c3910e8ae45bbeb436b05a75dcc0d048&artist="+artist+"&album="+album+"&format=json"

  }

  
  
}
