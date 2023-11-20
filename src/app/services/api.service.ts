import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  baseURL = 'https://collectionapi.metmuseum.org/public/collection/v1/';
  departmentsURL = 'departments';
  departmentId = 'objects?departmentIds=';

  searchByDepartments(){
    return this.http.get(this.baseURL + this.departmentsURL);
  }

  searchById(id: string){
    return this.http.get(this.baseURL + this.departmentId + id);
  }
}
