// side-panel.component.ts

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SidePanelStateService } from '../side-panel-state.service';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css'],
})
export class SidePanelComponent implements OnInit {
  showSidePanel = false;

  constructor(private router: Router, private sidePanelStateService: SidePanelStateService) {}

  ngOnInit() {
    // Subscribe to router events to detect route changes
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      this.closeSidePanel();
    });

    // Subscribe to the state service to update the side panel state
    this.sidePanelStateService.showSidePanel$.subscribe(value => {
      this.showSidePanel = value;
    });
  }

  closeSidePanel() {
    this.showSidePanel = false;
    this.sidePanelStateService.setShowSidePanel(this.showSidePanel);
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
    this.closeSidePanel();
  }
}
