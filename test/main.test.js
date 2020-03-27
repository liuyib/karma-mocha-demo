import main from '../src/main';

describe('main::DOM test', function() {
  // 钩子函数
  beforeEach(function() {
    // 向页面的 body 元素中添加 DOM 元素，来辅助测试
    document.body.innerHTML = '<button id="btn">0</button>';

    main('#btn');
  });

  it('should 1 when button is clicked once', function() {
    // 获取前面添加的元素
    var btn = document.querySelector('#btn');
    // 模拟用户点击
    btn.click();

    expect(btn.innerText).to.equal('1');
  });
});
