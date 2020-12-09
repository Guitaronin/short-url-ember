import { helper } from '@ember/component/helper';

export default helper(function increment([value]) {
  return parseInt(value) + 1;
});
