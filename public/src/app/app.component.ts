import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  // newPet: any;
  // chosenPet: any;

  constructor() {}

  ngOnInit() {
    console.log('Inside ngOnInit()');
    // this.newPet = {name: '', petType: '', description: '', likes: 0, skills: []};
    // this.chosenPet = {name: '', petType: '', description: '', likes: 0, skills: []};
  }



}
