function play(user) {
  const hands = ['グー', 'チョキ', 'パー'];
  const computer = hands[Math.floor(Math.random() * 3)];

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

  document.getElementById("result").textContent =
    `あなた：${user} / コンピューター：${computer} → ${result}`;
}