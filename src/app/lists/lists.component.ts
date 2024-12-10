import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  empData = []
  constructor(private HttpClient: HttpClient,
    private Router: Router,
    public ServiceService:ServiceService
  ) { }

  ngOnInit() {
   
this.reload()

   
  }

  // this.Http.get(`http://localhost:3000/seller?email=${value.email}&password=${value.password}`).subscribe((data : any)=>{

reload(){
  this.HttpClient.get('http://localhost:3000/basicInfo').subscribe((data: any)=>{
    this.empData = data
    // console.log("empData",data)
   });
}
  delete(emp){

    console.log(emp)
    this.HttpClient.delete(`http://localhost:3000/basicInfo/${emp.id}`).subscribe(
      (data: any) => {
        console.log("delete", data);


    },
    (error) => {
        console.error("Error deleting entry:", error);
    });
this.reload()
  }

  edit(emp){
    this.HttpClient.get(`http://localhost:3000/basicInfo?name=${emp.name}&id=${emp.id}`).subscribe((data)=>{
      if(data){
        console.log("edittt",data)
        this.ServiceService.setData(data);
        this.Router.navigate(['basicInfo']);
      }
    })
  }

}


