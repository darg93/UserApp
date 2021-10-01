import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { RoleService } from 'src/app/service/role.service';
import { Subject } from 'rxjs';
import { USER } from 'src/app/model/user';
import { Router, ActivatedRoute } from '@angular/router';
import { ROLE } from 'src/app/model/role';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService, RoleService]
})
export class UserComponent implements OnInit {

  public user: USER;
  public roles: any;

  constructor(private _userService:UserService, private _roleService:RoleService, private _activatedRoute: ActivatedRoute, private _route:ActivatedRoute, private _router:Router) {
    this.user = new USER(1, 1, "", "");

    this._activatedRoute.params.subscribe(
      params =>{
        this.user.id_usuario = params.id;
      }
    )
  }

  ngOnInit(): void {
    this.getUser(this.user.id_usuario);
    this.getRoles();
  }

  getUser(id:number){
    this._userService.getUser(id).subscribe(
      response =>{
        this.user.nombre = response.nombre;
        this.user.id_rol = response.id_rol;
        this.user.activo = response.activo;
      },
      error =>{
        console.error(error);
      }
    );
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
    this._userService.update(this.user).subscribe(
      response =>{
        this._router.navigate(['/users']);
      },
      error =>{
        console.error(error);
      }
    )
  }

  createUser(){
    this._router.navigate(['/save/']);
  }

  deleteUser(){
    this._userService.delete(this.user.id_usuario).subscribe(
      response =>{
        this._router.navigate(['/users/']);
      },
      error =>{
        console.error(error);
      }
    )
  }

}