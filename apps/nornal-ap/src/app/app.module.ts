import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { FirstLibRoutes, FirstLibModule } from '@NXworkspace/first-lib';
import { schoolUiRoutes, SchoolUiModule } from '@NXworkspace/school-ui';
import { PaginationTagsModule } from '@NXworkspace/pagination-tags';
import { PaginationFiltersModule } from '@NXworkspace/pagination-filters';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  APP_FEATURE_KEY,
  initialState as appInitialState,
  appReducer
} from './+state/app.reducer';
import { AppEffects } from './+state/app.effects';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),
    RouterModule.forRoot(
      [
        { path: 'lib1', children: schoolUiRoutes },
        { path: 'lib2', children: FirstLibRoutes }
      ],
      {
        initialNavigation: 'enabled'
      }
    ),

    SharedModule,
    SchoolUiModule,
    FirstLibModule,
    PaginationTagsModule,
    PaginationFiltersModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreModule.forFeature(APP_FEATURE_KEY, appReducer, {
      initialState: appInitialState
    }),
    EffectsModule.forFeature([AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
