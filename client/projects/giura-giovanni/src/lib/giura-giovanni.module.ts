import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { RegisteredUsersComponent, SideMenuComponent, SignUpFormComponent } from './components';




@NgModule({
  declarations: [
    RegisteredUsersComponent,
    SideMenuComponent,
    SignUpFormComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    CheckboxModule,
    ButtonModule,
    ChartModule,
    ToastModule,
    TableModule
  ],
  exports: [
    RegisteredUsersComponent,
    SideMenuComponent,
    SignUpFormComponent
  ]
})
export class GiuraGiovanniModule { }
