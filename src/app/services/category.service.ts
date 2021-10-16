import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl = environment.apiUrl;

  constructor(
    private apiService: ApiService
  ) { }

  async getCategories() {
    const response = await this.apiService.get(this.getUrl(), );

    return response.body;
  }

  getUrl(extension = '') {
    return this.baseUrl + `categories${extension}`;
  }
}
