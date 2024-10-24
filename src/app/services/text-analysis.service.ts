import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { TextAnalysis } from '../components/text-analysis.model';

@Injectable({
  providedIn: 'root',
})
export class TextAnalysisService {
  private apiUrl = 'http://localhost:8080/textAnalysis';

  private httpClient = inject(HttpClient);
  private analysisResultSubject = new BehaviorSubject<TextAnalysis | null>(null);
  analysisResult$ = this.analysisResultSubject.asObservable();

  sendText(textAnalysis: string): Observable<any> {
    return this.httpClient.post<TextAnalysis>(
      `${this.apiUrl}/analyze?textAnalysis=${textAnalysis}`,{}
    ).pipe(
        tap((result: TextAnalysis) => {
            this.analysisResultSubject.next(result); // Mise à jour du résultat de l'analyse
        }
    ));
  }

  getAnalysisResult(): Observable<TextAnalysis | null> {
    return this.analysisResult$;
  }

//   getAnalysisResult() {
//     this.httpClient
//       .get(`${this.apiUrl}/getAllResults`)
//       .pipe(
//         catchError(() => {
//           return throwError(() => new Error('Failed to fetch text analysis'));
//         })
//       )
//       .subscribe((response) => {
//         if (response) {
//           this.textAnalysis.set(response as TextAnalysis[]);
//         }
//       });
//   }
}
