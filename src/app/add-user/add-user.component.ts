import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  name:String = "";
  phone:any =null;
  email:String = "";
  companyList:any=[];
  selectedCompany=[];
  successMsg:String="";
  errorMsg:String="";

  constructor(private http:HttpServiceService,private global:GlobalService) { 
    
  }

  ngOnInit(): void {
  }

  fetchList(){
    this.http.get('/company/getcompany').subscribe(data=>{
      this.companyList = data.map((item:any)=>item.name) 
    })
  }
  selectCompany(value:any){
    this.selectedCompany = value
    
  }

  onSubmit(){
    let userObj = {
      name:this.name,
      email:this.email,
      phone:this.phone,
      companyName:this.selectedCompany
    }
    this.http.post('/user/adduser',userObj).subscribe(data=>{
      if(data){
        this.successMsg = "User Added Successfully";
        this.errorMsg = ""
      }else{
        this.successMsg = ""
        this.errorMsg = "User Not Added"
      }
      
    })

  }

}
