import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatButtonToggleModule, MatIconModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatIconModule,
        MatInputModule,
        MatCheckboxModule,
        HttpClientModule,
        // AngularFontAwesomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
