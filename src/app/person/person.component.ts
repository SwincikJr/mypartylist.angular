import { Component } from '@angular/core';
import { PeopleService } from '../people.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'person-component',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})

export class PersonComponent {
  constructor(private route: ActivatedRoute, private peopleService: PeopleService) {
    
    this.people = this.peopleService.getList()
    
    this.route.paramMap.subscribe(params => {
      this.selectedId = params.get('id')  
    })

    this.person = this.people.find(element => {
      return element.id == this.selectedId
    })

    this.originalDetails = this.person.details

    this.newDetails = this.originalDetails
  }

  selectedId
  people
  person
  originalDetails
  newDetails

  compara(target) 
  {

    this.newDetails = target.value

    if (this.originalDetails != this.newDetails)
    {
      document.querySelector('#saveButton').removeAttribute('disabled')
    }
    else 
    {
      document.querySelector('#saveButton').toggleAttribute('disabled')
    }
  }

  changeDetails()
  {
    let index = this.people.indexOf(this.person)

    this.peopleService.changeDetails(index, this.newDetails)

    this.originalDetails = this.newDetails
    
    document.querySelector('#saveButton').toggleAttribute('disabled')
  }

}