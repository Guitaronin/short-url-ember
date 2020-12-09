import Route from '@ember/routing/route';

export default class TopRoute extends Route {
  async model() {
    // TODO: Extract URL
    const response = await fetch('http://localhost:3000/');
    const { urls } = await response.json();

    return urls;
  }
}
