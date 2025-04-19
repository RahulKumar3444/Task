// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // adjust path if needed

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(), // ✅ Enables HttpClient in standalone components
    provideRouter(routes)
  ]
};
