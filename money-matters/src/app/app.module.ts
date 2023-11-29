import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AppRoutingModule } from './app-routing.module';
import { TopNavigationBarComponent } from './top-navigation-bar/top-navigation-bar.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { CategoryOneComponent } from './category-one/category-one.component';
import { CategoryTwoComponent } from './category-two/category-two.component';
import { CategoryThreeComponent } from './category-three/category-three.component';
import { CategoryFourComponent } from './category-four/category-four.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    TopNavigationBarComponent,
    SidePanelComponent,
    CategoryOneComponent,
    CategoryTwoComponent,
    CategoryThreeComponent,
    CategoryFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
