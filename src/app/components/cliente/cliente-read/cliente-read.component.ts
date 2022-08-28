import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {

  clientes!: Cliente[];

  constructor(private clienteSer: ClienteService) { }

  ngOnInit(): void {
    this.clienteSer.read().subscribe(clientes => {
      this.clientes = clientes
    })
  }

}
