import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerModule } from './ui/container/container.module';
import { FooterComponent } from './ui/components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, ContainerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
