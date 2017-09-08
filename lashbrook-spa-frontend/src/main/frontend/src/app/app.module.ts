import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {NewsComponent} from "./components/news/news.component";
import {AboutComponent} from "./components/about/about.component";
import {StoreComponent} from "./components/store/store.component";
import {ContactComponent} from "./components/contact/about.component";
import {PageNotFoundComponent} from "./components/pagenotfound/about.component";

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'shop/:type',      component: StoreComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NewsComponent,
    AboutComponent,
    StoreComponent,
    ContactComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
