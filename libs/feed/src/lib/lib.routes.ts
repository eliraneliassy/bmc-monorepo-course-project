import { FeedComponent } from './feed/feed.component';
import { Route } from '@angular/router';

export const feedRoutes: Route[] = [
  {path: '', pathMatch: 'full', component: FeedComponent} 
];
