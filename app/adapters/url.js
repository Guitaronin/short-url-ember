import ApplicationAdapter from './application';
import { NotFoundError, InvalidError } from '@ember-data/adapter/error';

export default class UrlAdapter extends ApplicationAdapter {
  urlForFindAll() {
    return this.buildURL();
  }

  urlForCreateRecord() {
    return this.buildURL() + '/short_urls';
  }

  handleResponse(status, headers, payload) {
    if (422 === status) {
      return new InvalidError([{full_url: payload.errors}]);
    }

    if (status === 404) {
      return new NotFoundError();
    }

    return payload;
  }

  shouldReloadAll() {
    return true;
  }
}
