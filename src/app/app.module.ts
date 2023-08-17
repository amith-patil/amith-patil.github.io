import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerModule } from './ui/container/container.module';
import { SplashscreenComponent } from './ui/pages/splashscreen/splashscreen/splashscreen.component';

@NgModule({
  declarations: [AppComponent, SplashscreenComponent],
  imports: [BrowserModule, AppRoutingModule, ContainerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
