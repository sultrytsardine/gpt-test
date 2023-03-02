import { Configuration, OpenAIApi } from "openai";
import { NextApiRequest, NextApiResponse } from 'next'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const prompt = `Give me ${req.body.count} app ideas related to ${req.body.keywords}` || `Give me ${req.body.count} app ideas`;

  try {
    // TODO: uncomment once I have done more testing
    // const completion = await openai.createCompletion({
    //   model: "text-davinci-003",
    //   prompt,
    //   temperature: 0.7,
    //   max_tokens: 256,
    //   top_p: 1,
    //   frequency_penalty: 0,
    //   presence_penalty: 0,
    // });
    res.status(200).json({ result: [
    { text: '1. Ski Tracking App - Track and log ski runs, speeds, and duration, and compare stats between runs.' },
    { text: '2. Ski Resort Finder App - Find ski destinations based on user preferences and budget.' },
    { text: '3. Ski Instruction App - Learn how to ski with interactive tutorials and instructional videos.' },
    { text: '4. Ski Gear Finder App - Compare ski gear prices and find the best deals.' },
    { text: '5. Ski Weather App - Get real-time updates and forecasts for ski areas around the world.' },
  ] });
  } catch(error: any) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}