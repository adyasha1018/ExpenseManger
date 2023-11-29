
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidePanelStateService {
  private _showSidePanel = new BehaviorSubject<boolean>(false);
  showSidePanel$ = this._showSidePanel.asObservable();

  setShowSidePanel(value: boolean) {
    this._showSidePanel.next(value);
  }
}
