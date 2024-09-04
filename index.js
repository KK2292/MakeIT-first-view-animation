document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");

  // デバイスのピクセル比を取得
  const scale = window.devicePixelRatio;

  // キャンバスの表示サイズを取得
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  // キャンバスの実際のピクセルサイズを設定
  canvas.width = width * scale;
  canvas.height = height * scale;

  // 描画コンテキストをスケーリング
  context.scale(scale, scale);

  // ランダムな位置に小さい丸を描画する関数
  function drawRandomCircle() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = 5; // 小さい丸の半径

    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, false);
    context.fillStyle = "#fff"; // 丸の色
    context.fill();
    context.closePath();
  }

  // 10個のランダムな位置に小さい丸を描画
  for (let i = 0; i < 10; i++) {
    drawRandomCircle();
  }
});
