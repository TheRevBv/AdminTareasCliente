import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-lista',
  templateUrl: './agregar-lista.component.html',
  styleUrls: ['./agregar-lista.component.css']
})
export class AgregarListaComponent implements OnInit {
  showModal: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

}
