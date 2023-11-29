import { TestBed } from '@angular/core/testing';

import { SidePanelStateService } from './side-panel-state.service';

describe('SidePanelStateService', () => {
  let service: SidePanelStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidePanelStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
