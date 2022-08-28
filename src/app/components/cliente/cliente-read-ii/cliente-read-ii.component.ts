import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ClienteReadIIDataSource, ClienteReadIIItem } from './cliente-read-ii-datasource';

@Component({
  selector: 'app-cliente-read-ii',
  templateUrl: './cliente-read-ii.component.html',
  styleUrls: ['./cliente-read-ii.component.css']
})
export class ClienteReadIIComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ClienteReadIIItem>;
  dataSource: ClienteReadIIDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor() {
    this.dataSource = new ClienteReadIIDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
