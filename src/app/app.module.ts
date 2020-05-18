import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UploadFilesComponent } from './components/upload-files/upload-files.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    UploadFilesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
