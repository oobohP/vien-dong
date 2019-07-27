import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/partials/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/partials/footer/footer.component';
import { HomeComponent } from './public/pages/home/home.component';
import { HomeSectionsComponent } from './public/pages/home-sections/home-sections.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    HomeSectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
