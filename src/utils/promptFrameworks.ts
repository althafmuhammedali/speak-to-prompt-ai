
export interface PromptFramework {
  id: string;
  name: string;
  description: string;
  template: string;
}

export const promptFrameworks: PromptFramework[] = [
  {
    id: 'clear',
    name: 'CLEAR Framework',
    description: 'Context, Layout, Examples, Audience, Requirements',
    template: `Context: {input}

Layout: Please structure your response with clear headings and bullet points.

Examples: Provide specific examples where applicable.

Audience: Target this response for a general audience.

Requirements: Ensure the response is comprehensive and actionable.`
  },
  {
    id: 'act-as',
    name: 'ACT AS Framework',
    description: 'Role-based prompting for specific expertise',
    template: `Act as a professional expert in the relevant field.

Your task: {input}

Please provide detailed, expert-level guidance while maintaining a helpful and accessible tone. Draw from industry best practices and current knowledge to deliver valuable insights.`
  },
  {
    id: 'react',
    name: 'REACT Framework',
    description: 'Reason, Elaborate, Anticipate, Conclude, Teach',
    template: `Please address the following request using the REACT framework:

Request: {input}

Reason: Explain the underlying logic and reasoning
Elaborate: Provide detailed explanations and context
Anticipate: Address potential questions or concerns
Conclude: Summarize key takeaways
Teach: Provide actionable learning points`
  },
  {
    id: 'chain-of-thought',
    name: 'Chain-of-Thought',
    description: 'Step-by-step reasoning process',
    template: `Please think through this step-by-step:

Problem: {input}

Let's work through this systematically:
1. First, let me understand the core issue...
2. Next, I'll consider the key factors...
3. Then, I'll evaluate possible approaches...
4. Finally, I'll provide a clear recommendation...

Please show your reasoning process for each step.`
  },
  {
    id: 'few-shot',
    name: 'Few-Shot Learning',
    description: 'Learning from examples',
    template: `Here are some examples of the pattern I'm looking for:

Example 1: [Provide context]
Example 2: [Provide context]

Now, please apply this same pattern to: {input}

Follow the structure and style demonstrated in the examples above.`
  },
  {
    id: 'socratic',
    name: 'Socratic Method',
    description: 'Question-driven exploration',
    template: `Let's explore this topic through guided questions:

Topic: {input}

Please help me understand by:
1. Asking clarifying questions about the core concepts
2. Breaking down complex ideas into simpler components
3. Guiding me through logical reasoning
4. Helping me discover insights through questioning

Start with the most fundamental questions and build up complexity.`
  },
  {
    id: 'swot',
    name: 'SWOT Analysis',
    description: 'Strengths, Weaknesses, Opportunities, Threats',
    template: `Please conduct a SWOT analysis for: {input}

Strengths:
- [Internal positive factors]

Weaknesses:
- [Internal areas for improvement]

Opportunities:
- [External positive possibilities]

Threats:
- [External challenges or risks]

Please provide specific, actionable insights for each category.`
  },
  {
    id: 'six-thinking-hats',
    name: 'Six Thinking Hats',
    description: 'Multiple perspective analysis',
    template: `Analyze this from multiple perspectives: {input}

White Hat (Facts): What are the objective facts and data?
Red Hat (Emotions): What emotions and feelings are involved?
Black Hat (Caution): What are the risks and potential problems?
Yellow Hat (Optimism): What are the benefits and positive aspects?
Green Hat (Creativity): What creative alternatives exist?
Blue Hat (Process): How should we organize our thinking about this?

Provide insights from each perspective.`
  }
];
