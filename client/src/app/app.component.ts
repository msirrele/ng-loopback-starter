import { Component } from '@angular/core';

import { LoopBackConfig } from './shared/sdk/index';
import { NoteApi } from './shared/sdk/services/custom/Note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private na: NoteApi) {
    LoopBackConfig.setBaseURL('http://127.0.0.1:3000');
    LoopBackConfig.setApiVersion('api');
  }
}
