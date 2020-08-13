/* Importaciones de algular */
import { Component, OnInit } from '@angular/core';

/* Importación de constantes - imágenes */
import * as ImageConstant from '../../constants/images';

@Component({
  selector: 'app-context',
  templateUrl: './context.component.html',
  styleUrls: ['./context.component.scss']
})
export class ContextComponent implements OnInit {

  // URL Images
  public ford       : string = ImageConstant.FORD;
  public volkswagen : string = ImageConstant.VOLKSWAGEN;
  public chevrolet  : string = ImageConstant.CHEVROLET;

  constructor() { }

  ngOnInit(): void {
  }

}
