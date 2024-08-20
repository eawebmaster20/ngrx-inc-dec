import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { counterReducer } from './state/counter.reducer';
import { provideEffects } from '@ngrx/effects';
import { CounterEffects } from './state/counter.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideStore(),
    provideState({
        name: 'counter',
        reducer: counterReducer,
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: false }),
    provideEffects(CounterEffects)
]
};
