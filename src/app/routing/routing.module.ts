import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent }   		from '../user/user.component';
import { ModalWindowComponent } from '../modal-window/modal-window.component';

const routes: Routes = [
  { path: '', redirectTo: '/my-users', pathMatch: 'full' },
  { path: 'my-users',  component: UserComponent },
  { path: 'modal-window', component: ModalWindowComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule {}
