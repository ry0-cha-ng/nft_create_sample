/**
  RNからPNGイメージを取得する想定
  入力：ローカルからEXYMにアップしたPNGファイル
  出力：arrayBuffer（or Blob）
*/

import * as fs from 'fs'

/** PNGのバイナリデータを取得 */
const pngImgPath:string = './test.png';
const buffer = fs.readFileSync(pngImgPath);
console.log(buffer);
console.log(buffer.buffer);

/** おまけ：Blobへ変換 */
const blob:Blob = new Blob([buffer.buffer], {type: 'image/png'});

