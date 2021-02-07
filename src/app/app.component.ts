import { Component } from '@angular/core';
import { GetinfofromwikiService } from './getinfofromwiki.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data: any = [];


  constructor(private getinfofromwiki: GetinfofromwikiService) { }
  searchTerm(name: string) {
    this.getinfofromwiki.getsearcheddata(name).subscribe((res: any) => {
      this.data = res;
      this.data = this.data.query.search;
      console.log(this.data);
    });
  }
  title = 'wiki';
}
