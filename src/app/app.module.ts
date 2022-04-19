import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { PainelComponent } from './painel/painel.component';
import { PainelCardComponent } from './painel-card/painel-card.component';
import { PainelModalComponent } from './painel-modal/painel-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    PainelComponent,
    PainelCardComponent,
    PainelModalComponent,
    TopoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
