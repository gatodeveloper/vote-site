import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from '../../layouts/main-layout/main-layout.component';
import { HomepageComponent } from './homepage.component';

/**
 * Routes
 * @type {Routes}
 */
const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
    	{
    		path: '',
    		component: HomepageComponent
    	}
    ]
    
  },
];

@NgModule({
  declarations: [HomepageComponent],
  imports: [
	RouterModule.forChild(routes),
    CommonModule
  ]
})

export class HomepageModule { }
