import { BlogPostsComponent } from './home/components/blog-posts/blog-posts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMainComponent } from './home/home-main/home-main.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { MbTerminalComponent } from './pages/mb-terminal/mb-terminal.component';
const routes: Routes = [
  { path: '', component: HomeMainComponent },
  { path: 'blog', component: BlogPostComponent },
  { path: 'blogs', component: BlogPostsComponent },
  { path: 'mb-terminal', component: MbTerminalComponent },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
