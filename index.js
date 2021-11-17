const axios = require('axios');
const fs = require('fs').promises;

const END_POINT = 'https://api.openai.com/v1/engines/davinci-codex/completions';

const call = (prompt) => {
  return axios.post(END_POINT, {
    'prompt': prompt,
    'temperature': 0.1,
    'top_p': 1.0,
    'best_of': 1.0,
    'max_tokens': 2048,
    'frequency_penalty': 0.0,
    'presence_penalty': 0.0
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + process.env.OPENAI_SECRET
    }
  });
}

(async () => {
  const prompt = await fs.readFile('./prompt.txt', 'utf-8');
  console.log(prompt);

  const res = await call(prompt);
  console.log(res.data.choices[0].text);
})();
