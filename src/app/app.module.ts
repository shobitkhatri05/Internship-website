import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiddleComponent } from './middle/middle.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BookComponent } from './book/book.component';
import { AdminComponent } from './admin/admin.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { Nav2Component } from './nav2/nav2.component';
import { Home2Component } from './home2/home2.component';
import { EventComponent } from './event/event.component';
import { WebinarComponent } from './webinar/webinar.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AdmineventComponent } from './adminevent/adminevent.component';
import { AdmincontactComponent } from './admincontact/admincontact.component';
import { AdminwebinarComponent } from './adminwebinar/adminwebinar.component';

@NgModule({
  declarations: [
    AppComponent,
    MiddleComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    BookComponent,
    AdminComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    GalleryComponent,
    Nav2Component,
    Home2Component,
    EventComponent,
    WebinarComponent,
    FeedbackComponent,
    AdmineventComponent,
    AdmincontactComponent,
    AdminwebinarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
