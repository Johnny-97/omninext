import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing-module';

import { AppComponent } from './app.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';

import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { PlatformStatsComponent } from './components/platform-stats/platform-stats.component';
import { RegisteredUsersComponent } from './components/registered-users/registered-users.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { AwsInterceptor } from './interceptors/aws.interceptor';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    SignUpFormComponent,
    SideMenuComponent,
    RegisteredUsersComponent,
    PlatformStatsComponent,
    UserDetailComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    CheckboxModule,
    ButtonModule,
    ChartModule,
    ToastModule,
    TableModule
  ],
  exports: [SignUpFormComponent],
  providers: [MessageService, UserService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AwsInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
