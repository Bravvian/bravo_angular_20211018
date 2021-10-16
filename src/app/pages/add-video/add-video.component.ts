import { Component, OnInit } from '@angular/core';
import {VideoService} from '../../services/video.service';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss']
})
export class AddVideoComponent implements OnInit {

  file: File;

  title = '';

  disableButton = true;

  constructor(
    private videoService: VideoService
  ) { }

  ngOnInit() {
  }

  onFileSelected(event) {
    const file: File = event.target.files[0];

    if (file) {
      this.file = file;
    }
  }

  async sendVideo() {
    await this.videoService.sendVideo(this.file, this.title);
  }

}
