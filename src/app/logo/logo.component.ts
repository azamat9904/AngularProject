import {Component, Input} from '@angular/core';
import {Logo} from '../shared/types';

@Component({
  selector:'app-logo',
  templateUrl:'./logo.component.html',
  styleUrls:['./logo.component.scss']
})
export class LogoComponent {
  @Input() logoUrl:Logo | null = null;
}
