import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetailComponent } from './detail/detail.component';
import { FavouriteComponent } from './favourite/favourite.component';


const routes: Routes = [
  
  {path:'home', component:HomeComponent},
  {path:'search/:key', component:SearchComponent},
  {path:'detail/:album/:artist', component:DetailComponent},
  {path:'favourite',component:FavouriteComponent},
  {path:'', redirectTo:"/home", pathMatch:'full'},
  {path:"**", component:PageNotFoundComponent}
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

