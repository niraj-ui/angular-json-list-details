import { Component, OnInit } from '@angular/core';
import { mainService } from '../service/main.service';
 
 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})


export class HomeComponent implements OnInit {
  data_list
  constructor(private main_service:mainService) { }

  ngOnInit() {
    this.main_service.get_list()
    .subscribe(data=>{
      console.log(data);
      let res:any =data;
      this.data_list=res;
    })
  }

  // get_lis(){
  //   this.main_service.get_list()
  //   .subscribe(data=>{
  //     console.log(data);
  //     

  //   })
    
  // }

}
