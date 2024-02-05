// const {Configuration,OpenAIApi} = require('openai');
// const configuration = new Configuration({apiKey:"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"})
// const openai = new  OpenAIApi(configuration);

// export async function sendMsgToOpenAI(message){
//     const res = await openai.createCompletion({
//         model:'text-davinci-003',
//         prompt:message,
//         temperature:0.7,
//         max_tokens:256,
//         top_p:1,
//         frequency_penalty:0,
//         presense_penalty:0
//     });
//     return res.data.choices[0].text;
// }


const { Configuration, OpenAIApi } = require('openai');

// Replace 'your-api-key' with your actual OpenAI GPT-3 API key
const configuration = new Configuration({ apiKey: "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" });
const openai = new OpenAIApi(configuration);

async function sendMsgToOpenAI(message) {
  try {
    const res = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: message,
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0
    });

    return res.data.choices[0].text;
  } catch (error) {
    console.error("Error interacting with OpenAI GPT-3:", error.message);
    throw error;
  }
}

// Example usage
(async () => {
  const promptMessage = "Translate the following English text to French: ";
  const userMessage = "Hello, how are you?";
  
  try {
    const response = await sendMsgToOpenAI(promptMessage + userMessage);
    console.log("OpenAI GPT-3 Response:", response);
  } catch (error) {
    console.error("Error in example:", error.message);
  }
})();
