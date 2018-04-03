import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { DataSource } from '@angular/cdk/table';

import { AppComponent } from './app.component';
import { GraphComponent } from './graph/graph.component';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    MatTableModule,
    CdkTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
