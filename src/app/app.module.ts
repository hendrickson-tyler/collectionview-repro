import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CollectionViewComponent } from './collection-view/collection-view.component'
import { CollectionViewModule } from '@nativescript-community/ui-collectionview/angular';


@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule, CollectionViewModule],
  declarations: [AppComponent, CollectionViewComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
