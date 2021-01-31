import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { Actor } from '../interfaces/actor.interface';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private http: HttpClient) { }

  searchActor(query = '') {
    const filter = `${environment.baseUrlAPI}/?service=voice_over&keywords=${query}&page=1`;
    return this.http.get<Actor[]> (filter);
  }
  getDetails(id: number) {
    return this.http.get<Actor[]>(`${environment.baseUrlAPI}/${id}`);
  }

}
