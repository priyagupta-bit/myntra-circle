import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Circle {
  id: number;
  title: string;
  cover: string;
  members: number;
  products: number;
  lastActive: string;
  vibe: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

  constructor(private router: Router) { }

  showModal = signal(false);

  circles = signal<Circle[]>([
    {
      id: 1,
      title: 'Goa Girls Trip',
      cover: 'https://images.unsplash.com/photo-1590393275627-0c48482c60e3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      members: 4,
      products: 12,
      lastActive: '2 mins ago',
      vibe: 'Coastal Neutral'
    },
    {
      id: 2,
      title: 'Diwali Shopping',
      cover: 'https://plus.unsplash.com/premium_photo-1698500035049-d69331f7cd2a?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      members: 3,
      products: 18,
      lastActive: '1 hour ago',
      vibe: 'Festive Glam'
    }
  ]);

  openModal() {
    this.showModal.set(true);
  }

  closeModal() {
    this.showModal.set(false);
  }

  createCircle() {
    this.closeModal();
    this.router.navigate(['/room', 1]);
  }

  openCircle(id: number) {
    this.router.navigate(['/room', id]);
  }
}