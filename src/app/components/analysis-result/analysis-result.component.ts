import { Component, Input } from '@angular/core';
import { TextAnalysis } from '../text-analysis.model';
import { CommonModule } from '@angular/common';
import { TextAnalysisService } from '../../services/text-analysis.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-analysis-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analysis-result.component.html',
  styleUrl: './analysis-result.component.css',
})
export class AnalysisResultComponent {
  analysisResult!: TextAnalysis | null;  // Variable locale pour stocker le résultat

  constructor(private textAnalysisService: TextAnalysisService) {}

  ngOnInit() {
    this.textAnalysisService.getAnalysisResult().subscribe({
      next: (result) => {
        this.analysisResult = result;  // Stockage du résultat dans la variable locale
      },
      error: (error) => {
        console.error('Erreur lors de la récupération de l\'analyse', error);
      }
    });
  }
}
