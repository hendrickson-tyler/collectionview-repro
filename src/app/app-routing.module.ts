import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { CollectionViewComponent } from './collection-view/collection-view.component'


const routes: Routes = [
  { path: '', pathMatch: 'full', component: CollectionViewComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
