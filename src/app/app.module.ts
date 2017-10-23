import { BrowserModule }	from '@angular/platform-browser';
import { NgModule}		 	from '@angular/core';
import { HttpModule } 	 	from '@angular/http';

import { AppComponent }		from './app.component';
import { UserComponent } 	from './user/user.component';
import { UserService } 		from './user/user.service';

@NgModule({
	imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    UserComponent,
  ],
  providers: [ UserService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
