import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-basicinfo',
  templateUrl: './basicinfo.component.html',
  styleUrls: ['./basicinfo.component.css']
})
export class BasicinfoComponent implements OnInit {
  isEdit = false
  formData : any =[]
  EmployeeAddForm: FormGroup;
  addProductmessage: string | undefined
  constructor(
    private HttpClient: HttpClient,
    public Router: Router,
    public ServiceService:ServiceService
  ) {
    this.EmployeeAddForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      gender: new FormControl('', [Validators.required]),
      mobileNumber: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      dob: new FormControl('', [Validators.required]),

      state: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),


      profession: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),


      panNo: new FormControl('', [Validators.required]),
      aadhaarNo: new FormControl('', [Validators.required]),

      education: new FormControl('', [Validators.required]),
      degree: new FormControl('', [Validators.required]),

      university: new FormControl('', [Validators.required]),

    });
  }






  ngOnInit() {

    // const formData = this.ServiceService.getData();
    this.formData = this.ServiceService.getData();
    console.log("formDataformDataformData",this.formData)

    if (this.formData.length >0) {
      this.isEdit = true;
      console.log("aaaaaaaaaa",this.isEdit)
      this.EmployeeAddForm.patchValue(this.formData[0]);
    }  }

  addInfo(isEdit){

    if(isEdit  == true){
      // editInfo(formData){
      console.log("111111",isEdit,this.formData)
        this.HttpClient.patch(`http://localhost:3000/basicInfo/${this.formData[0].id}`,this.EmployeeAddForm.value).subscribe((data)=>{
          console.log(data);
          this.Router.navigate(['employeeList']);

         });
         return
      // }
    }
    console.log(this.EmployeeAddForm.value);
    
   this.HttpClient.post('http://localhost:3000/basicInfo',this.EmployeeAddForm.value).subscribe((data)=>{
    console.log(data);
    this.Router.navigate(['employeeList']);
   });
   this.EmployeeAddForm.reset()
  }

  

}
