import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { TopBannerVoteComponent } from './components/top-banner-vote/top-banner-vote.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainLayoutComponent,
    MainFooterComponent,
    TopBannerVoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
