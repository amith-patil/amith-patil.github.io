import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeHeroComponent } from './home-hero/home-hero.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LogoComponent } from '../../logos/logo/logo.component';
import { MatButtonModule } from '@angular/material/button';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { SocialsComponent } from '../../components/socials/socials.component';
import { ResumeComponent } from '../resume/resume.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeHeroComponent,
    LogoComponent,
    NavBarComponent,
    HeroSectionComponent,
    SocialsComponent,
    ResumeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class HomeModule {}
