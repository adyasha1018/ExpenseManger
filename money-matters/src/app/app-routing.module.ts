
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryOneComponent } from './category-one/category-one.component';
import { CategoryTwoComponent } from './category-two/category-two.component';
import { CategoryThreeComponent } from './category-three/category-three.component';
import { CategoryFourComponent } from './category-four/category-four.component';
import { AccountsComponent } from "./accounts/accounts.component";

const routes: Routes = [
  {path: 'accounts', component: AccountsComponent},
  { path: 'category-one', component: CategoryOneComponent },
  { path: 'category-two', component: CategoryTwoComponent },
  { path: 'category-three', component: CategoryThreeComponent },
  { path: 'category-four', component: CategoryFourComponent },
  { path: '', redirectTo: '/category-one', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
