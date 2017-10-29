import { BrowserModule }	      from '@angular/platform-browser';
import { NgModule}		 		      from '@angular/core';
import { HttpModule } 	 	      from '@angular/http';

import { AppComponent }		      from './app.component';
import { UserComponent } 	      from './user/user.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { RoutingModule }        from './routing/routing.module';
import { UserService } 		      from './user/service/user.service';


@NgModule({
	imports: [
    BrowserModule,
    HttpModule,
    RoutingModule
  ],
  declarations: [
    AppComponent,
    UserComponent,
    ModalWindowComponent,
  ],
  providers: [ UserService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
