import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { EndPageSpacerComponent } from './shared/components/end-page-spacer/end-page-spacer.component';
import { StartPageSpacerComponent } from './shared/components/start-page-spacer/start-page-spacer.component';
import { ContentWrapperComponent } from './shared/components/content-wrapper/content-wrapper.component';
import { CampaignCardComponent } from './shared/components/campaign-card/campaign-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    EndPageSpacerComponent,
    StartPageSpacerComponent,
    ContentWrapperComponent,
    CampaignCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
