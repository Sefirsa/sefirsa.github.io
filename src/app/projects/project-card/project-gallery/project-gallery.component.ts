import { Component, computed, effect, input, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-project-gallery',
  templateUrl: './project-gallery.component.html',
  styleUrls: ['./project-gallery.component.scss'],
  imports: [],
})
export class ProjectGalleryComponent  implements OnInit {

  readonly cover = input.required<string>();

  readonly screenshots = input<string[]>([]);

  readonly images = computed(() => [
    this.cover(),
    ...this.screenshots()
  ]);

  readonly selectedImage = signal('');

  constructor() {
    effect(() => {
      this.selectedImage.set(this.cover());
    });
   }

  ngOnInit() {}

  selectImage(image: string): void {
    this.selectedImage.set(image);
  }

}
