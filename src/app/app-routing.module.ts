import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { HallPageComponent } from './hall-page/hall-page.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: AuthLayoutComponent,
  //   children: [
  //     {path: 'contact', component: ContactPageComponent}
  //   ]
  // },
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      {path: 'hall', component: HallPageComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
