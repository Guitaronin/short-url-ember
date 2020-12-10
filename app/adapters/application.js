import RESTAdapter from '@ember-data/adapter/rest';
import config from 'short-url-ember/config/environment';

export default class ApplicationAdapter extends RESTAdapter {
  host = config.API.host;
}
