import { Component, OnInit } from '@angular/core';
import {GithubService } from '../services/github.service'
import {User} from '../models/user/user'

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  user : User ={
    login:''
  };
  repos:any;
  constructor(
    private githubService:GithubService
  ) { }

  ngOnInit() {

  }
  search(){
    this.githubService.getUser(this.user.login).subscribe(user =>{
      this.user=user;
    });
    this.githubService.getRepos(this.user.login).subscribe (repos =>{
      this.repos=repos;
    });

    }

  
  }

