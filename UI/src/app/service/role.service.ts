import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { global } from "./global";

@Injectable()
export class RoleService{
    public url: string;

    constructor(public _http: HttpClient){
        this.url = global.url;
    }

    getRoles(){
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url + 'role/list', {headers:headers});
    }
}