import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TestService } from './test.service';
import { environment } from 'src/environments/environment';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

const loggerType = environment.logger;
@NgModule({
  declarations: [],
  providers: [
    AuthService,
    AuthGuard,
    { provide: TestService, useClass: TestService }
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule.forRoot()
  ]
})
export class CoreModule { }
