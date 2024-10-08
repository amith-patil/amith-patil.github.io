import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeHeroComponent } from './home-hero/home-hero.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LogoComponent } from '../../logos/logo/logo.component';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { SocialsComponent } from '../../components/socials/socials.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { HomeCareerComponent } from './home-career/home-career.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HomeContactComponent } from './home-contact/home-contact.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeHeroComponent,
    LogoComponent,
    HeroSectionComponent,
    SocialsComponent,
    NavBarComponent,
    LogoComponent,
    HomeAboutComponent,
    HomeCareerComponent,
    FooterComponent,
    HomeContactComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
  ],
})
export class HomeModule {}
