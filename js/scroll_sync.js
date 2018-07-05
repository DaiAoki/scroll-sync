const leftDiv     = document.getElementById('leftDiv');
const rightDiv    = document.getElementById('rightDiv');
const scrlPercent = document.getElementById('scrlPercent');

const leftDivHeight  = leftDiv.scrollHeight  - leftDiv.clientHeight;
const rightDivHeight = rightDiv.scrollHeight - rightDiv.clientHeight;

leftDiv.addEventListener('scroll', (evt) => {
  var scroll = leftDiv.scrollTop;
  var scrollPercent = scroll/leftDivHeight;
  rightDiv.scrollTo(0, rightDivHeight * scrollPercent);
  scrlPercent.textContent = Math.round(scrollPercent * 100 * 10) / 10
});
