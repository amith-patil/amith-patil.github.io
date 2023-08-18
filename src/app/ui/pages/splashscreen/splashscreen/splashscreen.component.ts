import { Component } from '@angular/core';
declare var anime: any; // declare like this

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.component.html',
  styleUrls: ['./splashscreen.component.scss'],
})
export class SplashscreenComponent {
  ngAfterViewInit(): void {
    const anim = anime.timeline({
      loop: true,
      direction: 'alternate',
    });

    anim.add({
      targets: '#logo path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutQuart',
      duration: 2000,
      delay: function (el: any, i: any) {
        return i * 250;
      },
    });
  }
}
