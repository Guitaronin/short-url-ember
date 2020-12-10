import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TopRoute extends Route {
  @service store;

  async model() {
    this.store.unloadAll('url');
    return this.store.findAll('url', { reload: true });
  }
}
