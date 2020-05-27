import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _currentUser = new BehaviorSubject('');
  public currentUser = this._currentUser.asObservable();

  constructor(
    private http: HttpClient
  ) {
  }

  get currentUserValue(): any {
    return this._currentUser.value;
  }

  set currentUserValue(token: any) {
    this._currentUser.next(token);
  }

  signOut() {
    this.currentUserValue = ''
  }

  signIn(login_id: string, login_password: string) {
    return this.http.post<any>('https://nishimatsuya.newphoria.net/json/api/admin/login', {
      login_id, login_password
    });
  }
}
