
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
  },
  {
    id: 'star',
    name: 'STAR Method',
    description: 'Situation, Task, Action, Result',
    template: `Please structure your response using the STAR method for: {input}

Situation: Describe the context and background
Task: Explain what needed to be accomplished
Action: Detail the specific steps taken
Result: Share the outcomes and what was learned

This framework is particularly useful for behavioral examples and case studies.`
  },
  {
    id: 'smart',
    name: 'SMART Goals',
    description: 'Specific, Measurable, Achievable, Relevant, Time-bound',
    template: `Help me create SMART goals for: {input}

Specific: What exactly needs to be accomplished?
Measurable: How will progress and success be measured?
Achievable: Is this goal realistic and attainable?
Relevant: How does this align with broader objectives?
Time-bound: What is the specific timeline for completion?

Please provide a detailed breakdown for each component.`
  },
  {
    id: 'rise',
    name: 'RISE Framework',
    description: 'Research, Ideate, Structure, Execute',
    template: `Let's apply the RISE framework to: {input}

Research: What information and background knowledge is needed?
Ideate: What are the possible approaches and creative solutions?
Structure: How should we organize and prioritize the work?
Execute: What are the specific action steps to implement?

Please provide detailed guidance for each phase.`
  },
  {
    id: 'grow',
    name: 'GROW Model',
    description: 'Goal, Reality, Options, Way Forward',
    template: `Using the GROW coaching model for: {input}

Goal: What is the specific objective we want to achieve?
Reality: What is the current situation and what obstacles exist?
Options: What are all the possible approaches and alternatives?
Way Forward: What specific actions will be taken and when?

Please guide me through each stage with thoughtful questions and insights.`
  },
  {
    id: 'scamper',
    name: 'SCAMPER Technique',
    description: 'Substitute, Combine, Adapt, Modify, Put to other uses, Eliminate, Reverse',
    template: `Apply SCAMPER creative thinking to: {input}

Substitute: What can be substituted or replaced?
Combine: What can be combined or merged?
Adapt: What can be adapted from elsewhere?
Modify: What can be magnified, minimized, or changed?
Put to other uses: How else can this be used?
Eliminate: What can be removed or simplified?
Reverse: What can be rearranged or reversed?

Explore each dimension for innovative solutions.`
  },
  {
    id: 'peel',
    name: 'PEEL Structure',
    description: 'Point, Evidence, Explain, Link',
    template: `Structure your response using PEEL for: {input}

Point: Make a clear main point or argument
Evidence: Provide supporting facts, data, or examples
Explain: Analyze how the evidence supports your point
Link: Connect back to the overall topic or forward to the next point

Use this structure for each major section of your response.`
  },
  {
    id: 'pest',
    name: 'PEST Analysis',
    description: 'Political, Economic, Social, Technological',
    template: `Conduct a PEST analysis for: {input}

Political: What political factors and regulations impact this?
Economic: What economic conditions and trends are relevant?
Social: What social and cultural factors should be considered?
Technological: What technological changes and innovations apply?

Provide detailed analysis for each environmental factor.`
  },
  {
    id: 'force-field',
    name: 'Force Field Analysis',
    description: 'Driving forces vs. Restraining forces',
    template: `Perform a Force Field Analysis for: {input}

Driving Forces (Supporting change):
- [List forces that support the desired outcome]

Restraining Forces (Opposing change):
- [List forces that resist or hinder the desired outcome]

Analysis:
- Strength assessment of each force
- Strategies to strengthen driving forces
- Strategies to weaken restraining forces

Provide actionable recommendations based on this analysis.`
  },
  {
    id: 'what-if',
    name: 'What-If Scenario Planning',
    description: 'Explore multiple future scenarios',
    template: `Let's explore What-If scenarios for: {input}

Scenario 1 - Best Case: What if everything goes perfectly?
Scenario 2 - Worst Case: What if major problems occur?
Scenario 3 - Most Likely: What is the realistic expected outcome?
Scenario 4 - Wild Card: What if an unexpected event happens?

For each scenario:
- Describe the situation
- Identify key factors
- Outline required responses
- Suggest preparation strategies`
  },
  {
    id: 'before-after-bridge',
    name: 'Before-After-Bridge (BAB)',
    description: 'Current state, desired state, solution bridge',
    template: `Apply the Before-After-Bridge framework to: {input}

Before (Current State):
- What is the current situation?
- What problems or challenges exist?
- What pain points are being experienced?

After (Desired State):
- What is the ideal outcome?
- What benefits would be achieved?
- How would success be measured?

Bridge (The Solution):
- What specific steps will create the transformation?
- What resources and tools are needed?
- What timeline is realistic for this change?`
  },
  {
    id: 'problem-agitation-solution',
    name: 'Problem-Agitation-Solution (PAS)',
    description: 'Identify problem, amplify urgency, provide solution',
    template: `Structure your response using PAS for: {input}

Problem:
- What is the core issue or challenge?
- Who is affected and how?
- What are the current limitations?

Agitation:
- What happens if this problem continues?
- What are the costs of inaction?
- What urgency factors exist?

Solution:
- What is the proposed solution?
- How does it address the root cause?
- What are the expected benefits and outcomes?`
  },
  {
    id: 'aida',
    name: 'AIDA Framework',
    description: 'Attention, Interest, Desire, Action',
    template: `Apply the AIDA framework to: {input}

Attention:
- What compelling hook will capture attention?
- What surprising or intriguing elements exist?

Interest:
- What relevant benefits will maintain interest?
- What specific value propositions apply?

Desire:
- What emotional connections can be made?
- What aspirational outcomes are possible?

Action:
- What specific next steps should be taken?
- What clear call-to-action is needed?`
  },
  {
    id: 'root-cause',
    name: '5 Whys Root Cause Analysis',
    description: 'Iterative questioning to find root causes',
    template: `Perform a 5 Whys analysis for: {input}

Problem Statement: [Clearly define the initial problem]

Why 1: Why did this problem occur?
Answer: [First level cause]

Why 2: Why did [first level cause] happen?
Answer: [Second level cause]

Why 3: Why did [second level cause] happen?
Answer: [Third level cause]

Why 4: Why did [third level cause] happen?
Answer: [Fourth level cause]

Why 5: Why did [fourth level cause] happen?
Answer: [Root cause]

Solution: Based on the root cause, what specific actions should be taken?`
  },
  {
    id: 'compare-contrast',
    name: 'Compare and Contrast',
    description: 'Systematic comparison of options',
    template: `Compare and contrast different aspects of: {input}

Similarities:
- What common features or characteristics exist?
- What shared benefits or challenges apply?

Differences:
- What unique features distinguish each option?
- What are the trade-offs between approaches?

Advantages and Disadvantages:
Option A: [Pros and cons]
Option B: [Pros and cons]
Option C: [Pros and cons]

Recommendation: Based on this analysis, what is the best choice and why?`
  },
  {
    id: 'pros-cons-alternatives',
    name: 'Pros-Cons-Alternatives',
    description: 'Comprehensive decision-making framework',
    template: `Analyze {input} using comprehensive decision framework:

Pros (Advantages):
- [List all positive aspects]
- [Include both short-term and long-term benefits]

Cons (Disadvantages):
- [List all negative aspects]
- [Include risks and potential downsides]

Alternatives:
- Alternative 1: [Description and brief evaluation]
- Alternative 2: [Description and brief evaluation]
- Alternative 3: [Description and brief evaluation]

Final Assessment:
- Overall recommendation
- Key factors influencing the decision
- Implementation considerations`
  },
  {
    id: 'what-so-what-now-what',
    name: 'What-So What-Now What',
    description: 'Reflection and action planning framework',
    template: `Apply the What-So What-Now What framework to: {input}

What? (Description)
- What exactly happened or what is the situation?
- What are the key facts and observations?
- What data or information is available?

So What? (Analysis)
- Why is this significant or important?
- What patterns or insights emerge?
- What are the implications?

Now What? (Action)
- What should be done next?
- What specific actions are needed?
- What lessons can be applied going forward?`
  },
  {
    id: 'context-challenge-solution-benefit',
    name: 'Context-Challenge-Solution-Benefit',
    description: 'Structured problem-solving approach',
    template: `Address {input} using the CCSB framework:

Context:
- What is the background and setting?
- Who are the stakeholders involved?
- What environmental factors are relevant?

Challenge:
- What specific problems need to be solved?
- What obstacles or constraints exist?
- What makes this challenging?

Solution:
- What approach will address the challenge?
- What specific steps or methods will be used?
- What resources are required?

Benefit:
- What positive outcomes will result?
- How will success be measured?
- What value will be created for stakeholders?`
  },
  {
    id: 'feature-advantage-benefit',
    name: 'Feature-Advantage-Benefit (FAB)',
    description: 'Product/service value proposition framework',
    template: `Analyze {input} using the FAB framework:

Features:
- What are the specific characteristics or capabilities?
- What technical specifications or attributes exist?
- What components or elements are included?

Advantages:
- How do these features differ from alternatives?
- What superior performance or quality is provided?
- What competitive advantages exist?

Benefits:
- What specific value does this provide to users?
- How does this improve their situation or experience?
- What emotional or practical needs does this fulfill?

Connect each feature to its advantage and ultimate benefit for maximum impact.`
  },
  {
    id: 'old-new-borrowed-blue',
    name: 'Old-New-Borrowed-Blue Framework',
    description: 'Innovation and ideation framework',
    template: `Apply creative thinking to {input} using Old-New-Borrowed-Blue:

Old (Traditional/Proven):
- What existing methods or approaches work well?
- What traditional wisdom or best practices apply?
- What established foundations should be maintained?

New (Innovative/Original):
- What completely new approaches could be tried?
- What innovative technologies or methods exist?
- What original ideas haven't been explored?

Borrowed (Adapted/Cross-Industry):
- What solutions from other industries could be adapted?
- What approaches from different contexts might work?
- What can be borrowed and modified for this situation?

Blue (Unexpected/Creative):
- What unconventional or surprising approaches exist?
- What "blue sky" thinking could be applied?
- What wildly creative solutions might work?`
  }
];
