import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  chosenPet: any;
  alreadyLiked: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) {
        this.chosenPet = {name: '', petType: '', description: '', likes: 0, skills: [{ name: ''}, { name: ''}, { name: ''}]};
    }

  ngOnInit() {
    console.log('ShowComponent::Inside ngOnInit()');

    this.alreadyLiked = 'no';
    console.log('this.alreadyLiked: ', this.alreadyLiked);
    const observable = this._httpService.getPet(this._httpService.currentPetId);
    observable.subscribe(data => {
      if (data['message'] === 'Error' ) {
        console.log('ERROR ERROR ERROR', data['err'].errors);
      } else {
        console.log('Got our pet info! =============== ', data['data']);
        this.chosenPet = data['data'];
      }
    });
  }

  onLike(pet) {
    console.log('Inside onLike()');

    pet.likes++;

    const observable1 = this._httpService.updateLikes(pet);
    observable1.subscribe(data1 => {
      console.log('Got our update result!', data1);
      const observable2 = this._httpService.getPet(this._httpService.currentPetId);
      observable2.subscribe(data2 => {
        console.log('Got our pet info!', data2);
        this.chosenPet = data2['data'];
        this.alreadyLiked = 'yes';
        console.log('this.alreadyLiked: ', this.alreadyLiked);
      });
    });
  }

  onAdopt(pet) {
    console.log('Inside onAdopt()', pet);
    const observable1 = this._httpService.deletePet(this._httpService.currentPetId);
    observable1.subscribe(data1 => {
      console.log('Got our delete result!', data1);
      this._router.navigate(['/']);
    });
  }
}
