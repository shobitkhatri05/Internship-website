import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MiddleComponent } from './middle/middle.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BookComponent } from './book/book.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { Nav2Component } from './nav2/nav2.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { Home2Component } from './home2/home2.component';
import { EventComponent } from './event/event.component';
import { WebinarComponent } from './webinar/webinar.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AdmineventComponent } from './adminevent/adminevent.component';
import { AdmincontactComponent } from './admincontact/admincontact.component';
import { AdminwebinarComponent } from './adminwebinar/adminwebinar.component';
import { UserloginauthService  } from "../app/userloginauth.service";
import { UserAuthGuardService } from "../app/user-auth-guard.service";






const routes: Routes = [
  {path:'header',component:  HeaderComponent},
  {path:'',component:  HomeComponent, canActivate: [UserloginauthService]},

  {path:'middle',component:  MiddleComponent},
  {path:'login',component:  LoginComponent},
  {path:'signup',component:  SignupComponent},
  {path:'book',component:  BookComponent},
  {path:'admin',component:  AdminComponent},
  { path: 'contact_us', component: ContactUsComponent },
  { path: 'nav2', component: Nav2Component },
  { path: 'gallery', component: GalleryComponent },
  { path: 'about_us', component: AboutUsComponent },
  { path: 'home2', component: Home2Component },
  { path: 'event', component: EventComponent, canActivate: [UserAuthGuardService]},
  { path: 'feedback', component: FeedbackComponent },
  { path: 'webinar', component: WebinarComponent },
  { path: 'adminevent', component: AdmineventComponent },
  { path: 'adminwebinar', component: AdminwebinarComponent },
  { path: 'admincontact', component: AdmincontactComponent },
  // { path: 'UserAuthGuard', component: UserAuthGuardService },
  // { path: 'Userloginauth', component: UserloginauthService  },









];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
