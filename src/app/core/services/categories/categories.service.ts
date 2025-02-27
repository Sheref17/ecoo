import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { envrionment } from '../../envrionment/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpClient:HttpClient) { }
  getAllCategories():Observable<any>{
return this.httpClient.get(`${envrionment.baseurl}/api/v1/categories`)
  }
  getSpecificCategories(id:string):Observable<any>{
    return this.httpClient.get(`${envrionment.baseurl}/api/v1/categories/${id}`)
      }
    }

