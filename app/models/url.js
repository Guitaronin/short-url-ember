import Model, { attr } from '@ember-data/model';

export default class UrlModel extends Model {
  @attr('string') full_url;
  @attr('string') title;
  @attr('number') click_count;
  @attr('string') short_code;
}
