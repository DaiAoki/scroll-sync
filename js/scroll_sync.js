const leftDiv     = document.getElementById('leftDiv');
const rightDiv    = document.getElementById('rightDiv');
const scrlPercent = document.getElementById('scrlPercent');

const leftDivHeight  = leftDiv.scrollHeight  - 500;  // 500の部分は固定値ではなく、javascriptで取得できると良い
const rightDivHeight = rightDiv.scrollHeight - 500;  // 500の部分は固定値ではなく、javascriptで取得できると良い

leftDiv.addEventListener('scroll', (evt) => {
  var scroll = leftDiv.scrollTop;
  var scrollPercent = scroll/leftDivHeight;
  rightDiv.scrollTo(0, rightDivHeight * scrollPercent);
  scrlPercent.textContent = Math.round(scrollPercent * 100 * 10) / 10
});
