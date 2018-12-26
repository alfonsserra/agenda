import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaComponent } from './agenda/agenda.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AgendaComponent,
    NavbarComponent
  ],
  exports: [
    AgendaComponent,
    NavbarComponent
  ]
})
export class SharedModuleModule {
}
