import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// Modulos from angular material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';

// Routes 
import { APP_ROUTING } from './app.routes';

//Componentes 
import { ClienteComponent } from './components/cliente/cliente.component';
import { ProductoComponent } from './components/producto/producto.component';
import { OrdenComponent } from './components/orden/orden.component';
import { AddClienteComponent } from './components/cliente/add-cliente/add-cliente.component';
import { VerClienteComponent } from './components/cliente/ver-cliente/ver-cliente.component';
import { AddProductoComponent } from './components/producto/add-producto/add-producto.component';
import { VerProductoComponent } from './components/producto/ver-producto/ver-producto.component';
import { AddOrdenComponent } from './components/orden/add-orden/add-orden.component';
import { VerOrdenComponent } from './components/orden/ver-orden/ver-orden.component';

//Pipes
import { MyCustomPipe } from './pipes/my-custom.pipe';

// Directivas
import { MyCustomDDirective } from './directives/my-custom-d.directive';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { MatNativeDateModule } from '@angular/material/core';
import { CustomDialogComponent } from './components/custom-dialog/custom-dialog.component';
import { CommonModule } from '@angular/common';

//Services

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ProductoComponent,
    OrdenComponent,
    MyCustomPipe,
    MyCustomDDirective,
    AddClienteComponent,
    VerClienteComponent,
    AddProductoComponent,
    VerProductoComponent,
    AddOrdenComponent,
    VerOrdenComponent,
    CustomDialogComponent
  ],
  imports: [
    NgxMaskModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
