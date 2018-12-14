import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  currentPetId: any;

  constructor(private _http: HttpClient) { }

  getPets() { // GET
    console.log('INSIDE getPets()');
    return this._http.get('/api/pets');
  }

  getPet(id) { // GET
    console.log('INSIDE getPet() - ' + id);
    this.currentPetId = id;
    return this._http.get('/api/pets/' + id);
  }

  createPet(newPet) { // POST
    console.log('INSIDE createPet()');
    return this._http.post('/api/pets', newPet);
  }

  updatePet(pet) { // PUT
    console.log('INSIDE updatePet() - ' + pet.name);
    return this._http.put(`/api/pets/${this.currentPetId}`, pet);
  }

  updateLikes(pet) { // PUT
    console.log('INSIDE updateLikes() - ' + pet.likes);
    return this._http.put(`/api/pets/${this.currentPetId}`, pet);
  }

  deletePet(id) { // DELETE
    console.log('INSIDE deletePet()');
    return this._http.delete('/api/pets/' + id);
  }
}
