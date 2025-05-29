
import { promptFrameworks } from './promptFrameworks';

export const generatePrompt = (userInput: string, frameworkId: string): string => {
  const framework = promptFrameworks.find(f => f.id === frameworkId);
  
  if (!framework) {
    return userInput;
  }
  
  return framework.template.replace('{input}', userInput);
};

export const sendToGemini = async (prompt: string, apiKey: string): Promise<string> => {
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;
  
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
      return data.candidates[0].content.parts[0].text;
    } else {
      throw new Error('Unexpected response format from Gemini API');
    }
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    throw error;
  }
};
