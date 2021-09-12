import { Component, OnInit } from '@angular/core';
import { Producto } from "./productos";

@Component({
  selector: 'productos-comp',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  tituloPagina: string='Lista de Productos';
  mostrarimagenes: boolean = false;

  private _filtrarProductos: string = '';
  get filtrarProductos(): string{
    return this._filtrarProductos;
  }

  set filtrarProductos(value: string){
    this._filtrarProductos = value;
    console.log(value);
    this.productosFiltrados = this.filtroProductos(value);
  }

  productosFiltrados: Producto[] = [];

  productos: Producto[] = [
    {
      imagenURL: 'assets/images/audifonosblue.jfif',
      id: 1,
      nombre: "audifonos bluethooth",
      codigo: "BL-50",
      disponibilidad: false,
      precio: 999.99,
      rating: 4.2
    },
    {
      imagenURL: 'assets/images/macbookpro.jfif',
      id: 2,
      nombre: "Macbook Pro",
      codigo: "MAC-50",
      disponibilidad: false,
      precio: 12000,
      rating: 3.5
    },
    {
      imagenURL: 'assets/images/iphonexs.jfif',
      id: 3,
      nombre: "IPhone XS",
      codigo: "iPHONE-50",
      disponibilidad: true,
      precio: 4000,
      rating: 4.5
    },
    {
      imagenURL: 'assets/images/mac13.jfif',
      id: 4,
      nombre: "MacBook Air 13 pulgadas",
      codigo: "MAC-13",
      disponibilidad: true,
      precio: 12000,
      rating: 1.5
    },
    {
      imagenURL: 'assets/images/hplap.jfif',
      id: 5,
      nombre: "Laptop HP",
      codigo: "HP-200",
      disponibilidad: false,
      precio: 8500.50,
      rating: 3
    },
    {
      imagenURL: 'assets/images/sg10.jfif',
      id: 6,
      nombre: "Samsung Galaxy s10",
      codigo: "SS-10",
      disponibilidad: true,
      precio: 12000,
      rating: 4.2
    },
    {
      imagenURL: 'assets/images/hyperx.jfif',
      id: 7,
      nombre: "Headsets HyperX",
      codigo: "HYPERX-32",
      disponibilidad: true,
      precio: 999.99,
      rating: 4
    }
  ]
  constructor() { }
  filtroProductos(filtrarPor: string): Producto[]{
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.productos.filter((producto: Producto) =>
    producto.nombre.toLocaleLowerCase().includes(filtrarPor));
  }
  toggleimagenes(): void{
    this.mostrarimagenes = !this.mostrarimagenes;
  }
  ngOnInit(): void {
    this.filtrarProductos = '';
  }

}
