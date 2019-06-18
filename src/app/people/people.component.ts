import { Component } from '@angular/core';
import { people } from '../people';
import { PeopleService } from '../people.service';

@Component({
  selector: 'people-component',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})

export class PeopleComponent {

  constructor(private peopleService: PeopleService)
  {
    this.people = this.peopleService.getList()
  }

  people

  excluir(id) {

    this.peopleService.subToList(id)
    this.people = this.peopleService.getList()

  }

  onInclui(newPerson) {

    this.peopleService.addToList(newPerson)
    this.people = this.peopleService.getList()

  }
}