import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../_services/user-registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

  users:any;
  constructor(private service:UserRegistrationService, private router:Router) { }

  ngOnInit() {
    this.service.getUsers().subscribe((data)=>this.users=data);
  }

  public deleteUser(id:number){
    let resp = this.service.deleteUser(id);
    resp.subscribe((data)=>this.users=data);
  }

  public edit(id)
  {
    this.router.navigate(["/edit", id]);
  }
}
