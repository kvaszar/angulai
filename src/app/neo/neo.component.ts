import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DecimalPipe, TitleCasePipe, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-neo',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, TitleCasePipe, DecimalPipe],
  templateUrl: './neo.component.html',
  styleUrl: './neo.component.css',
})
export class NeoComponent {
  gameTitle: string = "factorio"
  knownGames: string[] = ["factorio", "minecraft", "terraria"];
  gameVersion: number = 2.1;

  addGame(): void {
    this.knownGames.push(this.gameTitle);
  }

  changeGame(game: string) {
    this.gameTitle = game;
  }

  removeGame(game: string): void {
    this.knownGames = this.knownGames.filter(x => x !== game);
  }
}
