import { helper } from '@ember/component/helper';

export default helper(function expand([shortCode]) {
  return `http://localhost:3000/${shortCode}`;
});
