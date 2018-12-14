import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

  pet: any;
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
      this.pet = {name: '', petType: '', description: '', likes: 0, skills: [{ name: ''}, { name: ''}, { name: ''}]};
      this.skill0 = '';
      this.skill1 = '';
      this.skill2 = '';
      this.errors = {name: ''};

      const observable = this._httpService.getPet(this._httpService.currentPetId);
      observable.subscribe(data => {
        console.log('Got our author info!', data);
        this.pet = data['data'];
        this.skill0 = data['data'].skills[0].name;
        this.skill1 = data['data'].skills[1].name;
        this.skill2 = data['data'].skills[2].name;
      });
    }

    onUpdatePet() {
      console.log('inside onUpdatePet()', this.pet);
      this.pet.skills = [{'name': this.skill0 }, {'name': this.skill1 }, {'name': this.skill2 }];
      const observable = this._httpService.updatePet(this.pet);
      observable.subscribe(data => {
        if (data['message'] === 'Error' ) {
          console.log('ERROR ERROR ERROR', data);
          this.errors = data['err'].errors;
        } else {
          console.log('Got our updated pet!', data);
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
