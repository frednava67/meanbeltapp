import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pets: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
    console.log('Inside ngOnInit()');
    this.pets = this.getPetsFromService();
  }

  getPetsFromService() {
    console.log('inside getPetsFromService()');
    const observable = this._httpService.getPets();
    observable.subscribe(data => {
      console.log('Got our pets!', data);
      this.pets = data['data'];
    });
  }

  onEdit(id) {
    console.log('inside onEdit() - ' + id);
    this._httpService.currentPetId = id;
    this._router.navigate(['pets/' + id + '/edit']);
  }

  onDelete(id) {
    console.log('inside onDelete() - ' + id);
    const observable = this._httpService.deletePet(id);
    observable.subscribe(data => {
      console.log('Got delete result!', data);
      this.getPetsFromService();
    });
  }

  onViewPet(id) {
    console.log('inside onViewPet() - ' + id);
    this._httpService.currentPetId = id;
    this._router.navigate(['pets/' + id]);
  }
}
