
import { LOGGER_CONFIG, LoggerConfig, LoggerModule } from '@bmc/logger';
import { BooksUiModule } from '@bmc/books-ui';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

const loggerConfig: LoggerConfig = {
  appName: 'books-store'
};


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    HttpClientModule,
    BooksUiModule,
    LoggerModule.forRoot(loggerConfig)
  ],
  providers: [
    // { provide: LOGGER_CONFIG, useValue: loggerConfig }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
