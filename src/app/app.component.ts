import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NeoComponent } from './neo/neo.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NeoComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'intro';
}
