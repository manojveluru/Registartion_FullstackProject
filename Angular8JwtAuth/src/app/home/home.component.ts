import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  content: string;
 // <img src="https://nerdhutblog.files.wordpress.com/2019/07/jwt-banner-alt.jpg?w=648">
  imagePath:string="https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/16974/0102_04_REST-Security-using-Java-and-Spring_Dan_illustration-dc6cfd3e7760ea9a8d75a8f9d0b93a77.png";
  image2Path:string="https://nerdhutblog.files.wordpress.com/2019/07/jwt-banner-alt.jpg?w=648";
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}
