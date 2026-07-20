import { Component } from '@angular/core';

import { Navbar } from '../../shared/components/navbar/navbar';
import { Hero } from '../../shared/components/hero/hero';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    Navbar,
    Hero
  ],
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export class Landing {}