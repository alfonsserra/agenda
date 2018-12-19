import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaComponent } from './agenda/agenda.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AgendaComponent
  ],
  exports: [
    AgendaComponent
  ]
})
export class SharedModuleModule {
}
