import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @Output() togglesSidebarForMe:EventEmitter<any>=new EventEmitter
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  toggleSidebar(){
   this.togglesSidebarForMe.emit();
  }
}
