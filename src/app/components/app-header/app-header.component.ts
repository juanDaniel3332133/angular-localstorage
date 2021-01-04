import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  public title:string;
  public inTheHome:boolean;

  constructor(
    private route:ActivatedRoute,
    private location: Location
  )
  {
    this.inTheHome = this.location.path() === '/home';
  }

  ngOnInit(): void
  {
    this.route.data.subscribe(data => this.title = data.title);
  }

  public back():void
  {
    this.location.back();
  }

}
