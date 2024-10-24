import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextInputComponent } from "./components/text-input/text-input.component";
import { HeaderComponent } from "./components/header/header.component";
import { AnalysisResultComponent } from "./components/analysis-result/analysis-result.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TextInputComponent, HeaderComponent, AnalysisResultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'text-analyser-ui';
}
