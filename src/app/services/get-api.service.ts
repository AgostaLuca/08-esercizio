import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Department } from '../models/typing';
import { DepartamentId } from '../models/typing';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetApiService {
  constructor(private apiService: ApiService) {}
  getSearchByDepartment() {
    return this.apiService.searchByDepartments().pipe(
      map((response: any) => {
        return response.departments as Department[];
      })
    );
  }

  getSearchById(id: string) {
    return this.apiService.searchById(id).pipe(
      map((response: any) => {
        return response as DepartamentId;
      }
    ));
  }
}