import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // CLI imports router
import { PlatformStatsComponent } from './components/platform-stats/platform-stats.component';
import { RegisteredUsersComponent } from './components/registered-users/registered-users.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { ZeroUsersGuard } from './guards/zero-users.guard';

const routes: Routes = [
    {
        path: 'signup', 
        component: SignUpFormComponent
    },
    {
        path: 'users', 
        component: RegisteredUsersComponent,
        canActivate: [ZeroUsersGuard]
    },
    {
        path: 'user/:id', 
        component: UserDetailComponent,
        canActivate: [ZeroUsersGuard]
    },
    {
        path: 'stats', 
        component: PlatformStatsComponent,
        canActivate: [ZeroUsersGuard]
    },
    {
        path: '', 
        redirectTo: 'signup',
        pathMatch: 'full'
    },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }