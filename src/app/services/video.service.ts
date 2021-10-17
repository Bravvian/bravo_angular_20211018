import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  baseUrl = environment.apiUrl;

  constructor(
    private apiService: ApiService
  ) { }

  async getVideosList() {
    const response = await this.apiService.get(this.getUrl(), );

    return response.body;
  }

  async sendVideo(file, title, category, thumbnail) {
    const formData = new FormData();

    formData.append('file', file, file.filename);
    formData.append('title', title);
    formData.append('category_id', category.id);
    formData.append('thumbnail', thumbnail, 'video_thumbnail');

    return await this.apiService.post(this.getUrl(), formData);
  }


  getUrl(extension = '') {
    return this.baseUrl + `videos${extension}`;
  }
}
