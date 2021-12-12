import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact/contact.component';
import { FormComponent } from './contact/form/form.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
