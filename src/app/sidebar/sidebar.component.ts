import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  emplayeArray=['Home','Basic Info', 'Team','Projects','Outcome','IP Details' ]

  constructor() { }

  ngOnInit() {
  }

}
