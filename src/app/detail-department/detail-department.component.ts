import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../services/get-api.service';
import { ActivatedRoute } from '@angular/router';
import { DepartamentId } from '../models/typing';

@Component({
  selector: 'app-detail-department',
  templateUrl: './detail-department.component.html',
})
export class DetailDepartmentComponent implements OnInit {

  constructor( private getApiService: GetApiService, private activatedRoute: ActivatedRoute) {}

  departmentId!: DepartamentId;

  ngOnInit(): void {
      this.activatedRoute.data.subscribe(({ detailId }) => {
        if(detailId) {
          console.log(detailId);
          this.departmentId = detailId;
        }
      });
  }
}
