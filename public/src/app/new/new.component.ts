import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  newPet: any;
  skill0: any;
  skill1: any;
  skill2: any;
  errors: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
    this.newPet = {name: '', petType: '', description: '', likes: 0, skills: [{ name: ''}, { name: ''}, { name: ''}]};
    this.skill0 = '';
    this.skill1 = '';
    this.skill2 = '';
    this.errors = {name: ''};
  }

  onSubmitPet() {
    console.log('inside onSubmitPet()');
    this.newPet.skills = [{'name': this.skill0 }, {'name': this.skill1 }, {'name': this.skill2 }];
    console.log('BEFORE createPet() - this.newPet: ', this.newPet);
    const observable = this._httpService.createPet(this.newPet);
    observable.subscribe(data => {
      if (data['message'] === 'Error' ) {
        console.log('ERROR ERROR ERROR', data);
        this.errors = data['err'].errors;
      } else {
        console.log('Got our new pet!', data);
        this.goHome();
      }
    });
  }

  onCancel() {
    console.log('inside onCancel()');
    this.goHome();
  }

  goHome() {
    console.log('Inside goHome()');
    this._router.navigate(['/']);
  }
}
