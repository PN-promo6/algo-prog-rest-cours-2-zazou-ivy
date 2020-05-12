import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserPreviewComponent } from './user-preview/user-preview.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostPreviewComponent } from './post-preview/post-preview.component';
import { Routes, RouterModule } from '@angular/router'

const appRoutes: Routes = [

];

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserPreviewComponent,
    NavBarComponent,
    PostsListComponent,
    PostPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
