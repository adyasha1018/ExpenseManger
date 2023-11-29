// top-navigation-bar.component.ts

import { Component, OnInit } from '@angular/core';
import { SidePanelStateService } from '../side-panel-state.service';

@Component({
  selector: 'app-top-navigation-bar',
  templateUrl: './top-navigation-bar.component.html',
  styleUrls: ['./top-navigation-bar.component.css'],
})
export class TopNavigationBarComponent implements OnInit {
  showSidePanel = false;

  constructor(private sidePanelStateService: SidePanelStateService) {}

  ngOnInit() {
    // Subscribe to the state service to update the side panel state
    this.sidePanelStateService.showSidePanel$.subscribe(value => {
      this.showSidePanel = value;
    });
  }

  toggleSidePanel() {
    this.showSidePanel = !this.showSidePanel;
    this.sidePanelStateService.setShowSidePanel(this.showSidePanel);
  }
}
