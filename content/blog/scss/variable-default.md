---
date: 2017-05-25T20:42:10+09:00
title: variableの範囲でscssをカスタマイズするときの注意
categories:
  - "css"
  - "scss"
---
# TL;DR

- `!default` で定義されているvariableは `@import` 前に定義する

## \_variable.scss

[![ドラえもん 知らない](http://tiqav.com/229.th.jpg)](http://tiqav.com/229)

cssに変数があることはわかっていたつもりですが、上書きの用法がよくわかっておらず調べたので記録。

```scss
$a: #777 !default
```

`$a` は、評価される前に同様の変数が定義されていれば上書きされないということ。
定数として1ファイルに定義してもらえることが多いが、多段 `@import` などはどこまで遡って上書きなどできるのかなどは調べていない。

## Refs

- <http://qiita.com/yuku_t/items/0bebe541432cdfad4e14>
