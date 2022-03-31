import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  userData:any=[];
  userCompanyData:any=[];
  companyName:String="";
  constructor(private http:HttpServiceService) { }

  ngOnInit(): void {
  }
  
  parseUser(){
    this.http.get('/user/getuser').subscribe(data=>{
      this.userData=data;
      
    })
  }
  parseCompanyUser(){
    this.http.get(`/user/getcompanyuser/${this.companyName}`).subscribe(data=>{
      this.userCompanyData=data;
      
    })
  }

}
