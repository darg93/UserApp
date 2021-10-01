import { Component, OnInit } from '@angular/core';
import { USER } from 'src/app/model/user';
import { Router, ActivatedRoute }  from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public title: string;
  public user: USER;

  constructor(private _route:ActivatedRoute, private _router:Router) {
    this.title = "Search Module";
    this.user = new USER(1, 1, "", "");
   }

  ngOnInit(): void {
  }

  onSubmit(form: any){
    this._router.navigate(['/users'], {queryParams:{name:this.user.nombre}});
  }

}