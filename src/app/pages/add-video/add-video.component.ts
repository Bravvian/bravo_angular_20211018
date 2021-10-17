import {Component, OnInit,} from '@angular/core';
import {VideoService} from '../../services/video.service';
import {CategoryService} from '../../services/category.service';
import {getThumbnails} from 'video-metadata-thumbnails';


@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss']
})
export class AddVideoComponent implements OnInit {

  file: File;

  title = '';

  categories: any;

  selectedCategory: any;

  isLoading = false;

  fileErrors = [];

  thumbnail: any;



  constructor(
    private videoService: VideoService,
    private categoryService: CategoryService
  ) { }

  async ngOnInit() {
    this.categories = await this.categoryService.getCategories();
  }

  onFileSelected(event) {
    const file: File = event.target.files[0];
    this.fileErrors = [];
    this.fileValidations(file);

    if (file && this.fileErrors.length === 0) {
      this.file = file;
      this.generateThumbnail(file);
    }
  }


  fileValidations(file: File) {
    const sizeInMB = (file.size / (1024 * 1024)).toFixed(2);

    if (sizeInMB > '200') {
      this.fileErrors.push('File size could not be bigger than 30MB');
    }

    if ( !['video/mp4', 'video/mov'].includes(file.type) ) {
      this.fileErrors.push('Please insert a MP4 or MOV video type');
    }
  }

  async generateThumbnail(file) {
    this.isLoading = true;
    const thumbnails = await getThumbnails(file);
    this.thumbnail = thumbnails[0].blob;
    this.isLoading = false;
  }

  async sendVideo() {
    const response = await this.videoService.sendVideo(this.file, this.title, this.selectedCategory, this.thumbnail);

    if (response.status === 200) {
      alert('File uploaded with success!');
    } else {
      alert('Something went wrong!');
    }
  }

}
