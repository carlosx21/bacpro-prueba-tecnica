import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddClienteComponent } from './components/cliente/add-cliente/add-cliente.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { VerClienteComponent } from './components/cliente/ver-cliente/ver-cliente.component';
import { AddOrdenComponent } from './components/orden/add-orden/add-orden.component';
import { OrdenComponent } from './components/orden/orden.component';
import { VerOrdenComponent } from './components/orden/ver-orden/ver-orden.component';
import { AddProductoComponent } from './components/producto/add-producto/add-producto.component';
import { ProductoComponent } from './components/producto/producto.component';
import { VerProductoComponent } from './components/producto/ver-producto/ver-producto.component';



const APP_ROUTES:Routes = [
        { path: 'mi-tienda', component: AppComponent },
        { path: 'mi-tienda/clientes', component: ClienteComponent },
        { path: 'mi-tienda/clientes/agregar', component: AddClienteComponent },
        { path: 'mi-tienda/clientes/mostrar/:id', component: VerClienteComponent },
        { path: 'mi-tienda/productos', component: ProductoComponent },
        { path: 'mi-tienda/productos/agregar', component: AddProductoComponent },
        { path: 'mi-tienda/productos/mostrar/:id', component: VerProductoComponent },
        { path: 'mi-tienda/ordenes', component: OrdenComponent },
        { path: 'mi-tienda/crear-orden', component: AddOrdenComponent },
        { path: 'mi-tienda/ordenes/mostrar/:id', component: VerOrdenComponent },
        { path: '**', pathMatch: 'full', redirectTo: '' }
      
]

export const APP_ROUTING = RouterModule.forRoot( APP_ROUTES );