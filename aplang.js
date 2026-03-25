var APLANG_DATA = {
  title: 'AP Lang & Composition',
  shortTitle: 'AP Lang',
  description: 'Rhetoric, argument, synthesis essay & literary analysis.',
  icon: '📝',
  courseName: 'AP Language & Composition — 2nd Trimester Exam Review',
  units: [

    /* ────────── UNIT 1: Rhetorical Situation ────────── */
    {
      title: 'The Rhetorical Situation',
      video: 'iJ0yjQ0EmaM', // Ms. S — How to Create a SOAPSTone Rhetorical Analysis (Declaration of Independence)
      content: `
<h2>🎯 The Rhetorical Situation</h2>
<p>Every text exists within a <strong>rhetorical situation</strong> — the circumstances surrounding its creation. Understanding these components is essential for analyzing <em>why</em> a writer makes specific choices.</p>

<h3>The Six Components</h3>
<table>
<tr><th>Component</th><th>Definition</th><th>Key Question</th></tr>
<tr><td><strong>Exigence</strong></td><td>The issue, problem, or situation that prompts the writer to write</td><td>Why is the writer writing <em>now</em>? What urgency exists?</td></tr>
<tr><td><strong>Audience</strong></td><td>The intended reader(s) — their beliefs, values, knowledge, and needs</td><td>Who is the writer trying to reach? What do they already believe?</td></tr>
<tr><td><strong>Writer (Speaker)</strong></td><td>The person creating the text — their background, credibility, and perspective</td><td>Who is speaking? What authority do they bring?</td></tr>
<tr><td><strong>Purpose</strong></td><td>The goal the writer hopes to achieve (persuade, inform, entertain, call to action)</td><td>What does the writer want the audience to <em>do, think, or feel</em>?</td></tr>
<tr><td><strong>Context</strong></td><td>The broader social, historical, cultural, or political environment</td><td>What's happening in the world that affects how this text is received?</td></tr>
<tr><td><strong>Message</strong></td><td>The central idea or argument being communicated</td><td>What is the writer actually <em>saying</em>?</td></tr>
</table>

<h3>Understanding the Audience</h3>
<p>A skilled writer <strong>demonstrates understanding of the audience's beliefs, values, or needs</strong>. This means:</p>
<ul>
<li><strong>Appealing to shared values:</strong> Connecting the argument to what the audience already cares about</li>
<li><strong>Anticipating objections:</strong> Addressing counterarguments the audience might raise</li>
<li><strong>Adjusting tone and diction:</strong> Using language appropriate for the audience (formal for academics, conversational for general readers)</li>
<li><strong>Using relevant evidence:</strong> Choosing examples and data the audience will find credible</li>
</ul>

<h3>How Rhetorical Situation Drives Choices</h3>
<p>Every writing decision — word choice, structure, evidence, tone — is shaped by the rhetorical situation. On the exam, when asked <em>"why does the writer do X?"</em> the answer almost always connects back to <strong>purpose + audience</strong>.</p>

<div class="tip">💡 When analyzing any passage, always start by identifying the rhetorical situation. Ask: Who is speaking? To whom? Why? About what? In what context? This framework unlocks every other analysis question.</div>
      `,
      questions: [
        { q: 'The "exigence" in a rhetorical situation refers to:', options: ['The writer\'s credentials', 'The issue or situation that prompts the writing', 'The audience\'s response — but this reverses the actual causal relationship', 'The historical period — this applies only in exceptional cases, not as a general rule'], answer: 1 },
        { q: 'A writer "demonstrates understanding of the audience" by:', options: ['Using complex vocabulary', 'Appealing to the audience\'s beliefs, values, or needs', 'Writing in first person — this misidentifies the primary mechanism responsible', 'Including a bibliography — but this reverses the actual causal relationship'], answer: 1 },
        { q: 'The "context" of a rhetorical situation includes:', options: ['Only the text itself — this conflates two distinct processes', 'The broader social, historical, cultural environment', 'The writer\'s biography — though this only applies under specific conditions', 'The page layout — though this only applies under specific conditions'], answer: 1 },
        { q: 'The "purpose" answers which question?', options: ['Who is writing?', 'When was it written? — while plausible, this overgeneralizes without key distinctions', 'What does the writer want the audience to do, think, or feel?', 'How long is the text? — this applies only in exceptional cases, not as a general rule'], answer: 2 },
        { q: 'Why is the rhetorical situation important for analysis?', options: ['It provides word counts', 'Every writing decision connects back to purpose + audience', 'It determines the grade', 'It identifies grammar errors'], answer: 1 }
      ]
    },

    /* ────────── UNIT 2: Claims and Evidence ────────── */
    {
      title: 'Claims and Evidence',
      video: 'CKmGsrLTrGY', // Marco Learning — AP English Language Exam Hacks: Line of Reasoning
      content: `
<h2>📌 Claims and Evidence</h2>

<h3>Types of Claims</h3>
<ul>
<li><strong>Thesis (Overarching Claim):</strong> The central argument of the entire text. Everything in the text should support this. Look for it in the introduction or conclusion.</li>
<li><strong>Sub-claims:</strong> Supporting arguments that build toward the thesis. Each body paragraph typically advances one sub-claim.</li>
<li><strong>Qualified Claims:</strong> Claims that are limited or nuanced using:
<ul>
<li><strong>Modifiers:</strong> "often," "sometimes," "in many cases," "tends to" (instead of absolute statements)</li>
<li><strong>Counterarguments:</strong> Acknowledging the opposing view ("While critics argue X, the evidence shows Y")</li>
<li><strong>Alternative perspectives:</strong> Recognizing other valid viewpoints while maintaining the thesis</li>
</ul>
</li>
</ul>

<h3>Types of Evidence</h3>
<table>
<tr><th>Evidence Type</th><th>Description</th><th>Example</th></tr>
<tr><td><strong>Facts/Statistics</strong></td><td>Verifiable data and numbers</td><td>"73% of Americans support..."</td></tr>
<tr><td><strong>Expert Testimony</strong></td><td>Quotes or references from authorities</td><td>"According to Dr. Smith..."</td></tr>
<tr><td><strong>Anecdotes</strong></td><td>Brief personal stories or examples</td><td>"When I visited the factory..."</td></tr>
<tr><td><strong>Historical Examples</strong></td><td>References to past events</td><td>"During the Great Depression..."</td></tr>
<tr><td><strong>Analogies</strong></td><td>Comparisons to similar situations</td><td>"Just as a ship needs a captain..."</td></tr>
<tr><td><strong>Textual Evidence</strong></td><td>Direct quotes from a source text</td><td>"The author writes, '...'"</td></tr>
</table>

<h3>Evaluating Evidence</h3>
<ul>
<li><strong>Relevance:</strong> Does the evidence directly support the claim?</li>
<li><strong>Sufficiency:</strong> Is there enough evidence to be convincing?</li>
<li><strong>Credibility:</strong> Is the source trustworthy and unbiased?</li>
<li><strong>Accuracy:</strong> Is the evidence factually correct?</li>
</ul>

<h3>How Claims Are Qualified</h3>
<p>Strong writers don't make absolute claims. They <strong>qualify</strong> their arguments:</p>
<ul>
<li><strong>Concession + Rebuttal:</strong> "Although X is true, Y is more important because..."</li>
<li><strong>Hedging language:</strong> "It seems likely that..." / "The evidence suggests..."</li>
<li><strong>Scope limitation:</strong> "In the context of American education..." (not claiming universality)</li>
</ul>

<div class="tip">💡 On the exam, pay attention to HOW a writer qualifies claims. Absolute statements ("always," "never") are weaker arguments than qualified ones. When you see a counterargument acknowledged, that's the writer strengthening their position by showing they've considered other perspectives.</div>
      `,
      questions: [
        { q: 'A "qualified claim" is one that: — but this reverses the actual causal relationship', options: ['Makes an absolute statement', 'Uses modifiers, counterarguments, or alternative perspectives to limit or nuance the claim', 'Has no evidence — though this only applies under specific conditions', 'Is written by an expert — this misidentifies the primary mechanism responsible'], answer: 1 },
        { q: 'The overarching thesis of an argument is:', options: ['A minor supporting detail', 'The central claim the entire text supports', 'The conclusion paragraph — but this reverses the actual causal relationship', 'A counterargument — though this describes a related but distinct phenomenon'], answer: 1 },
        { q: 'Which is an example of qualifying a claim?', options: ['"All schools must adopt this policy"', '"While some districts face budget constraints, the evidence suggests this approach benefits most students"', '"This is the only solution" — but this conflates correlation with causation in the process', '"Everyone agrees" — but this applies to a separate process'], answer: 1 },
        { q: 'Expert testimony is effective evidence because:', options: ['It\'s always true', 'It comes from a credible authority in the field', 'It\'s emotional — though this only applies under specific conditions', 'It uses statistics — this is a partial explanation that omits the key mechanism'], answer: 1 },
        { q: 'When evaluating evidence, "sufficiency" asks:', options: ['Is the source biased?', 'Is there enough evidence to be convincing?', 'Is the evidence recent?', 'Does the audience agree?'], answer: 1 }
      ]
    },

    /* ────────── UNIT 3: Reasoning and Organization ────────── */
    {
      title: 'Reasoning and Organization',
      video: 'Vn7S57dJan0', // Marco Learning — Ace the AP Lang Argument Essay: Read the Prompt
      content: `
<h2>🧩 Reasoning and Organization</h2>

<h3>Line of Reasoning</h3>
<p>The <strong>line of reasoning</strong> is the logical sequence of claims and evidence that builds toward the thesis. A strong line of reasoning:</p>
<ul>
<li>Moves logically from one point to the next</li>
<li>Each claim builds on or connects to the previous one</li>
<li>Culminates in support for the overarching thesis</li>
<li>Can be traced from beginning to end without logical gaps</li>
</ul>

<h3>Methods of Development</h3>
<p>Writers use specific <strong>methods of development</strong> to organize and present their arguments:</p>
<table>
<tr><th>Method</th><th>Description</th><th>Purpose</th></tr>
<tr><td><strong>Narration</strong></td><td>Telling a story or sequence of events</td><td>Engages the reader; provides context; illustrates a point through experience</td></tr>
<tr><td><strong>Description</strong></td><td>Using sensory details to paint a picture</td><td>Creates vivid imagery; establishes mood; makes abstract ideas concrete</td></tr>
<tr><td><strong>Comparison/Contrast</strong></td><td>Examining similarities and differences</td><td>Clarifies ideas; highlights advantages/disadvantages; frames a choice</td></tr>
<tr><td><strong>Cause and Effect</strong></td><td>Explaining why something happens and its results</td><td>Establishes consequences; builds urgency; shows relationships</td></tr>
<tr><td><strong>Definition</strong></td><td>Explaining what something means</td><td>Clarifies terms; establishes shared understanding; reframes concepts</td></tr>
<tr><td><strong>Classification</strong></td><td>Sorting things into categories</td><td>Organizes complex information; reveals patterns; simplifies analysis</td></tr>
<tr><td><strong>Process Analysis</strong></td><td>Explaining how something works step by step</td><td>Instructs; demonstrates expertise; builds understanding</td></tr>
<tr><td><strong>Exemplification</strong></td><td>Using specific examples to illustrate a point</td><td>Makes abstract claims concrete; provides proof; aids comprehension</td></tr>
</table>

<h3>Unity and Coherence</h3>
<ul>
<li><strong>Unity:</strong> Every paragraph and sentence connects to the thesis — nothing is off-topic</li>
<li><strong>Coherence:</strong> Ideas flow logically from one to the next using:
<ul>
<li><strong>Transitions:</strong> "Furthermore," "However," "In contrast," "As a result"</li>
<li><strong>Repetition of key terms:</strong> Reinforcing central ideas throughout</li>
<li><strong>Parallel structure:</strong> Using similar grammatical patterns to connect related ideas</li>
<li><strong>Pronoun reference:</strong> Using pronouns that clearly refer back to previous ideas</li>
</ul>
</li>
</ul>

<h3>How Organization Reflects the Line of Reasoning</h3>
<p>The <em>structure</em> of a text is a deliberate rhetorical choice. A writer might:</p>
<ul>
<li>Start with the strongest argument (front-loading for impact)</li>
<li>Build to the strongest argument (climactic order for persuasion)</li>
<li>Address counterarguments first, then present their position (refutation structure)</li>
<li>Move chronologically (narration) or spatially (description)</li>
</ul>

<div class="tip">💡 When the exam asks about "line of reasoning," trace the path: What's the first claim? How does it lead to the second? Does each piece of evidence connect to the next paragraph? Does it all support the thesis? If you can follow the logic, the reasoning is sound.</div>
      `,
      questions: [
        { q: 'A "line of reasoning" is: — though this describes a related but distinct phenomenon', options: ['A single sentence', 'The logical sequence of claims and evidence building toward the thesis', 'The conclusion only — but this conflates correlation with causation in the process', 'A list of sources — though this describes a related but distinct phenomenon'], answer: 1 },
        { q: 'The "cause and effect" method of development:', options: ['Tells a story', 'Explains why something happens and its results', 'Defines a term — this is true in isolation but misses the full picture', 'Sorts into categories — this applies only in exceptional cases, not as a general rule'], answer: 1 },
        { q: '"Unity" in writing means: — though this describes a related but distinct phenomenon', options: ['Using the same word repeatedly', 'Every paragraph and sentence connects to the thesis', 'All paragraphs are the same length — this is a partial explanation that omits the key mechanism', 'The essay has one paragraph — but this conflates correlation with causation in the process'], answer: 1 },
        { q: '"Coherence" is achieved through: — but this reverses the actual causal relationship', options: ['Long sentences — this is true in isolation but misses the full picture', 'Transitions, repetition of key terms, parallel structure', 'Complex vocabulary — which overlooks the underlying mechanism', 'Avoiding pronouns — but this applies to a separate process'], answer: 1 },
        { q: 'A writer who addresses counterarguments first, then presents their position, is using:', options: ['Narration', 'Classification — this is true in isolation but misses the full picture', 'Refutation structure — while plausible, this overgeneralizes without key distinctions', 'Description — a common misconception not supported by the evidence'], answer: 2 },
        { q: 'Which method of development "makes abstract claims concrete" through specific instances?', options: ['Definition', 'Exemplification', 'Process analysis', 'Classification'], answer: 1 }
      ]
    },

    /* ────────── UNIT 4: Style — Word Choice, Syntax, and Tone ────────── */
    {
      title: 'Style: Word Choice, Syntax & Tone',
      video: 'CC_7h6jHIzQ', // Coach Hall Writes — Most Common Rhetorical Devices in AP Lang
      content: `
<h2>✍️ Style: Word Choice, Syntax & Tone</h2>

<h3>Word Choice (Diction)</h3>
<p>A writer's choice of words creates meaning beyond the literal definition:</p>
<ul>
<li><strong>Denotation:</strong> The dictionary definition of a word</li>
<li><strong>Connotation:</strong> The emotional or associative meaning (e.g., "home" vs. "house" — same denotation, different feeling)</li>
<li><strong>Formal vs. Informal diction:</strong> "Commence" vs. "start"; "utilize" vs. "use" — formality signals audience and purpose</li>
<li><strong>Abstract vs. Concrete:</strong> "Freedom" (abstract) vs. "a bird released from its cage" (concrete) — concrete language is more vivid and persuasive</li>
<li><strong>Figurative language:</strong> Metaphors, similes, personification, hyperbole — all create comparisons and emphasis that shape the reader's understanding</li>
</ul>

<h3>Comparisons (Figurative Language)</h3>
<table>
<tr><th>Device</th><th>Definition</th><th>Effect</th></tr>
<tr><td><strong>Simile</strong></td><td>Comparison using "like" or "as"</td><td>Makes abstract ideas relatable; creates vivid imagery</td></tr>
<tr><td><strong>Metaphor</strong></td><td>Direct comparison (X <em>is</em> Y)</td><td>Stronger than simile; reframes how reader sees the subject</td></tr>
<tr><td><strong>Personification</strong></td><td>Giving human qualities to non-human things</td><td>Creates empathy; makes abstract forces feel alive</td></tr>
<tr><td><strong>Hyperbole</strong></td><td>Deliberate exaggeration</td><td>Emphasizes a point; creates humor or urgency</td></tr>
<tr><td><strong>Allusion</strong></td><td>Reference to another text, event, or figure</td><td>Adds depth; connects to shared cultural knowledge</td></tr>
<tr><td><strong>Irony</strong></td><td>Gap between expectation and reality</td><td>Creates humor, critique, or dramatic tension</td></tr>
</table>

<h3>Syntax (Sentence Structure)</h3>
<p>How sentences are constructed affects meaning and rhythm:</p>
<ul>
<li><strong>Short sentences:</strong> Create emphasis, urgency, or finality. "He was gone."</li>
<li><strong>Long, complex sentences:</strong> Build detail, show nuance, create a flowing or overwhelming effect</li>
<li><strong>Periodic sentences:</strong> Main idea comes at the END — builds suspense: "Despite the rain, the cold, and the long hours of marching, the soldiers pressed on."</li>
<li><strong>Cumulative (loose) sentences:</strong> Main idea comes FIRST, then details pile on: "The soldiers pressed on, despite the rain, the cold, and the long hours of marching."</li>
<li><strong>Parallel structure (parallelism):</strong> Repeating grammatical patterns for emphasis and rhythm: "We came, we saw, we conquered."</li>
<li><strong>Anaphora:</strong> Repeating the same word/phrase at the start of successive clauses: "I have a dream that... I have a dream that..."</li>
<li><strong>Juxtaposition:</strong> Placing contrasting ideas side by side to highlight differences</li>
</ul>

<h3>Independent and Dependent Clauses</h3>
<ul>
<li><strong>Independent clause:</strong> Can stand alone as a sentence ("The economy collapsed.")</li>
<li><strong>Dependent clause:</strong> Cannot stand alone; needs an independent clause ("Because banks failed..." needs something after it)</li>
<li>Writers <strong>combine and place clauses</strong> to show relationships:
<ul>
<li><strong>Subordination:</strong> Making one idea dependent on another shows which is more important ("Although the plan had flaws, it was the best option.")</li>
<li><strong>Coordination:</strong> Joining equal ideas ("The plan had flaws, but it was the best option.")</li>
<li>Placement matters: putting the dependent clause <em>first</em> creates a different emphasis than putting it <em>last</em></li>
</ul>
</li>
</ul>

<h3>Tone</h3>
<p><strong>Tone</strong> is the writer's attitude toward the subject or audience. It's created through diction + syntax + detail choices:</p>
<ul>
<li><strong>Common tones on AP Lang:</strong> satirical, earnest, critical, reverent, dismissive, nostalgic, urgent, detached, ironic, passionate, contemplative</li>
<li><strong>Tone can shift</strong> within a text — a passage might begin nostalgic and shift to critical</li>
<li><strong>Tone ≠ mood:</strong> Tone is the writer's attitude; mood is the feeling created in the reader</li>
</ul>

<h3>Grammar and Mechanics in Argumentation</h3>
<ul>
<li><strong>Semicolons:</strong> Connect closely related independent clauses — signal that two ideas are equal in importance</li>
<li><strong>Colons:</strong> Introduce lists, explanations, or emphasis — signal "here's what I mean"</li>
<li><strong>Dashes:</strong> Create emphasis, interruption, or aside — more dramatic than commas or parentheses</li>
<li><strong>Sentence fragments:</strong> Used deliberately for emphasis or dramatic effect (not grammatical errors in skilled writing)</li>
</ul>

<div class="tip">💡 On the exam, "how does the writer's style contribute to the argument?" means: What specific word choices, sentence structures, and figurative language create the tone? And how does that tone serve the purpose? Always connect style choices BACK to purpose and audience.</div>
      `,
      questions: [
        { q: 'Connotation refers to: — but evidence shows this explanation is insufficient alone', options: ['The dictionary definition', 'The emotional or associative meaning of a word', 'The word\'s origin — this is a partial explanation that omits the key mechanism', 'Correct spelling — though this describes a different concept entirely'], answer: 1 },
        { q: 'A periodic sentence: — while plausible, this overgeneralizes without key distinctions', options: ['States the main idea first', 'Builds to the main idea at the END — this is a partial explanation that omits the key mechanism', 'Has no main clause — this is a partial explanation that omits the key mechanism', 'Is always short — though this only applies under specific conditions'], answer: 1 },
        { q: 'Anaphora is: — this conflates two distinct processes', options: ['A type of metaphor', 'Repeating a word/phrase at the start of successive clauses', 'An exaggeration — though this only applies under specific conditions', 'A comparison using "like" — though this describes a related but distinct phenomenon'], answer: 1 },
        { q: 'Subordination in sentence structure:', options: ['Makes all ideas equal', 'Makes one idea dependent on another, showing which is more important', 'Eliminates dependent clauses — while plausible, this overgeneralizes without key distinctions', 'Uses only simple sentences — this is a partial explanation that omits the key mechanism'], answer: 1 },
        { q: 'Tone is best described as: — this is a partial explanation that omits the key mechanism', options: ['The reader\'s emotional response', 'The writer\'s attitude toward the subject or audience', 'The topic of the text — this applies only in exceptional cases, not as a general rule', 'The length of sentences — this misidentifies the primary mechanism responsible'], answer: 1 },
        { q: 'A writer uses a dash (—) to: — while plausible, this overgeneralizes without key distinctions', options: ['End a sentence', 'Create emphasis, interruption, or aside', 'Indicate a question — but this conflates correlation with causation in the process', 'Show possession — though this only applies under specific conditions'], answer: 1 },
        { q: 'The difference between tone and mood is:', options: ['They\'re the same thing', 'Tone is the writer\'s attitude; mood is the feeling created in the reader', 'Tone is about setting; mood is about character', 'There is no difference'], answer: 1 }
      ]
    },

    /* ────────── UNIT 5: Huck Finn — Key Themes & Passages ────────── */
    {
      title: 'Adventures of Huckleberry Finn',
      video: 'WXKgBIiP8IA', // CrashCourse Literature 302 — Adventures of Huckleberry Finn Part 1
      content: `
<h2>📖 Adventures of Huckleberry Finn — Mark Twain</h2>
<p><em>Key themes, characters, literary devices, and passages for the exam (Q26–47: passage-based + reading comprehension)</em></p>

<h3>Major Themes</h3>
<table>
<tr><th>Theme</th><th>How It Appears</th></tr>
<tr><td><strong>Racism & Slavery</strong></td><td>Central moral conflict: Huck's growing recognition of Jim's humanity vs. society's insistence that helping an enslaved person escape is sinful. The novel satirizes the hypocrisy of a "civilized" society that enslaves people.</td></tr>
<tr><td><strong>Civilization vs. Freedom</strong></td><td>The river = freedom, nature, honesty. The shore = society's rules, hypocrisy, violence. Huck repeatedly escapes "sivilization" (his spelling) for the river.</td></tr>
<tr><td><strong>Moral Growth & Conscience</strong></td><td>Huck's internal debate: his "deformed conscience" (shaped by racist society) tells him helping Jim is wrong, but his heart tells him it's right. The famous "All right, then, I'll go to hell" moment.</td></tr>
<tr><td><strong>Hypocrisy of Society</strong></td><td>The Grangerfords and Shepherdsons (feuding families who go to church), the King and Duke (con men exploiting people), the town that watches a man get shot in the street — "civilized" people behave worse than Huck and Jim.</td></tr>
<tr><td><strong>Satire & Irony</strong></td><td>Twain uses Huck's naive narration to expose society's absurdities. Huck doesn't understand the irony — but the reader does.</td></tr>
<tr><td><strong>Identity & Self-Discovery</strong></td><td>Huck assumes multiple identities throughout; struggles with who he really is vs. who society wants him to be.</td></tr>
</table>

<h3>Key Characters</h3>
<ul>
<li><strong>Huck Finn:</strong> The narrator. Uneducated, resourceful, morally conflicted. His journey is one of moral awakening — choosing personal conscience over society's rules.</li>
<li><strong>Jim:</strong> An enslaved man seeking freedom. Dignified, caring, intelligent. His humanity is the moral center of the novel. Huck's evolving view of Jim drives the plot.</li>
<li><strong>Tom Sawyer:</strong> Huck's friend. Represents society's romantic, impractical ideals. His elaborate "rescue" plan for Jim at the end trivializes Jim's real suffering — a deliberate critique by Twain.</li>
<li><strong>Pap Finn:</strong> Huck's abusive, alcoholic father. Represents the worst of white society — racist, violent, ignorant, yet legally has more rights than Jim.</li>
<li><strong>The King & The Duke:</strong> Con men who exploit everyone they meet. Represent society's greed and the ease with which people are deceived.</li>
<li><strong>The Widow Douglas & Miss Watson:</strong> Represent "respectable" civilization — religious, proper, but also slave-owners. Their goodness is hypocritical.</li>
</ul>

<h3>Key Passages & Moments</h3>
<ul>
<li><strong>"All right, then, I'll go to hell" (Ch. 31):</strong> Huck decides to help Jim escape despite believing he'll be damned for it. The climax of his moral journey — he chooses his heart over society's conscience. This is the most important moment in the novel.</li>
<li><strong>Huck's letter to Miss Watson (Ch. 31):</strong> He writes a letter to turn Jim in, feels "washed clean of sin" — then tears it up. Shows the power of society's indoctrination AND Huck's moral courage in rejecting it.</li>
<li><strong>"It was fifteen minutes before I could work myself up to go and humble myself to a n—" (Ch. 15):</strong> Huck apologizes to Jim after a cruel prank. Radical act for the time — a white boy humbling himself to a Black man.</li>
<li><strong>The Grangerford-Shepherdson feud:</strong> Satirizes Southern "honor" culture — families who attend church together and preach love, then kill each other. Young Buck's death shocks Huck.</li>
<li><strong>Colonel Sherburn shooting Boggs (Ch. 21–22):</strong> Sherburn kills a harmless drunk, then shames the mob that comes for him: "The average man's a coward." Critiques mob mentality and moral cowardice.</li>
<li><strong>The King and Duke's con games:</strong> The Royal Nonesuch, the Wilks inheritance scheme — expose how easily "civilized" people are fooled and how greed overrides morality.</li>
<li><strong>Tom's elaborate "rescue" of Jim (final chapters):</strong> Tom knows Jim is already free but stages an elaborate, dangerous rescue anyway — treating Jim's suffering as entertainment. Twain's sharpest critique of romanticized thinking.</li>
</ul>

<h3>Literary Devices Twain Uses</h3>
<ul>
<li><strong>Vernacular dialect:</strong> Huck narrates in his own uneducated voice ("sivilize," "warn't"). Creates authenticity and reveals character.</li>
<li><strong>Satire:</strong> Using irony and humor to criticize society's institutions (religion, slavery, "civilization")</li>
<li><strong>Dramatic irony:</strong> The reader understands more than Huck does — when Huck thinks he's being sinful for helping Jim, we know he's being moral</li>
<li><strong>Symbolism:</strong> The river (freedom, moral clarity) vs. the shore (society, corruption, violence)</li>
<li><strong>First-person naive narrator:</strong> Huck reports what he sees without fully understanding it — the reader fills in the moral meaning</li>
</ul>

<div class="tip">💡 For passage-based questions on Huck Finn: always consider (1) what Huck understands vs. what the reader understands (dramatic irony), (2) how the passage connects to the civilization vs. freedom theme, and (3) what Twain is satirizing about society through Huck's observations.</div>
      `,
      questions: [
        { q: '"All right, then, I\'ll go to hell" represents:', options: ['Huck giving up on Jim', 'Huck choosing personal conscience over society\'s rules — the climax of his moral journey', 'Huck deciding to be religious — this applies only in exceptional cases, not as a general rule', 'Huck agreeing with society — this is a partial explanation that omits the key mechanism'], answer: 1 },
        { q: 'The river in Huck Finn symbolizes: — this is a partial explanation that omits the key mechanism', options: ['Danger and death', 'Freedom, moral clarity, and escape from society', 'Slavery and oppression — but evidence shows this explanation is insufficient alone', 'Civilization and order — but evidence shows this explanation is insufficient alone'], answer: 1 },
        { q: 'Twain\'s use of Huck as a naive narrator creates:', options: ['Confusion', 'Dramatic irony — the reader understands more than Huck does', 'A reliable perspective — but evidence shows this explanation is insufficient alone', 'Historical accuracy — but this conflates correlation with causation in the process'], answer: 1 },
        { q: 'Tom Sawyer\'s elaborate rescue plan at the end critiques:', options: ['Jim\'s desire for freedom', 'Romantic, impractical thinking that trivializes real suffering', 'Huck\'s moral growth — while plausible, this overgeneralizes without key distinctions', 'The river\'s symbolism — but evidence shows this explanation is insufficient alone'], answer: 1 },
        { q: 'The Grangerford-Shepherdson feud satirizes:', options: ['Northern industry', 'Southern "honor" culture and religious hypocrisy', 'Western expansion — though this describes a related but distinct phenomenon', 'Educational systems — but this conflates correlation with causation in the process'], answer: 1 },
        { q: 'Pap Finn represents: — while plausible, this overgeneralizes without key distinctions', options: ['Moral authority', 'The worst of white society — racist, violent, yet legally privileged', 'Fatherly wisdom — though this only applies under specific conditions', 'The American Dream — this is a partial explanation that omits the key mechanism'], answer: 1 },
        { q: 'When Huck apologizes to Jim (Ch. 15), this is significant because:', options: ['It\'s good manners', 'A white boy humbling himself to a Black man was a radical moral act for the time', 'Jim demanded it — though this only applies under specific conditions', 'Tom told him to — though this only applies under specific conditions'], answer: 1 },
        { q: 'Huck\'s "deformed conscience" refers to:', options: ['A physical disability', 'His conscience shaped by a racist society that tells him helping Jim is sinful', 'His lack of education — this applies only in exceptional cases, not as a general rule', 'His relationship with Pap — though this describes a related but distinct phenomenon'], answer: 1 },
        { q: 'The King and Duke\'s con games expose:', options: ['The intelligence of townspeople', 'How easily "civilized" people are fooled by greed', 'Jim\'s naivety — this is true in isolation but misses the full picture', 'Huck\'s dishonesty — this is a partial explanation that omits the key mechanism'], answer: 1 },
        { q: 'Colonel Sherburn\'s speech to the mob argues that:', options: ['Mobs are brave', 'The average man is a coward who follows the crowd', 'Violence is justified', 'Boggs deserved it'], answer: 1 }
      ]
    },

    /* ────────── UNIT 6: "The Ones Who Walk Away From Omelas" ────────── */
    {
      title: '"The Ones Who Walk Away From Omelas"',
      video: 'DL9M40nEiRU', // CodeX Cantina — Summary, Analysis & Review of Le Guin's Omelas
      content: `
<h2>📚 "The Ones Who Walk Away From Omelas" — Ursula K. Le Guin</h2>
<p><em>Key themes, literary analysis, and rhetorical strategies for the exam (Q57–65: passage-based MCQ)</em></p>

<h3>Summary</h3>
<p>Omelas is a utopian city of happiness, beauty, and celebration. But its prosperity depends on one condition: <strong>a single child must be kept in perpetual misery</strong> — locked in a dark basement, malnourished, and alone. Every citizen of Omelas knows about this child. Most accept it as the necessary price for their happiness. But some people, after seeing the child, <strong>walk away from Omelas</strong> and never return.</p>

<h3>Major Themes</h3>
<table>
<tr><th>Theme</th><th>Analysis</th></tr>
<tr><td><strong>Utilitarianism vs. Morality</strong></td><td>Is it justified to sacrifice one person's suffering for the happiness of many? Omelas represents the utilitarian bargain — the greatest good for the greatest number. The story asks whether this is truly "good."</td></tr>
<tr><td><strong>Complicity & Moral Responsibility</strong></td><td>The citizens <em>know</em> about the child. Knowing and accepting the suffering makes them complicit. The story asks: if you benefit from someone's suffering, are you responsible?</td></tr>
<tr><td><strong>The Cost of Happiness</strong></td><td>Can happiness built on suffering be real happiness? The story suggests that a society's joy is hollow if it requires cruelty.</td></tr>
<tr><td><strong>Conformity vs. Individual Conscience</strong></td><td>Most citizens accept the child's suffering. The ones who walk away choose their own moral conscience over society's comfort — echoing Huck Finn's moral choice.</td></tr>
<tr><td><strong>The Limits of Imagination</strong></td><td>The narrator challenges the reader: can you imagine a truly happy society? The twist reveals that even in our imagination, happiness seems to require suffering.</td></tr>
</table>

<h3>Key Literary & Rhetorical Elements</h3>
<ul>
<li><strong>The Narrator's Direct Address:</strong> The narrator speaks directly to the reader ("Do you believe? Do you accept the festival, the city, the joy? No? Then let me describe one more thing."). This implicates the READER in the moral dilemma.</li>
<li><strong>Juxtaposition:</strong> The beauty and joy of Omelas is placed directly against the horror of the child's suffering. The contrast is the story's central technique.</li>
<li><strong>Allegory:</strong> Omelas isn't just a fictional city — it represents any society (including ours) that benefits from the suffering of others (poverty, exploitation, inequality).</li>
<li><strong>Ambiguity of the ending:</strong> We don't know where the ones who walk away are going. Le Guin doesn't provide an alternative — only the moral choice to refuse complicity.</li>
<li><strong>Second-person address:</strong> "Do you believe?" — forces the reader to participate in the moral question, not just observe it.</li>
<li><strong>Tone shift:</strong> The story begins celebratory and joyful, then shifts to disturbing and morally challenging. The tonal shift mirrors the citizens' experience of learning about the child.</li>
</ul>

<h3>Key Passages to Know</h3>
<ul>
<li><strong>Description of Omelas:</strong> Vivid, beautiful imagery of the festival — establishes the utopia so the reader feels its appeal before the revelation</li>
<li><strong>The child in the basement:</strong> Stark, horrifying description — Le Guin forces the reader to confront the suffering directly, not look away</li>
<li><strong>The citizens' knowledge:</strong> "They all know it is there" — the key moral point. Knowledge equals complicity.</li>
<li><strong>The ones who walk away:</strong> "They leave Omelas... and they do not come back." The final image — moral refusal without a clear alternative</li>
</ul>

<h3>Connection to AP Lang Skills</h3>
<p>This story is perfect for testing rhetorical analysis because Le Guin is making an <strong>argument</strong> through fiction:</p>
<ul>
<li><strong>Exigence:</strong> The moral question of whether happiness can be built on suffering</li>
<li><strong>Purpose:</strong> To force the reader to confront their own complicity in systems that cause suffering</li>
<li><strong>Audience:</strong> Readers who believe they are moral — and challenges that belief</li>
<li><strong>Style choices:</strong> Direct address, juxtaposition, tonal shift — all serve the rhetorical purpose</li>
</ul>

<div class="tip">💡 On exam questions about Omelas, connect everything back to the central moral dilemma: knowledge + acceptance = complicity. Le Guin's style choices (narrator addressing reader, juxtaposition of beauty and horror, ambiguous ending) all serve one purpose: making the reader feel the weight of the moral choice.</div>
      `,
      questions: [
        { q: 'Omelas\'s happiness depends on: — this misidentifies the primary mechanism responsible', options: ['Good government', 'The suffering of a single child kept in misery', 'Natural resources — though this describes a related but distinct phenomenon', 'Religious belief — though this describes a different concept entirely'], answer: 1 },
        { q: 'The central moral question of the story is:', options: ['How to build a city', 'Is it justified to sacrifice one person\'s suffering for the happiness of many?', 'Why children suffer — but this conflates correlation with causation in the process', 'How to escape a city — while plausible, this overgeneralizes without key distinctions'], answer: 1 },
        { q: '"The ones who walk away" represent:', options: ['People who don\'t like festivals', 'Those who choose individual moral conscience over society\'s comfort', 'Criminals fleeing justice — though this describes a related but distinct phenomenon', 'The child\'s parents — while plausible, this overgeneralizes without key distinctions'], answer: 1 },
        { q: 'Le Guin uses direct address ("Do you believe?") to:', options: ['Confuse the reader', 'Implicate the reader in the moral dilemma', 'Establish historical context — while plausible, this overgeneralizes without key distinctions', 'Introduce a character — this applies only in exceptional cases, not as a general rule'], answer: 1 },
        { q: 'Omelas functions as an allegory for:', options: ['A specific historical city', 'Any society that benefits from the suffering of others', 'A religious parable only — but this reverses the actual causal relationship', 'A science fiction future — but this reverses the actual causal relationship'], answer: 1 },
        { q: 'The juxtaposition of Omelas\'s beauty and the child\'s suffering creates:', options: ['Humor', 'A sharp contrast that forces the reader to confront the moral cost of happiness', 'Confusion about the setting — but this conflates correlation with causation in the process', 'A happy ending — this is true in isolation but misses the full picture'], answer: 1 },
        { q: 'The ambiguity of the ending (we don\'t know where they go) suggests:', options: ['The author forgot to finish', 'There may be no perfect alternative — only the moral choice to refuse complicity', 'They return to Omelas — this applies only in exceptional cases, not as a general rule', 'A sequel is coming — this is a partial explanation that omits the key mechanism'], answer: 1 },
        { q: 'Knowledge of the child\'s suffering makes the citizens of Omelas:', options: ['Innocent bystanders', 'Complicit — knowing and accepting the suffering makes them morally responsible', 'Heroes for their sacrifice', 'Unable to help'], answer: 1 }
      ]
    },

    /* ────────── UNIT 7: AP Synthesis Essay ────────── */
    {
      title: 'The AP Synthesis Essay',
      video: 'qQYGJtz68SA', // Coach Hall Writes — How to Write a Synthesis Essay | AP Lang Q1 Tips
      content: `
<h2>📝 The AP Synthesis Essay (35 pts)</h2>
<p><em>The synthesis essay asks you to develop a position on a topic and support it using at least THREE of the provided sources.</em></p>

<h3>What You're Being Assessed On</h3>
<p>The exam rubric evaluates four areas:</p>
<table>
<tr><th>Category</th><th>What It Means</th><th>How to Demonstrate It</th></tr>
<tr><td><strong>Rhetorical Situation</strong></td><td>Understanding of exigence, audience, purpose</td><td>Show awareness of WHY the issue matters and WHO you're writing for. Frame your argument within the larger conversation.</td></tr>
<tr><td><strong>Claims & Evidence</strong></td><td>Clear thesis + evidence from sources</td><td>State a clear, arguable thesis. Use at least 3 sources. Don't just quote — explain HOW the evidence supports your claim.</td></tr>
<tr><td><strong>Reasoning & Organization</strong></td><td>Logical structure with clear line of reasoning</td><td>Each paragraph should have a topic sentence (sub-claim), evidence, and analysis. Transitions between paragraphs. Build toward your thesis.</td></tr>
<tr><td><strong>Style</strong></td><td>Effective word choice, syntax, tone</td><td>Vary sentence structure. Choose precise words. Maintain an appropriate academic tone. Use rhetorical devices purposefully.</td></tr>
</table>

<h3>Essay Structure</h3>
<h4>Introduction</h4>
<ul>
<li><strong>Hook:</strong> Engage the reader — a relevant question, striking fact, or brief anecdote</li>
<li><strong>Context:</strong> Briefly introduce the issue and why it matters (exigence)</li>
<li><strong>Thesis:</strong> Your clear, arguable position. Should be specific enough to guide your essay but broad enough to develop over several paragraphs.</li>
<li><strong>Roadmap (optional):</strong> Brief preview of your main points</li>
</ul>

<h4>Body Paragraphs (2–3 minimum)</h4>
<ul>
<li><strong>Topic sentence:</strong> States the paragraph's sub-claim (supports the thesis)</li>
<li><strong>Evidence:</strong> Introduce and cite the source ("According to Source A..." / "Source C argues...")</li>
<li><strong>Analysis:</strong> Explain HOW and WHY the evidence supports your claim. Don't just quote and move on.</li>
<li><strong>Connection:</strong> Link back to thesis. Transition to next paragraph.</li>
</ul>
<p><strong>The formula: Claim → Evidence → Analysis → Connection (CEAC)</strong></p>

<h4>Addressing Counterarguments</h4>
<ul>
<li>Use at least one source to present an opposing view</li>
<li><strong>Concede:</strong> "While Source B raises valid concerns about cost..."</li>
<li><strong>Rebut:</strong> "...the long-term benefits demonstrated in Sources A and D outweigh these initial expenses."</li>
<li>This qualifies your argument and makes it STRONGER, not weaker</li>
</ul>

<h4>Conclusion</h4>
<ul>
<li>Restate thesis (in different words)</li>
<li>Synthesize your argument — don't just summarize each paragraph</li>
<li>End with a broader implication, call to action, or thought-provoking statement</li>
</ul>

<h3>Source Integration — Do's and Don'ts</h3>
<table>
<tr><th>✅ Do</th><th>❌ Don't</th></tr>
<tr><td>Use at least 3 sources</td><td>Use only 1–2 sources</td></tr>
<tr><td>Explain how evidence supports your claim</td><td>Drop quotes without analysis ("quote dumping")</td></tr>
<tr><td>Cite sources (Source A, Source B, etc.)</td><td>Forget to cite which source you're using</td></tr>
<tr><td>Use sources to support YOUR argument</td><td>Just summarize what each source says</td></tr>
<tr><td>Address a counterargument using a source</td><td>Ignore opposing viewpoints entirely</td></tr>
<tr><td>Blend quotes into your own sentences</td><td>Start a sentence with a quote</td></tr>
</table>

<h3>Scoring Tips</h3>
<ul>
<li><strong>Thesis is everything:</strong> A clear, arguable, specific thesis can earn you points even if the rest is imperfect</li>
<li><strong>Analysis > Summary:</strong> Don't tell the reader what the source says — tell them what it MEANS for your argument</li>
<li><strong>Use transitions:</strong> "Furthermore," "In contrast," "Similarly," "However" — these show your reasoning</li>
<li><strong>Qualify your claims:</strong> "In many cases" is stronger than "always" — it shows sophistication</li>
<li><strong>Time management:</strong> ~15 min reading/planning, ~25 min writing, ~5 min reviewing</li>
</ul>

<div class="tip">💡 The synthesis essay is NOT a research paper — it's an argument that USES sources. Your voice and analysis should dominate. Sources are evidence for YOUR claims, not the other way around. If you're spending more time summarizing sources than arguing your position, you're doing it wrong.</div>
      `,
      questions: [
        { q: 'A synthesis essay requires using at least how many sources?', options: ['1', '2', '3', 'All provided sources'], answer: 2 },
        { q: 'The most important element of a synthesis essay is:', options: ['The hook', 'A clear, arguable thesis — but this reverses the actual causal relationship', 'Long quotes — a common misconception not supported by the evidence', 'A summary of all sources — but this reverses the actual causal relationship'], answer: 1 },
        { q: '"Quote dumping" refers to: — this is a partial explanation that omits the key mechanism', options: ['Using too few quotes', 'Dropping quotes without analysis or explanation', 'Paraphrasing — this conflates two distinct processes', 'Citing sources correctly — but this reverses the actual causal relationship'], answer: 1 },
        { q: 'Addressing a counterargument in your essay:', options: ['Weakens your argument', 'Strengthens your argument by showing you\'ve considered other perspectives', 'Is never required — though this describes a related but distinct phenomenon', 'Means you agree with the opposition'], answer: 1 },
        { q: 'The CEAC formula stands for: — while plausible, this overgeneralizes without key distinctions', options: ['Cite, Explain, Argue, Conclude', 'Claim, Evidence, Analysis, Connection', 'Context, Evidence, Argument, Claim — this is a partial explanation that omits the key mechanism', 'Compare, Evaluate, Analyze, Critique'], answer: 1 },
        { q: 'In a synthesis essay, your voice should:', options: ['Disappear behind the sources', 'Dominate — sources are evidence for YOUR claims', 'Only appear in the introduction — this misidentifies the primary mechanism responsible', 'Match the tone of Source A — this is a partial explanation that omits the key mechanism'], answer: 1 },
        { q: 'A qualified claim uses language like:', options: ['"Always" and "never"', '"In many cases," "the evidence suggests," and concession phrases', '"Obviously" and "clearly"', '"I think" and "I feel"'], answer: 1 }
      ]
    },

    /* ────────── UNIT 8: Vocabulary & Rhetorical Terms ────────── */
    {
      title: 'Vocabulary & Rhetorical Terms',
      video: '3aGtR_N5AO4', // Fiveable — AP English Language: Rhetorical Analysis Techniques
      content: `
<h2>📖 Key Rhetorical & Literary Vocabulary</h2>
<p><em>Essential terms for passage-based MCQs and the synthesis essay. Your exam also covers Vocabulary Units 7–12 — review those word lists separately.</em></p>

<h3>Rhetorical Appeals (The Aristotelian Triangle)</h3>
<table>
<tr><th>Appeal</th><th>Definition</th><th>Example</th></tr>
<tr><td><strong>Ethos</strong></td><td>Appeal to credibility/character — why should the audience trust the speaker?</td><td>"As a doctor with 20 years of experience..." / Citing reputable sources</td></tr>
<tr><td><strong>Pathos</strong></td><td>Appeal to emotion — making the audience feel something</td><td>Vivid imagery of suffering; personal anecdotes; emotionally charged language</td></tr>
<tr><td><strong>Logos</strong></td><td>Appeal to logic/reason — evidence, facts, data, logical structure</td><td>Statistics, studies, logical cause-and-effect reasoning</td></tr>
</table>

<h3>Rhetorical Devices</h3>
<table>
<tr><th>Device</th><th>Definition</th><th>Effect</th></tr>
<tr><td><strong>Antithesis</strong></td><td>Contrasting ideas in balanced phrases</td><td>"It was the best of times, it was the worst of times" — creates emphasis through contrast</td></tr>
<tr><td><strong>Chiasmus</strong></td><td>Reversed grammatical structure (ABBA)</td><td>"Ask not what your country can do for you — ask what you can do for your country"</td></tr>
<tr><td><strong>Rhetorical question</strong></td><td>Question asked for effect, not expecting an answer</td><td>Engages the audience; implies the answer is obvious</td></tr>
<tr><td><strong>Apostrophe</strong></td><td>Addressing an absent person or abstract idea</td><td>"O Death, where is thy sting?" — creates emotional intensity</td></tr>
<tr><td><strong>Litotes</strong></td><td>Understatement using double negative</td><td>"Not unkind" = kind. Creates subtlety, irony, or understatement</td></tr>
<tr><td><strong>Synecdoche</strong></td><td>Part represents the whole (or whole for part)</td><td>"All hands on deck" (hands = sailors)</td></tr>
<tr><td><strong>Metonymy</strong></td><td>Related term substitutes for the thing itself</td><td>"The White House announced..." (White House = the President/administration)</td></tr>
<tr><td><strong>Zeugma</strong></td><td>One word applies to two others in different senses</td><td>"She broke his car and his heart"</td></tr>
<tr><td><strong>Asyndeton</strong></td><td>Omitting conjunctions</td><td>"We came, we saw, we conquered" — creates speed, urgency, emphasis</td></tr>
<tr><td><strong>Polysyndeton</strong></td><td>Extra conjunctions</td><td>"We ran and jumped and laughed and cried" — creates accumulation, overwhelm</td></tr>
</table>

<h3>Logical Fallacies (Know These)</h3>
<table>
<tr><th>Fallacy</th><th>Definition</th><th>Example</th></tr>
<tr><td><strong>Ad hominem</strong></td><td>Attacking the person, not the argument</td><td>"You can't trust his policy — he's never held a real job"</td></tr>
<tr><td><strong>Straw man</strong></td><td>Misrepresenting an opponent's argument to make it easier to attack</td><td>"My opponent wants to cut defense spending, so clearly he wants America defenseless"</td></tr>
<tr><td><strong>False dilemma</strong></td><td>Presenting only two options when more exist</td><td>"You're either with us or against us"</td></tr>
<tr><td><strong>Slippery slope</strong></td><td>Claiming one event will lead to extreme consequences without evidence</td><td>"If we allow X, next thing you know Y and Z will happen"</td></tr>
<tr><td><strong>Appeal to authority</strong></td><td>Using an irrelevant authority as evidence</td><td>"This famous actor says this medicine works"</td></tr>
<tr><td><strong>Red herring</strong></td><td>Introducing an irrelevant topic to divert attention</td><td>Changing the subject when confronted with a difficult question</td></tr>
</table>

<div class="tip">💡 For the vocabulary MCQs (Q1–20): focus on Units 7–12 definitions and how words are used in context (sentence completions). For passage-based MCQs: knowing these rhetorical terms helps you identify what the writer is doing and why.</div>
      `,
      questions: [
        { q: 'Ethos appeals to: — though this describes a related but distinct phenomenon', options: ['Emotion', 'Logic and data — this is true in isolation but misses the full picture', 'Credibility and character — though this describes a related but distinct phenomenon', 'Fear — this conflates two distinct processes'], answer: 2 },
        { q: 'Antithesis creates emphasis through:', options: ['Repetition', 'Contrasting ideas in balanced phrases', 'Emotional language — this is a partial explanation that omits the key mechanism', 'Statistics — which overlooks the underlying mechanism'], answer: 1 },
        { q: 'A "straw man" fallacy involves: — this misidentifies the primary mechanism responsible', options: ['Using personal attacks', 'Misrepresenting an opponent\'s argument to attack it more easily', 'Presenting only two options — but this conflates correlation with causation in the process', 'Changing the subject — while plausible, this overgeneralizes without key distinctions'], answer: 1 },
        { q: 'Asyndeton (omitting conjunctions) creates a feeling of:', options: ['Slowness and reflection', 'Speed, urgency, and emphasis — while plausible, this overgeneralizes without key distinctions', 'Confusion — but this applies to a separate process', 'Formality — but this applies to a separate process'], answer: 1 },
        { q: 'Chiasmus is a reversed grammatical structure. Which is an example?', options: ['"To be or not to be"', '"Ask not what your country can do for you — ask what you can do for your country"', '"I have a dream" — though this describes a different concept entirely', '"We the People" — though this only applies under specific conditions'], answer: 1 },
        { q: 'A "red herring" fallacy: — but this reverses the actual causal relationship', options: ['Uses emotional appeals', 'Introduces an irrelevant topic to divert attention from the real issue', 'Attacks the person — this is a partial explanation that omits the key mechanism', 'Uses faulty statistics — but evidence shows this explanation is insufficient alone'], answer: 1 },
        { q: 'Pathos is most effective when a writer:', options: ['Cites statistics', 'Uses vivid imagery, personal anecdotes, and emotionally charged language', 'Lists credentials', 'Defines terms carefully'], answer: 1 }
      ]
    },

    /* ────────── UNIT 9: Exam Strategy & Skills-Based Passage Tips ────────── */
    {
      title: 'Exam Strategy & Passage Analysis Tips',
      video: 'eFsxGF_dd1Y', // Dr. Zuba — How to Answer the HARDEST AP Lang Questions (Tone, Style & Rhetoric)
      content: `
<h2>🎯 Exam Strategy & Skills-Based Passage Tips</h2>

<h3>Exam Breakdown</h3>
<table>
<tr><th>Questions</th><th>Topic</th><th>Style</th><th>Points</th></tr>
<tr><td>#1–10</td><td>Vocabulary Units 7–12</td><td>Definitions</td><td>0.5 pt each (5 pts)</td></tr>
<tr><td>#11–20</td><td>Vocabulary Units 7–12</td><td>Sentence Completions</td><td>0.5 pt each (5 pts)</td></tr>
<tr><td>#21–25</td><td>Skills-Based Passage 1</td><td>Passage-based MCQ</td><td>1 pt each (5 pts)</td></tr>
<tr><td>#26–35</td><td>Huck Finn</td><td>Passage-based MCQ</td><td>1 pt each (10 pts)</td></tr>
<tr><td>#36–47</td><td>Huck Finn</td><td>Reading Comp. MCQ</td><td>1 pt each (12 pts)</td></tr>
<tr><td>#48–56</td><td>Skills-Based Passage 2</td><td>Passage-based MCQ</td><td>1 pt each (9 pts)</td></tr>
<tr><td>#57–65</td><td>"Omelas"</td><td>Passage-based MCQ</td><td>1 pt each (9 pts)</td></tr>
<tr><td>#66–75</td><td>Skills-Based Passage 3</td><td>Passage-based MCQ</td><td>1 pt each (10 pts)</td></tr>
<tr><td>#76</td><td>AP Synthesis Essay</td><td>Essay</td><td>35 pts</td></tr>
</table>
<p><strong>Total: 65 pts MCQ + 35 pts Essay = 100 pts</strong></p>

<h3>Strategies for Skills-Based Passages (Q21–25, Q48–56, Q66–75)</h3>
<p>These passages test your ability to analyze rhetoric in unfamiliar texts. Here's how to approach them:</p>
<ol>
<li><strong>Read the questions first</strong> — know what to look for before reading the passage</li>
<li><strong>Identify the rhetorical situation</strong> — Who's speaking? To whom? Why? What's the context?</li>
<li><strong>Mark key rhetorical moves</strong> as you read:
<ul>
<li>Shifts in tone or argument</li>
<li>Use of evidence (what kind?)</li>
<li>Rhetorical devices (repetition, contrast, figurative language)</li>
<li>Transitions that signal the line of reasoning</li>
</ul>
</li>
<li><strong>Eliminate wrong answers</strong> — AP-style MCQs often have two plausible answers; eliminate the clearly wrong ones first</li>
<li><strong>Look for "purpose" answers</strong> — questions like "The author includes X in order to..." want you to explain the rhetorical PURPOSE of a choice</li>
</ol>

<h3>Common Question Types on Passage-Based MCQs</h3>
<ul>
<li><strong>"The author's purpose in paragraph X is to..."</strong> → Connect to thesis/argument</li>
<li><strong>"The tone of the passage is best described as..."</strong> → Identify diction/syntax clues</li>
<li><strong>"The author uses [device] in order to..."</strong> → Explain the rhetorical effect</li>
<li><strong>"Which of the following best describes the author's claim?"</strong> → Find the thesis or sub-claim</li>
<li><strong>"The relationship between paragraphs X and Y is..."</strong> → Identify the organizational strategy</li>
<li><strong>"The evidence in lines X–Y serves to..."</strong> → Explain how evidence supports a claim</li>
</ul>

<h3>Time Management</h3>
<ul>
<li><strong>Vocabulary (Q1–20):</strong> ~10 minutes — these should be quick if you've studied the units</li>
<li><strong>Passage-based MCQs (Q21–75):</strong> ~45 minutes — spend about 8–10 minutes per passage</li>
<li><strong>Essay (Q76):</strong> ~40 minutes — 10 min planning, 25 min writing, 5 min reviewing</li>
<li><strong>Don't get stuck:</strong> If a question is taking too long, mark it and move on. Come back to it.</li>
</ul>

<h3>Essay Quick-Reference Checklist</h3>
<ul>
<li>☐ Clear, arguable thesis in the introduction</li>
<li>☐ At least 3 sources used and cited</li>
<li>☐ Each body paragraph: claim → evidence → analysis → connection</li>
<li>☐ At least one counterargument addressed</li>
<li>☐ Transitions between paragraphs</li>
<li>☐ Conclusion that synthesizes (not just summarizes)</li>
<li>☐ Varied sentence structure and precise diction</li>
<li>☐ Proofread for clarity</li>
</ul>

<div class="tip">💡 The exam is worth 100 points total: 65 MCQ + 35 essay. The essay alone is worth more than a third of your grade — don't rush it. A strong essay can compensate for missed MCQs, but not the other way around.</div>
      `,
      questions: [
        { q: 'Vocabulary questions (Q1–20) are worth:', options: ['1 point each — this conflates two distinct processes', '0.5 points each', '2 points each — but this describes the opposite relationship', '0.25 points each — though this describes a different concept entirely'], answer: 1 },
        { q: 'The synthesis essay is worth what percentage of the total exam?', options: ['10%', '25% — a common misconception not supported by the evidence', '35% — a common misconception not supported by the evidence', '50% — a common misconception not supported by the evidence'], answer: 2 },
        { q: 'When approaching a skills-based passage, you should first:', options: ['Write an essay about it', 'Read the questions to know what to look for', 'Skip to the next section — but this reverses the actual causal relationship', 'Count the paragraphs — while plausible, this overgeneralizes without key distinctions'], answer: 1 },
        { q: '"The author includes X in order to..." questions ask about:', options: ['Grammar', 'The rhetorical PURPOSE of a writing choice', 'Historical context — this is a partial explanation that omits the key mechanism', 'The author\'s biography — this misidentifies the primary mechanism responsible'], answer: 1 },
        { q: 'For the synthesis essay, recommended time allocation is approximately:', options: ['5 min planning, 35 min writing', '10 min planning, 25 min writing, 5 min reviewing', '20 min planning, 20 min writing', '40 min writing, no planning'], answer: 1 }
      ]
    }
  ]
};
