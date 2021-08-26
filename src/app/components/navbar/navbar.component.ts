import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {

  //variables
  message = "Hola Lejli"

  constructor() { }

  ngOnInit(): void {
    this.message ="Hola Leslucas"
  }

  ngOnChanges(): void{
    
  }

}
