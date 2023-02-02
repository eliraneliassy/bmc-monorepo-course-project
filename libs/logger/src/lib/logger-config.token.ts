import { LoggerConfig } from './logger-config.interface';
import { InjectionToken } from "@angular/core";

export const LOGGER_CONFIG = new InjectionToken<LoggerConfig>('Logger Config');