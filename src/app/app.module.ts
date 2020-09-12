import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StackedCardListComponent } from './components/stacked-card-list/stacked-card-list.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
    declarations: [AppComponent, StackedCardListComponent, CardComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
