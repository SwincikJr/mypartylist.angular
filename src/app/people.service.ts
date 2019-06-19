import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PeopleService {

  constructor() { }

  IdAtual = 4;

  people = [
    {
        id: 1,
        firstName: 'Mauro',
        lastName: 'Swincik',
        age: 25,
        excludable: false,
        details: 'Organizador'
    },
    {
        id: 2,
        firstName: 'Tamires',
        lastName: 'Pissolato',
        age: 30,
        excludable: false,
        details: 'Organizadora'
    },
    {
        id: 3,
        firstName: 'Carlinhos',
        lastName: 'Silva',
        age: 18,
        excludable: true,
        details: 'Amigo do casal'
    }
  ]

  addToList(newPerson)
  {
    this.people.push(newPerson)
  }

  subToList(id)
  {
    let index = this.people.indexOf(this.people.find(element => {
    return element.id == id
    }))
    
    if (index > -1)
    {
    this.people.splice(index, 1)
    } 
  }

  getList()
  {
    return this.people
  }

  changeDetails(index, newDetails)
  {
    this.people[index].details = newDetails
  }

  nextId()
  {
    return this.IdAtual++
  }

}