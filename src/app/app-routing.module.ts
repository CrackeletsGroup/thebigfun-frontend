import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeContentComponent} from "./event/components/home-content/home-content.component";
import {AboutusContentComponent} from "./event/components/aboutus-content/aboutus-content.component";
import {ViewEventsContentComponent} from "./event/components/view-events-content/view-events-content.component";
import {UserregisterContentComponent} from "./event/components/userregister-content/userregister-content.component";
import {
  RegistereventComponentComponent
} from "./event/components/registerevent-component/registerevent-component.component";
import {FaqContentComponent} from "./event/components/faq-content/faq-content.component";
import {
  EventdetailsComponentComponent
} from "./event/components/eventdetails-component/eventdetails-component.component";


const routes:Routes=[
  { path: '', component: HomeContentComponent },
  { path: 'home', component: HomeContentComponent },
  { path: 'aboutUs', component: AboutusContentComponent },
  { path: 'events', component: ViewEventsContentComponent },
  { path: 'signUp', component: UserregisterContentComponent },
  { path: 'eventRegister', component: RegistereventComponentComponent },
  { path: 'faqs', component: FaqContentComponent },
  { path: 'eventDetail', component: EventdetailsComponentComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
