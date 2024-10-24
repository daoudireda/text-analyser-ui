import { Component, input } from '@angular/core';

@Component({
  selector: 'app-results-table',
  standalone: true,
  imports: [],
  templateUrl: './results-table.component.html',
  styleUrl: './results-table.component.css',
})
export class ResultsTableComponent {
  analysisResults = input<any>();
}
