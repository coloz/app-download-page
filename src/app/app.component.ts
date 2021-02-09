import { Component } from '@angular/core';
import { CONFIG } from 'src/config/app.config';

function isIos() {
  const u = navigator.userAgent;
  console.log(u);
  return u.indexOf("iPhone") > -1 || u.indexOf("Mac OS") > -1;
}


function isWechat() {
  const ua = window.navigator.userAgent.toLowerCase();
  const match = ua.match(/MicroMessenger/i);
  if (match === null) {
    return false;
  }
  if (match.includes('micromessenger')) {
    return true;
  }
  return false;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  get title() {
    return CONFIG.title
  }

  get icon() {
    return CONFIG.icon
  }

  showTip = false;

  ngAfterViewInit(): void {
    if (isIos()) {
      console.log('is ios');
      window.location.href = CONFIG.url_ios
    } else {
      if (isWechat()) {
        // this.showTip = true
      } else {
        window.location.href = CONFIG.url_android
      }
    }
  }

  onClick() {
    if (isIos()) {
      console.log('is ios');
      window.location.href = CONFIG.url_ios
    } else {
      console.log('is android');
      if (isWechat()) {
        this.showTip = true
      } else {
        window.location.href = CONFIG.url_android
      }
    }
  }


}
