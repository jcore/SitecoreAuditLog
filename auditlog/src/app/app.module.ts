import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ScAccountInformationModule } from '@speak/ng-bcl/account-information';
import { ScActionBarModule } from '@speak/ng-bcl/action-bar';
import { ScApplicationHeaderModule } from '@speak/ng-bcl/application-header';
import { ScButtonModule } from '@speak/ng-bcl/button';
import { ScGlobalHeaderModule } from '@speak/ng-bcl/global-header';
import { ScGlobalLogoModule } from '@speak/ng-bcl/global-logo';
import { ScIconModule } from '@speak/ng-bcl/icon';
import { ScPageModule } from '@speak/ng-bcl/page';
import { ScMenuModule } from '@speak/ng-bcl/menu';
import { ScDropdownModule } from '@speak/ng-bcl/dropdown';
import { ScTableModule } from '@speak/ng-bcl/table';
import { ScTabsModule } from '@speak/ng-bcl/tabs';

import { CONTEXT, DICTIONARY } from '@speak/ng-bcl';

import { NgScModule } from '@speak/ng-sc'; 
import { SciAntiCSRFModule } from '@speak/ng-sc/anti-csrf';

import { AppComponent } from './app.component';
import { LogPageComponent } from './log-page/log-page.component';
import { ItemService } from './item.service';

@NgModule({
  declarations: [
    AppComponent,
    LogPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: LogPageComponent, pathMatch: 'full' }
    ]),
    ScAccountInformationModule,
    ScActionBarModule,
    ScApplicationHeaderModule,
    ScButtonModule,
    ScGlobalHeaderModule,
    ScGlobalLogoModule,
    ScIconModule,
    ScPageModule,
    SciAntiCSRFModule,
    ScMenuModule,
    ScDropdownModule,
    ScTableModule,
    ScTabsModule,
    NgScModule.forRoot({
      // The ItemId refers to '/sitecore/client/Your Apps/AuditLog/UserAccess' AccessFolder item
      authItemId: '44B2B650-11FB-4680-BAF1-FFB2A13DAFB5',
      contextToken: CONTEXT,
      dictionaryToken: DICTIONARY,
      // The ItemId refers to '/sitecore/client/Your Apps/AuditLog/Translations' Speak3DictionaryFolder item
      translateItemId: '1AECEF5C-54BC-48F7-9FE0-7BF7F7E02DEF'
    })
  ],
  providers: [
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
