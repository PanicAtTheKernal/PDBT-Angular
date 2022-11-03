import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() collapseState:boolean = false;
  private sidebarWidth: string = '330px'; 

  constructor() { }

  ngOnInit(): void {
  }

  getWidth(): string {
    let sidebarWidth: string = (window.screen.width < 600) ? '100vh' : this.sidebarWidth; 
    return this.collapseState ? '0px' : sidebarWidth;
  }
}
