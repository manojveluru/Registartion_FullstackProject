import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http:HttpClient) { }

  public doRegistration(user){
    return this.http.post("http://localhost:8001/api/user/register", user, {responseType:'text' as 'json'});
  }

  public getUsers(){
    return this.http.get("http://localhost:8001/api/user/getAllUsers");
  }

  public deleteUser(id)
  {
    return this.http.delete("http://localhost:8001/api/user/cancel/"+id);
  }

  public editUser(id,user)
  {
    return this.http.put("http://localhost:8001/api/user/update/"+id, user, {responseType:'text' as 'json'});
  }

  public getUserById(id)
  {
    return this.http.get("http://localhost:8001/api/user/findUserById/"+id);
  }
}
