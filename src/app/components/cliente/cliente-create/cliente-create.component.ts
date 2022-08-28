import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  cliente: Cliente = {
    id: 78,
    nome: 'Jose fausto da silva',
    telefone: '(81)9765857',
    endereco: 'rua das carmélias',
    evento: 'assalto na br'
  }

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
  }

  createCliente(): void {
      this.clienteService.create(this.cliente).subscribe(() => {
        this.clienteService.showMessage('Cliente criado!')
        this.router.navigate(['/clientes'])
      })
  }

  cancel(): void {
    this.router.navigate(['/clientes'])
  }
}
    
