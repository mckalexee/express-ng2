import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import components
// import { ComponentName } from '/component-name/component-name'

const appRoutes: Routes = [
  // { path: '', component: ComponentName }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule  {}
