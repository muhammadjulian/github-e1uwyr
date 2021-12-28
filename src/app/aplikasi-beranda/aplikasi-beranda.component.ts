import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Pegawai } from '../models/aplikasi';
import { AplikasiService } from '../services/aplikasi.service';


@Component({
  selector: 'app-aplikasi-beranda',
  templateUrl: './aplikasi-beranda.component.html',
  styleUrls: ['./aplikasi-beranda.component.scss']
})
export class AplikasiBerandaComponent implements OnInit {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  displayedColumns: string[] =  ['id', 'created_at', 'first_name', 'last_name', 'email'];
  listUser: Pegawai[] = [];
  dataSource: Pegawai[];
  searchText:any;

  constructor(
    public dialog:MatDialog,
    private aplikasiservice: AplikasiService,
    public api:AplikasiService,
  ) { 
    this.dataSource = [];
    this.listUser= [];
  }

  ngOnInit(): void {
    this.getUser2();
  }

  getUser2() {
    this.api.getDataUser().subscribe(kendaraan => {
      console.log(kendaraan);
        this.dataSource = kendaraan.data;
       
    });
  }
  

}
