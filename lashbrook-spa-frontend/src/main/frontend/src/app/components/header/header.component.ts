import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @ViewChild('lashbrookHeader') elementView: ElementRef;
  parallaxBGHeight : number;

  ngOnInit() {
    this.onScrollEvent(null)
  }

  @HostListener('window:scroll', ['$event'])
  public onScrollEvent($event){
    var scrolled = window.scrollY;
    this.parallaxBGHeight = Math.max(this.elementView.nativeElement.offsetHeight + this.elementView.nativeElement.offsetTop - scrolled, 0);
  }
}
