import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import validateFormat from "ember-validators/format";
import { NotFoundError, InvalidError } from "@ember-data/adapter/error";

export default class ShortenerComponent extends Component {
  @service store;

  @tracked url = "";
  @tracked shortUrl = "";
  @tracked invalid = "";
  invalidUrlMessage = "Please enter a valid url. Don't forget to include https:// or http://. Ex: https://facebook.com";

  @action
  shortenUrl(event) {
    event.preventDefault();

    this.shortUrl = "";
    this.invalid = "";

    if (validateFormat(this.url, { type: "url" }) === true) {
      let newUrl = this.store.createRecord("url", { full_url: this.url });

      newUrl
        .save()
        .then((url) => {
          this.url = "";
          this.shortUrl = url.short_code;
        })
        .catch((error) => {
          if (error instanceof InvalidError) {
            this.invalid = this.invalidUrlMessage;
            return;
          }

          if (error instanceof NotFoundError) {
            this.invalid = "Cannot contact the server";
            return;
          }

          this.invalid = "Cannot process the request";
        });
    } else {
      this.invalid = this.invalidUrlMessage;
    }
  }
}
