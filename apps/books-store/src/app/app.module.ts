import { ButtonComponentModule } from './../../../../libs/ui-components/src/lib/button/button.module';
import { GenericInputComponentModule } from './../../../../libs/ui-components/generic-input/generic-input.component';
import { CarouselComponentModule } from './../../../../libs/ui-components/carousel/carousel.component';

import { LOGGER_CONFIG, LoggerConfig, LoggerModule } from '@bmc/logger';
import { BooksUiModule } from '@bmc/books-ui';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const loggerConfig: LoggerConfig = {
  appName: 'books-store'
};


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    HttpClientModule,
    BooksUiModule,
    LoggerModule.forRoot(loggerConfig),
    CarouselComponentModule,
    GenericInputComponentModule,
    ReactiveFormsModule,
    ButtonComponentModule,
    RouterModule.forRoot(
      [
        {
          path: '', loadChildren: () => import('@bmc/auth').then(m => m.AuthModule)
        },
        {
          path: 'feed', loadChildren: () => import('@bmc/feed').then(m => m.FeedModule)
        }
      ]
    )
  ],
  providers: [
    // { provide: LOGGER_CONFIG, useValue: loggerConfig }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
