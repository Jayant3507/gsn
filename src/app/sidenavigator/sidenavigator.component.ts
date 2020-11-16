import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'  

@Component({
  selector: 'app-sidenavigator',
  templateUrl: './sidenavigator.component.html',
  styleUrls: ['./sidenavigator.component.css']
})
export class SidenavigatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("#close-sidebar").click(function() {
      $(".page-wrapper").removeClass("toggled");
    });
    $("#show-sidebar").click(function() {
      $(".page-wrapper").addClass("toggled");
    });
  }

}
