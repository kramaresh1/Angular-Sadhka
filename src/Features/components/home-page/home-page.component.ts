import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})


export class HomePageComponent implements OnInit {
  showWelcomePopup = false;
 
  ngOnInit(): void {
    this.checkFirstVisit();
  }

  checkFirstVisit(): void {
    const isFirstVisit = true // localStorage.getItem('hasVisited');
    if (!isFirstVisit) {
      this.showWelcomePopup = true;
   //   localStorage.setItem('hasVisited', 'true');
    }
  }

  closePopup(): void {
    this.showWelcomePopup = false;
  }
}

