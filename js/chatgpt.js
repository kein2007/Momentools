const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');

const chatGPTAPIKey = chatGPT_API;

// 채팅 폼 제출 이벤트 핸들러 등록
chatForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = chatInput.value;
  if (!message) return;
  displayMessage('You', message);
  getChatGPTResponse(message);
  chatInput.value = '';
});

// ChatGPT API를 사용하여 응답 메시지를 가져오는 함수
async function getChatGPTResponse(message) {
  try {
    const response = await fetch(`https://api.openai.com/v1/engines/davinci-codex/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${chatGPTAPIKey}`,
      },
      body: JSON.stringify({
        prompt: `Chat with me:\nYou: ${message}\nMe:`,
        max_tokens: 60,
        temperature: 0.5,
        n: 1,
        stop: '\n',
      }),
    });
    const data = await response.json();
    const chatGPTResponse = data.choices[0].text;
    displayMessage('ChatGPT', chatGPTResponse);
  } catch (error) {
    console.error(error);
  }
}

// 메시지를 화면에 표시하는 함수
function displayMessage(sender, message) {
  const div = document.createElement('div');
  div.classList.add('chat-message');
  div.innerHTML = `
    <div class="sender">${sender}</div>
    <div class="message">${message}</div>
  `;
  chatMessages.appendChild(div);
}
