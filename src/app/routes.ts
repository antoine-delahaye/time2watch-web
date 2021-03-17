import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MoviesComponent} from './movies/movies.component';
import {TvshowsComponent} from './tvshows/tvshows.component';
import {AboutComponent} from './about/about.component';
import {MovieComponent} from './movie/movie.component';

export const allAppRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'tvshows', component: TvshowsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'movie/:id', component: MovieComponent}
];
