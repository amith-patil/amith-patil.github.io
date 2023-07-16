import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContainerComponent } from './main-container/main-container.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [MainContainerComponent],
  imports: [CommonModule, RouterModule, MatToolbarModule],
  exports: [MainContainerComponent],
})
export class ContainerModule {}
