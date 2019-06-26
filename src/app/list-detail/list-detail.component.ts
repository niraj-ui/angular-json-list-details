import { Component, OnInit } from '@angular/core';
import { mainService } from '../service/main.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.sass']
})
export class ListDetailComponent implements OnInit {

  constructor(private main_service:mainService, private _router:ActivatedRoute) { }

  ngOnInit() {

    //this._router.snapshot(id)

    this.main_service.get_detail('2')
    .subscribe(data=>{
      console.log(data);
      let res:any=data;
    })
    
  
  }

}
