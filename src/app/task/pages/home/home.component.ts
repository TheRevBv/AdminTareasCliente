import { Component, OnInit } from '@angular/core';
import { AgregarListaComponent } from '@task/pages/agregar-lista/agregar-lista.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  showModal: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

}
