import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";

import { EventsAppComponent } from "./events-app.component";
import { EventsListComponent } from "./events/events-list.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventsThumbnailComponent } from "./events/events-thumbnail.component";
import { NavBarComponent } from "./nav/navbar.component";
import { EventService } from "./events/shared/events.service";
import { ToastrModule } from "ngx-toastr";
import { appRoutes } from "./routes";
import { CreteEventComponent } from "./events/create-event.component";

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventDetailsComponent,
    EventsThumbnailComponent,
    NavBarComponent,
    CreteEventComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}
