import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even-length-words',
  templateUrl: './even-length-words.component.html',
  styleUrls: ['./even-length-words.component.css'],
})
export class EvenLengthWordsComponent {
  title = 'Λέξεις με ζυγό μήκος';
  @Input() words: string[] = [];
}
