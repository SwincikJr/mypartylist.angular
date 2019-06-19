import { Component, Output, EventEmitter } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
    selector: 'includer-component',
    templateUrl: './includer.component.html',
    styleUrls: ['./includer.component.css']
})

export class IncluderComponent {
    
    @Output() incluir = new EventEmitter();

    constructor(private peopleService: PeopleService){}

    newFirstName = ""
    newLastName = ""
    newAge = -1
    newExcludable = 'true'

    inclui() {

        if (this.newFirstName == "" || this.newLastName == "" || this.newAge < 0)
        {
            window.alert('Preencha todas as informacoess antes de incluir um novo nome')
            return
        }

        if (this.newAge < 18)
        {
            window.alert('Somente pessoas maiores de idade sao permitidas')
            return
        }

        let newPerson = {
            id: this.peopleService.nextId(),
            firstName: this.newFirstName,
            lastName: this.newLastName,
            age: this.newAge,
            excludable: this.newExcludable === 'false' ? false : true,
            details: ''
        }

        this.incluir.emit(newPerson)
    }
}