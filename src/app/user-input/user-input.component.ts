import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
})
export class UserInputComponent {
  userPrompt = 'Γράψτε μια λέξη:';
  btnText = 'Υποβολή';
  userInput = '';
  evenWords: string[] = [];
  oddWords: string[] = [];

  isOddOrEven() {
    if (this.userInput.length === 0) return;
    if (this.userInput.length % 2 === 0) {
      this.evenWords.push(this.userInput);
    } else {
      this.oddWords.push(this.userInput);
    }
  }
}
