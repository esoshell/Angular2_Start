import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <div><h1>{{pageTitle}}</h1>
            Test
        </div>
    `
})
export class AppComponent {
    pageTitle : string = 'My personal site'
}
