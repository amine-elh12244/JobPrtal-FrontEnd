import { Injectable } from '@angular/core';

import {Observable, of, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import * as http from "http";
import {AppUser} from "../model/appuser";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    public host:string="http://localhost:8089";
    users: AppUser[] =[];
    employers:AppUser[]=[];
    authenticatedUser:AppUser|undefined;

    private _authenticatedEmployerId: string | undefined;

    set authenticatedEmployerId(id: string) {
        this._authenticatedEmployerId = id;
    }

    get authenticatedEmployerId(): string {
        return <string>this._authenticatedEmployerId;
    }
    constructor(private http:HttpClient) {
        this.getCandidats().subscribe(data=>{
            this.users=data;
        })
        this.getEmployers().subscribe(data=>{
            this.employers=data;
        })
    }

    public getCandidats(): Observable<AppUser[]> {
        // Utilisez le retour de la méthode get avec la spécification du type générique
        return this.http.get<AppUser[]>(this.host + "/employeurs");
    }

    public getEmployers(): Observable<AppUser[]> {
        // Utilisez le retour de la méthode get avec la spécification du type générique
        return this.http.get<AppUser[]>(this.host + "/employeurs");
    }




    public login(email:string,password:string,role:string):Observable<AppUser>{
        if(role=='candidate'){
            let appUser=this.users.find(u=>u.email==email);
            if(!appUser) return throwError(()=>new Error("User Not Found !"));
            console.log('Input password:', password);
            console.log('Stored password:', appUser.password);
            if(appUser.password!=password) return throwError(()=>new Error("Wrong Password !"));

            this.authenticatedEmployerId = appUser.id.toString(); // set the authenticated employer's ID
            return of(appUser);
        }else {
            let appUser=this.employers.find(u=>u.email==email);
            if(!appUser) return throwError(()=>new Error("User Not Found !"));
            console.log('Input password:', password);
            console.log('Stored password:', appUser.password);
            if(appUser.password!=password) return throwError(()=>new Error("Wrong Password !"));
            this.authenticatedEmployerId = appUser.id.toString(); // set the authenticated employer's ID

            return of(appUser);
        }
    }

    public authenticateUser(appUser:AppUser):Observable<boolean>{
        this.authenticatedUser=appUser;
        localStorage.setItem("authUser",JSON.stringify({id:appUser.id,email:appUser.email,role:appUser.role,jwt:"WT_TOKEN"}));
        console.log(appUser.role);
        return of(true);
    }

    public isCandidat():boolean{
        return this.authenticatedUser!.role.includes("candidate");
    }
    public isEmployeur():boolean{
        return this.authenticatedUser!.role.includes("employer");
    }

    public isAuthenticated():boolean{
        return this.authenticatedUser!=undefined;
    }

    public logout():Observable<boolean>{
        this.authenticatedUser=undefined;
        localStorage.removeItem("authUser");
        return of(true);
    }
}
