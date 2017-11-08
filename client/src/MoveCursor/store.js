import { observable } from 'mobx';
import axios from 'axios';

class MoveCursorStore {

  @observable
  data = [];

  getTagsList() {
    return axios.get('/data/actionDataGetMessage').then(res => {
      this.data = res.data;
    })
  }
}

export default new MoveCursorStore();
