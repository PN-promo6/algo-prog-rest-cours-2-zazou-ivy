import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/user/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  public fetchUsers(): Observable<User[]> {

    let usersObservable: Observable<User[]> = this.httpClient.get<User[]>("http://localhost:3000/users")
    return usersObservable;
  }

  public fetchUserById(id: string): Observable<User[]> {
    let obsDataById: Observable<User[]> = this.httpClient.get<User[]>(
      "http://localhost:3000/users/" + id
    );
    return obsDataById;
  }
}