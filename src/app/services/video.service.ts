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

  async sendVideo(file, title) {
    const formData = new FormData();

    formData.append('file', file, file.filename);
    formData.append('title', title);

    return await this.apiService.post(this.getUrl(), formData);
  }

  async getVideoDetails(id) {}


  getUrl(extension = '') {
    return this.baseUrl + `videos${extension}`;
  }
}
