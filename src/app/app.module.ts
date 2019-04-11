import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { EventsAppComponent } from "./events-app.component";
import { EventsListComponent } from "./events/events-list.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventsThumbnailComponent } from "./events/events-thumbnail.component";
import { NavBarComponent } from "./nav/navbar.component";
import { EventService } from "./events/shared/events.service";
import { ToastrModule } from "ngx-toastr";

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventDetailsComponent,
    EventsThumbnailComponent,
    NavBarComponent
  ],
  imports: [BrowserModule, BrowserAnimationsModule, ToastrModule.forRoot()],
  providers: [EventService],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}
