import { Component }          from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="grid-x grid-padding-x grid-padding-y">
      <nav class="small-12 cell">
        <span>{{title}}</span>
        <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
        <a routerLink="/dishes" routerLinkActive="active">Dishes</a>
      </nav>
    </div>
          <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Menu Editor : ';
}
