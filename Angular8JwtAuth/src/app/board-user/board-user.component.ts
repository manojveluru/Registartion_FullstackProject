import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserRegistrationService } from '../_services/user-registration.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.less']
})
export class BoardUserComponent implements OnInit {

  user:User=new User("","",0,"");
  message:any;
  constructor(private service:UserRegistrationService) { }

  ngOnInit() {
  }

  public registerNow()
  {
    let response = this.service.doRegistration(this.user);
    response.subscribe((data)=>this.message=data);
  }

}
