import { LoggerConfig } from './logger-config.interface';
import { LOGGER_CONFIG } from './logger-config.token';
import { Inject, Injectable, Optional } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(@Optional() @Inject(LOGGER_CONFIG) private config: LoggerConfig) { }

  log(msg: string): void {
    console.group('A new log message from application:', this.config.appName)
    console.log(msg);
    console.groupEnd();
  }
}
