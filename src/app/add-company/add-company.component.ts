import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  
  companyName:String="";
  place:String="";
  successMsg:String="";
  errorMsg:String="";
  companyList:any=[];

  constructor(private httpService:HttpServiceService) { }

  ngOnInit(): void {
    this.httpService.get('/company/getcompany').subscribe(data=>{
      this.companyList = data.map((item:any)=>item.name) 
    })
  }

  deleteCompany(index:any){
    this.httpService.delete('/company/deletecompany/'+this.companyList[index]).subscribe(data=>{
      if(data){
        this.httpService.get('/company/getcompany').subscribe(data=>{
          this.companyList = data.map((item:any)=>item.name) 
        })  
      }
    })
  }
  onSubmit(){
    let companyData = {
      name:this.companyName,
      place:this.place
    }
    this.httpService.post('/company/addcompany',companyData).subscribe(data=>{
      if(data){
        this.errorMsg="";
        this.successMsg="Company Added Successfully"
        this.httpService.get('/company/getcompany').subscribe(data=>{
          this.companyList = data.map((item:any)=>item.name) 
        })
      }else{
        this.successMsg=""
        this.errorMsg = "Company Not Added"
      }
    })
    
  }

}
