import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { GithubComponent } from './components/github/github.component';
import {GithubService} from './components/services/github.service'
import {enableProdMode} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
enableProdMode();
@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [GithubService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
