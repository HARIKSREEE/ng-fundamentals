import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { EventsAppComponent } from "./events-app.component";
import { EventsListComponent } from "./events/events-list.component";
import { EventsThumbnailComponent } from "./events/events-thumbnail.component";

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent
  ],
  imports: [BrowserModule],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}
