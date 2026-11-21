import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostParentComponent } from './shared/component/post/post-parent/post-parent.component';
import { PostChildComponent } from './shared/component/post/post-child/post-child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MobileDasbordComponent } from './shared/component/mobile/mobile-dasbord/mobile-dasbord.component';
import { MobileAppComponent } from './shared/component/mobile/mobile-app/mobile-app.component';

@NgModule({
  declarations: [
    AppComponent,
    PostParentComponent,
    PostChildComponent,
    MobileDasbordComponent,
    MobileAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
