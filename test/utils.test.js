import { add } from '../src/utils';

describe('utils::add test', function() {
  it('should 3 when add(1, 2) return', function() {
    expect(add(1, 2)).to.equal(3);
  });
});
