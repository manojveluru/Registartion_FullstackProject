import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserRegistrationService } from '../_services/user-registration.service';
import { ActivatedRoute, Router, RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.less']
})
export class EditUserComponent implements OnInit {

  id:number
  applicants:User;
  message:any;
  constructor(private service:UserRegistrationService,private route:ActivatedRoute,private router:Router) 
  {}

  ngOnInit() {
    this.applicants = new User("","",0,"");
    this.id = this.route.snapshot.params['id'];
    this.service.getUserById(this.id).subscribe((data)=>{this.applicants=data,
    console.log(data)});
  }

  public updateUser()
  {
    this.service.editUser(this.id,this.applicants).subscribe((data)=>{console.log(data),this.message=data});
    this.router.navigate(["/profile"]);
  }

}
