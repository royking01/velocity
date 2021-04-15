import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
// import { users} from "../../shared/data/employee.json "
import { users } from "../shared/employee";
import { company } from "../shared/data/company";
@Injectable({
  providedIn: 'root'
})
export class GetUsersService {
  
  constructor() { 
    this.getUsers()
  }
  getUsers():Observable<any>{
    return  of(users)
  }
  getUser(id):Observable<any>{
    // console.log(users)
  return of(users.find(u => u.id === id))
    
  }
  getCompany():Observable<any>{
    return  of(company)
  }
  getComp(id):Observable<any>{
    // console.log(users)
  return of(company.find(u => u.name === id))
    
  }
}
