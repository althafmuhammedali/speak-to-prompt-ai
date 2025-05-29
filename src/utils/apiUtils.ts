
import { promptFrameworks } from './promptFrameworks';

export const generatePrompt = (userInput: string, frameworkId: string): string => {
  const framework = promptFrameworks.find(f => f.id === frameworkId);
  
  if (!framework) {
    console.warn(`Framework not found: ${frameworkId}`);
    return userInput;
  }
  
  return framework.template.replace('{input}', userInput);
};

export const sendToGemini = async (prompt: string, apiKey: string): Promise<string> => {
  if (!apiKey || !apiKey.trim()) {
    throw new Error('API key is required');
  }

  if (!prompt || !prompt.trim()) {
    throw new Error('Prompt is required');
  }

  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;
  
  try {
    console.log('Sending request to Gemini API...');
    
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

    console.log('Response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error Response:', errorText);
      
      if (response.status === 400) {
        throw new Error('Invalid API key or request format. Please check your Gemini API key.');
      } else if (response.status === 403) {
        throw new Error('API key does not have permission or quota exceeded.');
      } else if (response.status === 429) {
        throw new Error('Rate limit exceeded. Please try again later.');
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    }

    const data = await response.json();
    console.log('API Response:', data);
    
    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
      return data.candidates[0].content.parts[0].text;
    } else if (data.error) {
      throw new Error(`Gemini API Error: ${data.error.message || 'Unknown error'}`);
    } else {
      throw new Error('Unexpected response format from Gemini API');
    }
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error('Network error. Please check your internet connection.');
    }
    
    throw error;
  }
};
