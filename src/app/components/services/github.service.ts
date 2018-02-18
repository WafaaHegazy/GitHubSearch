import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class GithubService {
  //put here secret and client id of application
  client_id:string='';
  secret:string='';

  constructor(
    private http:Http
  ) { }
  getUser(userName:string){
   return  this.http.get('https://api.github.com/users/'+userName+'?client_id='+this.client_id+'&client_secret='+this.secret).map(res => res.json());

  }
  getRepos(username:string){
    return this.http.get('https://api.github.com/users/'+username+'/repos?client_id='+this.client_id+'&client_secret='+this.secret)
        .map(res => res.json());
}

}
