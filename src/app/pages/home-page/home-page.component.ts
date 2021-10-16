import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {VideoService} from '../../services/video.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  videosList = [];

  constructor(
    private router: Router,
    private videoService: VideoService
  ) { }

  async ngOnInit() {
    this.videosList = await this.videoService.getVideosList();
  }

  goToAddVideoPage() {
    this.router.navigateByUrl('add_video');
  }

}
