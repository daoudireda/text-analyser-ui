import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextAnalysisService } from '../../services/text-analysis.service';
import { AnalysisResultComponent } from "../analysis-result/analysis-result.component";

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [FormsModule, AnalysisResultComponent],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.css',
})
export class TextInputComponent {
  inputText = signal('');


  constructor(private textAnalysisService: TextAnalysisService) {}

  submitText() {
    this.textAnalysisService.sendText(this.inputText()).subscribe();
  }
}
