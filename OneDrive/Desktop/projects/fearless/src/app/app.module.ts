import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { TrainingComponent } from './training/training.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { PastTrainingsComponent } from './training/past-trainings/past-trainings.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { JobstatusComponent } from './ingestionservice/jobstatus/jobstatus.component';
import { HeaderComponent } from './layout/header/header.component';
import { ServComponent } from './comp/serv/serv.component';
import { SomeNameComponent } from './plainsight/some-name.component';
import { HeroComponent } from './plainsight/hero.component';
import { RamComponent } from './plainsight/header/ram.component';
import { SvcdashboardComponent } from './svcdashboard/svcdashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginComponentComponent } from './login/login-component.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { LoanValidationComponent } from './loan-validation-svc/loan-validation.component';
import { LoginComponent } from './auths/login/login.component';
import { LaxComponent } from './ram/sita/lax/lax.component';
import { LatComponent } from './ram/hero/lat/lat.component';
import { KaranComponent } from './ram/kita/karan.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingsComponent,
    WelcomeComponent,
    JobstatusComponent,
    HeaderComponent,
    ServComponent,
    SomeNameComponent,
    HeroComponent,
    RamComponent,
    SvcdashboardComponent,
    LoginComponentComponent,
    AuthenticationComponent,
    LoanValidationComponent,
    LoginComponent,
    LaxComponent,
    LatComponent,
    KaranComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
