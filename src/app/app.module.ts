import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeMainComponent } from './home/home-main/home-main.component';
import { HeroComponent } from './home/components/hero/hero.component';
import { AboutComponent } from './home/components/about/about.component';
import { ServicesComponent } from './home/components/services/services.component';
import { PortfolioComponent } from './home/components/portfolio/portfolio.component';
import { BlogPostsComponent } from './home/components/blog-posts/blog-posts.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { TargetBlankDirective } from './directives/target-blank.directive';
import { MbTerminalComponent } from './pages/mb-terminal/mb-terminal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeMainComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    BlogPostsComponent,
    FooterComponent,
    BlogPostComponent,
    TargetBlankDirective,
    MbTerminalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
