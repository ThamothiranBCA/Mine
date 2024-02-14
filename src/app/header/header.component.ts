import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  logoUrl = '';
message = "";
  onMouseOver() {
    this.message = 'Way to go 🚀';
   this.logoUrl = "/assets/Indian-cricketer-Mahendra-Singh-Dhoni-2011.webp";
  
}
userName = "hello world";
onMouseout(){
  this.logoUrl = "";

}

}
