var BUSINESS_LAW_DATA = {
  title: 'Business Law I',
  shortTitle: 'BUS 202',
  description: 'Law & Legal Reasoning, Courts, Jurisdiction, and Alternative Dispute Resolution.',
  icon: '⚖️',
  courseName: 'BUS 202 Business Law I — Exam #1 Review',
  units: [

    /* ────────── UNIT 1: Law & Legal Reasoning ────────── */
    {
      title: 'Law & Legal Reasoning',
      video: 'Y2p-vo2VjpI', // Business Law Chapter 1 — Kevin Litz
      content: `
<h2>⚖️ Law & Legal Reasoning</h2>

<h3>Functions of Law</h3>
<ul>
<li><strong>Stability, predictability, and continuity</strong> in society</li>
<li><strong>Identifies conduct</strong> that is legally right and legally wrong</li>
<li><strong>Establishes legal rights and legal duties</strong> (obligations) consistent with societal values</li>
</ul>

<h3>Definition of Law</h3>
<p>A <strong>set of enforceable rules</strong> that govern relationships between and among individuals, businesses, and government, rooted in the U.S. Constitutional principle of <strong>Due Process</strong>.</p>

<h3>Business Activities & The Legal Environment</h3>
<ul>
<li><strong>General Rule:</strong> Laws and government regulations affect nearly <em>all</em> business operations</li>
<li><strong>General Rule:</strong> A single business transaction can be impacted by <em>multiple</em> areas of law</li>
<li><strong>Conclusion:</strong> Knowledge of the law is essential for making business decisions that reduce risk of liability and are ethical</li>
</ul>

<h3>Classifications of Law</h3>
<table>
<tr><th>Classification</th><th>Type A</th><th>Type B</th></tr>
<tr><td><strong>By Function</strong></td><td><strong>Substantive Law</strong> = "substance" = legal rights and duties</td><td><strong>Procedural Law</strong> = "procedure" = the process/steps/rules that must be followed before a court examines any substantive claim</td></tr>
<tr><td><strong>By Party</strong></td><td><strong>Civil Law</strong> = governs private persons and entities (business & government)</td><td><strong>Criminal Law</strong> = wrongs against society as a whole</td></tr>
<tr><td><strong>Emerging</strong></td><td colspan="2"><strong>Cyber Law</strong> = laws governing transactions conducted via the internet (new and emerging)</td></tr>
</table>

<div class="tip">💡 Remember: Procedural law is the "gatekeeper" — a court won't even look at the substance of your case unless proper procedure has been followed first.</div>
      `,
      questions: [
        { q: 'Which of the following is NOT a function of law?', options: ['Provide stability and predictability', 'Establish legal rights and duties', 'Maximize corporate profits', 'Identify legally right and wrong conduct'], answer: 2 },
        { q: 'Law is defined as a set of enforceable rules rooted in which constitutional principle?', options: ['Equal Protection', 'Due Process', 'Freedom of Speech', 'Commerce Clause'], answer: 1 },
        { q: 'A single business transaction can be impacted by:', options: ['Only one area of law', 'Multiple areas of law', 'Only federal law', 'Only state law'], answer: 1 },
        { q: 'Substantive law refers to:', options: ['The process and steps courts must follow', 'Legal rights and legal duties', 'Only criminal matters', 'Court filing procedures'], answer: 1 },
        { q: 'Procedural law governs:', options: ['The substance of legal rights', 'The process/steps that must be followed before a court examines a substantive claim', 'Only civil matters', 'Business contracts exclusively'], answer: 1 },
        { q: 'Civil law governs disputes between:', options: ['The government and criminals', 'Private persons and entities', 'Only businesses', 'Only individuals'], answer: 1 },
        { q: 'Criminal law addresses:', options: ['Disputes between businesses', 'Private contract issues', 'Wrongs against society as a whole', 'Internet transactions'], answer: 2 },
        { q: 'Cyber law is best described as:', options: ['The oldest area of law', 'Laws governing internet transactions — a new and emerging area', 'Only criminal law applied to computers', 'International trade law'], answer: 1 }
      ]
    },

    /* ────────── UNIT 2: Sources of Law ────────── */
    {
      title: 'Sources of Law',
      video: '28eufpJrM4Q', // Business Law 1.3: The Sources of Law
      content: `
<h2>📜 Sources of Law</h2>
<p>U.S. law comes from <strong>Primary Sources</strong> (binding) and <strong>Secondary Sources</strong> (non-binding but persuasive).</p>

<h3>Primary Sources of Law</h3>
<p>These are <strong>binding legal authority</strong> that must be followed. Failure to comply leads to <strong>liability</strong>.</p>

<table>
<tr><th>Source</th><th>Description</th><th>Key Details</th></tr>
<tr><td><strong>Constitution</strong></td><td>Written organization, powers, and limits of government</td><td>Art I = Legislative (writes laws), Art II = Executive (enforces laws), Art III = Judiciary (interprets laws). Limits are in the Bill of Rights.</td></tr>
<tr><td><strong>Statutes</strong></td><td>Laws enacted by the legislative branch</td><td>Written by Congress (federal) or state legislatures</td></tr>
<tr><td><strong>Administrative Law</strong></td><td>Rules & regulations by administrative agencies</td><td>Agencies have rulemaking, investigatory, and adjudicatory powers. Key case: <em>Loper Bright Enterprises v. Raimondo</em> (2024)</td></tr>
<tr><td><strong>Case Law</strong></td><td>Judicial resolution of legal disputes (judge-made law)</td><td>Important function: to <strong>interpret</strong> the other primary sources of law</td></tr>
</table>

<h3>Constitutional Structure</h3>
<ul>
<li><strong>Article VI — Supremacy Clause:</strong> Resolves contradictions between state & federal law <em>in favor of federal law</em></li>
<li><strong>10th Amendment:</strong> Gives states power to act in areas not delegated to the federal government</li>
</ul>

<h3>Secondary Sources of Law</h3>
<p>NOT binding legal authority. Their function is to <strong>explain</strong> primary sources. They can have <strong>persuasive power</strong>.</p>
<ul>
<li><strong>Legal Encyclopedias</strong> — summarize legal principles by topic; may include case law annotations</li>
<li><strong>Restatements of Law</strong> — individual texts on specific topics (e.g., Restatement of Contract Law, Restatement of Tort Law)</li>
</ul>

<h3>How to Find Primary Sources — Legal Citations</h3>
<table>
<tr><th>Source</th><th>Citation Format</th><th>Example</th></tr>
<tr><td>Constitution</td><td>Document, Article/Amendment, Section</td><td>U.S. Const. amend I</td></tr>
<tr><td>Statutes</td><td>Title, Section, Year</td><td>17 U.S.C. § 107 (2012)</td></tr>
<tr><td>Administrative Law</td><td>Title, Section, Year</td><td>7 C.F.R. § 319.76 (1999)</td></tr>
<tr><td>Case Law</td><td>Parties, Volume, Page, Court, Year</td><td>Smith v. Jones, 42 F.2d 191, 3rd Cir. (2010)</td></tr>
</table>

<div class="tip">💡 Primary sources = binding = must follow. Secondary sources = persuasive = helpful but not required. Know the difference!</div>
      `,
      questions: [
        { q: 'Primary sources of law are:', options: ['Persuasive but not binding', 'Binding legal authority that must be followed', 'Only advisory', 'Only applicable in federal courts'], answer: 1 },
        { q: 'Which Article of the Constitution establishes the Legislative branch?', options: ['Article I', 'Article II', 'Article III', 'Article VI'], answer: 0 },
        { q: 'The Supremacy Clause (Article VI) resolves conflicts between state and federal law by:', options: ['Favoring state law', 'Favoring federal law', 'Requiring a vote', 'Deferring to the President'], answer: 1 },
        { q: 'The 10th Amendment provides that:', options: ['Federal law is always supreme', 'States have power to act in areas not delegated to the federal government', 'Only Congress can make laws', 'Courts interpret all law'], answer: 1 },
        { q: 'Case law serves an important function to:', options: ['Replace statutes', 'Interpret the other primary sources of law', 'Override the Constitution', 'Create administrative agencies'], answer: 1 },
        { q: 'Administrative agencies have which powers?', options: ['Only rulemaking', 'Rulemaking, investigatory, and adjudicatory', 'Only adjudicatory', 'Only investigatory'], answer: 1 },
        { q: 'Secondary sources of law include:', options: ['Statutes and constitutions', 'Legal encyclopedias and Restatements of Law', 'Administrative regulations', 'Case law decisions'], answer: 1 },
        { q: 'A proper citation for a federal statute would be:', options: ['U.S. Const. Art III', 'Smith v. Jones, 42 F.2d 191 (2010)', '17 U.S.C. § 107 (2012)', 'Restatement of Tort Law § 5'], answer: 2 }
      ]
    },

    /* ────────── UNIT 3: Common Law & Stare Decisis ────────── */
    {
      title: 'Common Law & Stare Decisis',
      video: '3zJC3sqHaUA', // How Courts Make Decisions: Stare Decisis and Precedent
      content: `
<h2>🏛️ Common Law Tradition & Stare Decisis</h2>

<h3>Origins of Common Law</h3>
<ul>
<li>U.S. law originated in <strong>England</strong></li>
<li><strong>1066:</strong> William the Conqueror invaded England and unified the country under his rule using the <strong>court system</strong></li>
<li>A common approach to law developed within the King's Court — today "Common Law" means <strong>decisions by judges/courts</strong> as opposed to legislative law</li>
<li><strong>Courts of Law vs. Courts of Equity</strong> — the U.S. has <strong>merged</strong> the concepts of "law" and "equity"</li>
</ul>

<h3>Doctrine of Stare Decisis</h3>
<p><strong>Stare Decisis</strong> means <em>"to stand on decided cases."</em></p>

<table>
<tr><th>Situation</th><th>Rule</th><th>System Value</th></tr>
<tr><td><strong>Similar cases</strong></td><td>Must be decided in similar ways — judges base decisions on principles from prior similar cases</td><td>Stable & Predictable</td></tr>
<tr><td><strong>Different cases</strong></td><td>Should be decided differently</td><td>Fair</td></tr>
<tr><td><strong>New cases</strong></td><td>Precedent is established & becomes authority for later similar cases</td><td>Continuous</td></tr>
</table>

<p>Stare Decisis gives us a <strong>stable, predictable, continuous</strong> judicial system rooted in <strong>fairness</strong> — not random or chaotic.</p>

<h3>Two Key Aspects of Stare Decisis</h3>
<ol>
<li><strong>Lower courts are bound</strong> by decisions of higher courts</li>
<li><strong>Precedent must be followed</strong> and cannot be overturned UNLESS there are <strong>Compelling Reasons</strong></li>
</ol>

<h3>Compelling Reasons to Overturn Precedent</h3>
<ul>
<li><strong>Changes in Society</strong></li>
<li><strong>Technological Advancements</strong></li>
<li>Other considerations per <em>Dobbs v. Jackson Women's Health Organization</em> (2022)</li>
</ul>

<h3>Landmark Example: Changes in Society</h3>
<table>
<tr><th>Case</th><th>Year</th><th>Holding</th></tr>
<tr><td><strong>Plessy v. Ferguson</strong></td><td>1896</td><td>"Separate but equal" is equal under the law → discrimination based on race became lawful</td></tr>
<tr><td><strong>Brown v. Board of Education</strong></td><td>1954</td><td>Overturned Plessy — "Separate but equal is NOT equal under the law." Society had changed and acknowledged the injustice of race discrimination.</td></tr>
</table>

<h3>How to Read Case Law</h3>
<ul>
<li><strong>Parties:</strong> Plaintiff/Petitioner and Defendant/Respondent</li>
<li><strong>Facts:</strong> Summary of the legal dispute</li>
<li><strong>Procedural Posture:</strong> What court issued the decision, how did case get there</li>
<li><strong>Legal Issue:</strong> Question of law before the court</li>
<li><strong>Court's Holding:</strong> The answer to the legal issue (identifies the winning party)</li>
<li><strong>Legal Reasoning:</strong> How & why the court ruled as it did</li>
<li><strong>Rule of Law:</strong> Primary source of law governing the case</li>
</ul>

<div class="tip">💡 Stare Decisis = stability + fairness. Precedent can ONLY be overturned for compelling reasons (societal change, technology). This is why Brown v. Board could overturn Plessy.</div>
      `,
      questions: [
        { q: 'U.S. common law originated in:', options: ['France', 'Germany', 'England', 'Rome'], answer: 2 },
        { q: '"Stare Decisis" means:', options: ['Let the decision stand', 'To stand on decided cases', 'The judge decides', 'New law prevails'], answer: 1 },
        { q: 'Under stare decisis, similar cases must be:', options: ['Decided differently each time', 'Decided in similar ways based on prior principles', 'Sent to the Supreme Court', 'Dismissed automatically'], answer: 1 },
        { q: 'Lower courts are bound by:', options: ['Decisions of courts at the same level', 'Decisions of higher courts', 'Only Supreme Court decisions', 'Secondary sources of law'], answer: 1 },
        { q: 'Precedent can be overturned when:', options: ['A new judge is appointed', 'There are compelling reasons such as changes in society', 'The losing party appeals', 'A new statute is written'], answer: 1 },
        { q: 'Plessy v. Ferguson (1896) held that:', options: ['Separate but equal is NOT equal', 'Separate but equal is equal under the law', 'Segregation is always unconstitutional', 'Only federal schools must integrate'], answer: 1 },
        { q: 'Brown v. Board of Education (1954) overturned Plessy because:', options: ['The Constitution was amended', 'Society had changed and acknowledged the injustice of race discrimination', 'Congress passed new legislation', 'The President issued an executive order'], answer: 1 },
        { q: 'The "Court\'s Holding" in a case refers to:', options: ['The facts of the dispute', 'The answer to the legal issue — identifies who wins', 'The procedural history', 'The rule of law cited'], answer: 1 }
      ]
    },

    /* ────────── UNIT 4: Courts & Jurisdiction ────────── */
    {
      title: 'Courts & Jurisdiction',
      video: '2R01lhL2zAE', // Constitution Hall Pass: Marbury v. Madison
      content: `
<h2>🏛️ Courts & Jurisdiction</h2>

<h3>Court Systems in the U.S.</h3>
<p>The U.S. has <strong>52 court systems</strong> — one federal system and one for each of the 50 states plus the District of Columbia.</p>

<h3>Second Function of Case Law: Judicial Review</h3>
<p><strong>Judicial Review</strong> = the power of courts to determine whether a law or government action is constitutional.</p>
<p>Established in <strong>Marbury v. Madison</strong> (1803) — the U.S. Supreme Court held that it has the power to review acts of Congress and declare them unconstitutional.</p>

<h3>Basic Judicial Requirements</h3>
<p>Three requirements must be met before a court can hear a case:</p>

<table>
<tr><th>Requirement</th><th>Definition</th><th>Key Details</th></tr>
<tr><td><strong>Venue</strong></td><td>The proper <em>location</em> of a court in a forum state</td><td>Determined by statutory law. Civil = where defendant resides or does business. Criminal = where crime occurred.</td></tr>
<tr><td><strong>Standing</strong></td><td>Constitutional requirement that plaintiff has a legal interest in the case</td><td>The plaintiff must be the party with the injury or loss. Can sue on behalf of minors or incompetent persons.</td></tr>
<tr><td><strong>Jurisdiction</strong></td><td>The court's authority to hear the case</td><td>Two types required: Personal Jurisdiction AND Subject Matter Jurisdiction</td></tr>
</table>

<h3>Types of Jurisdiction</h3>

<h4>Subject Matter Jurisdiction</h4>
<p>Limitations on the <strong>types of cases</strong> a court can hear.</p>
<table>
<tr><th>Type</th><th>Meaning</th><th>Example</th></tr>
<tr><td><strong>General</strong></td><td>Can hear a broad array of cases</td><td>State trial court, federal district court</td></tr>
<tr><td><strong>Limited</strong></td><td>Can only hear specific types of cases</td><td>Probate court (wills/estates), Bankruptcy court</td></tr>
<tr><td><strong>Original</strong></td><td>Where lawsuits begin and trials occur (court of first instance)</td><td>Trial courts</td></tr>
<tr><td><strong>Appellate</strong></td><td>Reviews decisions of lower courts</td><td>Courts of appeals</td></tr>
</table>

<h4>Federal Subject Matter Jurisdiction</h4>
<ul>
<li><strong>Federal Question:</strong> Cases arising under the Constitution, federal laws, or treaties</li>
<li><strong>Diversity of Citizenship:</strong> Disputes between citizens of different states (amount in controversy typically exceeds $75,000)</li>
<li><strong>Exclusive Jurisdiction:</strong> Only federal courts can hear certain cases</li>
<li><strong>Concurrent Jurisdiction:</strong> Both federal and state courts can hear the case</li>
</ul>

<div class="tip">💡 Both Personal Jurisdiction AND Subject Matter Jurisdiction are required. Missing either = the court cannot hear the case.</div>
      `,
      questions: [
        { q: 'How many court systems exist in the United States?', options: ['1 (federal only)', '50 (one per state)', '52 (federal + 50 states + D.C.)', '100'], answer: 2 },
        { q: 'Judicial Review was established by:', options: ['Brown v. Board of Education', 'Marbury v. Madison (1803)', 'Plessy v. Ferguson', 'Loper Bright v. Raimondo'], answer: 1 },
        { q: 'Judicial Review is the power of courts to:', options: ['Make new laws', 'Determine whether a law or government action is constitutional', 'Enforce executive orders', 'Appoint judges'], answer: 1 },
        { q: 'The three basic judicial requirements are:', options: ['Venue, Standing, and Jurisdiction', 'Judge, Jury, and Lawyer', 'Filing, Service, and Trial', 'Statute, Regulation, and Case Law'], answer: 0 },
        { q: 'Venue refers to:', options: ['The court\'s authority to hear a case', 'The proper location of a court in a forum state', 'The plaintiff\'s legal interest', 'The type of case being heard'], answer: 1 },
        { q: 'Standing requires that:', options: ['The defendant must appear in court', 'The plaintiff must have a legal interest — they must be the injured party', 'Both parties must be residents of the same state', 'The case involves federal law'], answer: 1 },
        { q: 'A court of general jurisdiction can:', options: ['Only hear bankruptcy cases', 'Hear a broad array of cases', 'Only hear appeals', 'Only hear criminal cases'], answer: 1 },
        { q: 'Federal question jurisdiction applies to cases involving:', options: ['Only state constitutional issues', 'Cases arising under the U.S. Constitution, federal laws, or treaties', 'Only diversity of citizenship disputes', 'Only criminal matters'], answer: 1 }
      ]
    },

    /* ────────── UNIT 5: Personal Jurisdiction & Minimum Contacts ────────── */
    {
      title: 'Personal Jurisdiction & Minimum Contacts',
      video: '3clkfDm3vGw', // Module 2.1: Minimum Contacts
      content: `
<h2>🌐 Personal Jurisdiction & Minimum Contacts</h2>

<h3>Personal Jurisdiction</h3>
<p>The court's authority over the <strong>parties</strong> involved in the lawsuit. For residents, jurisdiction is automatic. For <strong>non-residents</strong>, the court must use a <strong>Long-Arm Statute</strong>.</p>

<h3>Long-Arm Statutes</h3>
<p>Every state has a long-arm statute that allows courts to reach non-resident defendants who have <strong>sufficient contacts</strong> with the forum state. Two-prong analysis:</p>
<ol>
<li><strong>Statutory Authority:</strong> Does the long-arm statute authorize jurisdiction?</li>
<li><strong>Due Process:</strong> Does exercising jurisdiction comply with constitutional due process standards?</li>
</ol>

<h3>Minimum Contacts Test (Due Process)</h3>
<p>The defendant must have <strong>"certain minimum contacts"</strong> with the forum state such that the lawsuit does not offend <strong>"traditional notions of fair play and substantial justice."</strong></p>

<h4>Five Factors for Minimum Contacts:</h4>
<ol>
<li><strong>Quantity</strong> of contacts</li>
<li><strong>Nature and quality</strong> of contacts</li>
<li><strong>Source and connection</strong> of the cause of action to the contacts</li>
<li><strong>Interest of the forum state</strong></li>
<li><strong>Convenience</strong> to the parties</li>
</ol>

<h3>📋 Case 2.1: Southern Prestige v. Independence Plating Corp.</h3>
<p><em>Court of Appeals of North Carolina, 690 S.E.2d 768 (2010)</em></p>
<table>
<tr><th>Element</th><th>Details</th></tr>
<tr><td><strong>Facts</strong></td><td>Independence Plating (NJ corporation) anodized machined parts for Southern Prestige (NC company). 32 purchase orders between July 2007–April 2008. Defective anodizing caused parts to be rejected. Southern Prestige sued in NC for breach of contract.</td></tr>
<tr><td><strong>Legal Issue</strong></td><td>Does NC have personal jurisdiction over a NJ defendant?</td></tr>
<tr><td><strong>Holding</strong></td><td><strong>Yes.</strong> Defendant had sufficient minimum contacts with NC — 32 transactions, $21,018.70 in invoices, ongoing business relationship. Defendant "purposefully availed" itself of doing business in NC.</td></tr>
<tr><td><strong>Rule of Law</strong></td><td>NC Long-Arm Statute + Due Process (minimum contacts)</td></tr>
<tr><td><strong>Key Takeaway</strong></td><td>Ongoing business relationships with frequent transactions create sufficient minimum contacts for personal jurisdiction.</td></tr>
</table>

<h3>📋 Case 2.2: Gucci America v. Wang Huoqing</h3>
<p><em>U.S. District Court, N.D. California, 2011 WL 30972 (2011)</em></p>
<table>
<tr><th>Element</th><th>Details</th></tr>
<tr><td><strong>Facts</strong></td><td>Wang Huoqing (Chinese resident) operated websites selling counterfeit Gucci products. Gucci hired a CA investigator who purchased a fake wallet. Gucci sued in federal court in CA.</td></tr>
<tr><td><strong>Legal Issue</strong></td><td>Does a CA court have personal jurisdiction over a foreign defendant who sells goods online?</td></tr>
<tr><td><strong>Holding</strong></td><td><strong>Yes.</strong> Interactive websites selling goods to forum-state residents satisfy the minimum contacts/purposeful availment test. Default judgment entered against Wang Huoqing.</td></tr>
<tr><td><strong>Rule of Law</strong></td><td>CA Long-Arm Statute + <strong>Sliding Scale Analysis</strong></td></tr>
</table>

<h3>Internet Jurisdiction: Sliding Scale Analysis</h3>
<table>
<tr><th>Website Type</th><th>Jurisdiction?</th><th>Description</th></tr>
<tr><td><strong>Passive Website</strong></td><td>❌ No — Insufficient contacts</td><td>Only displays information; no interactivity</td></tr>
<tr><td><strong>Interactive Website</strong></td><td>⚠️ Maybe — depends on level of interactivity</td><td>Allows some user interaction; analyzed on a sliding scale</td></tr>
<tr><td><strong>Fully Interactive / E-Commerce</strong></td><td>✅ Yes — Sufficient contacts</td><td>Conducts business, sells products to forum residents</td></tr>
</table>

<h3>In Rem Jurisdiction</h3>
<p>Another way for a forum court to obtain authority over a non-resident defendant: when the defendant <strong>owns property</strong> (has a property interest) in the forum state.</p>

<div class="tip">💡 For the exam: Know both cases! Southern Prestige = traditional minimum contacts through ongoing business. Gucci = internet jurisdiction using the sliding scale analysis. Long-arm statutes exist in every state and work the same way.</div>
      `,
      questions: [
        { q: 'Personal jurisdiction refers to:', options: ['The types of cases a court can hear', 'The court\'s authority over the parties', 'Where the court is located', 'Whether the plaintiff has standing'], answer: 1 },
        { q: 'A Long-Arm Statute allows a court to:', options: ['Extend the length of a trial', 'Reach non-resident defendants who have sufficient contacts with the forum state', 'Override federal jurisdiction', 'Dismiss cases automatically'], answer: 1 },
        { q: 'The minimum contacts test requires that the lawsuit does not offend:', options: ['The judge\'s personal views', 'Traditional notions of fair play and substantial justice', 'The defendant\'s business model', 'Federal statutory requirements'], answer: 1 },
        { q: 'In Southern Prestige v. Independence Plating, the court found jurisdiction because:', options: ['The defendant advertised in NC', 'The defendant had an office in NC', 'There were 32 purchase orders and an ongoing business relationship', 'NC had exclusive jurisdiction'], answer: 2 },
        { q: 'In Gucci v. Wang Huoqing, the court applied the:', options: ['Federal Question doctrine', 'Diversity of Citizenship test', 'Sliding Scale Analysis for internet jurisdiction', 'In Rem Jurisdiction analysis'], answer: 2 },
        { q: 'Under the sliding scale analysis, passive websites:', options: ['Always create jurisdiction', 'Do NOT create sufficient contacts for jurisdiction', 'Are illegal', 'Must register with the state'], answer: 1 },
        { q: 'Interactive e-commerce websites that sell to forum residents:', options: ['Never create jurisdiction', 'May create sufficient contacts for personal jurisdiction', 'Only create jurisdiction in federal court', 'Require congressional approval for jurisdiction'], answer: 1 },
        { q: 'In Rem Jurisdiction is available when the non-resident defendant:', options: ['Has a lawyer in the forum state', 'Owns property in the forum state', 'Has visited the forum state', 'Is a U.S. citizen'], answer: 1 },
        { q: '"Purposeful availment" means the defendant:', options: ['Accidentally conducted business in the forum state', 'Purposefully availed itself of the privilege of conducting activities in the forum state', 'Was forced to do business in the forum state', 'Had no connection to the forum state'], answer: 1 },
        { q: 'Long-Arm Statutes:', options: ['Only exist in California and New York', 'Exist in every state and operate the same way', 'Are federal statutes only', 'Have been declared unconstitutional'], answer: 1 }
      ]
    },

    /* ────────── UNIT 6: Court Structure & Alternative Dispute Resolution ────────── */
    {
      title: 'Court Structure & ADR',
      video: 'B3p6JcH0-9g', // Business Law Unit 3 Court Systems
      content: `
<h2>🏛️ Federal & State Court Structure and ADR</h2>

<h3>State Court Structure</h3>
<ul>
<li><strong>Trial Courts</strong> (courts of original jurisdiction) — where lawsuits begin, trials take place, evidence is presented</li>
<li><strong>Appellate Courts</strong> (courts of appellate jurisdiction) — review decisions of lower courts</li>
<li>Know the difference between <strong>original</strong> and <strong>appellate</strong> subject matter jurisdiction</li>
</ul>

<h3>Federal Court Structure</h3>
<table>
<tr><th>Level</th><th>Court Name</th><th>Function</th></tr>
<tr><td><strong>Trial Level</strong></td><td>U.S. District Court</td><td>Court of <strong>original</strong> subject matter jurisdiction — many in each state</td></tr>
<tr><td><strong>Intermediate Appellate</strong></td><td>Circuit Court of Appeals</td><td>Court of <strong>appellate</strong> subject matter jurisdiction — reviews district court decisions</td></tr>
<tr><td><strong>Highest Court</strong></td><td>U.S. Supreme Court</td><td>The <strong>only court</strong> that possesses BOTH original AND appellate jurisdiction</td></tr>
</table>

<p><strong>Key fact:</strong> There are <em>many</em> U.S. District Courts in each state, but that is NOT the case at the intermediate appellate or supreme court level.</p>

<h3>LICRA v. Yahoo, Inc. (2004)</h3>
<p><strong>Practical lessons:</strong></p>
<ul>
<li>International business contracts should include <strong>choice of law</strong> and <strong>forum clauses</strong></li>
<li>These clauses specify which country's laws apply and which courts have jurisdiction</li>
<li>Without such clauses, businesses face unpredictable jurisdictional outcomes in international disputes</li>
</ul>

<h3>Alternative Dispute Resolution (ADR)</h3>
<p>Three forms of ADR — alternatives to going to court:</p>

<table>
<tr><th>Method</th><th>How It Works</th><th>Who Decides?</th></tr>
<tr><td><strong>Negotiation (& Settlement)</strong></td><td>Parties resolve the dispute themselves and draft a Settlement Agreement for court adoption</td><td>The <strong>parties</strong></td></tr>
<tr><td><strong>Mediation</strong></td><td>A <strong>mediator</strong> assists the process. Parties still resolve the dispute and draft a Settlement Agreement</td><td>The <strong>parties</strong> (mediator facilitates)</td></tr>
<tr><td><strong>Arbitration</strong></td><td>Neutral third party (<strong>Arbitrator</strong>) decides the resolution. Formal and trial-like — evidence and witnesses presented but <strong>no jury</strong></td><td>The <strong>Arbitrator</strong> (not the parties)</td></tr>
</table>

<h3>📋 Cleveland Construction v. Levco Construction</h3>
<p><em>Court of Appeals of Texas (2012)</em></p>
<ul>
<li>The appellate court <strong>enforced the arbitration agreement</strong> in the hiring contract between Cleveland and Levco</li>
<li>The trial court made an <strong>error of law</strong> when it denied Cleveland's request to dismiss Levco's lawsuit and order arbitration</li>
<li><strong>Key takeaway:</strong> Courts will enforce arbitration agreements in contracts</li>
</ul>

<div class="tip">💡 For the exam: Know all 3 ADR forms and who decides in each. Arbitration = the arbitrator decides (not the parties). Mediation and Negotiation = the parties decide. Also remember Cleveland Construction — courts enforce arbitration clauses.</div>
      `,
      questions: [
        { q: 'U.S. District Courts are courts of:', options: ['Appellate jurisdiction only', 'Original subject matter jurisdiction', 'Both original and appellate jurisdiction', 'Limited jurisdiction only'], answer: 1 },
        { q: 'Which is the ONLY court with both original and appellate jurisdiction?', options: ['U.S. District Court', 'Circuit Court of Appeals', 'U.S. Supreme Court', 'State Trial Court'], answer: 2 },
        { q: 'Circuit Courts of Appeals review decisions from:', options: ['The Supreme Court', 'U.S. District Courts', 'State courts only', 'Administrative agencies only'], answer: 1 },
        { q: 'In negotiation, who resolves the dispute?', options: ['A judge', 'An arbitrator', 'The parties themselves', 'A mediator'], answer: 2 },
        { q: 'In mediation, the mediator\'s role is to:', options: ['Decide the outcome', 'Assist the parties — but the parties resolve the dispute', 'Represent one party', 'Enforce the judgment'], answer: 1 },
        { q: 'In arbitration, the resolution is decided by:', options: ['The parties', 'A judge and jury', 'A neutral third party (the Arbitrator)', 'The mediator'], answer: 2 },
        { q: 'Arbitration is described as:', options: ['Informal and casual', 'Formal and trial-like with evidence and witnesses but no jury', 'Identical to a regular trial', 'A private conversation between parties'], answer: 1 },
        { q: 'In Cleveland Construction v. Levco Construction, the court held that:', options: ['Arbitration agreements are unenforceable', 'The trial court correctly denied arbitration', 'The trial court erred — arbitration agreements in contracts must be enforced', 'ADR is unconstitutional'], answer: 2 },
        { q: 'International business contracts should include:', options: ['Only price terms', 'Choice of law and forum clauses', 'Only the names of the parties', 'A requirement for jury trial'], answer: 1 },
        { q: 'There are many U.S. District Courts in each state, but:', options: ['There are also many Circuit Courts of Appeals per state', 'That is NOT the case at the appellate or Supreme Court level', 'Each state has its own Supreme Court equivalent', 'District Courts only exist in large states'], answer: 1 }
      ]
    }
  ]
};
