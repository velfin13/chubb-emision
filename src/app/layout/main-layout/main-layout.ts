import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';
import { Footer } from '../footer/footer';
import { RouterOutlet } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-main-layout',
  imports: [MatSidenavModule, Header, Sidebar, Footer, RouterOutlet],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {
  isMobile = false;
  sidenavOpened = true;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        this.isMobile = result.matches;
        this.sidenavOpened = !this.isMobile;
      });
  }

  toggleSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
  }
}
