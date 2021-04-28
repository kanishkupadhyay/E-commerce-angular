import { Component, OnInit } from '@angular/core';
import { DesignService } from '../../service/design.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
value:number=0
  constructor(private design:DesignService) { 
    this.design.totalItem.subscribe(val=>{
      this.value=val
    })
  }

  ngOnInit(): void {
  }

}
