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
  },
  {
    id: 'code-review-optimization',
    name: 'Code Review & Optimization (Dev)',
    description: 'Expert code analysis and optimization guidance',
    template: `Context: I have code that needs professional review and optimization: {input}

Layout: Please structure your analysis with:
- Code quality assessment
- Performance bottlenecks identification
- Security vulnerabilities check
- Best practices evaluation

Examples: Provide specific code snippets with before/after improvements where applicable.

Audience: Target this for professional developers seeking expert-level insights.

Requirements: 
- Focus on performance, security, maintainability, and scalability
- Provide actionable recommendations with priority levels (Critical/High/Medium/Low)
- Include modern best practices and industry standards
- Suggest specific tools, libraries, or patterns where relevant`
  },
  {
    id: 'ux-audit-template',
    name: 'UX Audit & Analysis (Design)',
    description: 'Comprehensive user experience evaluation',
    template: `Request: Conduct a comprehensive UX audit for: {input}

Reason: Explain the current user journey pain points and usability issues based on UX principles
Elaborate: Provide detailed analysis of:
- User flows and information architecture
- Accessibility compliance (WCAG guidelines)
- Design patterns and consistency
- Mobile responsiveness and cross-platform experience

Anticipate: Address potential user scenarios, edge cases, and accessibility needs that might cause friction
Conclude: Summarize key findings with impact assessment and priority ranking
Teach: Provide actionable design recommendations following industry best practices and design systems principles

Include specific metrics to track improvement and suggest A/B testing opportunities.`
  },
  {
    id: 'tech-architecture-decision',
    name: 'Technical Architecture Decision (Dev)',
    description: 'SWOT analysis for technology choices',
    template: `Please conduct a comprehensive SWOT analysis for implementing: {input}

Strengths:
- Technical advantages and performance capabilities
- Developer experience and productivity improvements
- Ecosystem and community support
- Integration capabilities and compatibility

Weaknesses:
- Implementation complexity and challenges
- Learning curve and skill requirements
- Resource constraints and costs
- Technical limitations

Opportunities:
- Future scalability and growth potential
- Innovation and competitive advantages
- Market trends alignment
- Integration possibilities with existing tech stack

Threats:
- Technical debt and maintenance risks
- Vendor lock-in or dependency issues
- Security vulnerabilities
- Obsolescence and future-proofing concerns

Provide specific recommendations with implementation roadmap and risk mitigation strategies.`
  },
  {
    id: 'design-system-component',
    name: 'Design System Component (Design)',
    description: 'Complete component specification framework',
    template: `Create a comprehensive design system component specification for: {input}

Features:
- Visual specifications (colors, typography, spacing, states, variants)
- Interaction patterns and micro-animations
- Responsive behavior across all breakpoints
- Accessibility requirements (WCAG 2.1 AA compliance)
- Component API and props structure

Advantages:
- How this component improves design consistency across products
- Development efficiency gains and reusability benefits
- Maintenance advantages over current ad-hoc solutions
- Quality assurance and testing improvements

Benefits:
- Enhanced user experience and usability
- Reduced development time and costs
- Improved brand consistency and recognition
- Better accessibility and inclusive design
- Streamlined design-to-development handoff

Include Figma/Sketch specifications, code examples, usage guidelines, and do's/don'ts.`
  },
  {
    id: 'bug-investigation-resolution',
    name: 'Bug Investigation & Resolution (Dev)',
    description: 'Systematic root cause analysis for debugging',
    template: `Bug Investigation and Root Cause Analysis for: {input}

Problem Statement: [Clearly define the bug behavior vs expected behavior with reproduction steps]

Why 1: Why is this bug occurring at the surface level?
Answer: [Observable symptoms and immediate effects]

Why 2: Why are these symptoms manifesting?
Answer: [Direct technical cause in code/logic]

Why 3: Why did this technical issue arise?
Answer: [System design or implementation cause]

Why 4: Why was this design/implementation chosen?
Answer: [Process, architectural, or requirement cause]

Why 5: Why did the underlying process/architecture allow this?
Answer: [Root organizational, methodological, or fundamental cause]

Include:
- Environment details (browser, OS, device, versions)
- Error logs and stack traces
- Impact assessment (users affected, severity)
- Immediate fix strategy
- Long-term prevention measures
- Testing strategy to prevent regression`
  },
  {
    id: 'lean-canvas',
    name: 'Lean Canvas Framework',
    description: 'Business model validation and planning',
    template: `Apply the Lean Canvas model to: {input}

Problem:
- What are the top 3 problems you're solving?
- What existing alternatives are people using?

Customer Segments:
- Who are your early adopters?
- What customer segments will you target?

Unique Value Proposition:
- What makes you different and worth buying?
- What's your elevator pitch?

Solution:
- What are the top 3 features that solve the problems?
- How will you deliver the solution?

Channels:
- How will you reach your customers?
- What's your path to customers?

Revenue Streams:
- How will you make money?
- What's your pricing model?

Cost Structure:
- What are your key costs?
- What drives your costs?

Key Metrics:
- What are the key numbers that tell you how your business is doing?

Unfair Advantage:
- What can't be easily copied or bought?`
  },
  {
    id: 'value-proposition-canvas',
    name: 'Value Proposition Canvas',
    description: 'Customer-centric value creation framework',
    template: `Create a Value Proposition Canvas for: {input}

Customer Profile:
Jobs to be Done:
- What functional jobs is your customer trying to get done?
- What emotional jobs is your customer trying to fulfill?
- What supporting jobs arise from the core job?

Pain Points:
- What are the main difficulties and challenges?
- What are the risks and negative consequences?
- What obstacles prevent getting the job done?

Gains:
- What would make your customer happy?
- What would exceed their expectations?
- What would make their job easier or more efficient?

Value Proposition:
Pain Relievers:
- How does your product/service alleviate specific pains?
- How do you eliminate or reduce risks?

Gain Creators:
- How do you create the gains customers expect?
- How do you deliver outcomes that exceed expectations?

Products & Services:
- What products and services are you offering?
- What features and capabilities do you provide?

Fit Assessment:
- How well do your pain relievers address customer pains?
- How well do your gain creators produce customer gains?`
  },
  {
    id: 'design-thinking-process',
    name: 'Design Thinking Process',
    description: 'Human-centered problem solving methodology',
    template: `Apply Design Thinking to: {input}

1. Empathize:
- Who are the users and what are their needs?
- What emotions and motivations drive them?
- What context and environment do they operate in?
- How can we observe and understand their experiences?

2. Define:
- What is the core problem statement?
- What insights emerged from the empathy stage?
- How might we frame the challenge as an opportunity?
- What point of view will guide our solution?

3. Ideate:
- What are all possible solutions (quantity over quality)?
- What unconventional approaches could work?
- How can we build on others' ideas?
- What would happen if we removed constraints?

4. Prototype:
- What's the simplest version we can build to test our idea?
- What aspects of the solution need validation?
- How can we make our ideas tangible quickly?
- What materials and methods will we use?

5. Test:
- How will users interact with our prototype?
- What feedback will help us improve?
- What questions need answers before moving forward?
- How will we iterate based on learnings?

Iterate through these stages as needed to refine your solution.`
  },
  {
    id: 'jobs-to-be-done',
    name: 'Jobs-To-Be-Done Framework',
    description: 'Customer needs and motivation analysis',
    template: `Analyze {input} using the Jobs-To-Be-Done framework:

Job Statement:
When [situation], I want to [motivation], so I can [expected outcome].

Functional Job:
- What practical task is the customer trying to accomplish?
- What process or activity needs to be completed?
- What is the core functional need?

Emotional Job:
- How does the customer want to feel?
- What emotional outcome are they seeking?
- What self-image are they trying to project?

Social Job:
- How does the customer want to be perceived by others?
- What social status or belonging needs exist?
- What community or group identification is important?

Job Context:
- When and where does this job arise?
- What triggers the need for this job?
- What circumstances make this job more important?

Success Criteria:
- How does the customer measure success?
- What does "job well done" look like?
- What would make them hire your solution again?

Competing Solutions:
- What alternatives do customers currently use?
- What non-consumption scenarios exist?
- How do customers work around current solutions?`
  },
  {
    id: 'content-strategy-framework',
    name: 'Content Strategy Framework',
    description: 'Strategic content planning and execution',
    template: `Develop a content strategy for: {input}

Content Audit:
- What content currently exists?
- What's performing well vs. poorly?
- What gaps exist in current content?
- What content can be repurposed or updated?

Audience Analysis:
- Who are your primary and secondary audiences?
- What are their content consumption preferences?
- What questions and challenges do they have?
- Where do they spend time online?

Content Goals:
- What business objectives will content support?
- What user needs will you address?
- How will you measure content success?
- What actions do you want users to take?

Content Types & Formats:
- What content formats resonate with your audience?
- What types of content will you create (educational, entertainment, promotional)?
- How will you balance different content purposes?
- What multimedia elements will you include?

Content Calendar:
- What's your publishing frequency and schedule?
- How will you align content with business cycles and events?
- What resources are needed for consistent production?
- How will you plan for seasonal and trending topics?

Distribution Strategy:
- What channels will you use to reach your audience?
- How will you optimize for each platform?
- What's your strategy for organic vs. paid promotion?
- How will you encourage sharing and engagement?

Governance & Maintenance:
- Who is responsible for content creation and approval?
- What's your content review and update process?
- How will you maintain brand voice and quality standards?
- What tools and workflows will support your strategy?`
  },
  {
    id: 'okr-framework',
    name: 'OKR (Objectives & Key Results)',
    description: 'Goal setting and performance tracking framework',
    template: `Structure OKRs for: {input}

Objective 1: [Qualitative, inspirational statement]
Key Result 1.1: [Specific, measurable outcome]
Key Result 1.2: [Specific, measurable outcome]
Key Result 1.3: [Specific, measurable outcome]

Objective 2: [Qualitative, inspirational statement]
Key Result 2.1: [Specific, measurable outcome]
Key Result 2.2: [Specific, measurable outcome]
Key Result 2.3: [Specific, measurable outcome]

Objective 3: [Qualitative, inspirational statement]
Key Result 3.1: [Specific, measurable outcome]
Key Result 3.2: [Specific, measurable outcome]
Key Result 3.3: [Specific, measurable outcome]

OKR Guidelines:
- Objectives should be ambitious, qualitative, and inspirational
- Key Results should be specific, measurable, and time-bound
- Aim for 3-5 objectives with 3-4 key results each
- Key results should stretch the team but remain achievable
- Include both output and outcome metrics

Alignment Check:
- How do these OKRs align with broader organizational goals?
- What dependencies exist between different OKRs?
- How will progress be tracked and reviewed?
- What resources are needed to achieve these results?`
  },
  {
    id: 'customer-journey-mapping',
    name: 'Customer Journey Mapping',
    description: 'End-to-end customer experience visualization',
    template: `Map the customer journey for: {input}

Journey Phases:

1. Awareness:
- How do customers first learn about the problem/need?
- What triggers their interest in finding a solution?
- What channels do they use for initial research?
- What emotions are they experiencing?

2. Consideration:
- How do they evaluate different options?
- What criteria do they use to compare solutions?
- Who influences their decision-making process?
- What concerns or hesitations do they have?

3. Purchase/Decision:
- What pushes them to make a final decision?
- What is the actual purchase/signup process like?
- What friction points exist in conversion?
- What reassurances do they need?

4. Onboarding:
- How do they first interact with your product/service?
- What initial value do they experience?
- What support do they need to get started?
- What could cause early abandonment?

5. Usage:
- How do they integrate your solution into their routine?
- What ongoing value do they receive?
- What additional needs arise during usage?
- What might cause dissatisfaction?

6. Advocacy:
- What would motivate them to recommend you?
- How do they share their experience with others?
- What would turn them into loyal customers?
- What opportunities exist for expansion?

For each phase, identify:
- Touchpoints and channels
- Customer actions and behaviors
- Emotions and pain points
- Opportunities for improvement
- Success metrics`
  },
  {
    id: 'competitive-analysis',
    name: 'Competitive Analysis Framework',
    description: 'Systematic competitor evaluation and positioning',
    template: `Conduct competitive analysis for: {input}

Market Overview:
- What is the market size and growth trends?
- Who are the key players in this space?
- What market segments exist?
- What are the major industry trends?

Direct Competitors:
Competitor 1: [Name]
- Products/services offered
- Target market and positioning
- Pricing strategy
- Strengths and weaknesses
- Market share and growth

Competitor 2: [Name]
- Products/services offered
- Target market and positioning
- Pricing strategy
- Strengths and weaknesses
- Market share and growth

Competitor 3: [Name]
- Products/services offered
- Target market and positioning
- Pricing strategy
- Strengths and weaknesses
- Market share and growth

Indirect Competitors:
- What alternative solutions exist?
- How do substitutes address the same need?
- What non-traditional competitors are emerging?

Competitive Positioning:
- Where do you fit in the competitive landscape?
- What differentiates you from competitors?
- What gaps exist in the market?
- What opportunities for differentiation exist?

Strategic Implications:
- What competitive advantages can you build?
- What threats need to be addressed?
- What market positioning should you pursue?
- What strategic moves should you consider?`
  },
  {
    id: 'persona-development',
    name: 'User Persona Development',
    description: 'Detailed user archetype creation framework',
    template: `Create detailed user personas for: {input}

Persona 1: [Primary Persona Name]

Demographics:
- Age, gender, location
- Education and occupation
- Income level and lifestyle
- Family status and living situation

Psychographics:
- Values and beliefs
- Interests and hobbies
- Personality traits
- Lifestyle preferences

Goals and Motivations:
- Primary goals related to your product/service
- Secondary goals and aspirations
- What motivates their decisions?
- What success looks like to them

Pain Points and Challenges:
- Current problems they face
- Frustrations with existing solutions
- Barriers to achieving their goals
- What keeps them up at night?

Behavioral Patterns:
- How do they research and make decisions?
- What devices and platforms do they use?
- How do they prefer to communicate?
- When and how do they consume content?

Preferred Solutions:
- What type of solutions appeal to them?
- How do they prefer to learn about products?
- What influences their purchase decisions?
- What would make them loyal customers?

Quote: "[A quote that captures their essence and perspective]"

Persona 2: [Secondary Persona Name]
[Repeat the same structure for additional personas]

Usage Guidelines:
- How should teams use these personas?
- What questions should these personas help answer?
- How often should personas be updated?
- What decisions should reference these personas?`
  },
  {
    id: 'risk-assessment-matrix',
    name: 'Risk Assessment Matrix',
    description: 'Systematic risk identification and mitigation planning',
    template: `Conduct risk assessment for: {input}

Risk Identification:

High Probability, High Impact (Critical Risks):
Risk 1: [Description]
- Impact: [Detailed consequences]
- Probability: [Likelihood assessment]
- Mitigation Strategy: [Specific actions]
- Contingency Plan: [Backup plan]

Risk 2: [Description]
- Impact: [Detailed consequences]
- Probability: [Likelihood assessment]
- Mitigation Strategy: [Specific actions]
- Contingency Plan: [Backup plan]

High Probability, Low Impact (Monitor):
Risk 3: [Description]
- Impact: [Minor consequences]
- Probability: [High likelihood]
- Management Strategy: [Monitoring approach]

Low Probability, High Impact (Prepare):
Risk 4: [Description]
- Impact: [Major consequences]
- Probability: [Low likelihood]
- Preparation Strategy: [Emergency preparedness]

Low Probability, Low Impact (Accept):
Risk 5: [Description]
- Impact: [Minimal consequences]
- Probability: [Low likelihood]
- Acceptance Rationale: [Why acceptable]

Risk Management Plan:
- Who is responsible for monitoring each risk?
- What are the early warning indicators?
- How often will risks be reviewed and updated?
- What escalation procedures exist?
- What resources are allocated for risk management?

Success Metrics:
- How will you measure risk management effectiveness?
- What Key Risk Indicators (KRIs) will you track?
- What reporting mechanisms are in place?`
  },
  {
    id: 'learning-objectives',
    name: 'Learning Objectives Framework',
    description: 'Educational goal setting and curriculum design',
    template: `Design learning objectives for: {input}

Course/Program Overview:
- What is the overall learning goal?
- Who is the target audience?
- What prerequisites exist?
- How long is the learning experience?

Learning Objectives (using Bloom's Taxonomy):

Remember (Knowledge):
- Students will be able to recall [specific facts, terms, concepts]
- Students will be able to list [key components, steps, elements]
- Students will be able to identify [important features, characteristics]

Understand (Comprehension):
- Students will be able to explain [concepts, principles, relationships]
- Students will be able to summarize [main ideas, processes, theories]
- Students will be able to interpret [data, information, results]

Apply (Application):
- Students will be able to demonstrate [skills, procedures, techniques]
- Students will be able to solve [problems, challenges, scenarios]
- Students will be able to use [tools, methods, frameworks]

Analyze (Analysis):
- Students will be able to compare [different approaches, solutions, options]
- Students will be able to examine [components, relationships, patterns]
- Students will be able to distinguish [between concepts, categories, types]

Evaluate (Evaluation):
- Students will be able to assess [quality, effectiveness, validity]
- Students will be able to critique [arguments, designs, proposals]
- Students will be able to judge [value, merit, significance]

Create (Synthesis):
- Students will be able to design [new solutions, products, systems]
- Students will be able to develop [original ideas, plans, strategies]
- Students will be able to construct [arguments, models, frameworks]

Assessment Methods:
- How will you measure achievement of each objective?
- What formative and summative assessments will you use?
- What criteria will define success?
- How will you provide feedback?

Learning Activities:
- What activities will support each learning objective?
- How will you engage different learning styles?
- What resources and materials are needed?
- How will you scaffold learning progression?`
  },
  {
    id: 'research-methodology',
    name: 'Research Methodology Framework',
    description: 'Systematic approach to research design and execution',
    template: `Design research methodology for: {input}

Research Question:
- What is your primary research question?
- What sub-questions need to be answered?
- What hypotheses are you testing?
- What is the scope and limitations of your research?

Research Objectives:
- What do you want to discover or prove?
- What knowledge gap are you addressing?
- How will this research contribute to the field?
- What practical applications will result?

Research Design:
- What type of research is most appropriate (exploratory, descriptive, explanatory)?
- Will you use qualitative, quantitative, or mixed methods?
- What is your philosophical approach (positivist, interpretivist, pragmatic)?
- What timeframe will your research cover (cross-sectional, longitudinal)?

Data Collection:
Primary Data:
- What primary sources will you use?
- How will you collect data (surveys, interviews, observations, experiments)?
- What sampling method will you employ?
- What sample size is needed for statistical significance?

Secondary Data:
- What existing data sources are available?
- How will you access and evaluate secondary sources?
- What databases and archives will you consult?
- How recent and relevant is existing data?

Data Analysis:
- What analytical methods will you use?
- What software tools are needed?
- How will you ensure data quality and validity?
- What statistical tests are appropriate?

Ethical Considerations:
- What ethical approvals are needed?
- How will you protect participant privacy?
- What consent procedures will you follow?
- How will you handle sensitive data?

Timeline and Resources:
- What are the key milestones and deadlines?
- What resources (time, money, personnel) are required?
- What potential obstacles might arise?
- How will you manage and monitor progress?

Expected Outcomes:
- What results do you anticipate?
- How will findings be validated?
- How will you disseminate results?
- What future research might this enable?`
  },
  {
    id: 'innovation-framework',
    name: 'Innovation Management Framework',
    description: 'Systematic approach to fostering and managing innovation',
    template: `Apply innovation management to: {input}

Innovation Strategy:
- What type of innovation are you pursuing (product, process, business model, radical vs. incremental)?
- How does innovation align with your overall business strategy?
- What is your innovation vision and objectives?
- What resources will you dedicate to innovation?

Idea Generation:
- What sources of ideas will you tap into (internal, external, customers, partners)?
- What ideation methods will you use (brainstorming, design thinking, hackathons)?
- How will you create a culture that encourages creativity?
- What systems will capture and organize ideas?

Idea Evaluation:
- What criteria will you use to assess ideas (feasibility, impact, alignment)?
- What evaluation process will you follow?
- Who will be involved in decision-making?
- How will you balance risk and potential reward?

Innovation Portfolio:
- How will you balance different types of innovation projects?
- What mix of short-term and long-term initiatives makes sense?
- How will you allocate resources across the portfolio?
- What diversification strategy will you employ?

Development Process:
- What stages will innovation projects go through?
- What gates and checkpoints will you establish?
- How will you manage uncertainty and iterations?
- What collaboration tools and methods will you use?

Innovation Culture:
- What behaviors and mindsets do you want to encourage?
- How will you reward innovation efforts?
- What psychological safety measures will you implement?
- How will you handle failure and learning?

Measurement and Metrics:
- How will you measure innovation success?
- What leading and lagging indicators will you track?
- How will you assess return on innovation investment?
- What feedback loops will guide improvements?

External Partnerships:
- What external innovation partnerships make sense?
- How will you engage with startups, universities, or research institutions?
- What open innovation approaches will you consider?
- How will you protect intellectual property while collaborating?`
  },
  {
    id: 'change-management',
    name: 'Change Management Framework',
    description: 'Systematic approach to organizational change implementation',
    template: `Develop change management strategy for: {input}

Change Assessment:
- What specific change is being implemented?
- Why is this change necessary?
- What is the scope and scale of change?
- What are the expected benefits and outcomes?

Stakeholder Analysis:
- Who are the key stakeholders affected by this change?
- What is each stakeholder's level of influence and interest?
- Who are the champions, supporters, neutral parties, and resistors?
- What are the specific concerns and motivations of each group?

Change Vision:
- What is the compelling vision for the future state?
- How will you communicate the "why" behind the change?
- What benefits will stakeholders experience?
- How does this change align with organizational values?

Communication Strategy:
- What key messages need to be communicated?
- What communication channels will you use?
- How will you tailor messages for different stakeholder groups?
- What feedback mechanisms will you establish?

Training and Support:
- What new skills and knowledge are needed?
- How will you deliver training and development?
- What ongoing support will be provided?
- How will you address capability gaps?

Implementation Plan:
Phase 1 - Preparation:
- What groundwork needs to be laid?
- How will you build awareness and readiness?
- What quick wins can you achieve?

Phase 2 - Implementation:
- What are the key implementation milestones?
- How will you manage the transition?
- What support structures are needed?

Phase 3 - Reinforcement:
- How will you embed the change?
- What mechanisms will sustain the new behaviors?
- How will you prevent regression?

Resistance Management:
- What sources of resistance do you anticipate?
- How will you address concerns proactively?
- What strategies will you use to convert resistors?
- How will you handle persistent resistance?

Success Metrics:
- How will you measure change adoption?
- What behavioral indicators will you track?
- How will you measure business impact?
- What feedback loops will guide adjustments?`
  },
  {
    id: 'product-roadmap',
    name: 'Product Roadmap Framework',
    description: 'Strategic product planning and prioritization',
    template: `Create a product roadmap for: {input}

Product Vision:
- What is your long-term product vision?
- What problem does your product solve?
- Who is your target market?
- What differentiates your product?

Strategic Objectives:
- What are your key business goals?
- What user needs will you address?
- What market opportunities exist?
- What technical capabilities will you build?

Current State Assessment:
- What is your product's current position?
- What feedback have you received from users?
- What technical debt exists?
- What competitive pressures exist?

Feature Prioritization:
High Priority (Next 3 months):
Feature 1: [Name and description]
- User value and business impact
- Development effort and resources required
- Dependencies and risks

Feature 2: [Name and description]
- User value and business impact
- Development effort and resources required
- Dependencies and risks

Medium Priority (3-6 months):
Feature 3: [Name and description]
- Strategic importance
- Resource requirements
- Success metrics

Feature 4: [Name and description]
- Strategic importance
- Resource requirements
- Success metrics

Future Considerations (6+ months):
- What emerging opportunities exist?
- What platform or technology shifts might impact your roadmap?
- What experimental features might be worth exploring?

Release Planning:
Quarter 1:
- Major releases and key features
- Success metrics and goals
- Resource allocation

Quarter 2:
- Planned capabilities and improvements
- User experience enhancements
- Technical infrastructure updates

Quarter 3-4:
- Strategic initiatives
- Market expansion opportunities
- Innovation experiments

Dependencies and Constraints:
- What external dependencies exist?
- What resource limitations need consideration?
- What technical constraints impact timing?
- What market factors influence priorities?

Success Metrics:
- How will you measure roadmap success?
- What user engagement metrics matter?
- What business metrics will you track?
- How will you gather feedback for future planning?`
  },
  {
    id: 'crisis-communication',
    name: 'Crisis Communication Framework',
    description: 'Strategic communication during crisis situations',
    template: `Develop crisis communication plan for: {input}

Crisis Assessment:
- What is the nature and severity of the crisis?
- Who is affected and how?
- What are the potential consequences?
- How quickly is the situation evolving?

Stakeholder Mapping:
Internal Stakeholders:
- Employees and their specific concerns
- Leadership team and board members
- Investors and shareholders
- Partners and suppliers

External Stakeholders:
- Customers and their immediate needs
- Media and influencers
- Regulatory bodies and government
- Community and general public

Core Messages:
Primary Message:
- What is the key message about the situation?
- What actions are being taken?
- What is your commitment to resolution?

Supporting Messages:
- How will you address specific stakeholder concerns?
- What timeline for resolution can you provide?
- What preventive measures are being implemented?

Communication Channels:
Immediate Response (First 24 hours):
- Which channels will you use first?
- How will you reach each stakeholder group?
- What holding statements will you prepare?

Ongoing Communication:
- How frequently will you provide updates?
- What channels will you use for detailed information?
- How will you monitor and respond to feedback?

Response Team:
- Who is the crisis communication leader?
- What are each team member's roles and responsibilities?
- How will decisions be made quickly?
- What approval processes are needed?

Message Development:
Acknowledgment:
- How will you acknowledge the situation?
- What responsibility will you accept?
- How will you show empathy and concern?

Action:
- What immediate actions are being taken?
- What resources are being deployed?
- Who is leading the response efforts?

Assurance:
- How will you prevent this from happening again?
- What changes will be implemented?
- How will you rebuild trust and confidence?

Monitoring and Adjustment:
- How will you track public and stakeholder sentiment?
- What metrics will you monitor?
- How will you adjust messages based on feedback?
- What escalation procedures exist?

Recovery Communication:
- How will you transition from crisis to recovery mode?
- What positive developments will you highlight?
- How will you reinforce your commitment to improvement?
- What long-term reputation rebuilding efforts are needed?`
  },
  {
    id: 'market-research',
    name: 'Market Research Framework',
    description: 'Comprehensive market analysis and insight generation',
    template: `Conduct market research for: {input}

Research Objectives:
- What specific market questions need answers?
- What decisions will this research inform?
- What hypotheses are you testing?
- What level of accuracy and confidence is needed?

Market Definition:
- How do you define your target market?
- What are the geographic boundaries?
- What customer segments exist within the market?
- How do you differentiate primary vs. secondary markets?

Market Size and Growth:
Total Addressable Market (TAM):
- What is the total market opportunity?
- How do you calculate market size?
- What sources provide reliable market data?

Serviceable Addressable Market (SAM):
- What portion of the market can you realistically serve?
- What constraints limit your market reach?
- How does your business model affect market size?

Serviceable Obtainable Market (SOM):
- What market share can you realistically capture?
- What factors will drive your market penetration?
- How will you compete for market share?

Customer Analysis:
Demographics:
- What are the key demographic characteristics?
- How do demographics vary across segments?
- What demographic trends are emerging?

Psychographics:
- What values and attitudes drive behavior?
- What lifestyle factors influence decisions?
- How do motivations vary across segments?

Behavioral Patterns:
- How do customers research and buy?
- What influences their decision-making process?
- What usage patterns and preferences exist?

Competitive Landscape:
Direct Competitors:
- Who are your main competitors?
- What are their market positions and strategies?
- How do they differentiate themselves?

Indirect Competitors:
- What alternative solutions exist?
- How do substitutes compete for customer attention?
- What disruptive threats are emerging?

Competitive Dynamics:
- How intense is competition?
- What factors drive competitive advantage?
- How are competitive positions changing?

Market Trends:
Industry Trends:
- What major trends are shaping the industry?
- How are customer needs evolving?
- What technological changes are occurring?

Regulatory Environment:
- What regulations affect the market?
- How might regulatory changes impact opportunities?
- What compliance requirements exist?

Economic Factors:
- How do economic conditions affect demand?
- What price sensitivity exists in the market?
- How do economic cycles impact the industry?

Research Methods:
Primary Research:
- What surveys, interviews, or focus groups will you conduct?
- How will you sample and recruit participants?
- What questions will generate the insights you need?

Secondary Research:
- What industry reports and databases will you access?
- How will you validate secondary source credibility?
- What government and trade association data exists?

Insights and Implications:
- What key insights emerge from your research?
- How do findings compare to initial hypotheses?
- What opportunities and threats are revealed?
- What strategic implications guide your next steps?`
  }
];
