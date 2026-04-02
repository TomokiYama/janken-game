function play(user) {
  const hands = ['グー', 'チョキ', 'パー'];
  const computer = hands[Math.floor(Math.random() * 3)];

  const images = {
    'グー': 'gu.png',
    'チョキ': 'choki.png',
    'パー': 'pa.png'
  };

  let result = '';

  if (user === computer) {
    result = 'あいこ！';
  } else if (
    (user === 'グー' && computer === 'チョキ') ||
    (user === 'チョキ' && computer === 'パー') ||
    (user === 'パー' && computer === 'グー')
  ) {
    result = 'あなたの勝ち！';
  } else {
    result = 'あなたの負け！';
  }

  // 👇 画像表示
  document.getElementById("playerHand").src = images[user];
  document.getElementById("cpuHand").src = images[computer];

  // 👇 結果表示
  document.getElementById("result").textContent = `結果：${result}`;

  // 👇 ここが今回の追加ポイント（色変更）
  if (result === 'あなたの勝ち！') {
    document.body.style.backgroundColor = '#ffdddd'; // 淡い赤
  } else if (result === 'あなたの負け！') {
    document.body.style.backgroundColor = '#ddeeff'; // 淡い青
  } else {
    document.body.style.backgroundColor = '#ddffdd'; // 淡い緑
  }
}
