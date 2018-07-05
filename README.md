# ScrollSync

## What
左のdivをスクロールしたら、右のdivも同期的にスクロールされる。

![result](https://github.com/DaiAoki/scroll-sync/blob/media/README-gif/scroll-sync.gif)

## How
スクロールしたいdivに `id="leftDiv"` , `id="rightDiv"` を付与する。
```
<div class="sync-wrap clearfix">
  <div id="leftDiv" class="sync-div sync-div--left">
    <div class="sync-div__start">start</div>
    <div class="sync-div__middle">middle</div>
    <div class="sync-div__end">end</div>
  </div>
  <div id="rightDiv" class="sync-div sync-div--right">
    <div class="sync-div__start">start</div>
    <div class="sync-div__middle">middle</div>
    <div class="sync-div__end">end</div>
  </div>
</div>
```

## Other
確認用に現在のスクロール量を出力するには、任意の要素に `id="scrlPercent"` を付与する。
```
<span id="scrlPercent">0</span>
```
