/* Importaciones de angular */
import { Component, OnInit } from '@angular/core';

/* TRanslate */
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  // Traductor
  public activeLang       : string = 'es';
  public activeLenguage   : string = 'ES';
  public inactiveLenguage : string = 'EN';

  constructor( private translate: TranslateService ) {
    this.translate.setDefaultLang(this.activeLang);
  }

  ngOnInit(): void {
  }


  /**
   * @description: Método encargado de cambiar el idioma.
   */
  public changeLanguage() {
    if ( this.activeLang === 'es'  ) {

      this.activeLang = 'en';
      this.translate.use('en');
      this.activeLenguage = this.translate.instant('lenguage.englisch');
      this.inactiveLenguage = this.translate.instant('lenguage.spanisch');

    } else if ( this.activeLang === 'en' ) {

      this.activeLang = 'es';
      this.translate.use('es');
      this.activeLenguage = this.translate.instant('lenguage.spanisch');
      this.inactiveLenguage = this.translate.instant('lenguage.englisch');

    }
  }

}
