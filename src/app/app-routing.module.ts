import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmResponseComponent } from './confirm-response/confirm-response.component';
import { LoginComponent } from './login/login.component';
import { ProcessRequestComponent } from './process-request/process-request.component';

const routes: Routes = [
  { path: 'process-request', component: ProcessRequestComponent },
  { path: 'confirm-response', component: ConfirmResponseComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
