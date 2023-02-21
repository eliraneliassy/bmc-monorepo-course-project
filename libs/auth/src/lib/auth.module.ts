
import { ButtonComponentModule, GenericInputComponentModule } from '@bmc/components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { authRoutes } from './lib.routes';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(authRoutes), ReactiveFormsModule
  , ButtonComponentModule, GenericInputComponentModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class AuthModule {}
