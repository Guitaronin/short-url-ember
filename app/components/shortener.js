import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ShortenerComponent extends Component {
  @service store;

  @tracked url = '';
  @tracked shortUrl = '';
  @tracked invalid = '';

  @action
  shortenUrl(event) {
    console.log('sending request');
    event.preventDefault();
    this.shortUrl = '';
    this.invalid = '';

    const new_url = this.store.createRecord('url', { full_url: this.url });

    new_url
      .save()
      .then((d) => {
        console.log(d);
        this.url = '';
        this.shortUrl = `https://localhost:3000/${d.short_code}`;
      })
      .catch((e) => {
        console.log('error', e)
        // TODO: Validate status code
        this.invalid = "Please enter a valid url. Don't forget to include https:// or http://. Ex: https://facebook.com";
      });
  }
}
