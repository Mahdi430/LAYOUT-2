import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,MatToolbarModule,MatIconModule,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output()
  Openclosesidenavmenu: EventEmitter<boolean>=new EventEmitter<boolean>();
  Openclose(){
    this.Openclosesidenavmenu.emit();
  }
}


