import axios from 'axios'

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const galleryAPI = {
  async getUsers() {
    const res = await instance.get('/users');
    return res.data;
  },
  async getUserAlbums(id) {
    const res = await instance.get(`/users/${id}/albums`);
    return res.data;
  },
  async getAlbumCover(id) {
    const res = await instance.get(`/albums/${id}/photos`);
    return res.data[0];
  },
  async getAlbumPhotos(id) {
    const res = await instance.get(`/albums/${id}/photos`);
    return res.data;
  },
  async getPhotos() {
    const res = await instance.get('/photos');
    return res.data;
  }
}