import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../services/get-api.service';
import { Department } from '../models/typing';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor( private getApiService: GetApiService ) {}

  departments: Department[] = [];

  ngOnInit(): void {
    this.getApiService.getSearchByDepartment().subscribe((homeResponse) => {
      if(homeResponse && homeResponse.length > 0)
      {
        this.departments = homeResponse;
      }
    });
  }
}
