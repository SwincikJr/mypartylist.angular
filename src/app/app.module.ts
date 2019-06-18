import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component'
import { IncluderComponent } from './includer/includer.component'
import { PersonComponent } from './person/person.component'
import { PeopleService } from './people.service'
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component:  PeopleComponent },
      { path: 'convidado/:id', component: PersonComponent },
    ])
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    IncluderComponent,
    PeopleComponent,
    PersonComponent,
  ],
  bootstrap: [AppComponent],
  providers: [PeopleService]
})
export class AppModule { }
