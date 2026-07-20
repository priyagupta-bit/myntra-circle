import { Routes } from '@angular/router';

import { Landing } from './features/landing/landing';
import { Dashboard } from './features/dashboard/dashboard';
import { Room } from './features/room/room';
import { Creator } from './features/creator/creator';
import { Profile } from './features/profile/profile';
import { Login } from './features/auth/login/login';

export const routes: Routes = [
  {
    path: '',
    component: Landing
  },
  {
    path: 'dashboard',
    component: Dashboard
  },
  {
    path: 'room/:id',
    component: Room
  },
  {
    path: 'creator',
    component: Creator
  },
  {
    path: 'profile',
    component: Profile
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: '**',
    redirectTo: ''
  }
];