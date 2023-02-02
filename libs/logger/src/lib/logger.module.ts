import { LOGGER_CONFIG } from './logger-config.token';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { LoggerConfig } from './logger-config.interface';


@NgModule({
  imports: [],
})
export class LoggerModule {
  static forRoot(config: LoggerConfig): ModuleWithProviders<LoggerModule> {
    return {
      ngModule: LoggerModule,
      providers: [
        { provide: LOGGER_CONFIG, useValue: config }
      ]
    }
  }
}
