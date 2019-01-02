import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryListComponent } from './history-list/history-list.component';
const routes: Routes = [
  {
    path: '/:stock',
    component: HistoryListComponent
  },
  {
    path: '',
    component: HistoryListComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
