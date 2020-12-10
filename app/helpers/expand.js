import { helper } from '@ember/component/helper';
import config from 'short-url-ember/config/environment';


export default helper(function expand([shortCode]) {
  return `${config.API.host}/${shortCode}`;
});
