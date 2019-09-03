import { Component } from '@angular/core';
import { Router} from '@angular/router';

import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MusicApp';
  public valueOf="";
  constructor(private service: ServiceService, private router:Router){}

  passString(value){
    this.valueOf=value;
    console.log(this.valueOf);
    this.router.navigateByUrl(`search/${value}`);
  }
  
   
 
}
