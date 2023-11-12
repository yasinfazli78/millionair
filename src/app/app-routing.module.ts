import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./shared/guard/auth.guard";

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./ui/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register', loadChildren: () => import('./ui/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'test', loadChildren: () => import('./ui/test/test.module').then(m => m.TestModule), canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
