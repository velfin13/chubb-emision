import { Component, EventEmitter, Output, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  @Output() menuToggle = new EventEmitter<void>();
  
  themeService = inject(ThemeService);

  onMenuClick() {
    this.menuToggle.emit();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  get isDarkMode() {
    return this.themeService.isDark();
  }
}
