import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { RoleService } from 'src/app/service/role.service';
import { Subject } from 'rxjs';
import { USER } from 'src/app/model/user';
import { Router, ActivatedRoute } from '@angular/router';
import { ROLE } from 'src/app/model/role';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [UserService, RoleService]
})
export class CreateComponent implements OnInit {

  public user: USER;
  public roles: any;

  constructor(private _userService:UserService, private _roleService:RoleService, private _activatedRoute: ActivatedRoute, private _route:ActivatedRoute, private _router:Router) { 
    this.user = new USER(1,1,"","");
  }

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles(){
    this._roleService.getRoles().subscribe(
      response =>{
        this.roles = response;
      },
      error =>{
        console.error(error);
      }
    );
  }

  onSubmit(form: any){
    this._userService.save(this.user).subscribe(
      response =>{
        this._router.navigate(['/users']);
      },
      error =>{
        console.error(error);
        
      }
    )
    console.log(this.user);
  }

  return(){
    this._router.navigate(['/users']);
  }

}