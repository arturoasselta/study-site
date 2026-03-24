var HISTORY_DATA = {
  title: 'US History',
  shortTitle: 'History',
  description: 'Colonial era through modern America — key events, people & themes.',
  icon: '📜',
  courseName: 'US History 2nd Trimester Honors Exam Review',
  units: [
    /* ────────── UNIT 1: Colonial America ────────── */
    {
      video: 'o69TvQqyGdg', // CrashCourse US History #2: Colonizing America
      title: 'Colonial America (1492–1763)',
      content: `
<h2>🏛️ Colonial America (1492–1763)</h2>

<h3>The Age of Exploration & European Context</h3>
<ul>
<li><strong>The Columbian Exchange (1492+)</strong> — Columbus's voyages initiated the transfer of people, plants, animals, and diseases between Europe and the Americas. Revolutionized both continents but devastated Native populations through disease.</li>
<li><strong>The Treaty of Tordesillas (1494)</strong> — Treaty between Spain and Portugal dividing newly discovered lands in the Atlantic and beyond. Gave Spain most of the Americas; Portugal got Brazil and Africa.</li>
<li><strong>The Black Legend</strong> — Exaggerated accounts of Spanish cruelty in the Americas (particularly by other European powers). Shaped European perceptions of Spain as uniquely brutal.</li>
<li><strong>Pre-Colonization Context</strong>
<ul>
<li><strong>The Protestant Reformation</strong> — Martin Luther and others challenged Catholic authority (1517+). Created religious conflict in Europe and competition for colonies among different Christian sects.</li>
<li><strong>The Spanish Armada (1588)</strong> — Spain's failed invasion fleet against England. Spain defeated; England emerged as a naval power capable of challenging Spain's dominance.</li>
<li><strong>Joint Stock Company</strong> — Business model where investors pooled capital to fund colonial ventures (like the Virginia Company). Lower risk for individuals; became the model for English colonization.</li>
</ul>
</li>
</ul>

<h3>Colonial Founding and Development</h3>
<p><strong>Reasons for Founding:</strong> Gold and spices (economic), Converting natives to Christianity (religious), National power and prestige (political)</p>
<p><strong>Economic, Political, and Social Development varied by region:</strong></p>
<table>
<tr><th>Region</th><th>Economy</th><th>Politics</th><th>Society</th></tr>
<tr><td><strong>New England</strong></td><td>Fishing, lumber, shipbuilding, trade</td><td>Town meetings; Congregational church influence</td><td>Puritan religious community; smaller farms; few enslaved people</td></tr>
<tr><td><strong>Middle Colonies</strong></td><td>Grain, trade, diverse</td><td>Proprietary governance; religious tolerance</td><td>Religiously diverse; more egalitarian; skilled trades</td></tr>
<tr><td><strong>Southern Colonies</strong></td><td>Tobacco, rice, indigo plantations</td><td>House of Burgesses; planter aristocracy</td><td>Large plantations; enslaved labor; rigid class structure</td></tr>
</table>

<h3>Colonial Life & Conflict</h3>
<ul>
<li><strong>The Barbados Slave Codes (1664+)</strong> — Laws in Barbados codifying slavery as hereditary, racial, and permanent. Model for slave codes throughout English North America. Legalized dehumanization.</li>
<li><strong>The Mayflower Compact (1620)</strong> — Plymouth colonists' document establishing self-government ("We, the Pilgrims"). Early example of representative democracy.</li>
<li><strong>"City upon a Hill" (1630)</strong> — John Winthrop's vision of Massachusetts Bay as a model Christian community watched by the world. Shaped Puritan colonialism.</li>
<li><strong>Anglo-Powhatan Wars (1609–1677)</strong> — Series of conflicts between English settlers and the Powhatan Confederacy in Virginia. Resulted in Native displacement and enslavement.</li>
<li><strong>King Philip's War (1675–1678)</strong> — Wampanoag and allied tribes (led by Metacom/"King Philip") resisted English expansion in New England. Largest casualty percentage in any American war. Native defeat sealed colonist dominance.</li>
<li><strong>New England Confederation (1643)</strong> — Military alliance of New England colonies for mutual defense.</li>
<li><strong>Triangular Trade</strong> — Trade route: colonial manufactured goods → Africa (exchanged for enslaved people) → Caribbean/South (enslaved people exchanged for molasses/sugar) → North America (molasses distilled into rum). Drove slavery's expansion.</li>
<li><strong>Bacon's Rebellion (1676)</strong> — Virginia colonists (including enslaved and indentured workers) rebelled against Governor Berkeley's policies. Led to shift from indentured servants to African slavery as the primary labor source.</li>
<li><strong>Salutary Neglect (1690s–1750s)</strong> — British policy of loosely enforcing colonial regulations, allowing colonies to develop autonomously. Colonists grew accustomed to self-governance.</li>
</ul>

<h3>Imperial Conflicts & the Road to Revolution</h3>
<ul>
<li><strong>Characteristics of New France</strong> — French colonies (Canada, Louisiana) focused on fur trade; fewer settlers; better relations with Native peoples; centralized governance from France.</li>
<li><strong>Ohio River Valley</strong> — Strategic region contested by France, Britain, and colonial fur traders in the 1750s. Became flashpoint for conflict.</li>
<li><strong>Albany Congress (1754)</strong> — Colonial delegates met to coordinate defense against French. Ben Franklin proposed the "Plan of Union" (rejected but precedent for intercolonial cooperation).</li>
<li><strong>Battle of Quebec (1759)</strong> — British General Wolfe defeated French General Montcalm; France lost control of Canada.</li>
<li><strong>Proclamation of 1763</strong> — After British victory in the French and Indian War, King George III forbade colonial settlement west of the Appalachian Mountains. Colonists resented the restriction and the expense of British troops stationed there.</li>
</ul>

<div class="tip">💡 The Proclamation of 1763 was meant to prevent conflict with Native peoples and reduce costs, but colonists saw it as tyranny. The ensuing tension over paying for British troops led directly to taxation without representation.</div>
      `,
      questions: [
        { q: 'The Columbian Exchange was primarily a transfer of:', options: ['Military technology and strategic fortifications across empires', 'People, plants, animals, and diseases between Europe and Americas', 'Precious metals, jewels, and currency between trading nations', 'Sacred manuscripts and theological texts across civilizations'], answer: 1, explanation: 'The correct answer is: People, plants, animals, and diseases between Europe and Americas.' },
        { q: 'The Treaty of Tordesillas (1494) divided the Americas between:', options: ['England and France', 'Spain and Portugal', 'Spain and England', 'Portugal and France'], answer: 1, explanation: 'The correct answer is: Spain and Portugal.' },
        { q: 'The Black Legend refers to:', options: ['Documented histories of the African diaspora in the New World', 'Exaggerated accounts of Spanish cruelty in the Americas', 'A widespread epidemic that devastated European port cities', 'Armed resistance movements led by indigenous populations'], answer: 1, explanation: 'The correct answer is: Exaggerated accounts of Spanish cruelty in the Americas.' },
        { q: 'The Spanish Armada was defeated by:', options: ['France', 'England', 'Portugal', 'The Dutch'], answer: 1, explanation: 'The correct answer is: England.' },
        { q: 'A Joint Stock Company was:', options: ['A colonial regulatory body appointed by the British Crown', 'A business where investors pooled capital to fund ventures', 'A Native American confederation for regional trade networks', 'A large agricultural estate using indentured labor systems'], answer: 1, explanation: 'The correct answer is: A business where investors pooled capital to fund ventures.' },
        { q: 'The Mayflower Compact established:', options: ['Direct royal governance over all Plymouth settlements', 'Self-government by consent of the colonists', 'Mandatory church membership as a condition for voting', 'Guaranteed free land distribution for every arriving settler'], answer: 1, explanation: 'The correct answer is: Self-government by consent of the colonists.' },
        { q: 'King Philip\'s War resulted in:', options: ['A decisive Native American victory and British withdrawal', 'Continued peaceful coexistence and expanded trade agreements', 'Native defeat and colonist dominance in New England', 'Transfer of New England territory to Spanish colonial control'], answer: 2, explanation: 'The correct answer is: Native defeat and colonist dominance in New England.' },
        { q: 'Bacon\'s Rebellion led to:', options: ['Expanded political rights for poor white frontier settlers', 'Shift from indentured servants to African slavery', 'Full colonial independence from the British Crown in Virginia', 'Complete abandonment of tobacco cultivation in the Chesapeake'], answer: 1, explanation: 'The correct answer is: Shift from indentured servants to African slavery.' },
        { q: 'Salutary Neglect meant:', options: ['Colonies were deliberately abandoned and left without governance', 'British loosely enforced colonial regulations; colonies developed autonomously', 'Strict and detailed British control of all colonial operations', 'France administered the colonies under a joint agreement'], answer: 1, explanation: 'The correct answer is: British loosely enforced colonial regulations; colonies developed autonomously.' },
        { q: 'The Proclamation of 1763 forbade:', options: ['The practice of enslaving indigenous peoples in the colonies', 'Colonial settlement west of the Appalachian Mountains', 'All commercial trade agreements with French-held territories', 'Public expression of any non-Anglican religious practices'], answer: 1, explanation: 'The correct answer is: Colonial settlement west of the Appalachian Mountains.' }
      ]
    },

    /* ────────── UNIT 2: The Road to Revolution ────────── */
    {
      video: 'Eytc9ZaNWyc', // CrashCourse US History #6: Taxes & Smuggling
      title: 'The Road to Revolution (1763–1775)',
      content: `
<h2>🔫 The Road to Revolution (1763–1775)</h2>

<h3>Mercantilism & Imperial Control</h3>
<ul>
<li><strong>Mercantilism</strong> — Economic theory that colonies existed to enrich the mother country. Colonies supplied raw materials; bought finished goods from Britain. Britain restricted colonial trade and manufacturing. Accumulated wealth (gold/silver) was power.</li>
<li>Britain's Navigation Acts enforced mercantilism: colonists couldn't trade directly with non-British ports; had to use British ships.</li>
</ul>

<h3>The Crisis Begins: Taxation Without Representation (1764–1766)</h3>
<ul>
<li><strong>The Stamp Act (1765)</strong> — Tax on every printed document (newspapers, licenses, playing cards). First direct tax on colonists. Colonists protested: "No taxation without representation" (they had no representation in Parliament).</li>
<li><strong>The Stamp Act Congress (1765)</strong> — Colonial delegates met to coordinate opposition and petition the king. First intercolonial assembly focused on a common grievance.</li>
<li><strong>Stamp Act Repeal (1766)</strong> — Parliament repealed the Stamp Act due to colonial boycotts and violence (Sons of Liberty). BUT included the Declaratory Act: Britain claimed the right to tax colonies "in all cases whatsoever."</li>
</ul>

<h3>Escalating Tensions (1767–1774)</h3>
<ul>
<li><strong>The Boston Massacre (1770)</strong> — British soldiers fired on a crowd of colonists in Boston. Five killed. Propaganda portrayed it as British tyranny (Paul Revere's engraving). Deepened colonial outrage.</li>
<li><strong>The Boston Tea Party (1773)</strong> — Colonists, disguised as Native Americans, boarded ships and dumped 342 chests of tea into Boston Harbor. Protest against the Tea Act (which gave the British East India Company a monopoly on tea sales to colonies).</li>
<li><strong>The Intolerable Acts/Coercive Acts (1774)</strong> — Britain's punitive response to the Boston Tea Party. Closed Boston Harbor until tea was paid for; revoked Massachusetts' charter; quartered soldiers in colonists' homes. Colonists saw them as oppressive; unified opposition.</li>
<li><strong>The Quebec Act (1774)</strong> — Extended Quebec's borders to the Ohio River (blocking colonial westward expansion). Granted religious freedom to French Catholics (colonists distrusted Catholicism). Seen as rewarding Quebec for loyalty.</li>
</ul>

<h3>First Steps Toward Independence</h3>
<ul>
<li><strong>The First Continental Congress (1774)</strong> — Delegates from 12 colonies met in Philadelphia. Didn't seek independence but demanded rights as English citizens. Agreed to boycott British goods. Authorized militia preparations.</li>
<li><strong>Lexington and Concord (April 1775)</strong> — British troops marched to seize colonial weapons stockpiles. Minutemen (militia ready at a minute's notice) confronted them. Gunfire broke out; war began. "Shot heard 'round the world."</li>
</ul>

<div class="tip">💡 Colonists' core grievance wasn't taxes per se — it was taxation WITHOUT REPRESENTATION. They demanded the same rights as English citizens: consent of the governed (through elected representatives).</div>
      `,
      questions: [
        { q: 'Mercantilism was an economic theory that:', options: ['Colonies should be independent', 'Colonies existed to enrich the mother country', 'Free trade benefited everyone', 'Britain should pay tribute to colonies'], answer: 1, explanation: 'The correct answer is: Colonies existed to enrich the mother country.' },
        { q: 'The Stamp Act taxed:', options: ['Tea imported from India', 'Every printed document', 'Manufactured goods', 'Colonial exports to Britain'], answer: 1, explanation: 'The correct answer is: Every printed document.' },
        { q: 'The slogan "No taxation without representation" meant:', options: ['Colonial tax rates were excessively high compared to Britain', 'Colonists had no elected representatives in Parliament', 'Colonists wanted immediate and complete political independence', 'All colonial taxes should be paid in raw goods not currency'], answer: 1, explanation: 'The correct answer is: Colonists had no elected representatives in Parliament.' },
        { q: 'The Boston Massacre involved:', options: ['A coordinated massacre of British soldiers by colonial militia', 'British soldiers firing on a crowd of colonists', 'Colonists systematically destroying government-owned property', 'A violent confrontation between rival colonial merchant groups'], answer: 1, explanation: 'The correct answer is: British soldiers firing on a crowd of colonists.' },
        { q: 'The Boston Tea Party was a protest against:', options: ['British troops', 'The Stamp Act', 'The Tea Act', 'Royal taxes in general'], answer: 2, explanation: 'The correct answer is: The Tea Act.' },
        { q: 'The Intolerable Acts were Britain\'s response to:', options: ['The Stamp Act Congress', 'The Boston Massacre', 'The Boston Tea Party', 'The Declaratory Act'], answer: 2, explanation: 'The correct answer is: The Boston Tea Party.' },
        { q: 'The First Continental Congress sought:', options: ['Independence from Britain', 'Rights as English citizens', 'A union with France', 'Expansion westward'], answer: 1, explanation: 'The correct answer is: Rights as English citizens.' },
        { q: 'The "shot heard \'round the world" refers to gunfire at:', options: ['Boston', 'Lexington and Concord', 'Philadelphia', 'New York'], answer: 1, explanation: 'The correct answer is: Lexington and Concord.' }
      ]
    },

    /* ────────── UNIT 3: The American Revolution ────────── */
    {
      video: '3EiSymRrKI4', // CrashCourse US History #7: Who Won the Revolution?
      title: 'The American Revolution (1775–1783)',
      content: `
<h2>⚔️ The American Revolution (1775–1783)</h2>

<h3>War Begins (1775)</h3>
<ul>
<li><strong>The Second Continental Congress (May 1775)</strong> — Colonial delegates appointed George Washington as commander of the Continental Army. Still hoped for reconciliation but prepared for war.</li>
<li><strong>The Olive Branch Petition (July 1775)</strong> — Congress appealed to King George III for peace and redress of grievances. The king rejected it; declared the colonists in rebellion.</li>
</ul>

<h3>From Rebellion to Independence (1776)</h3>
<ul>
<li><strong>Common Sense (January 1776)</strong> — Thomas Paine's pamphlet argued for independence. Rejected the idea of hereditary monarchy ("One honest man is worth more than all the crowned ruffians that ever lived"). Sold 500,000 copies; galvanized public opinion for independence.</li>
<li><strong>The Declaration of Independence (July 4, 1776)</strong> — Thomas Jefferson's statement of principles: "life, liberty, and the pursuit of happiness"; government derives power from "consent of the governed"; right to alter or abolish destructive government. Announced independence; justified rebellion philosophically.</li>
</ul>

<h3>The War (1776–1783)</h3>

<h4>Early British Advantages</h4>
<ul>
<li>Professional army (redcoats); strong navy</li>
<li>Ability to move troops via sea</li>
<li>Financial resources; manufacturing capacity</li>
</ul>

<h4>American Advantages</h4>
<ul>
<li>Fighting defensively on home territory (easier logistics)</li>
<li>Washington's leadership and determination</li>
<li>French support (after 1778)</li>
<li>Motivation (fighting for independence)</li>
</ul>

<h4>Key Battles & Events</h4>
<ul>
<li><strong>Battle of Bunker Hill (June 1775)</strong> — American militia vs. British regulars near Boston. Americans retreated after running out of ammunition ("Don't fire till you see the whites of their eyes"). Americans lost but inflicted heavy British casualties; boosted confidence.</li>
<li><strong>Battle of Saratoga (Sept–Oct 1777)</strong> — American forces defeated British General Burgoyne. Turning point: convinced France that Americans could win; France entered the war on America's side (1778).</li>
<li><strong>Winter at Valley Forge (1777–1778)</strong> — Washington's army endured cold, hunger, disease. Morale survived due to loyalty to Washington.</li>
<li><strong>Battle of Yorktown (Sept–Oct 1781)</strong> — Washington surrounded British General Cornwallis with American and French forces. Cornwallis surrendered. Effectively ended the war.</li>
</ul>

<h4>British & Colonial Strengths & Weaknesses</h4>
<table>
<tr><th></th><th>Strengths</th><th>Weaknesses</th></tr>
<tr><td><strong>Britain</strong></td><td>Professional army, strong navy, resources, manufacturing</td><td>Fighting far from home, underestimated colonists, French intervention, financing war</td></tr>
<tr><td><strong>Americans</strong></td><td>Home territory advantage, Washington, French alliance, motivated</td><td>No navy, inexperienced troops, limited resources, inflation, state jealousies</td></tr>
</table>

<h3>Treaty of Paris (1783)</h3>
<ul>
<li>Britain recognized American independence</li>
<li>American territory extended to the Mississippi River (from the Atlantic)</li>
<li>Fishing rights off Newfoundland</li>
<li>British evacuated remaining troops</li>
</ul>

<div class="tip">💡 Without French support (troops, ships, money), America likely would have lost. France's motivation: weaken Britain and avenge their loss in the French and Indian War. The war's cost nearly bankrupted France, contributing to the French Revolution.</div>
      `,
      questions: [
        { q: 'George Washington was appointed commander of the Continental Army by:', options: ['The King', 'The Second Continental Congress', 'The Declaration Committee', 'French generals'], answer: 1, explanation: 'The correct answer is: The Second Continental Congress.' },
        { q: 'Thomas Paine\'s "Common Sense" argued for:', options: ['Reconciliation with Britain through diplomatic reforms', 'Independence and rejected hereditary monarchy', 'Stronger colonial unions under continued British rule', 'Democratic elections for colonial royal governors'], answer: 1, explanation: 'The correct answer is: Independence and rejected hereditary monarchy.' },
        { q: 'The Declaration of Independence was written primarily by:', options: ['George Washington', 'Benjamin Franklin', 'Thomas Jefferson', 'John Adams'], answer: 2, explanation: 'The correct answer is: Thomas Jefferson.' },
        { q: 'The Battle of Saratoga was significant because it:', options: ['Brought an immediate end to all military hostilities', 'Convinced France to enter the war on America\\\'s side', 'Resulted in a devastating American defeat at a key fortress', 'Secured final victory and ended the Revolutionary War entirely'], answer: 1, explanation: 'The correct answer is: Convinced France to enter the war on America\.' },
        { q: 'France entered the Revolutionary War on America\'s side in:', options: ['1776', '1777', '1778', '1779'], answer: 2, explanation: 'The correct answer is: 1778.' },
        { q: 'The Battle of Yorktown resulted in:', options: ['A decisive British victory and renewed colonial suppression', 'A prolonged military stalemate with no clear outcome either way', 'American victory and British surrender (effectively ending the war)', 'A crushing defeat of French naval forces in the Chesapeake Bay'], answer: 2, explanation: 'The correct answer is: American victory and British surrender (effectively ending the war).' },
        { q: 'The Treaty of Paris (1783) recognized:', options: ['Continued British sovereignty over all eastern territories', 'American independence and territory to the Mississippi River', 'French administrative control of the former British colonies', 'Expanded Spanish territory throughout all of North America'], answer: 1, explanation: 'The correct answer is: American independence and territory to the Mississippi River.' },
        { q: 'Valley Forge was significant as:', options: ['A major military victory that turned the tide of the entire Revolutionary War', 'A winter encampment where Washington\\\'s army endured hardship but maintained morale', 'A heavily fortified British stronghold used for planning southern military campaigns', 'A French-controlled fort used as a critical allied supply depot and staging area'], answer: 1, explanation: 'The correct answer is: A winter encampment where Washington\.' }
      ]
    },

    /* ────────── UNIT 4: The Early Republic (1783–1801) ────────── */
    {
      video: 'bO7FQsCcbD8', // CrashCourse US History #8: The Constitution & Federalism
      title: 'The Early Republic: From Confederation to Constitution (1783–1801)',
      content: `
<h2>📜 The Early Republic (1783–1801)</h2>

<h3>The Articles of Confederation (1781–1789)</h3>
<ul>
<li><strong>Strengths:</strong>
<ul>
<li>Established a federal government</li>
<li>Won the Revolutionary War</li>
<li>Created the framework for admitting western territories</li>
</ul>
</li>
<li><strong>Weaknesses:</strong>
<ul>
<li>Congress had no power to tax (relied on state contributions)</li>
<li>No executive branch (no president to enforce laws)</li>
<li>No national court system</li>
<li>Each state had one vote regardless of size</li>
<li>Required 9 of 13 states to pass laws; 13 of 13 to amend</li>
<li>Congress couldn't regulate interstate or foreign trade</li>
<li>Result: Debt crisis, weak authority, state conflicts</li>
</ul>
</li>
</ul>

<h3>Western Expansion & Land Ordinances</h3>
<ul>
<li><strong>The Land Ordinance of 1785</strong> — Organized western territories into townships (6 miles × 6 miles). Land divided into sections sold to settlers. Proceeds financed education (Section 16 reserved for schools). Established the precedent for surveying and selling western lands.</li>
<li><strong>The Northwest Ordinance of 1787</strong> — Established the Northwest Territory (Ohio, Indiana, Illinois, Michigan, Wisconsin, Minnesota). Allowed territories to become states when population reached 60,000. Prohibited slavery in the territory (first federal limitation on slavery). Established a process for territorial government.</li>
</ul>

<h3>Shays' Rebellion (1786–1787)</h3>
<p>Massachusetts farmers, led by Daniel Shays, rebelled against high taxes and debt collection. Demonstrated the weakness of the Articles of Confederation — Congress couldn't raise an army to suppress the rebellion. Alarmed wealthy elites; spurred calls for a stronger federal government.</p>

<h3>The Constitutional Convention (1787)</h3>
<ul>
<li><strong>The Great Compromise</strong> — Resolved the dispute between large and small states:
<ul>
<li>Senate: Two representatives per state (favored small states)</li>
<li>House: Representation by population (favored large states)</li>
<li>Allowed the Convention to proceed</li>
</ul>
</li>
<li><strong>The Three-Fifths Compromise</strong> — Southern states wanted enslaved people counted for representation; northern states opposed. Compromise: enslaved people counted as 3/5 of a person for both representation and taxation. Gave the South disproportionate power without abolishing slavery.</li>
<li><strong>The Electoral College Compromise</strong> — Direct popular election of president rejected (states couldn't agree on qualifications). Instead: electors chosen by each state; electors vote for president. Gave each state power proportional to Congressional representation.</li>
</ul>

<h3>The Constitution & Ratification (1787–1789)</h3>
<ul>
<li><strong>Structure:</strong> Separation of powers (executive, legislative, judicial); system of checks and balances; federalism (power shared between national and state governments)</li>
<li><strong>Federalists vs. Anti-Federalists</strong>
<table>
<tr><th>Federalists</th><th>Anti-Federalists</th></tr>
<tr><td>Supported the Constitution</td><td>Opposed the Constitution</td></tr>
<tr><td>Wanted strong central government</td><td>Feared strong federal power threatened state sovereignty</td></tr>
<tr><td>Alexander Hamilton, James Madison, James Jay</td><td>Patrick Henry, Samuel Adams, Anti-Federalist Papers</td></tr>
<tr><td>Argued federalism necessary for stability</td><td>Demanded Bill of Rights to protect individual liberties</td></tr>
</table>
</li>
<li><strong>The Federalist Papers (1787–1788)</strong> — Essays by Hamilton, Madison, and Jay arguing for ratification. Explained how the Constitution balanced power and prevented tyranny. Influential in persuading states to ratify.</li>
<li><strong>Ratification Conditional:</strong> Anti-Federalists demanded a Bill of Rights. Constitution ratified (1788); George Washington elected president (1789).</li>
<li><strong>The Bill of Rights (1791)</strong> — First 10 amendments protecting individual liberties (speech, religion, press, assembly, petition, trial by jury, protection against unreasonable search, etc.). Addressed Anti-Federalist concerns; became non-negotiable part of the Constitution.</li>
</ul>

<h3>The Washington Administration (1789–1797)</h3>
<ul>
<li><strong>Hamilton's Financial Plan (1790–1791)</strong>
<ul>
<li>Assumption: Federal government assumes state debts from the Revolution (helped pay off creditors; established federal creditworthiness)</li>
<li>National Bank: Created the Bank of the United States (1791) as the federal repository and lender</li>
<li>Excise Tax: Tax on whiskey (and other goods) to raise revenue</li>
<li>Tariffs: Protected American manufactures from foreign competition</li>
<li><strong>Result:</strong> Federal government took on debt; strong financial foundation; but debt critics saw it as monarchical</li>
</ul>
</li>
<li><strong>The Whiskey Rebellion (1794)</strong> — Western Pennsylvania farmers resisted the excise tax on whiskey (distilled their grain surplus). Washington personally led militia to suppress it. Demonstrated federal authority (unlike the Articles).</li>
<li><strong>The Neutrality Proclamation (1793)</strong> — Britain and France were at war (French Revolution). Washington declared America neutral; didn't support either side. Preserved American independence but angered Republicans who sympathized with France.</li>
<li><strong>Jay's Treaty (1795)</strong> — Treaty with Britain resolved trade disputes and prevented war. British agreed to evacuate western forts; U.S. agreed not to support French privateers. Unpopular with Republicans (seemed to favor Britain) but stabilized foreign relations.</li>
<li><strong>Washington's Farewell Address (1796)</strong> — Warned against "permanent alliances" with foreign nations and the dangers of political parties (factions). Urged national unity. Set precedent for nonpartisanship.</li>
</ul>

<h3>The Adams Administration (1797–1801)</h3>
<ul>
<li><strong>The Alien and Sedition Acts (1798)</strong> — Fear of French influence led to laws restricting immigration and criminalizing criticism of the government. Suppressed free speech; targeted Democratic-Republicans. Many saw them as tyrannical.</li>
<li><strong>The Virginia and Kentucky Resolutions (1798–1799)</strong> — Madison and Jefferson secretly wrote resolutions claiming states could nullify unconstitutional federal laws. Precedent for later states' rights arguments (including antebellum nullification).</li>
<li><strong>Quasi-War with France (1798–1800)</strong> — Undeclared naval conflict over trade and U.S. neutrality. Americans captured French ships; France captured American ships. Ended with the Treaty of Mortefontaine (1800).</li>
<li><strong>Election of 1800 — "Revolution of 1800"</strong> — Jefferson (Republican) defeated Adams (Federalist). First peaceful transfer of power between parties. Marked decline of Federalists; rise of Jeffersonian Republicans.</li>
</ul>

<div class="tip">💡 The Constitution created a government strong enough to function but limited enough to prevent tyranny. The separation of powers and checks and balances remain central to American government today.</div>
      `,
      questions: [
        { q: 'The Articles of Confederation had no power to:', options: ['Declare independence', 'Tax or raise an army', 'Regulate commerce', 'Create courts'], answer: 1, explanation: 'The correct answer is: Tax or raise an army.' },
        { q: 'The Great Compromise resolved disputes by creating:', options: ['Three independent branches of government with equal authority', 'A bicameral legislature (Senate + House)', 'The Electoral College system for choosing the head of state', 'The Three-Fifths rule for calculating state representation'], answer: 1, explanation: 'The correct answer is: A bicameral legislature (Senate + House).' },
        { q: 'The Three-Fifths Compromise counted:', options: ['Enslaved people as full citizens', 'Enslaved people as 3/5 of a person', 'Only free people', 'All people equally'], answer: 1, explanation: 'The correct answer is: Enslaved people as 3/5 of a person.' },
        { q: 'Federalists supported the Constitution while Anti-Federalists:', options: ['Also supported it but wanted even stronger federal authority', 'Opposed it and demanded a Bill of Rights', 'Wanted to replace the republic with a constitutional monarchy', 'Rejected all forms of organized government and central power'], answer: 1, explanation: 'The correct answer is: Opposed it and demanded a Bill of Rights.' },
        { q: 'Hamilton\'s financial plan included all EXCEPT:', options: ['Assumption of state debt', 'National Bank', 'Excise taxes on whiskey', 'Free land for settlers'], answer: 3, explanation: 'The correct answer is: Free land for settlers.' },
        { q: 'The Whiskey Rebellion demonstrated that:', options: ['The federal government was too weak to enforce domestic policy', 'The federal government had authority to suppress rebellion', 'Western farmers effectively controlled national economic policy', 'President Washington should be replaced by a stronger leader'], answer: 1, explanation: 'The correct answer is: The federal government had authority to suppress rebellion.' },
        { q: 'Washington\'s Neutrality Proclamation (1793) meant:', options: ['America would actively support the British war effort fully', 'America would formally support French revolutionary campaigns', 'America would remain neutral in the Britain-France war', 'America would join both sides as a mediating military power'], answer: 2, explanation: 'The correct answer is: America would remain neutral in the Britain-France war.' },
        { q: 'The Alien and Sedition Acts were seen as:', options: ['Essential protections for individual liberty and free speech', 'Suppressing free speech and unfairly targeting Republicans', 'Critical measures for strengthening national defense and unity', 'Beneficial policies designed to help foreign-born residents'], answer: 1, explanation: 'The correct answer is: Suppressing free speech and unfairly targeting Republicans.' },
        { q: 'The "Revolution of 1800" referred to:', options: ['A violent military coup overthrowing the existing government', 'Jefferson defeating Adams; first peaceful transfer of power between parties', 'A French-backed intervention in American domestic politics', 'A Federalist consolidation of power through electoral reform'], answer: 1, explanation: 'The correct answer is: Jefferson defeating Adams; first peaceful transfer of power between parties.' }
      ]
    },

    /* ────────── UNIT 5: Jeffersonian & Jacksonian America ────────── */
    {
      video: 'beN4qE-e5O8', // CrashCourse US History #14: Age of Jackson
      title: 'Jeffersonian & Jacksonian America (1801–1840)',
      content: `
<h2>🦅 Jeffersonian & Jacksonian America (1801–1840)</h2>

<h3>The Jefferson Administration (1801–1809)</h3>
<ul>
<li><strong>The Election of 1800</strong> — Jefferson (Republican) defeated Adams (Federalist). Election tied in Electoral College; House chose Jefferson on 36th ballot. Set precedent for partisan transfer of power.</li>
<li><strong>Democratic-Republicans vs. Federalists</strong>
<ul>
<li><strong>Republicans:</strong> Agrarian interests; state power; strict interpretation of Constitution; opposed standing armies and large debt</li>
<li><strong>Federalists:</strong> Commercial interests; national power; loose interpretation of Constitution; supported national bank and military</li>
</ul>
</li>
<li><strong>Marbury v. Madison (1803)</strong> — Chief Justice John Marshall ruled that the Supreme Court could strike down laws as unconstitutional (judicial review). Greatly expanded judicial power but done subtly (Court ruled in its own favor without angering Jefferson).</li>
<li><strong>The Louisiana Purchase (1803)</strong> — Jefferson purchased French-controlled Louisiana Territory (828,000 square miles) for $15 million. Doubled the size of the U.S.; secured control of the Mississippi River and New Orleans. Lewis and Clark Expedition (1804–1806) explored the new territory.</li>
<li><strong>The Embargo Act (1807)</strong> — Jefferson banned all U.S. foreign trade to pressure Britain and France (both attacking American ships). Economic disaster for American merchants; embargo hurt the U.S. more than Britain/France. Repealed in 1809.</li>
</ul>

<h3>War of 1812</h3>
<ul>
<li><strong>Causes:</strong> British impressment of American sailors; British support for Native resistance to U.S. expansion; American desire for Canada and Florida</li>
<li><strong>Battle of New Orleans (January 1815)</strong> — Andrew Jackson led American militia and regulars defeating a professional British force. Huge American victory; made Jackson a national hero. The battle occurred after the peace treaty was signed but before news arrived.</li>
<li><strong>Treaty of Ghent (1814)</strong> — Ended the war; restored prewar boundaries. Americans claimed victory (British didn't conquer them); British claimed victory (preserved Canada). No losers or clear winners territorially.</li>
<li><strong>The Hartford Convention (1814–1815)</strong> — Federalist delegates from New England opposed the war, considered secession. Made Federalists seem unpatriotic; party declined.</li>
</ul>

<h3>The Era of Good Feelings (1815–1825)</h3>
<p><strong>Post-war surge in nationalism and expansion.</strong></p>
<ul>
<li><strong>The American System (Henry Clay)</strong> — Protective tariffs (support manufactures), internal improvements (federal funding for roads/canals), national bank. Aimed at self-sufficiency and rapid development. Later called "internal improvements."</li>
<li><strong>The Tariff of 1816</strong> — First explicitly protective tariff (taxed imports to help American manufactures). Supported by both North and South (both wanted to develop manufacturing).</li>
<li><strong>The Missouri Compromise (1820)</strong> — Missouri applied for statehood as a slave state; Maine applied as a free state. Compromise: both admitted; no slavery north of the 36°30' parallel (except Missouri). Temporarily eased sectional tension.</li>
<li><strong>The Monroe Doctrine (1823)</strong> — President Monroe declared that America opposed European colonization in the Western Hemisphere and wouldn't interfere in European affairs. Asserted U.S. dominance in the Americas; rejected European imperialism.</li>
</ul>

<h3>The "Corrupt Bargain" & Rise of Jackson (1824–1828)</h3>
<ul>
<li><strong>Election of 1824</strong> — No candidate had a majority of electoral votes. House had to choose between Jackson, Adams, Crawford, and Clay. Clay threw support to Adams; Adams won and made Clay Secretary of State. Democrats cried "Corrupt Bargain" — a deal between Adams and Clay to win the presidency.</li>
<li><strong>Election of 1828</strong> — Andrew Jackson, running on populism and the "Corrupt Bargain" narrative, defeated Adams. Ushered in the Age of Jackson. Higher voter turnout; more democratic participation (property requirements lowered).</li>
</ul>

<h3>The Jackson Administration (1829–1837)</h3>
<ul>
<li><strong>The Spoils System</strong> — Jackson replaced federal officeholders with political allies. Criticized as corruption; defended as bringing in loyal supporters. Became standard practice.</li>
<li><strong>The Nullification Crisis (1828–1833)</strong>
<ul>
<li><strong>The Tariff of 1828</strong> ("Tariff of Abominations") — High protective tariff benefited Northern manufacturers; hurt Southern planters (raised prices on goods they needed). South Carolina called it unconstitutional.</li>
<li><strong>The Tariff of 1832</strong> — Slightly lowered the tariff; still unacceptable to South Carolina.</li>
<li><strong>Nullification:</strong> South Carolina declared the tariff null and void within its borders; threatened secession. Jackson threatened force ("Union must and shall be preserved"). Compromise tariff (1833) gradually lowered rates; South Carolina accepted.</li>
<li><strong>Compromise of 1833</strong> — Allowed both sides to claim victory; prevented secession over tariffs (precedent for later antebellum tensions).</li>
</ul>
</li>
<li><strong>The Bank War (1832–1836)</strong> — Jackson opposed the Second Bank of the United States; saw it as an Eastern, aristocratic institution. Vetoed re-chartering the bank. Withdrew federal funds and deposited them in state banks ("pet banks"). Fiscal chaos; inflation; eventual economic panic. Showed Jackson's power over the economy.</li>
<li><strong>The Indian Removal Act (1830)</strong> — Authorized Jackson to negotiate treaties removing Native Americans from their Eastern lands to territories west of the Mississippi (Indian Territory, mostly present-day Oklahoma). Seemed voluntary but involved pressure and deception.</li>
<li><strong>Trail of Tears (1838–1839)</strong> — Cherokee forced removal from Southeast to Indian Territory. ~4,000 of 15,000 Cherokee died on the journey (disease, exposure, starvation). Named by survivors for the suffering endured. Tragic example of ethnic cleansing.</li>
</ul>

<div class="tip">💡 Jackson embodied the democratic ideals of his era (common man's president) but also presided over ethnic cleansing and expanded executive power. He was beloved and reviled.</div>
      `,
      questions: [
        { q: 'Marbury v. Madison (1803) established:', options: ['Judicial review', 'Executive supremacy', 'Congressional power', 'State sovereignty'], answer: 0, explanation: 'The correct answer is: Judicial review.' },
        { q: 'The Louisiana Purchase doubled U.S. territory and cost:', options: ['$3 million', '$15 million', '$50 million', '100 million acres'], answer: 1, explanation: 'The correct answer is: $15 million.' },
        { q: 'The Embargo Act (1807) was:', options: ['Successful in pressuring Britain', 'An economic disaster for America', 'Supported by merchants', 'Kept America out of war indefinitely'], answer: 1, explanation: 'The correct answer is: An economic disaster for America.' },
        { q: 'The Battle of New Orleans (1815) made famous:', options: ['George Washington', 'Thomas Jefferson', 'Andrew Jackson', 'James Madison'], answer: 2, explanation: 'The correct answer is: Andrew Jackson.' },
        { q: 'The American System included all EXCEPT:', options: ['Protective tariffs', 'Internal improvements', 'National bank', 'Abolition of slavery'], answer: 3, explanation: 'The correct answer is: Abolition of slavery.' },
        { q: 'The Missouri Compromise allowed:', options: ['Unrestricted slavery in every state and territory nationwide', 'Complete prohibition of slavery across all American territories', 'Slavery south of 36°30′, no slavery north (except Missouri)', 'Individual states to independently decide slavery without limits'], answer: 2, explanation: 'The correct answer is: Slavery south of 36°30′, no slavery north (except Missouri).' },
        { q: 'The Nullification Crisis involved:', options: ['North Carolina rejecting federal banking regulations entirely', 'South Carolina claiming right to nullify tariffs within its borders', 'Virginia refusing to participate in national defense measures', 'Georgia ignoring federal Indian removal treaties and orders'], answer: 1, explanation: 'The correct answer is: South Carolina claiming right to nullify tariffs within its borders.' },
        { q: 'The Trail of Tears referred to:', options: ['A significant military victory during the Creek War campaigns resulting in a treaty', 'Cherokee forced removal from Southeast to Indian Territory with massive casualties', 'A pivotal Revolutionary War battle in the southern territories that shifted power', 'A voluntary westward migration route frequently used by independent frontier settlers'], answer: 1, explanation: 'The correct answer is: Cherokee forced removal from Southeast to Indian Territory with massive casualties.' }
      ]
    },

    /* ────────── UNIT 6: Economic & Cultural Development + Expansion & Sectionalism ────────── */
    {
      video: 'tkdF8pOFUfI', // CrashCourse US History #17: War & Expansion
      title: 'Economic & Cultural Development + Expansion (1820–1860)',
      content: `
<h2>🏗️ Economic & Cultural Development + Expansion (1820–1860)</h2>

<h3>Economic Transformations</h3>
<ul>
<li><strong>Immigration and Nativism</strong>
<ul>
<li>1830s–1850s: Massive immigration from Ireland and Germany (famine, crop failures, political upheaval)</li>
<li>Irish faced discrimination ("No Irish Need Apply"); took low-wage jobs in factories and construction</li>
<li><strong>Nativism:</strong> Anti-immigrant sentiment; Know-Nothing Party opposed immigration and Catholicism</li>
</ul>
</li>
<li><strong>Transportation Advancements</strong>
<ul>
<li><strong>The Erie Canal (1825)</strong> — Connected Hudson River (NYC) to Great Lakes. Dramatically reduced shipping costs between East and West. Made NYC the premier American port; spurred growth of interior cities.</li>
<li>Railroads (1830s+): Steamboats and canals followed by railroads; railroads became dominant by 1850s</li>
</ul>
</li>
<li><strong>Industrial Revolution in America</strong> — Factories (textile mills, especially in New England); immigrant labor; child labor; dangerous conditions. North industrializing; South remained agricultural/plantation-based.</li>
</ul>

<h3>Cultural & Social Movements</h3>
<ul>
<li><strong>The Second Great Awakening (1790s–1840s)</strong> — Religious revival movement; emphasized personal conversion ("born again") and morality. Led to reform movements (temperance, abolition, education).</li>
<li><strong>The Seneca Falls Convention (1848)</strong> — First women's rights convention in America. Elizabeth Cady Stanton and Lucretia Mott organized it. Issued "Declaration of Sentiments" (modeled on Declaration of Independence): women demanded the vote and equal rights. Launched women's suffrage movement.</li>
<li><strong>The Abolition Movement</strong>
<ul>
<li>Early abolitionism (1800s–1820s): Gradual emancipation idea; colonization (returning freed slaves to Africa)</li>
<li>Radical abolitionism (1830s+): Immediate emancipation demanded; slavery is a sin (from religious movement)</li>
<li>Key figures: William Lloyd Garrison (The Liberator), Frederick Douglass (escaped slave, powerful orator), Harriet Beecher Stowe (Uncle Tom's Cabin)</li>
</ul>
</li>
<li><strong>The Free Soil Party (1848–1854)</strong> — Political party opposing slavery's expansion into new territories. "Free soil, free speech, free labor." Merged into Republican Party (1854).</li>
</ul>

<h3>The South & Slavery</h3>
<ul>
<li><strong>Southern Class Structure</strong>
<ul>
<li><strong>Large planters (5% of population)</strong> — Owned 50+ slaves; dominated politics and wealth</li>
<li><strong>Yeoman farmers (75% of Southern whites)</strong> — Owned small farms; few/no slaves. Non-slaveholding majority with limited political power.</li>
<li><strong>Poor whites (20% of Southern whites)</strong> — Landless; competed with slaves for low-wage jobs; often bitter about planter dominance</li>
</ul>
</li>
<li><strong>Slavery Statistics</strong>
<ul>
<li>Slave population: ~4 million by 1860 (mostly concentrated in Deep South: cotton belt)</li>
<li>Slaveholders: ~400,000 families (8% of white population); concentrated wealth and political power</li>
</ul>
</li>
<li><strong>Defenses of Slavery</strong> (in the South)
<ul>
<li>"Necessary Evil": Economically essential; former generations created the institution (present generation inherited it)</li>
<li>"Peculiar Institution": Unique to the South; different racial situation; argued paternalistic relationship with slaves</li>
<li>"Positive Good": Pro-slavery thinkers argued slavery was beneficial for enslaved people (provided for them), natural (based on racial hierarchy), and biblically justified</li>
</ul>
</li>
</ul>

<h3>Western Expansion & Manifest Destiny</h3>
<ul>
<li><strong>Manifest Destiny</strong> — Belief that American expansion across the continent was inevitable, divinely ordained, and morally justified. Driven by land hunger, nationalism, and desire to spread American values/democracy.</li>
<li><strong>The Whig Party & John Tyler</strong> — The Whig Party opposed "King Andrew" Jackson; favored federal internal improvements and a national bank. John Tyler (10th president, 1841–1845) was a Whig (though originally a Democrat). Presidency was marked by party conflict.</li>
<li><strong>The Mexican-American War (1846–1848)</strong>
<ul>
<li><strong>Cause:</strong> U.S. coveted Mexican territory (California, New Mexico); supported Texas annexation (1845); border disputes</li>
<li><strong>American victories:</strong> General Zachary Taylor (Northern Mexico); General Winfield Scott (Mexico City). Mexico defeated.</li>
<li><strong>Treaty of Guadalupe Hidalgo (1848):</strong> Mexico ceded 55% of its territory to U.S. (California, Nevada, Utah, most of Arizona/New Mexico); U.S. paid $15 million as compensation. Massive territorial gain; reignited slavery expansion debate.</li>
</ul>
</li>
<li><strong>The Wilmot Proviso (1846)</strong> — Proposed banning slavery in any territory acquired from Mexico. Passed House (Northern majority); defeated in Senate (Southern power). Polarized North and South.</li>
<li><strong>The Compromise of 1850</strong>
<ul>
<li><strong>California:</strong> Admitted as a free state (strengthened North)</li>
<li><strong>Fugitive Slave Act:</strong> Strengthened law requiring Northern states to return escaped slaves to the South (outraged North)</li>
<li><strong>Popular Sovereignty:</strong> Utah and New Mexico territories could decide on slavery by popular vote (seemed democratic but vague)</li>
<li><strong>Texas border:</strong> Reduced (compensation for loss of slavery expansion)</li>
<li>Temporarily eased sectional tension; masked deeper conflicts</li>
</ul>
</li>
<li><strong>The Underground Railroad</strong> — Secret network of safe houses, routes, and people helping enslaved people escape to free states/Canada. Thousands escaped; Southerners angry about "stolen property."</li>
<li><strong>Popular Sovereignty</strong> — Idea that territorial settlers (not Congress) should decide on slavery. Seemed democratic; but Southern and Northern settlers might clash over slavery in same territory.</li>
</ul>

<h3>The Road to Secession (1854–1860)</h3>
<ul>
<li><strong>The Kansas-Nebraska Act (1854)</strong> — Repealed the Missouri Compromise; allowed Kansas and Nebraska to decide on slavery by popular sovereignty. Triggered violent conflict in Kansas ("Bleeding Kansas") as pro- and anti-slavery settlers fought for control.</li>
<li><strong>The Ostend Manifesto (1854)</strong> — American diplomats in Belgium proposed buying Cuba from Spain (or taking it by force). Aimed to add slave territory. Leaked; caused international scandal; failed.</li>
<li><strong>The Gadsden Purchase (1853)</strong> — U.S. bought a small strip of southern Arizona/New Mexico from Mexico for $10 million. Completed the continental border; aimed at railroad route to California.</li>
<li><strong>Uncle Tom's Cabin (1852)</strong> — Harriet Beecher Stowe's novel depicting slavery's horrors. Became a bestseller; swayed Northern public opinion against slavery. Southerners were outraged.</li>
<li><strong>Bleeding Kansas (1854–1856)</strong> — Pro- and anti-slavery settlers fought in Kansas Territory over slavery's status. Murder, raids, guerrilla warfare. Showed that popular sovereignty meant conflict, not peace.</li>
<li><strong>The Dred Scott Decision (1857)</strong> — Supreme Court ruled that Scott (formerly enslaved person) had no right to sue (Black people were not citizens); slavery was legal in all territories (Missouri Compromise was unconstitutional). Outraged North; emboldened South.</li>
<li><strong>Harper's Ferry (1859)</strong> — Abolitionist John Brown led a raid on the federal arsenal at Harper's Ferry, Virginia, hoping to incite a slave rebellion. Captured and executed. South saw him as a terrorist; North saw him as a martyr. Further polarization.</li>
<li><strong>The Election of 1860</strong> — Republican Abraham Lincoln elected president; opposed slavery's expansion. South saw this as a threat to slavery itself and seceded.</li>
<li><strong>Southern Secession (1860–1861)</strong> — South Carolina seceded (Dec 1860); followed by Mississippi, Florida, Alabama, Georgia, Louisiana, Texas. Formed the Confederate States of America (CSA). Lincoln pledged not to interfere with slavery in existing states; offered to admit slavery in new territories if South returned to Union. South rejected compromise; war came.</li>
</ul>

<div class="tip">💡 The decades leading to the Civil War show escalating sectional conflict over slavery's expansion. Each compromise (Missouri, 1850, Kansas-Nebraska) temporarily eased tensions but deepened underlying conflict. By 1860, compromise was impossible.</div>
      `,
      questions: [
        { q: 'The Erie Canal connected:', options: ['Boston to Philadelphia', 'Hudson River to Great Lakes', 'Atlantic Ocean to Mississippi River', 'New York to Canada'], answer: 1, explanation: 'The correct answer is: Hudson River to Great Lakes.' },
        { q: 'The Second Great Awakening led to:', options: ['A significant decline in religious participation and faith', 'Reform movements like abolition and temperance', 'Widespread rejection of Christian values in American society', 'Growing political conservatism and resistance to social change'], answer: 1, explanation: 'The correct answer is: Reform movements like abolition and temperance.' },
        { q: 'The Seneca Falls Convention (1848) focused on:', options: ['Expanding labor rights for factory workers', "Women's rights and suffrage", 'Immediate slavery abolition by federal law', 'Lowering tariffs on imported manufactured goods'], answer: 1, explanation: 'The correct answer is: s rights and suffrage", .' },
        { q: 'Manifest Destiny was the belief that:', options: ['European colonial powers should govern the entire continent', 'American expansion across the continent was inevitable and justified', 'The institution of slavery should expand to western territories', 'America should remain confined to its existing eastern borders'], answer: 1, explanation: 'The correct answer is: American expansion across the continent was inevitable and justified.' },
        { q: 'The Mexican-American War resulted in:', options: ['A decisive Mexican military victory and American withdrawal', 'American acquisition of 55% of Mexican territory', 'No significant territorial changes for either nation involved', 'British-mediated peace terms favoring Mexican sovereignty'], answer: 1, explanation: 'The correct answer is: American acquisition of 55% of Mexican territory.' },
        { q: 'The Compromise of 1850 included all EXCEPT:', options: ['California as a free state', 'Stricter Fugitive Slave Act', 'Popular sovereignty in Utah/New Mexico', 'End of slavery nationwide'], answer: 3, explanation: 'The correct answer is: End of slavery nationwide.' },
        { q: 'The Kansas-Nebraska Act resulted in:', options: ['Peaceful settlement of the slavery question in new territories', 'Bleeding Kansas — violent conflict over slavery', 'Systematic expansion of slavery throughout all northern states', 'Immediate abolition of slavery in all western territories'], answer: 1, explanation: 'The correct answer is: Bleeding Kansas — violent conflict over slavery.' },
        { q: 'Uncle Tom\'s Cabin was significant because it:', options: ['Vigorously defended the institution of slavery as beneficial', 'Depicted slavery\\\'s horrors and swayed Northern opinion against it', 'Was written by a Southern author sympathetic to plantation life', 'Was widely rejected by Northern and Southern readers alike'], answer: 1, explanation: 'The correct answer is: Depicted slavery\.' },
        { q: 'The Dred Scott Decision ruled that:', options: ['Slavery was unconstitutional', 'Black people were citizens', 'Scott was a free person', 'Slavery was legal in all territories'], answer: 3, explanation: 'The correct answer is: Slavery was legal in all territories.' }
      ]
    },

    /* ────────── UNIT 7: The Civil War (1861–1865) ────────── */
    {
      video: 'rY9zHNOjGrs', // CrashCourse US History #20: The Civil War Part I
      title: 'The Civil War (1861–1865)',
      content: `
<h2>⚔️ The Civil War (1861–1865)</h2>

<h3>War Begins</h3>
<ul>
<li><strong>Fort Sumter (April 1861)</strong> — Confederate forces fired on the federal fort in Charleston Harbor. Lincoln called for volunteers to defend the Union; Virginia, Arkansas, North Carolina, Tennessee seceded. War began.</li>
<li><strong>The Border States</strong> (Maryland, Kentucky, Missouri, Delaware) — Slave states that remained in the Union. Lincoln had to balance military necessity with political reality (couldn't afford to alienate them).</li>
</ul>

<h3>Northern & Southern Advantages</h3>
<table>
<tr><th>North</th><th>South</th></tr>
<tr><td>Population: 22 million vs. South's 9 million (plus 3.5 million enslaved)</td><td>Most of the war on Southern territory (defensive advantage)</td></tr>
<tr><td>Industrial capacity; manufacturing</td><td>Strong military tradition; experienced officers (Lee, Davis)</td></tr>
<tr><td>Railroad network (internal)</td><td>Passionate commitment to independence</td></tr>
<tr><td>Financial resources; credit abroad</td><td></td></tr>
</table>

<h3>Economic & Social Warfare</h3>
<ul>
<li><strong>King Cotton & King Wheat</strong> — South relied on exporting cotton to Europe (esp. Britain/France) for war supplies. North realized control of wheat markets was equally powerful. Both sides competed for European support.</li>
<li><strong>The Draft (1863)</strong> — Both sides instituted conscription to replace casualties. Unpopular; sparked resentment (especially among poor who couldn't afford exemptions).</li>
<li><strong>The New York Draft Riots (1863)</strong> — Mostly Irish American workers rioted against conscription, viewing it as a "rich man's war, poor man's fight." Racial component: rioted against free Black workers competing for jobs. Army suppressed with force; 100+ killed.</li>
<li><strong>War Production</strong> — North's factories ran at capacity producing weapons, uniforms, food. Southern infrastructure damaged; production lagged. Northern industrial advantage proved decisive.</li>
</ul>

<h3>Military Strategy & Key Battles</h3>
<ul>
<li><strong>The Anaconda Plan (Winfield Scott)</strong> — Squeeze the South economically (naval blockade, control rivers); avoid direct confrontation initially. Ridiculed as timid but strategically sound.</li>
<li><strong>The Battle of Antietam (Sept 1862)</strong> — Bloodiest single day in American military history (~23,000 casualties). Lee invaded Maryland; repelled by McClellan. Technically a draw but South retreated. Allowed Lincoln to issue the Emancipation Proclamation.</li>
<li><strong>The Battle of Gettysburg (July 1863)</strong> — Three-day battle in Pennsylvania. Lee's second invasion of North defeated by Meade. Massive casualties (~51,000). Turning point: South never recovered from the loss.</li>
<li><strong>The Battle of Vicksburg (May–July 1863)</strong> — Grant besieged Vicksburg, Mississippi. Union victory gave North control of the Mississippi River ("dividing the Confederacy").</li>
<li><strong>Sherman's March to the Sea (1864–1865)</strong> — Sherman invaded Georgia and South Carolina with 60,000 troops; destroyed property and infrastructure systematically. Aimed at breaking Southern will and economy. Brutal but effective.</li>
</ul>

<h3>Emancipation & the War's Meaning</h3>
<ul>
<li><strong>The Emancipation Proclamation (Jan 1, 1863)</strong> — Lincoln issued the Emancipation Proclamation freeing enslaved people in Confederate states (not border states). Shifted war from saving the Union to ending slavery. Allowed Black soldiers to serve (180,000+ by war's end). Changed the war's moral dimension.</li>
<li><strong>The Gettysburg Address (Nov 1863)</strong> — Lincoln's brief speech reframed the war as a test of whether democracy could survive. "Four score and seven years ago" (Declaration of Independence, 1776) — emphasized the founding promise of "all men are created equal." Powerful statement of war purpose.</li>
</ul>

<h3>Home Front & Politics</h3>
<ul>
<li><strong>Lincoln & Congress:</strong> Lincoln expanded executive power during the emergency (suspended habeas corpus, authorized draft, spent money without Congressional approval). Controversial but accepted as necessary.</li>
<li><strong>Copperheads:</strong> Northern Democrats opposed to the war ("Peace Democrats"). Wanted negotiated settlement; criticized conscription and emancipation. Lincoln suppressed some opposition but maintained constitutional government (unlike the South).</li>
</ul>

<h3>War's End (1865)</h3>
<ul>
<li><strong>Surrender:</strong> Lee, surrounded at Appomattox Court House (April 9, 1865), surrendered to Grant. Grant offered lenient terms (soldiers could keep their horses; no executions). War effectively over.</li>
<li><strong>Lincoln's Assassination:</strong> John Wilkes Booth (Confederate sympathizer) assassinated Lincoln (April 14, 1865). Shocked nation; complicated Reconstruction planning.</li>
<li><strong>Casualties:</strong> ~620,000 deaths (360,000 Union, 260,000 Confederate); approximately 1.5 million wounded. Deadliest war in American history per capita. Entire generation traumatized.</li>
</ul>

<div class="tip">💡 The Civil War preserved the Union and ended slavery but came at a staggering human cost. The North's industrial and demographic advantages proved decisive over the South's fighting spirit and defensive position.</div>
      `,
      questions: [
        { q: 'The Civil War began when Confederate forces attacked:', options: ['Fort Sumter', 'Washington DC', 'Richmond', 'Charleston'], answer: 0, explanation: 'The correct answer is: Fort Sumter.' },
        { q: 'The Border States were significant because they:', options: ['Were firmly Confederate and actively fought against the Union', 'Remained in the Union despite allowing slavery', 'Were the first states to formally secede from the United States', 'Had no meaningful military value or strategic importance'], answer: 1, explanation: 'The correct answer is: Remained in the Union despite allowing slavery.' },
        { q: 'The Anaconda Plan involved:', options: ['A direct full-scale military invasion of the Southern interior', 'Economic squeeze (naval blockade, river control)', 'Immediate emancipation of all enslaved people in border states', 'A negotiated diplomatic settlement between North and South'], answer: 1, explanation: 'The correct answer is: Economic squeeze (naval blockade, river control).' },
        { q: 'The Battle of Gettysburg was significant because:', options: ['The South won a decisive victory that prolonged the conflict', 'The North defeated Lee\\\'s invasion; South never recovered', 'It brought an immediate and complete end to the entire war', 'General Sherman destroyed Atlanta during this pivotal campaign'], answer: 1, explanation: 'The correct answer is: The North defeated Lee\.' },
        { q: 'The Battle of Vicksburg gave the North control of:', options: ['The Atlantic coast', 'The Mississippi River', 'Richmond', 'Texas'], answer: 1, explanation: 'The correct answer is: The Mississippi River.' },
        { q: 'The Emancipation Proclamation freed enslaved people in:', options: ['All states throughout the entire United States uniformly', 'Only the Northern states that had already banned slavery', 'Confederate states (not border states)', 'No one specifically — it was purely a symbolic declaration'], answer: 2, explanation: 'The correct answer is: Confederate states (not border states).' },
        { q: 'The Gettysburg Address reframed the war as a test of:', options: ['Military strategy', 'Whether democracy could survive', 'Confederate strength', 'Northern industrial power'], answer: 1, explanation: 'The correct answer is: Whether democracy could survive.' },
        { q: 'Sherman\'s March to the Sea aimed at:', options: ['Protecting critical Union supply lines across the Deep South', 'Capturing the Confederate capital of Richmond through flanking', 'Breaking Southern will through destruction of property and infrastructure', 'Avoiding direct military combat by retreating to the coast'], answer: 2, explanation: 'The correct answer is: Breaking Southern will through destruction of property and infrastructure.' },
        { q: 'The Civil War resulted in approximately:', options: ['100,000 deaths', '300,000 deaths', '620,000 deaths', '1 million deaths'], answer: 2, explanation: 'The correct answer is: 620,000 deaths.' }
      ]
    },

    /* ────────── UNIT 8: Reconstruction (1865–1877) ────────── */
    {
      video: 'nowsS7pMApI', // CrashCourse US History #22: Reconstruction and 1876
      title: 'Reconstruction (1865–1877)',
      content: `
<h2>🏛️ Reconstruction (1865–1877)</h2>

<h3>Presidential Reconstruction (Lincoln & Johnson)</h3>
<ul>
<li><strong>Lincoln's Plan (10% Plan, 1863)</strong>
<ul>
<li>Lenient on the South: Only 10% of voters in a state had to take a loyalty oath to rejoin the Union</li>
<li>Aimed at quick reunion; minimal changes to Southern society</li>
<li>Assassinated before fully implemented</li>
</ul>
</li>
<li><strong>Andrew Johnson's Reconstruction Plan (1865–1866)</strong>
<ul>
<li><strong>Similar leniency:</strong> Allowed Southern states to rejoin if 50% of voters (white voters only) took loyalty oath; repudiated Confederate debt; ratified 13th Amendment (abolishing slavery)</li>
<li><strong>Johnson's Requirements:</strong> States had to acknowledge slavery's end; renounce secession; invalidate Confederate debts. But gave South a very free hand in managing freed slaves (the "Johnson-approved" Black Codes).</li>
<li><strong>Result:</strong> Southern states quickly rejoined; enacted Black Codes restricting freedmen's rights; sent Confederate officials to Congress. Republicans outraged.</li>
</ul>
</li>
</ul>

<h3>Congressional Reconstruction (1867–1877) — Radical Republicans in Control</h3>
<ul>
<li><strong>The Wade-Davis Bill (1864, rejected by Lincoln)</strong> — Proposed majority (not 10%) of white voters take loyalty oath; constitutional convention required. More stringent. Set precedent for Radical approach.</li>
<li><strong>The Military Reconstruction Act (1867)</strong>
<ul>
<li>Divided the South into 5 military districts; placed under military governors</li>
<li>Required ratification of the 14th Amendment (citizenship for all persons born in U.S.)</li>
<li>Allowed Black men to vote (in military districts) via new constitutional conventions</li>
<li>Displaced many Southern white political leaders</li>
</ul>
</li>
<li><strong>Additional Requirements (Reconstruction Acts 1867–1868)</strong>
<ul>
<li>States had to ratify the 13th Amendment (abolish slavery)</li>
<li>States had to ratify the 14th Amendment (citizenship, equal protection)</li>
<li>New state constitutions had to guarantee Black voting rights</li>
</ul>
</li>

<h3>Moderates vs. Radicals (Within Republican Party)</h3>
<ul>
<li><strong>Moderate Republicans:</strong> Wanted swift reunion; limited Southern punishment; skeptical of Federal intervention in local matters</li>
<li><strong>Radical Republicans:</strong> Wanted thorough transformation of the South; protection of freedmen's rights; federal enforcement; sometimes advocated land redistribution</li>
<li><strong>Johnson's Conflict with Congress:</strong> Johnson opposed Radical measures; vetoed civil rights bills. Congress overrode vetoes; impeached Johnson (acquitted by one vote in Senate). Showed Congress's power over president.</li>
</ul>

<h3>Freedmen's Experience During Reconstruction</h3>
<ul>
<li><strong>The Freedmen's Bureau (1865–1872)</strong> — Federal agency providing relief (food, shelter), education, and legal help to freedmen. Southern whites resented it as intrusive; Bureau agents were often Northerners ("carpetbaggers").</li>
<li><strong>The 13th, 14th, and 15th Amendments</strong>
<ul>
<li><strong>13th (1865):</strong> Abolished slavery everywhere in U.S.</li>
<li><strong>14th (1868):</strong> Granted citizenship to all persons born in U.S.; guaranteed equal protection and due process</li>
<li><strong>15th (1870):</strong> Prohibited denying vote based on race (though didn't protect other rights)</li>
</ul>
</li>
<li><strong>The Black Codes (1865–1866)</strong> — Southern laws restricting freedmen's rights (couldn't own land, couldn't testify against whites, forced labor contracts). Aimed to recreate slavery under a different name. Radicals in Congress viewed them as unacceptable and used them to justify military Reconstruction.</li>
<li><strong>Sharecropping:</strong> Formerly enslaved people worked land for a share of the crop. Created a cycle of debt and poverty similar to slavery (tied to land, owed landlord). Dominated post-Reconstruction Southern agriculture for decades.</li>
<li><strong>Economic Status of Freedmen:</strong> Few owned land or had access to capital; dependent on landlords and employers; wages were low; restricted to certain occupations.</li>
</ul>

<h3>The End of Reconstruction (1877)</h3>
<ul>
<li><strong>Election of 1876</strong> — Disputed election between Republican Hayes and Democrat Tilden. Electoral votes from three Southern states (Louisiana, South Carolina, Florida) were contested. Backroom deal ("Compromise of 1877"): Republicans accepted Tilden's defeat; Democrats accepted Hayes's victory. In exchange, Republicans promised to withdraw federal troops from the South.</li>
<li><strong>Redeemer Governments (1877+)</strong> — Southern Democrats ("Redeemers") reclaimed political control. Ended Reconstruction; restored white political dominance. Dismantled protections for freedmen.</li>
<li><strong>Jim Crow Laws (1877+)</strong> — Southern laws enforcing racial segregation ("separate but equal"). Restricted freedmen's political participation, economic opportunities, social interactions. Lasted until the Civil Rights Movement (1950s–1960s).</li>
<li><strong>The Ku Klux Klan</strong> — White supremacist organization emerging during Reconstruction (revived 1915 with different ideology). Used violence and intimidation to drive Black people out of politics and enforce racial hierarchy. Federal enforcement (and later Northern abandonment of the South) allowed KKK to flourish.</li>
<li><strong>Plessy v. Ferguson (1896)</strong> — Supreme Court upheld "separate but equal" doctrine, legitimizing Jim Crow laws. Remained law until Brown v. Board of Education (1954). Allowed segregation as constitutional.</li>
</ul>

<div class="tip">💡 Reconstruction's failure to guarantee freedmen's rights led to a century of Jim Crow segregation. The Compromise of 1877 prioritized sectional peace over racial justice — a precedent that haunted American race relations for generations.</div>
      `,
      questions: [
        { q: "Lincoln's 10% Plan for Reconstruction required:", options: ['50% of voters to take loyalty oath', '10% of voters to take loyalty oath', 'All voters to take loyalty oath', 'Constitutional convention'], answer: 1, explanation: "The correct answer is: 10% of voters to take loyalty oath." },
        { q: "Johnson's Reconstruction Plan resulted in:", options: ['Harsh punishment for the South', 'Southern states quickly rejoining and enacting Black Codes', 'Federal control of Southern states', 'Immediate Black suffrage'], answer: 1, explanation: "The correct answer is: Southern states quickly rejoining and enacting Black Codes." },
        { q: 'The Military Reconstruction Act (1867):', options: ['Ended military rule in the South and restored full self-rule', 'Divided the South into military districts; required 14th Amendment ratification', 'Returned Southern governments to their pre-war elected leaders', 'Abolished the Freedmen\'s Bureau and its educational programs'], answer: 1, explanation: 'The correct answer is: Divided the South into military districts; required 14th Amendment ratification.' },
        { q: 'The Freedmen\'s Bureau provided:', options: ['Punitive measures against the South', 'Relief, education, and legal help to freedmen', 'Military occupation only', 'Land redistribution'], answer: 1, explanation: 'The correct answer is: Relief, education, and legal help to freedmen.' },
        { q: 'The Black Codes were:', options: ['Federal laws protecting freedmen\'s civil rights and liberties', 'Southern laws restricting freedmen\\\'s freedom', 'Comprehensive federal laws protecting formerly enslaved people', 'Union Army regulations governing the treatment of prisoners'], answer: 1, explanation: 'The correct answer is: , .' },
        { q: 'The Compromise of 1877 resulted in:', options: ['A decisive Republican victory in every contested Southern state', 'A sweeping Democratic victory in the national popular vote', 'Hayes becoming president; federal troops withdrawn from the South', 'Continued Reconstruction enforcement throughout all Southern states'], answer: 2, explanation: 'The correct answer is: Hayes becoming president; federal troops withdrawn from the South.' },
        { q: '"Redeemer" governments were:', options: ['Federal authorities imposing strict oversight on Southern states', 'Southern Democrats reclaiming political control after Reconstruction', 'Freedmen\'s organizations building independent political coalitions', 'Northern Republicans implementing expanded civil rights programs'], answer: 1, explanation: 'The correct answer is: Southern Democrats reclaiming political control after Reconstruction.' },
        { q: 'Jim Crow Laws enforced:', options: ['Full social and political integration of all races equally', 'Racial segregation ("separate but equal")', 'Expanded voting rights for Black citizens across all states', 'Complete economic equality between racial groups in the South'], answer: 1, explanation: 'The correct answer is: Racial segregation ("separate but equal").' },
        { q: 'Plessy v. Ferguson (1896) upheld:', options: ['Mandatory desegregation of all public transportation systems', 'Equal legal rights for all racial groups without any exceptions', '"Separate but equal" doctrine, legitimizing segregation', 'Universal voting rights regardless of race or prior condition'], answer: 2, explanation: 'The correct answer is: "Separate but equal" doctrine, legitimizing segregation.' }
      ]
    },

    /* ────────── UNIT 9: The Gilded Age & Industrialization ────────── */
    {
      video: 'Spgdy3HkcSs', // CrashCourse US History #26: Gilded Age Politics
      title: 'The Gilded Age & Industrialization (1870s–1900)',
      content: `
<h2>🏭 The Gilded Age & Industrialization (1870s–1900)</h2>

<h3>Political Characteristics</h3>
<ul>
<li><strong>Waving the Bloody Shirt</strong> — Republicans reminded voters that Democrats were the "party of secession" and the war. Used Civil War nostalgia to maintain political dominance. Allowed them to avoid addressing post-Reconstruction issues (corruption, inequality).</li>
<li><strong>Compromise of 1877</strong> — Already discussed in Reconstruction unit. Ended Reconstruction; Republican Hayes became president; promised to withdraw federal troops from the South in exchange for Southern Democratic acquiescence to his election.</li>
<li><strong>Grant Administration Corruption (1869–1877)</strong> — Ulysses S. Grant's presidency plagued by scandals: Crédit Mobilier, Whiskey Ring, Secretary of War accepting bribes. Grant himself was honest but allowed subordinates to loot the government. Damaged Republican reputation.</li>
<li><strong>The Pendleton Act (1883)</strong> — Civil service reform act requiring federal employees to be hired based on merit (via civil service exams) rather than political patronage. Reduced corruption; professionalized federal bureaucracy. Limited "spoils system."</li>
<li><strong>Thomas Nast Cartoons</strong> — Political cartoons by Nast satirized corruption, exposed Tammany Hall (NYC political machine under "Boss" Tweed), attacked racial discrimination. Powerful example of investigative journalism through visual media.</li>
</ul>

<h3>Anti-Monopoly & Regulation</h3>
<ul>
<li><strong>Interstate Commerce Act (1887)</strong> — Regulated railroad rates and practices; prohibited discriminatory pricing. First major federal regulation of business. Aimed at limiting monopolistic practices (railroads charged farmers exorbitant rates).</li>
<li><strong>Sherman Antitrust Act (1890)</strong> — Prohibited trusts and monopolistic practices in interstate commerce. Initially weak (ambiguous language; Supreme Court narrowed it). Later used by Progressive presidents to break up monopolies.</li>
<li><strong>Horizontal & Vertical Integration</strong>
<ul>
<li><strong>Horizontal integration:</strong> Buying out competitors in the same industry to create monopoly (Rockefeller's Standard Oil). Eliminated competition.</li>
<li><strong>Vertical integration:</strong> Controlling every step of production (Carnegie's steel company). Reduced costs; increased efficiency; reduced competitors' access to supplies.</li>
</ul>
</li>
</ul>

<h3>Immigration & Labor</h3>
<ul>
<li><strong>Old Immigrants vs. New Immigrants</strong>
<ul>
<li><strong>Old:</strong> Northern/Western Europeans (British, German, Scandinavian); came before 1880; Protestant; integrated relatively easily</li>
<li><strong>New:</strong> Southern/Eastern Europeans (Italian, Polish, Greek, Jewish); came 1880+; Catholic/Jewish; faced discrimination (language, religion, "foreignness")</li>
<li>New immigrants took low-wage jobs in factories; lived in slums; were often accused of bringing radicalism (socialism, anarchism)</li>
</ul>
</li>
<li><strong>Laborers' Difficulties & Frustrations</strong>
<ul>
<li>12–16 hour workdays; low wages; dangerous conditions (fires, machinery, no safety regulations)</li>
<li>Child labor (children 8–16 working in factories and mines)</li>
<li>No benefits (unemployment insurance, health insurance, retirement); no job security</li>
<li>Unemployment during economic downturns; no government assistance</li>
<li>Conflict between skilled and unskilled workers; racial/ethnic divisions among workers weakened labor unity</li>
</ul>
</li>
<li><strong>Major Strikes</strong>
<ul>
<li><strong>The Homestead Strike (1892)</strong> — Carnegie's steel plant in Pennsylvania. Strike over wage cuts. Company hired Pinkerton detectives (private security) who killed several workers. Public sympathy shifted to the company; union suffered major defeat. Labor movement setback.</li>
<li><strong>The Pullman Strike (1894)</strong> — Strike against the Pullman railroad car company over wage cuts. Spread to railroad workers nationwide. Federal government sent troops; killed dozens. Established precedent of federal troops siding with business. Labor movement setback.</li>
<li><strong>Wabash v. Illinois (1886)</strong> — Supreme Court ruled that states couldn't regulate interstate commerce. Precedent for federal regulatory power (led to Interstate Commerce Act).</li>
</ul>
</li>
</ul>

<h3>Western Expansion & Settlement</h3>
<ul>
<li><strong>The Homestead Act (1862)</strong> — Offered 160 acres of free land to settlers who would live on and farm the land for 5 years. Spurred westward migration; benefited Northern settlers more than Southern (South had already settled).</li>
<li><strong>Railroad Development</strong> — Transcontinental Railroad (1869) and subsequent lines connected the West to Eastern markets. Railroads received massive land grants from government. Became the primary force in westward development.</li>
<li><strong>The Dawes Severalty Act (1887)</strong> — Broke up Native American reservations into individual land allotments (160 acres per family). Aimed at "civilizing" Native Americans by making them individual farmers. Resulted in fragmented, uneconomical small farms; much "surplus" land was sold to white settlers. Disastrous for Native Americans.</li>
<li><strong>Farmers' Difficulties & Frustrations</strong>
<ul>
<li>Falling grain prices (overproduction); high shipping costs (monopolistic railroad rates)</li>
<li>High mortgage debt; risk of losing farms</li>
<li>Isolation; limited access to markets and services</li>
<li>Weather/drought; crop failures; no insurance</li>
<li>Debt to fertilizer/seed companies (crop-lien system created perpetual debt)</li>
</ul>
</li>
<li><strong>The Grange (1867+)</strong> — Farmer organization providing social services and political advocacy. Pushed for regulation of railroad rates and grain elevators. Later decline but pioneered farmers' political mobilization.</li>
<li><strong>The Populist Party (1892–1908, peaked ~1896)</strong>
<ul>
<li>Represented farmers and workers; demanded railroad regulation, currency inflation (free silver), graduated income tax, direct election of senators</li>
<li>In 1896, Populists merged with Democrats, nominating William Jennings Bryan (who ran on "free silver")</li>
<li>Bryan lost to McKinley; Populism faded, but many Populist demands were later enacted (income tax, direct election of senators, railroad regulation)</li>
</ul>
</li>
</ul>

<h3>The Election of 1896 & McKinley</h3>
<ul>
<li><strong>William Jennings Bryan & the "Cross of Gold Speech"</strong> — Bryan, a Populist-Democrat, gave an eloquent speech defending free silver (coining unlimited silver) as the solution to economic depression. "Burn down your cities and leave our farms, and your cities will spring up again as if by magic; but destroy our farms and the grass will grow in the streets of every city in the country." Lost to William McKinley (Republican, pro-gold, pro-business).</li>
</ul>

<div class="tip">💡 The Gilded Age's wealth was real, but inequality was severe. The top 1% accumulated vast fortunes while workers and farmers struggled. Reform movements (labor unions, farmers' organizations, Populism) emerged in response, setting the stage for Progressive Era reforms.</div>
      `,
      questions: [
        { q: '"Waving the bloody shirt" was a tactic that:', options: ['Actively opposed Reconstruction and supported Southern autonomy', 'Reminded voters of Republican victory in the Civil War', 'Strongly supported the Southern cause and state sovereignty', 'Vigorously opposed railroad regulation and corporate oversight'], answer: 1, explanation: 'The correct answer is: Reminded voters of Republican victory in the Civil War.' },
        { q: 'The Pendleton Act established:', options: ['The spoils system', 'Political patronage for all', 'Civil service hiring based on merit', 'Free land for settlers'], answer: 2, explanation: 'The correct answer is: Civil service hiring based on merit.' },
        { q: 'The Sherman Antitrust Act prohibited:', options: ['The formation of labor unions and collective worker organizations', 'Monopolistic practices in interstate commerce', 'Immigration from specific countries and restricted naturalization', 'Women\'s suffrage movements and political organizing activities'], answer: 1, explanation: 'The correct answer is: Monopolistic practices in interstate commerce.' },
        { q: 'Horizontal integration involved:', options: ['Controlling every step of production', 'Buying out competitors in the same industry', 'Merging with railroads', 'Forming labor unions'], answer: 1, explanation: 'The correct answer is: Buying out competitors in the same industry.' },
        { q: 'The Homestead Act offered:', options: ['Direct cash payments to settlers who moved to western regions', '160 acres of free land to settlers who farmed it for 5 years', 'Guaranteed government employment for all western homesteaders', 'Complimentary railroad passes for families relocating westward'], answer: 1, explanation: 'The correct answer is: 160 acres of free land to settlers who farmed it for 5 years.' },
        { q: 'The Dawes Severalty Act was aimed at:', options: ['Protecting Native American tribal lands from outside settlement', '"Civilizing" Native Americans through individual land allotments', 'Expanding existing reservations to include additional territory', 'Integrating Native Americans into federal military service'], answer: 1, explanation: 'The correct answer is: "Civilizing" Native Americans through individual land allotments.' },
        { q: 'The Populist Party represented:', options: ['Exclusively industrial workers in northeastern manufacturing', 'Wealthy bankers and railroad owners seeking less government', 'Farmers and workers; demanded regulation and inflation', 'Southern plantation owners fighting against federal taxation'], answer: 2, explanation: 'The correct answer is: Farmers and workers; demanded regulation and inflation.' },
        { q: 'William Jennings Bryan\'s "Cross of Gold Speech" advocated for:', options: ['Maintaining the exclusive gold standard for all U.S. currency', 'Free silver (unlimited silver coining)', 'Complete abolition of all government-issued currency systems', 'Dissolving organized labor unions and collective bargaining'], answer: 1, explanation: 'The correct answer is: Free silver (unlimited silver coining).' }
      ]
    },

    /* ────────── UNIT 10: American Imperialism ────────── */
    {
      video: 'QfsfoFqsFk4', // CrashCourse US History #28: American Imperialism
      title: 'American Imperialism (1890s–1914)',
      content: `
<h2>🌎 American Imperialism (1890s–1914)</h2>

<h3>From Isolation to Imperialism</h3>
<ul>
<li>19th century: U.S. largely focused on continental expansion; limited foreign intervention</li>
<li>1880s–1890s: Growing interest in overseas markets, naval power, military bases</li>
<li><strong>Alfred Thayer Mahan's "The Influence of Sea Power Upon History" (1890)</strong> — Argued that naval power was the key to national strength; control of sea lanes essential. Influenced U.S. strategy toward empire-building and overseas bases.</li>
<li><strong>Why Imperialism?</strong>
<ul>
<li><strong>Economic:</strong> Markets for manufactured goods; access to raw materials (rubber, sugar, oil); investment opportunities in underdeveloped regions</li>
<li><strong>Military:</strong> Strategic overseas bases; naval stations; Coaling stations for ships</li>
<li><strong>Ideological:</strong> "White Man's Burden" (racial superiority justifying rule); Social Darwinism (survival of the fittest applies to nations); spreading democracy/Christianity</li>
</ul>
</li>
</ul>

<h3>The Spanish-American War (1898)</h3>
<ul>
<li><strong>Causes:</strong>
<ul>
<li>Cuban independence movement against Spanish rule</li>
<li><strong>Yellow journalism:</strong> Newspapers (Hearst, Pulitzer) sensationalized stories of Spanish atrocities to sell papers and shape public opinion</li>
<li>U.S.S. Maine explosion in Havana Harbor (Feb 1898): "Remember the Maine!" — blamed Spain (actually unknown cause; possibly accidental)</li>
</ul>
</li>
<li><strong>Course & Outcome:</strong>
<ul>
<li>Brief war (4 months); U.S. easily defeated Spain (Spanish navy was outdated)</li>
<li>Fought in both Caribbean (Cuba) and Pacific (Philippines)</li>
</ul>
</li>
<li><strong>Treaty of Paris (1898):</strong> Spain ceded Puerto Rico, Guam, and the Philippines to the U.S. Cuba became independent (but under U.S. influence via the Platt Amendment). U.S. became a world power with overseas colonies.</li>
</ul>

<h3>Overseas Territories & Interventions</h3>
<ul>
<li><strong>The Platt Amendment (1901)</strong> — Imposed on Cuba's constitution. U.S. could intervene in Cuban affairs "for preservation of independence" and to maintain order. Made Cuba a de facto U.S. protectorate. Deeply resented by Cubans.</li>
<li><strong>The Philippines Rebellion (1899–1902)</strong> — Filipinos, led by Emilio Aguinaldo, fought for independence from the U.S. Americans expected quick victory but faced guerrilla warfare for years. ~200,000 Filipino civilian deaths. Brutal counterinsurgency. American victory; Philippines remained U.S. colony.</li>
<li><strong>Annexation of Hawaii (1898)</strong>
<ul>
<li>1893: American sugar planters overthrew Hawaiian Queen Liliuokalani</li>
<li>1898: During Spanish-American War, U.S. annexed Hawaii (strategic Pacific location)</li>
<li>Native Hawaiians displaced; American settlers controlled economy/government</li>
</ul>
</li>
<li><strong>The Open Door Notes (1899–1900)</strong> — Secretary of State John Hay proposed equal trading rights in China for all nations. Aimed to prevent European powers from carving China into exclusive zones of influence. Asserted U.S. economic interests without formal colonialism.</li>
<li><strong>The Roosevelt Corollary to the Monroe Doctrine (1904)</strong> — President Theodore Roosevelt claimed the U.S. had the right to intervene in Latin American countries to maintain stability and prevent European intervention. "Speak softly and carry a big stick." Justified numerous U.S. interventions in Caribbean/Central America.</li>
<li><strong>The Panama Canal (1904–1914)</strong>
<ul>
<li>French had tried (failed) to build a canal through Panama (part of Colombia)</li>
<li>U.S. supported Panamanian independence (1903); immediately signed canal treaty with Panama</li>
<li>Built canal connecting Atlantic and Pacific oceans; crucial strategic and economic asset</li>
<li>Seen in Latin America as U.S. imperialism; violated Colombian sovereignty</li>
</ul>
</li>
</ul>

<div class="tip">💡 American imperialism was less about formal colonies (except Philippines, Puerto Rico) and more about economic domination and military presence. The Open Door Policy and Roosevelt Corollary asserted U.S. dominance in key regions without directly annexing territory.</div>
      `,
      questions: [
        { q: 'Mahan\'s "Influence of Sea Power" argued that:', options: ['Superior land-based military power was the key to dominance', 'Naval power was key to national strength', 'Imperialism was fundamentally immoral and economically wasteful', 'Strict isolationism was the best path to long-term prosperity'], answer: 1, explanation: 'The correct answer is: Naval power was key to national strength.' },
        { q: 'The Spanish-American War involved:', options: ['A direct military invasion of the Spanish mainland peninsula', 'War in Cuba and the Philippines; U.S. victory', 'A prolonged naval battle fought exclusively in Atlantic waters', 'Years of intense combat across multiple European battlefronts'], answer: 1, explanation: 'The correct answer is: War in Cuba and the Philippines; U.S. victory.' },
        { q: 'The Treaty of Paris (1898) gave the U.S.:', options: ['Administrative control over all of Spain\'s remaining colonies', 'Puerto Rico, Guam, and the Philippines', 'Complete sovereignty over every island in the Caribbean Sea', 'Full territorial control of both Hawaii and the Alaska region'], answer: 1, explanation: 'The correct answer is: Puerto Rico, Guam, and the Philippines.' },
        { q: 'The Platt Amendment made:', options: ['Cuba a fully independent nation free from outside interference', 'Cuba a U.S. protectorate with U.S. intervention rights', 'Puerto Rico an official state with full congressional voting', 'Spain a formal U.S. diplomatic and military alliance partner'], answer: 1, explanation: 'The correct answer is: Cuba a U.S. protectorate with U.S. intervention rights.' },
        { q: 'The Philippines Rebellion lasted:', options: ['Approximately 4 months of minimal armed resistance', 'Less than a single year of isolated local skirmishes', '1899–1902 (years of guerrilla warfare)', 'Continuously through the entirety of the First World War'], answer: 2, explanation: 'The correct answer is: 1899–1902 (years of guerrilla warfare).' },
        { q: 'Hawaii was annexed in:', options: ['1890 following a peaceful diplomatic negotiation process', '1898 (during the Spanish-American War)', '1905 after a prolonged territorial dispute with Japan', '1914 at the beginning of the First World War conflict'], answer: 1, explanation: 'The correct answer is: 1898 (during the Spanish-American War).' },
        { q: 'The Open Door Policy aimed at:', options: ['Permanently closing China to all U.S. commercial interests', 'Equal trading rights in China for all nations', 'Establishing direct colonial control over Chinese territories', 'Completely isolating China from all international trade routes'], answer: 1, explanation: 'The correct answer is: Equal trading rights in China for all nations.' },
        { q: 'The Roosevelt Corollary claimed the U.S. could:', options: ['Only defend its own territorial borders and coastal waters', 'Intervene in Latin America to prevent European intervention', 'Formally annex any sovereign nation in the Western Hemisphere', 'Completely ignore the Monroe Doctrine and its core principles'], answer: 1, explanation: 'The correct answer is: Intervene in Latin America to prevent European intervention.' }
      ]
    },

    /* ────────── UNIT 11: The Progressive Era ────────── */
    {
      video: 'i0Q4zPR4G7M', // CrashCourse US History #27: The Progressive Era
      title: 'The Progressive Era (1890s–1920)',
      content: `
<h2>📰 The Progressive Era (1890s–1920)</h2>

<h3>Progressivism: The Movement</h3>
<ul>
<li><strong>What was Progressivism?</strong> — Reform movement responding to problems of industrialization: urban poverty, child labor, unsafe food/drugs, corruption, monopolies. Believed government should actively solve social problems (unlike Laissez-faire ideology).</li>
<li><strong>Who were Progressives?</strong> — Middle-class professionals (lawyers, doctors, teachers); some wealthy industrialists; younger generation; varied political backgrounds (Republicans and Democrats).</li>
<li><strong>Progressive Goals:</strong>
<ul>
<li>Break up monopolies ("trust-busting")</li>
<li>Regulate business practices</li>
<li>Protect workers (child labor laws, maximum hours, safety)</li>
<li>Protect consumers (food/drug safety)</li>
<li>Increase democratic participation (direct elections, referendums, recalls)</li>
<li>Conserve natural resources</li>
</ul>
</li>
</ul>

<h3>Muckrakers (Investigative Journalists)</h3>
<ul>
<li><strong>Upton Sinclair, "The Jungle" (1906)</strong> — Novel depicting horrific conditions in meatpacking industry (unsanitary meat, workers exploited). Aimed to expose worker exploitation; instead shocked the public about food safety. Led to Pure Food and Drug Act and Meat Inspection Act (1906).</li>
<li><strong>Ida Tarbell, "History of Standard Oil"</strong> — Investigation of Rockefeller's monopolistic practices. Detailed predatory business tactics. Influenced antitrust action against Standard Oil.</li>
<li><strong>Jacob Riis, "How the Other Half Lives"</strong> — Photojournalism exposing poverty and slum conditions in NYC tenements. Visual journalism showed harsh realities.</li>
<li><strong>Lincoln Steffens, "The Shame of the Cities"</strong> — Exposed political corruption in city governments; machine politics; boss rule.</li>
</ul>

<h3>Progressive Presidents</h3>

<h4>Theodore Roosevelt (1901–1909)</h4>
<ul>
<li><strong>"Trust-buster":</strong> Used Sherman Antitrust Act aggressively to break up monopolies (Northern Securities Company, Standard Oil). Actually won fewer cases than Taft, but had more dramatic image.</li>
<li><strong>The Square Deal:</strong> Roosevelt's domestic program aimed at fairness: regulate big business, protect workers, protect consumers.</li>
<li><strong>Specific Achievements:</strong>
<ul>
<li>The Anthracite Coal Mine Strike (1902): Roosevelt mediated between miners and owners; miners won some concessions. Showed government could referee capital-labor conflict.</li>
<li>The Northern Securities Case (1904): Supreme Court broke up railroad merger; established government power to challenge monopolies.</li>
<li>Pure Food and Drug Act & Meat Inspection Act (1906): Responded to "The Jungle"; regulated food production and drugs.</li>
<li>Newlands Act (1902): Authorized federal irrigation projects in the West.</li>
</ul>
</li>
<li><strong>Conservation:</strong> Roosevelt established national parks, national forests, and wildlife refuges. Conserved ~230 million acres.</li>
<li><strong>Roosevelt's Relationship with Taft:</strong> Roosevelt initially supported William Howard Taft as his successor. Taft became president (1909–1913) and actually broke up MORE trusts but was seen as too conservative. Roosevelt became disillusioned; ran again in 1912 (Split Republican party; Democrat Wilson won).</li>
</ul>

<h4>William Howard Taft (1909–1913)</h4>
<ul>
<li>Continued trust-busting (actually more successful than TR in number of cases)</li>
<li>But lacked Roosevelt's charisma; seen as too cautious; fell out with Progressives</li>
<li>Conflict with Conservation advocate Gifford Pinchot; dismissed him (angered conservationists)</li>
</ul>

<h4>Woodrow Wilson (1913–1921)</h4>
<ul>
<li><strong>"New Freedom":</strong> Wilson's progressive program emphasized antitrust, banking reform, tariff reform. Wanted to restore competition (not regulate monopolies like TR).</li>
<li><strong>Federal Trade Commission (FTC, 1914):</strong> Created to investigate unfair business practices; could issue cease-and-desist orders. Empowered consumers/competitors against monopolies.</li>
<li><strong>Clayton Antitrust Act (1914):</strong> Strengthened antitrust laws; exempted labor unions from antitrust prosecution (labor could organize and boycott). Key victory for labor.</li>
<li><strong>The Underwood Tariff (1913):</strong> Significantly reduced tariff rates for the first time since the Civil War. Wilson's signature tariff reform; lowered prices on imported goods; reduced protection for big business. Revenue loss was offset by the new federal income tax (16th Amendment).</li>
<li><strong>Federal Reserve System (1913):</strong> Created central banking system; 12 regional banks; controlled money supply and interest rates. Gave government greater control over the economy.</li>
</ul>

<h3>Progressive Amendments</h3>
<ul>
<li><strong>16th Amendment (1913):</strong> Authorized federal income tax. Gave government new revenue source; progressive taxation could redistribute wealth.</li>
<li><strong>17th Amendment (1913):</strong> Direct election of U.S. senators (previously chosen by state legislatures). Increased democratic participation; reduced control by state political machines.</li>
<li><strong>18th Amendment (1919):</strong> Prohibited manufacture, sale, and transport of alcohol. Aimed at social reform (alcohol was linked to poverty, domestic violence, crime). Proved unenforceable; led to Prohibition era (1920–1933).</li>
<li><strong>19th Amendment (1920):</strong> Women's suffrage — women gained the right to vote. Result of decades of activism by women's rights movement.</li>
</ul>

<h3>Other Progressive Reforms</h3>
<ul>
<li><strong>Direct Democracy Tools:</strong> Initiative (citizens propose laws), Referendum (citizens vote on laws), Recall (citizens remove elected officials). Aimed at reducing power of political machines and increasing democratic control.</li>
<li><strong>The "Wisconsin Idea":</strong> Governor Robert LaFollette pioneered progressive reforms in Wisconsin: railroad regulation, primary elections (voters choose party nominees), civil service reform.</li>
<li><strong>Labor Reforms:</strong> Child labor restrictions, maximum working hours, workplace safety, compensation for injured workers.</li>
<li><strong>Muller v. Oregon (1908):</strong> Supreme Court upheld a law limiting women's working hours (10 hours/day). Argued women needed protection due to their maternal role. Paternalistic but protected workers.</li>
</ul>

<h3>Progressive Political Parties & Factions</h3>
<ul>
<li><strong>New Nationalism vs. New Freedom</strong>
<ul>
<li><strong>New Nationalism (Roosevelt):</strong> Accept big business but regulate it; strong government intervention; progressive taxation</li>
<li><strong>New Freedom (Wilson):</strong> Break up monopolies; restore competition; reduce government intervention (except to prevent monopoly formation)</li>
</ul>
</li>
<li><strong>The Bull Moose Party (1912):</strong> Progressive Party formed by Roosevelt when Republicans nominated Taft. "Bull Moose" was Roosevelt's nickname. Split Republican vote; Democrat Wilson won. Party faded after 1912.</li>
<li><strong>Wilson's Triple War of Privilege (Wilson's phrase for his progressive agenda):</strong> Antitrust, tariff reform, banking reform. All aimed at limiting concentrated power.</li>
</ul>

<h3>Progressive Limitations</h3>
<ul>
<li>Often excluded Black Americans from benefits (segregation; limited political power in the South)</li>
<li>Some progressives supported eugenics (scientific racism, forced sterilization)</li>
<li>Labor movement advanced but was often suppressed by government (Pullman Strike precedent)</li>
<li>Trusts returned after Progressive era ended; consolidation resumed in the 1920s</li>
</ul>

<div class="tip">💡 The Progressive Era fundamentally expanded government's role in regulating the economy and addressing social problems. The 16th, 17th, 18th, and 19th Amendments reshaped American democracy. But progressivism had limits: racism, paternalism, and ultimate failure to permanently transform corporate power.</div>
      `,
      questions: [
        { q: 'Progressivism was a response to problems of:', options: ['Slavery and its lasting social consequences across the nation', 'Industrialization (monopolies, poverty, corruption)', 'Westward expansion and territorial disputes with native peoples', 'Reconstruction-era political conflicts in the Southern states'], answer: 1, explanation: 'The correct answer is: Industrialization (monopolies, poverty, corruption).' },
        { q: 'Muckrakers were:', options: ['Elected politicians who campaigned on anti-corruption platforms', 'Investigative journalists who exposed corruption and problems', 'Organized labor leaders who fought for better working conditions', 'Wealthy business owners who promoted corporate self-regulation'], answer: 1, explanation: 'The correct answer is: Investigative journalists who exposed corruption and problems.' },
        { q: "Sinclair's 'The Jungle' led to:", options: ['Labor rights legislation', 'Food and drug safety regulations', 'Abolition', 'Women\'s suffrage'], answer: 1, explanation: "The correct answer is: Food and drug safety regulations." },
        { q: 'Roosevelt\'s "Square Deal" aimed at:', options: ['Preserving laissez-faire economics and minimal federal regulation', 'Fairness for workers, consumers, and regulated business', 'Promoting rapid industrialization without regard for worker safety', 'Expanding American imperialism and overseas colonial territories'], answer: 1, explanation: 'The correct answer is: Fairness for workers, consumers, and regulated business.' },
        { q: 'The Anthracite Coal Mine Strike (1902) was significant because:', options: ['Workers lost all their demands and were forcibly returned to work', 'Roosevelt mediated; showed government could referee capital-labor conflict', 'It led to the complete end of organized labor unions nationwide', 'Miners were violently suppressed by federal military intervention'], answer: 1, explanation: 'The correct answer is: Roosevelt mediated; showed government could referee capital-labor conflict.' },
        { q: 'The Clayton Antitrust Act (1914):', options: ['Significantly weakened existing antitrust enforcement mechanisms', 'Strengthened antitrust laws; exempted labor unions', 'Formally allowed all monopolistic business practices nationwide', 'Completely abolished the Federal Trade Commission and oversight'], answer: 1, explanation: 'The correct answer is: Strengthened antitrust laws; exempted labor unions.' },
        { q: 'The 19th Amendment (1920):', options: ['Prohibited alcohol', 'Created the federal income tax', 'Granted women the right to vote', 'Established direct election of senators'], answer: 2, explanation: 'The correct answer is: Granted women the right to vote.' },
        { q: 'The Bull Moose Party was formed by:', options: ['Democratic Party reformers pushing for conservative platforms', 'Socialist labor organizers advocating for worker-owned industry', 'Theodore Roosevelt (Progressives); split Republican vote in 1912', 'Major labor union leaders seeking independent political power'], answer: 2, explanation: 'The correct answer is: Theodore Roosevelt (Progressives); split Republican vote in 1912.' },
        { q: '"New Nationalism" vs. "New Freedom" represented disagreement over:', options: ['Whether to pursue or abandon American imperialism overseas', 'Whether to regulate or break up big business', 'How to best advance women\'s rights and suffrage nationally', 'The proper federal role in promoting racial equality reforms'], answer: 1, explanation: 'The correct answer is: Whether to regulate or break up big business.' },
        { q: 'The Underwood Tariff (1913) was significant because it:', options: ['Dramatically raised tariff rates to protect domestic industries', 'Significantly reduced tariff rates for the first time since the Civil War', 'Completely eliminated all tariffs on both imports and exports', 'Only applied to agricultural products from specific countries'], answer: 1, explanation: 'The correct answer is: Significantly reduced tariff rates for the first time since the Civil War.' }
      ]
    },

    /* ────────── UNIT 12: World War I ────────── */
    {
      video: 'y59wErqg4Xg', // CrashCourse US History #30: America in World War I
      title: 'World War I (1914–1918)',
      content: `
<h2>💣 World War I (1914–1918)</h2>

<h3>Causes of WWI — M.A.I.N.</h3>
<ul>
<li><strong>Militarism:</strong> Arms race between European powers, especially Germany and Britain. New weapons (machine guns, poison gas, tanks, submarines). Military planning dominated diplomatic decisions.</li>
<li><strong>Alliances:</strong> Two rival blocs:
<ul>
<li><strong>Triple Alliance:</strong> Germany, Austria-Hungary, Italy</li>
<li><strong>Triple Entente:</strong> Britain, France, Russia (later Germany invaded Belgium, pulled Britain in)</li>
</ul>
</li>
<li><strong>Imperialism:</strong> Competition for colonies in Africa and Asia created tensions between imperial powers.</li>
<li><strong>Nationalism:</strong> Intense national pride; ethnic groups seeking self-determination (especially in Austria-Hungary's multi-ethnic empire). Serbian nationalism led to the spark.</li>
<li><strong>The Spark (June 1914):</strong> Assassination of Archduke Franz Ferdinand of Austria-Hungary by a Serbian nationalist (Gavrilo Princip). Alliance system dragged all of Europe into war within weeks.</li>
</ul>

<h3>U.S. Neutrality & Entry</h3>
<ul>
<li><strong>Initial U.S. Neutrality (1914–1917):</strong> President Wilson declared neutrality; "The world must be made safe for democracy." (But America was not yet in the war, just philosophically sympathetic.) U.S. citizens favored the Allies (Anglo-American cultural ties) but official policy was neutral.</li>
<li><strong>Unrestricted Submarine Warfare (1915+):</strong> Germany used U-boats to sink ships carrying supplies to Britain. Americans died: Lusitania (1915, 128 Americans killed); Sussex. Outrage grew.</li>
<li><strong>The Zimmermann Telegram (Jan 1917):</strong> German Foreign Minister Arthur Zimmermann sent telegram to Mexico proposing military alliance against the U.S. British intercepted and shared it with the U.S. Public outrage when revealed; seemed proof of German aggression.</li>
<li><strong>U.S. Enters War (April 1917):</strong> Congress declared war on Germany. American Expeditionary Force (AEF) sent to France under General John J. Pershing. Fresh American troops helped turn the tide in 1918 (1.2 million soldiers deployed).</li>
</ul>

<h3>The War Itself</h3>
<ul>
<li><strong>Trench Warfare on the Western Front:</strong> Soldiers fought from trenches; horrific conditions (mud, disease, poison gas, machine gun fire). Stalemate for years; millions of casualties for small territorial gains (Battle of the Somme 1916: ~1 million casualties).</li>
<li><strong>New Weapons:</strong> Machine guns, poison gas (mustard gas, chlorine), tanks, poison gas, aircraft, submarines. Made the war especially deadly.</li>
<li><strong>The Sussex Pledge (May 1916):</strong> Germany promised to spare passenger ships after the Sussex (ship carrying Americans) was attacked. Temporarily eased U.S.-German tensions.</li>
</ul>

<h3>American Home Front</h3>
<ul>
<li><strong>Espionage and Sedition Acts (1917–1918):</strong> Made it illegal to criticize the government or the war effort. Restricted civil liberties; targeted German Americans, socialists, war opponents. Supreme Court upheld them (Schenck v. United States, 1919).</li>
<li><strong>Schenck v. United States (1919):</strong> Supreme Court case upholding the Espionage Act. Oliver Wendell Holmes Jr. established the "clear and present danger" test (speech can be restricted if it poses immediate danger). Precedent for limiting free speech during national security emergencies.</li>
<li><strong>The Great Migration (accelerated during WWI):</strong> African Americans moved from rural South to Northern cities for factory jobs (war production needed labor). Changed American demographics; led to racial tensions in Northern cities.</li>
<li><strong>Women in the Workforce:</strong> Women took on factory jobs, nursing roles, service positions. Challenged traditional gender roles. Contributed to later push for women's suffrage (1920).</li>
<li><strong>Propaganda & War Bonds:</strong> Government used propaganda posters, films, and Liberty Bond campaigns to maintain public support and raise money for the war.</li>
</ul>

<h3>Treaty of Versailles (1919) & League of Nations</h3>
<ul>
<li><strong>Wilson's 14 Points (1918):</strong> Idealistic peace proposal emphasizing self-determination, free trade, collective security through a League of Nations. Not all points were accepted in final treaty.</li>
<li><strong>Treaty of Versailles (1919):</strong> Peace treaty ending WWI. Imposed harsh terms on Germany:
<ul>
<li><strong>War guilt clause:</strong> Germany accepted responsibility for starting the war (humiliating)</li>
<li><strong>Reparations:</strong> Germany forced to pay $33 billion in damages</li>
<li><strong>Territorial losses:</strong> Alsace-Lorraine to France; Poland got German territory; League administered other territory</li>
<li><strong>Military restrictions:</strong> Germany limited to 100,000 troops; no air force; no submarines</li>
</ul>
</li>
<li><strong>The League of Nations (1920):</strong> International organization created to maintain peace and settle disputes. Wilson championed it; Congress rejected it. U.S. Senate refused to ratify the treaty, fearing foreign entanglements. U.S. didn't join the League (major undermining of its credibility).</li>
<li><strong>The Lodge Reservations:</strong> Republican Senator Henry Cabot Lodge demanded reservations to the League covenant (exempting U.S. from obligations). Wilson refused compromise; treaty failed. Political and personal conflict between Wilson and Lodge.</li>
<li><strong>Article X of the League Covenant:</strong> Guaranteed to preserve the territorial integrity of League members against aggression. Americans feared this would obligate the U.S. to military involvement. Key issue in the Senate's rejection.</li>
</ul>

<h3>Consequences</h3>
<ul>
<li>Harsh terms on Germany bred resentment; economically devastated Germany; paved way for Hitler's rise (1933+)</li>
<li>U.S. non-membership in League undermined its ability to maintain peace (League was ineffectual without U.S.)</li>
<li>U.S. returned to isolationism in the 1920s–1930s</li>
<li>War accelerated social changes in America (women's suffrage, African American migration, labor organization)</li>
</ul>

<div class="tip">💡 The Treaty of Versailles is often blamed for causing WWII. The harsh terms humiliated Germany and created economic devastation that made the population receptive to Hitler's promises to restore German greatness. A more lenient peace might have prevented WWII entirely.</div>
      `,
      questions: [
        { q: 'The M.A.I.N. causes of WWI were:', options: ['Money, Aristocracy, Industry, Navy', 'Militarism, Alliances, Imperialism, Nationalism', 'Military, American, International, Nations', 'Monarchy, Anarchy, Independence, Neutrality'], answer: 1, explanation: 'The correct answer is: Militarism, Alliances, Imperialism, Nationalism.' },
        { q: 'The spark for WWI was the assassination of:', options: ['A prominent British king during a state diplomatic ceremony', 'The sitting French president during a political rally event', 'Archduke Franz Ferdinand of Austria-Hungary', 'A high-ranking German general on the Eastern European front'], answer: 2, explanation: 'The correct answer is: Archduke Franz Ferdinand of Austria-Hungary.' },
        { q: 'The Zimmermann Telegram proposed:', options: ['A formal peace agreement between Germany and the United States', 'A German-Mexican alliance against the U.S.', 'An immediate withdrawal of all German troops from Belgium', 'Germany\'s unconditional surrender to the Allied Powers forces'], answer: 1, explanation: 'The correct answer is: A German-Mexican alliance against the U.S..' },
        { q: 'The U.S. entered WWI in:', options: ['1914', '1915', '1916', '1917'], answer: 3, explanation: 'The correct answer is: 1917.' },
        { q: 'Trench warfare was characterized by:', options: ['Rapid troop movements and constant changes in battle lines', 'Stalemate, horrific conditions, massive casualties', 'Tactics pioneered and perfected by the American military forces', 'Complete German military superiority across all major fronts'], answer: 1, explanation: 'The correct answer is: Stalemate, horrific conditions, massive casualties.' },
        { q: 'Wilson\'s 14 Points emphasized:', options: ['Harsh military punishment for Germany and its allied nations', 'Self-determination, free trade, collective security through a League', 'Expanded colonial territories for the victorious Allied powers', 'Retaliatory measures and revenge against the Central Powers'], answer: 1, explanation: 'The correct answer is: Self-determination, free trade, collective security through a League.' },
        { q: 'The Treaty of Versailles imposed harsh terms on Germany including:', options: ['Lenient reparations that allowed Germany rapid economic recovery and military rebuilding', 'War guilt clause, massive reparations ($33 billion), territorial losses, military restrictions', 'Complete diplomatic forgiveness with no penalties, restrictions, or territorial consequences', 'No meaningful punishment beyond a formal acknowledgment of defeat and minor border changes'], answer: 1, explanation: 'The correct answer is: War guilt clause, massive reparations ($33 billion), territorial losses, military restrictions.' },
        { q: 'The U.S. Senate rejected the League of Nations treaty because:', options: ['President Wilson actively opposed and campaigned against joining', 'Congress enthusiastically wanted to join without any conditions', 'Senators feared foreign entanglements (Lodge Reservations issue)', 'Germany\'s strong opposition blocked American membership entirely'], answer: 2, explanation: 'The correct answer is: Senators feared foreign entanglements (Lodge Reservations issue).' },
        { q: 'The Espionage and Sedition Acts (1917–1918):', options: ['Explicitly protected citizens\' free speech rights during wartime', 'Made it illegal to criticize the government or war effort', 'Actively supported political dissent and anti-war demonstrations', 'Released all imprisoned war objectors and political dissidents'], answer: 1, explanation: 'The correct answer is: Made it illegal to criticize the government or war effort.' }
      ]
    },

    /* ────────── UNIT 13: The Roaring Twenties ────────── */
    {
      video: 'VfOR1XCMf7A', // CrashCourse US History #32: The Roaring 20's
      title: 'The Roaring Twenties (1920–1929)',
      content: `
<h2>🎷 The Roaring Twenties (1920–1929)</h2>

<h3>Postwar Social Anxiety & the Red Scare</h3>
<ul>
<li><strong>The Red Scare (1919–1920):</strong> Fear of communism after the Russian Revolution (1917). Americans worried that Bolshevism would spread to the U.S. A.I. Palmer (Attorney General) conducted raids ("Palmer Raids") on suspected radicals' homes; deported suspected communists; trampled civil liberties.</li>
<li><strong>Sacco and Vanzetti (1920):</strong> Two Italian anarchists convicted of murder in a controversial trial. Many believed they were convicted more because of their immigrant status and radical beliefs than actual evidence. Case became a symbol of xenophobia and injustice.</li>
<li><strong>Nativism & Immigration Restriction</strong>
<ul>
<li><strong>Immigration Acts of 1921 & 1924:</strong> Set quotas severely limiting immigration, especially from Southern/Eastern Europe and Asia. Quota Act of 1921 capped immigration; National Origins Act of 1924 set stricter quotas (favored Northern/Western Europe). Reflected anti-immigrant, racist sentiments.</li>
</ul>
</li>
</ul>

<h3>Economic Boom & Mass Consumption</h3>
<ul>
<li><strong>Henry Ford & Mass Production:</strong> Ford's assembly line made automobiles affordable (Model T). Car ownership skyrocketed; transformed American life (suburbs, highways, leisure travel, dating culture).</li>
<li><strong>The Mass Consumption Economy:</strong> Credit buying became common ("buy now, pay later"); installment plans allowed consumers to purchase goods they couldn't pay for immediately. Advertising boomed; consumer culture became the norm.</li>
<li><strong>Stock Market Speculation:</strong> Buying stocks "on margin" (paying only 10–20% down, borrowing the rest) became popular. Inflated stock prices; created a bubble. When the market collapsed (1929), margin buyers lost everything, owing debts they couldn't pay.</li>
<li><strong>Stock Market Boom (1920s):</strong> Market nearly tripled in value. Ordinary Americans invested; seemed like easy wealth. But market was disconnected from economic reality; overvalued.</li>
</ul>

<h3>Cultural Changes & the Jazz Age</h3>
<ul>
<li><strong>The Jazz Age:</strong> Jazz music (African American in origin) became a cultural phenomenon. Key figures: Louis Armstrong (trumpeter), Duke Ellington (composer/bandleader). Jazz spread from New Orleans to major cities; revolutionized American music.</li>
<li><strong>The Harlem Renaissance (1920s–1930s):</strong> Flowering of African American culture, literature, art, and music, centered in Harlem (NYC). Key figures:
<ul>
<li><strong>Langston Hughes:</strong> Poet; celebrated African American identity; used vernacular language</li>
<li><strong>Zora Neale Hurston:</strong> Novelist/anthropologist; celebrated Black folk culture</li>
<li><strong>Claude McKay:</strong> Poet/activist; protested racism</li>
</ul>
<p>The Renaissance expressed Black pride and creativity despite ongoing discrimination.</p>
</li>
<li><strong>Flappers:</strong> Young women who challenged traditional gender roles: short hair ("bobbed"), short skirts, smoked, danced, pursued independence. Scandalized traditionalists; represented changing attitudes toward gender and sexuality.</li>
<li><strong>Prohibition (18th Amendment, ratified 1919; in effect 1920–1933):</strong>
<ul>
<li><strong>Volstead Act (1919):</strong> Enforcement legislation for Prohibition</li>
<li><strong>Intent:</strong> Ban alcohol to reduce poverty, crime, domestic violence; social reform</li>
<li><strong>Results:</strong> Prohibition drove alcohol underground (speakeasies, bootlegging). Organized crime profited (Al Capone's Chicago empire). Police corruption. Widespread violation of the law. The "noble experiment" largely failed; repealed 1933 (21st Amendment).</li>
</ul>
</li>
<li><strong>The Scopes Trial (1925):</strong> "Monkey Trial" in Tennessee. Teacher John Scopes tried for teaching evolution (violated state law). Defended by famous attorney Clarence Darrow; prosecuted by William Jennings Bryan (three-time presidential candidate). Trial highlighted the clash between science and religious fundamentalism. Scopes found guilty; case became a symbol of the culture war between modern and traditional values.</li>
</ul>

<h3>Racial Conflict & the KKK Revival</h3>
<ul>
<li><strong>KKK Resurgence (1915+):</strong> Ku Klux Klan revived in 1915; by the 1920s, had 4–5 million members. Targeted not just Black Americans but also Catholics, Jews, and immigrants. Peaked in the mid-1920s; declined as its violent nature became more widely publicized.</li>
<li><strong>Racial Violence:</strong> The "Red Summer" (1919): Race riots in 25+ cities (Chicago, Washington DC, etc.); dozens killed. Tensions over housing, employment, returning war veterans competing for jobs.</li>
</ul>

<h3>Political & Economic Trends</h3>
<ul>
<li><strong>The Harding Administration (1921–1923):</strong> Warren Harding promised a "return to normalcy" after the war. His administration was plagued by scandals (Teapot Dome oil scandal): Secretary of Interior Albert Fall secretly leased federal oil reserves to private companies; convicted and imprisoned. Marked the end of an era of Progressive reform.</li>
<li><strong>The Washington Naval Conference (1921–1922):</strong> International conference to limit naval armaments. Attempted to prevent another arms race like the one before WWI. Represented optimism for peace in the 1920s.</li>
<li><strong>The Kellogg-Briand Pact (1928):</strong> 62 nations signed agreement outlawing war as an instrument of national policy. Toothless (no enforcement mechanism); widely violated in the 1930s. But represented idealism about preventing future wars.</li>
<li><strong>Adkins v. Children's Hospital (1923):</strong> Supreme Court struck down a minimum wage law for women in D.C. Ruled it violated freedom of contract (5th Amendment). Reversed the Progressive trend of protecting workers (contrast with Muller v. Oregon). Showed the Court's conservative shift in the 1920s; business interests won out.</li>
<li><strong>The Dawes Plan (1924):</strong> American banker Charles Dawes proposed a plan to restructure German reparations payments. Reduced annual payments; provided loans to Germany to pay reparations. Stabilized the German economy temporarily; allowed some debt payment and investment.</li>
</ul>

<h3>Causes of the Great Depression (Emerging in the 1920s)</h3>
<ul>
<li><strong>Overproduction:</strong> Farmers and factories produced more goods than consumers could buy. Farm prices fell; industrial production exceeded demand.</li>
<li><strong>The Hawley-Smoot Tariff (1930):</strong> Raised tariffs on imports to protect American manufacturing (particularly farm products). Other nations retaliated with their own tariffs; international trade collapsed. Made the Depression worse (passed late in Hoover's administration).</li>
<li><strong>Unequal Distribution of Wealth:</strong> Wealth concentrated among the top 1%; consumer purchasing power was limited (wages hadn't kept pace with productivity).</li>
<li><strong>Speculation & Debt:</strong> Stock market bubble; buying on margin; consumer debt from installment purchases. Fragile economy dependent on confidence.</li>
</ul>

<h3>Hoover's Philosophy & Early Response</h3>
<ul>
<li><strong>Hoover's Beliefs:</strong> Laissez-faire capitalism; limited government intervention; self-reliance; voluntary cooperation. "Rugged individualism." Believed markets would self-correct.</li>
<li><strong>Hoover's Response to Great Depression (starting 1929):</strong> Believed government interference would prolong the Depression. Relied on voluntary business cooperation; some public works projects. Insufficient in face of economic collapse. Became associated with the Depression (Hoovervilles named after him mockingly).</li>
</ul>

<div class="tip">💡 The 1920s roared with cultural creativity and economic energy but concealed deep economic problems: overproduction, speculation, inequality, and a fragile financial system. The decade's prosperity masked the conditions that would lead to the Great Depression.</div>
      `,
      questions: [
        { q: 'The Red Scare (1919–1920) was driven by fear of:', options: ['Fascism', 'Communism and Bolshevism', 'German invasion', 'British imperialism'], answer: 1, explanation: 'The correct answer is: Communism and Bolshevism.' },
        { q: 'The Immigration Acts of 1921 & 1924 aimed to:', options: ['Actively encourage large-scale immigration from all countries to fuel industrial growth', 'Set strict quotas limiting immigration, especially from Southern/Eastern Europe and Asia', 'Welcome all immigrants regardless of national origin or ethnicity without any restrictions', 'Immediately deport all current immigrants back to their homelands and close all borders'], answer: 1, explanation: 'The correct answer is: Set strict quotas limiting immigration, especially from Southern/Eastern Europe and Asia.' },
        { q: "Henry Ford's assembly line made:", options: ['Airplanes affordable', 'Automobiles affordable (Model T)', 'Ships affordable', 'Trains affordable'], answer: 1, explanation: "The correct answer is: Automobiles affordable (Model T)." },
        { q: 'Buying stocks "on margin" meant:', options: ['Paying the full purchase price upfront before acquiring shares', 'Paying 10–20% down and borrowing the rest', 'Secretly trading stocks through unregulated offshore exchanges', 'Investing exclusively in government bonds and treasury securities'], answer: 1, explanation: 'The correct answer is: Paying 10–20% down and borrowing the rest.' },
        { q: 'The Harlem Renaissance was a flowering of:', options: ['Traditional Southern cultural values and rural folk traditions', 'African American culture, literature, and art', 'European immigrant cultural influence in northeastern cities', 'Industrial development and manufacturing innovation nationwide'], answer: 1, explanation: 'The correct answer is: African American culture, literature, and art.' },
        { q: 'Flappers were:', options: ['Returning war veterans adjusting to civilian life after combat', 'Traditional women who upheld conservative Victorian-era values', 'Young women who challenged gender roles', 'Political activists focused on labor rights and union organizing'], answer: 2, explanation: 'The correct answer is: Young women who challenged gender roles.' },
        { q: 'Prohibition resulted in:', options: ['Dramatically less alcohol consumption and improved public health', 'Speakeasies, bootlegging, organized crime', 'Virtually no social problems and widespread peaceful compliance', 'Universal public support and enthusiastic voluntary cooperation'], answer: 1, explanation: 'The correct answer is: Speakeasies, bootlegging, organized crime.' },
        { q: 'The Scopes Trial involved:', options: ['A landmark legal battle over organized labor rights and unions', 'Teaching evolution vs. religious fundamentalism', 'A controversial court case challenging national Prohibition laws', 'A high-profile trial concerning women\'s suffrage and equal rights'], answer: 1, explanation: 'The correct answer is: Teaching evolution vs. religious fundamentalism.' },
        { q: 'The Hawley-Smoot Tariff (1930) raised tariffs on imports, causing:', options: ['Other nations to increase trade and improve economic cooperation', 'Other nations to retaliate; international trade to collapse', 'Widespread economic prosperity and rapid industrial expansion', 'Significant farmer relief through stabilized agricultural prices'], answer: 1, explanation: 'The correct answer is: Other nations to retaliate; international trade to collapse.' },
        { q: 'Adkins v. Children\'s Hospital (1923) struck down:', options: ['Landmark child labor laws that had protected young workers', 'A minimum wage law for women — reversing Progressive worker protections', 'Strict immigration quotas that had limited European migration', 'Key enforcement provisions of the national Prohibition amendment'], answer: 1, explanation: 'The correct answer is: A minimum wage law for women — reversing Progressive worker protections.' }
      ]
    },

    /* ────────── UNIT 14: The Great Depression & New Deal ────────── */
    {
      video: 'GCQfMWAikyU', // CrashCourse US History #33: The Great Depression
      title: 'The Great Depression & New Deal (1929–1941)',
      content: `
<h2>📉 The Great Depression & New Deal (1929–1941)</h2>

<h3>Causes of the Great Depression</h3>
<ul>
<li><strong>The Stock Market Crash (October 1929):</strong> "Black Tuesday" (Oct 29, 1929) — Stock market lost nearly half its value in months. Wiped out millions of investors and savers. Banks failed; withdrawals triggered bank runs.</li>
<li><strong>Bank Failures:</strong> Banks had invested heavily in the stock market. When market crashed, banks collapsed. No FDIC insurance (yet) — depositors lost all savings. People lost faith in banking system.</li>
<li><strong>Overproduction & Falling Prices:</strong> Factories and farms produced more than consumers could buy. Prices fell; business profits vanished; layoffs began. Reduced consumer spending further (vicious cycle).</li>
<li><strong>Buying on Credit & Margin:</strong> During the 1920s, consumers and investors borrowed heavily. When incomes fell, debts remained; defaults increased.</li>
<li><strong>Hawley-Smoot Tariff (1930):</strong> Raised tariffs on imports. Other nations retaliated with their own tariffs. International trade collapsed; economic disaster spread globally.</li>
<li><strong>Dust Bowl:</strong> Severe drought on the Great Plains (1930s) combined with poor farming practices (monoculture, no crop rotation, overuse of land). Massive dust storms destroyed agriculture. Thousands of farmers lost their farms and migrated to California ("Okies"). Environmental and economic catastrophe.</li>
</ul>

<h3>Impact of the Depression</h3>
<ul>
<li><strong>Unemployment:</strong> Peak unemployment reached ~25% (12 million jobless). Long-term unemployment; few jobs available. Entire families fell into poverty.</li>
<li><strong>Breadlines & Soup Kitchens:</strong> Free meals provided by charities and governments. Long lines of hungry people waiting for food.</li>
<li><strong>Hoovervilles:</strong> Shantytowns of homeless people, named mockingly after President Hoover. Built from scrap materials; lacked sanitation, electricity, running water.</li>
<li><strong>Psychological Impact:</strong> A generation traumatized by poverty, loss of savings, loss of homes, loss of dignity. Shame and desperation widespread.</li>
<li><strong>Family Strain:</strong> Marriages strained; divorce increased. Children went without education. Suicide rates rose.</li>
</ul>

<h3>FDR's New Deal</h3>
<ul>
<li><strong>The 20th Amendment (1933):</strong> Moved presidential inauguration from March 4 to January 20 — eliminated the "lame duck" period where an outgoing president held power for months after losing. Also moved Congress's start date to January 3.</li>
<li><strong>Franklin D. Roosevelt (elected 1932, took office 1933):</strong> Promised the American people a "New Deal." Campaigned on active government intervention to address the Depression (contrast with Hoover's laissez-faire approach).</li>
<li><strong>FDR's Inaugural Speech (March 4, 1933):</strong> "The only thing we have to fear is fear itself." Projected confidence and leadership to a desperate nation. Signaled a dramatic shift from Hoover's hands-off approach. Promised "action, and action now."</li>
<li><strong>The Bank Holiday (March 6–13, 1933):</strong> FDR's first act — closed all banks for 4 days to stop bank runs. Congress passed the Emergency Banking Act: only sound banks could reopen; government inspectors verified their health. Restored public confidence; when banks reopened, deposits exceeded withdrawals.</li>
<li><strong>Ideology of the New Deal:</strong> Rejected the idea that government shouldn't interfere with the economy. Adopted Keynesian economics (government spending stimulates the economy).</li>
<li><strong>The 3 R's: Relief, Recovery, Reform</strong>
<ul>
<li><strong>Relief:</strong> Immediate aid to the unemployed and poor</li>
<li><strong>Recovery:</strong> Policies to restore economic growth</li>
<li><strong>Reform:</strong> Fundamental changes to prevent another Depression</li>
</ul>
</li>

<h4>Major New Deal Programs</h4>
<table>
<tr><th>Program</th><th>Acronym</th><th>Purpose</th><th>Type (3 R's)</th></tr>
<tr><td>Civilian Conservation Corps</td><td>CCC</td><td>Employed young men (ages 18–25) in conservation and forestry work; built parks/trails</td><td>Relief</td></tr>
<tr><td>Works Progress Administration</td><td>WPA</td><td>Largest program; employed millions on public works (roads, bridges, schools, art/music projects)</td><td>Relief</td></tr>
<tr><td>Tennessee Valley Authority</td><td>TVA</td><td>Built dams for flood control and electricity generation; regional development in the poorest region of the country</td><td>Recovery & Reform</td></tr>
<tr><td>Civilian Works Administration</td><td>CWA</td><td>Temporary public works program (winter 1933–34); employed 4 million people</td><td>Relief</td></tr>
<tr><td>Federal Emergency Relief Admin</td><td>FERA</td><td>Distributed federal emergency relief funds to the states</td><td>Relief</td></tr>
<tr><td>Social Security Act</td><td>SSA</td><td>Created retirement pensions (age 65+), unemployment insurance, aid to disabled and dependent children</td><td>Reform</td></tr>
<tr><td>Securities & Exchange Commission</td><td>SEC</td><td>Regulated the stock market; prevented fraud; required companies to disclose financial information</td><td>Reform</td></tr>
<tr><td>Federal Deposit Insurance Corp</td><td>FDIC</td><td>Insured bank deposits (up to amount) — prevented bank runs</td><td>Reform</td></tr>
<tr><td>National Labor Relations Board</td><td>NLRB (Wagner Act)</td><td>Protected workers' right to unionize and collectively bargain</td><td>Reform</td></tr>
<tr><td>Glass-Steagall Act</td><td>(Banking Act 1933)</td><td>Separated commercial and investment banking; created FDIC</td><td>Reform</td></tr>
<tr><td>Agricultural Adjustment Act</td><td>AAA</td><td>Paid farmers to reduce crop production to raise prices; taxed food processors to fund payments. Ruled unconstitutional by Supreme Court (1936); replaced by second AAA (1938)</td><td>Recovery</td></tr>
<tr><td>Fair Labor Standards Act</td><td>FLSA (1938)</td><td>Established minimum wage (25¢/hr), maximum 44-hour workweek, overtime pay, and banned child labor under age 16. One of the last and most enduring New Deal reforms</td><td>Reform</td></tr>
</table>

<h3>Criticism of the New Deal</h3>
<ul>
<li><strong>From the Right (Republicans, Conservatives):</strong> Too much government intervention ("creeping socialism"); unconstitutional expansion of executive power; deficit spending unsustainable.</li>
<li><strong>From the Left (Socialists, Some Democrats):</strong> Didn't go far enough; should have implemented complete nationalization of industries; Huey Long's "Share Our Wealth" program proposed massive wealth redistribution (more radical than FDR).</li>
<li><strong>The Election of 1936:</strong> FDR won a landslide re-election against Republican Alf Landon (523 to 8 electoral votes). Validated the New Deal; showed broad public support. FDR built the "New Deal Coalition" (labor, minorities, urban voters, Southern whites, intellectuals) that dominated American politics for decades.</li>
<li><strong>Supreme Court Opposition & The Court Packing Scheme:</strong> The Court struck down key New Deal programs (NIRA, AAA) as unconstitutional. FDR proposed the Judicial Reorganization Bill (1937) — add one justice for each justice over age 70 (would have expanded Court from 9 to 15). Public backlash: seen as presidential overreach and attack on judicial independence. Congress rejected it. However, the Court began upholding New Deal programs anyway ("the switch in time that saved nine"). FDR ultimately appointed 8 justices over his presidency.</li>
<li><strong>Results:</strong> The New Deal didn't end the Depression. Unemployment remained high through the 1930s. Only massive World War II spending (1941+) fully ended the Depression.</li>
</ul>

<h3>New Deal's Long-Term Legacy</h3>
<ul>
<li>Changed American expectations: government now expected to address economic crises</li>
<li>Created the "welfare state": Social Security, unemployment insurance, FDIC insurance are foundational and remain today</li>
<li>Strengthened labor movement: Wagner Act protected unionization</li>
<li>Regulated the financial system: SEC oversight of markets; bank deposit insurance</li>
<li>Expanded executive power: President now central to economic management (precedent for future interventions)</li>
</ul>

<div class="tip">💡 The New Deal fundamentally changed the role of government in American life. The debate over its success/failure and whether its approach was right continues today. But most economists credit it with preventing complete economic collapse, even if it didn't fully solve the Depression.</div>
      `,
      questions: [
        { q: '"Black Tuesday" (Oct 29, 1929) refers to:', options: ['Start of WWI', 'The stock market crash', 'Pearl Harbor attack', 'Prohibition beginning'], answer: 1, explanation: 'The correct answer is: The stock market crash.' },
        { q: 'The Dust Bowl was caused by:', options: ['Catastrophic flooding from overflowing rivers and broken levees', 'Drought and poor farming practices', 'Widespread industrial pollution contaminating agricultural lands', 'A chronic lack of irrigation infrastructure in Southern states'], answer: 1, explanation: 'The correct answer is: Drought and poor farming practices.' },
        { q: 'The New Deal\'s "3 R\'s" were:', options: ['Reform, Recover, Repeat', 'Relief, Recovery, Reform', 'Recession, Rebound, Renewal', 'Represent, Revolt, Rejoice'], answer: 1, explanation: 'The correct answer is: Relief, Recovery, Reform.' },
        { q: 'The WPA employed millions on:', options: ['Mandatory military service and national defense installations', 'Public works (roads, bridges, schools, art projects)', 'Agricultural labor on government-owned farming operations only', 'Underground mining operations for strategic mineral extraction'], answer: 1, explanation: 'The correct answer is: Public works (roads, bridges, schools, art projects).' },
        { q: 'The FDIC was created to:', options: ['Establish a new centralized national banking authority system', 'Insure bank deposits; prevent bank runs', 'Directly control and regulate stock market prices and trading', 'Oversee and regulate labor union activities across all industries'], answer: 1, explanation: 'The correct answer is: Insure bank deposits; prevent bank runs.' },
        { q: 'The Social Security Act provided:', options: ['Universal free healthcare coverage for all American citizens', 'Retirement pensions, unemployment insurance, aid to disabled', 'Guaranteed minimum wages for all employed American workers', 'Government-subsidized free housing for low-income families'], answer: 1, explanation: 'The correct answer is: Retirement pensions, unemployment insurance, aid to disabled.' },
        { q: 'The Wagner Act protected workers\' right to:', options: ['Conduct unlimited strikes without any legal restrictions', 'Unionize and collectively bargain', 'Refuse any and all employment opportunities without consequence', 'Work unlimited hours without mandatory overtime compensation'], answer: 1, explanation: 'The correct answer is: Unionize and collectively bargain.' },
        { q: "FDR's court-packing plan was:", options: ['Successful', 'An attempt to add justices to the Court (backfired politically)', 'Opposed by Congress', 'Supported by the Court'], answer: 1, explanation: "The correct answer is: An attempt to add justices to the Court (backfired politically)." },
        { q: "FDR's first act as president was:", options: ['Declaring war', 'The Bank Holiday — closing all banks to stop bank runs', 'Raising tariffs', 'Cutting taxes'], answer: 1, explanation: "The correct answer is: The Bank Holiday — closing all banks to stop bank runs." },
        { q: 'The Agricultural Adjustment Act (AAA) aimed to:', options: ['Dramatically increase crop production through federal subsidies', 'Pay farmers to reduce production to raise prices', 'Nationalize all private farms under direct government ownership', 'Completely ban agricultural imports from all foreign countries'], answer: 1, explanation: 'The correct answer is: Pay farmers to reduce production to raise prices.' },
        { q: 'The Fair Labor Standards Act established:', options: ['Comprehensive retirement pension programs for elderly Americans', 'Minimum wage, maximum hours, and banned child labor', 'Federal bank deposit insurance protecting consumer savings', 'Detailed stock market rules and securities trading regulations'], answer: 1, explanation: 'The correct answer is: Minimum wage, maximum hours, and banned child labor.' },
        { q: 'The Election of 1936 showed that:', options: ['Most Americans rejected the New Deal and wanted policy reversal', 'FDR won a landslide, validating the New Deal', 'Republicans successfully regained power in Congress and states', 'The New Deal Coalition fractured along regional and racial lines'], answer: 1, explanation: 'The correct answer is: FDR won a landslide, validating the New Deal.' },
        { q: 'The 20th Amendment:', options: ['Created the Social Security system for retirement and welfare', 'Moved inauguration to January 20 to end the lame-duck period', 'Officially repealed the Eighteenth Amendment ending Prohibition', 'Granted women the constitutional right to vote in all elections'], answer: 1, explanation: 'The correct answer is: Moved inauguration to January 20 to end the lame-duck period.' },
        { q: 'What actually ended the Great Depression?', options: ['The New Deal alone', 'Market recovery', 'Massive World War II spending (1941+)', 'Consumer confidence returning'], answer: 2, explanation: 'The correct answer is: Massive World War II spending (1941+).' }
      ]
    },

    /* ────────── UNIT 15: World War II ────────── */
    {
      video: 'Objoad6rG6U', // CrashCourse US History #35: World War II Part 1
      title: 'World War II (1939–1945)',
      content: `
<h2>🌍 World War II (1939–1945)</h2>

<h3>Road to War (1930s–1941)</h3>
<ul>
<li><strong>Rise of Totalitarian Regimes:</strong>
<ul>
<li><strong>Nazi Germany:</strong> Adolf Hitler and the Nazi Party rose to power (1933); blamed Jews and communists for Germany's problems; promised to restore German greatness; began rearmament and territorial expansion</li>
<li><strong>Fascist Italy:</strong> Benito Mussolini sought to build a new Italian empire through conquest</li>
<li><strong>Imperial Japan:</strong> Militarists took control; sought to dominate East Asia and the Pacific; began invasion of China (1937)</li>
<li><strong>Soviet Union:</strong> Joseph Stalin's brutal totalitarian state; communist ideology</li>
</ul>
</li>
<li><strong>The Policy of Appeasement:</strong> Britain and France tried to avoid war by giving in to Hitler's demands. Munich Agreement (1938): Britain and France allowed Hitler to annex the Sudetenland (part of Czechoslovakia). "Peace in our time" (British PM Chamberlain). Failed; Hitler continued aggression.</li>
<li><strong>Good Neighbor Policy (1933+):</strong> FDR's Latin American foreign policy — pledged non-intervention and cooperation with Latin American neighbors. Reversed decades of U.S. military intervention (Roosevelt Corollary). Aimed to build hemispheric solidarity against fascist threats.</li>
<li><strong>U.S. Isolationism & Neutrality Acts (1935, 1936, 1937):</strong> Strong isolationist sentiment in America. Neutrality Act of 1935 banned arms sales to warring nations. 1936 Act banned loans. 1937 Act extended provisions. "Cash and Carry" clause: belligerents could buy non-military goods if they paid cash and transported them on their own ships. Congress feared being drawn into European conflict again.</li>
<li><strong>FDR's Quarantine Speech (1937):</strong> FDR compared aggressor nations to a disease requiring "quarantine." Implied the U.S. should take action against aggressors (Japan, Italy, Germany). Public backlash; isolationists accused FDR of leading the U.S. into war. FDR backed off but signaled his interventionist leanings.</li>
<li><strong>Pro vs. Anti Isolation:</strong> Interventionists (Committee to Defend America by Aiding the Allies) argued the U.S. must help Britain to protect democracy. Isolationists (America First Committee, including Charles Lindbergh) argued the U.S. should stay out of European wars. Debate raged until Pearl Harbor settled it.</li>
<li><strong>Cash and Carry (1939):</strong> After war broke out in Europe, FDR got Congress to revise neutrality laws. Nations at war could buy arms from the U.S. — but only if they paid cash and carried goods in their own ships. Effectively helped Britain and France (who controlled the seas), not Germany.</li>
<li><strong>The Destroyer Deal (1940):</strong> FDR traded 50 old U.S. Navy destroyers to Britain in exchange for leases on British military bases in the Caribbean and Atlantic. Done by executive agreement (no Congressional approval). Moved the U.S. closer to the Allied side.</li>
<li><strong>Lend-Lease Act (1941):</strong> FDR proposed providing military aid to Britain and later the Soviet Union without formally entering the war. "Arsenal of democracy" — America would supply weapons to the Allies. Technically neutral but clearly favoring the Allies. Massive program: $50+ billion in aid.</li>
<li><strong>The Atlantic Charter (August 1941):</strong> Joint declaration by FDR and Winston Churchill outlining post-war goals: no territorial expansion, self-determination of peoples, free trade, freedom of the seas, disarmament, establishment of a permanent system of general security (foreshadowed the UN). Issued before U.S. officially entered the war.</li>
</ul>

<h3>U.S. Entry into WWII (1941)</h3>
<ul>
<li><strong>Pearl Harbor (December 7, 1941):</strong> Japan launched a surprise attack on the U.S. naval base at Pearl Harbor, Hawaii. ~2,400 Americans killed (including 1,100+ on the USS Arizona alone). 8 battleships damaged or destroyed; nearly 200 aircraft destroyed. The attack shocked and unified the American public overnight.</li>
<li><strong>Roosevelt's War Message to Congress (December 8, 1941):</strong> FDR addressed Congress: "Yesterday, December 7th, 1941 — a date which will live in infamy." Congress declared war on Japan with only one dissenting vote (Jeannette Rankin). Germany and Italy declared war on the U.S. on December 11; Congress reciprocated. America was now fully in the war.</li>
<li><strong>Germany's ABC-1 Agreement (1941):</strong> Military agreement between U.S., Britain, and Canada. Plan for defeating Germany first (even as Japan was also a threat). Strategy: focus on European theater; defend Pacific.</li>
</ul>

<h3>The European Theater (1941–1945)</h3>
<ul>
<li><strong>Initial German Advantage:</strong> Germany had conquered much of Europe by 1941; launched Operation Barbarossa (invasion of Soviet Union, 1941). But the Soviet Union proved far more difficult to defeat than expected.</li>
<li><strong>D-Day (June 6, 1944):</strong> Largest amphibious military operation in history. Allied forces (American, British, Canadian) landed on Normandy, France. General Dwight Eisenhower commanded. Broke through German defenses; liberated Western Europe. Turning point in the war.</li>
<li><strong>Battle of the Bulge (Dec 1944–Jan 1945):</strong> Germany's last major offensive in the Western Front. Despite initial German success, the Allies held and pushed back. Showed Germany's desperation and declining strength.</li>
<li><strong>VE Day — Victory in Europe (May 8, 1945):</strong> Germany surrendered unconditionally. Hitler committed suicide in his bunker. War in Europe ended.</li>
<li><strong>The Holocaust:</strong> Nazi Germany systematically murdered approximately 6 million Jews in concentration camps and death camps (Auschwitz, Treblinka, etc.). Also murdered millions of others: Roma, disabled people, political prisoners, homosexuals, Soviet POWs. Genocide of unprecedented scale; shocked the world when discovered.</li>
</ul>

<h3>The Pacific Theater (1941–1945)</h3>
<ul>
<li><strong>Island Hopping Strategy:</strong> Instead of conquering every Japanese-held island, Americans captured key islands (Midway, Iwo Jima, Okinawa) to establish airbases and move closer to Japan. Left isolated Japanese garrisons behind. Strategy worked; saved time and lives.</li>
<li><strong>Battle of Midway (June 1942):</strong> Turning point in the Pacific. American code-breakers knew Japanese plans. U.S. Navy destroyed 4 Japanese aircraft carriers. Japan never recovered its naval advantage. Shifted balance in the Pacific.</li>
<li><strong>Iwo Jima & Okinawa (1945):</strong> Bitter battles for strategically important islands. Japanese fought to the death; Americans suffered heavy casualties. Showed the fanaticism of Japanese military (kamikaze pilots, refusal to surrender).</li>
<li><strong>Atomic Bombs (1945):</strong> Scientists developed the atomic bomb through the Manhattan Project (secret U.S. program). President Truman decided to use them. Hiroshima (Aug 6, 1945) and Nagasaki (Aug 9, 1945) were destroyed; ~200,000 killed (mostly civilians). Japan surrendered.</li>
<li><strong>VJ Day — Victory over Japan (Sept 2, 1945):</strong> Japan signed the formal surrender document. WWII officially ended.</li>
</ul>

<h3>The American Home Front (1941–1945)</h3>
<ul>
<li><strong>Rosie the Riveter:</strong> American women entered the industrial workforce in massive numbers during wartime (factories, shipyards, munitions plants). Symbolized female empowerment and challenge to gender roles. Women comprised ~65% of the aircraft industry workforce. After the war, most were pushed back into domestic roles.</li>
<li><strong>Japanese American Internment:</strong> Executive Order 9066 (1942): FDR ordered the incarceration of ~120,000 Japanese Americans in internment camps. Motivated by wartime hysteria, racism, and fear (no evidence of disloyalty). Violated civil liberties. Korematsu v. United States (1944): Supreme Court upheld the internment (but later criticized as a grave injustice).</li>
<li><strong>The Double V Campaign:</strong> African American slogan: victory abroad (against fascism) and victory at home (against racism). Black soldiers fought for America while segregated. Tensions over unequal treatment. Contributions to war effort boosted civil rights activism after the war.</li>
<li><strong>Rationing:</strong> Government rationed food, gas, rubber, and other materials for the war effort. Citizens received ration books; scarcity and discipline. Americans accepted it as necessary for victory.</li>
<li><strong>War Production:</strong> American factories produced weapons, vehicles, ammunition, food at an unprecedented scale. Overtime work; women in factories; government-subsidized production. The economy boomed. War production ended the Great Depression (succeeded where New Deal hadn't).</li>
<li><strong>Propaganda:</strong> Government-produced propaganda posters, films, and radio messages encouraged war support, sacrifice, and vigilance against spies.</li>
</ul>

<h3>Aftermath & Global Impact</h3>
<ul>
<li><strong>Casualties:</strong> ~70–85 million deaths worldwide (most in any war in human history). Estimates include 6 million Holocaust victims. Complete devastation in Europe and Asia. Entire cities destroyed.</li>
<li><strong>The United Nations (1945):</strong> Created to maintain international peace and prevent future wars. Replaced the failed League of Nations. Headquarters in New York. U.S. became a founding member and major supporter (unlike the League).</li>
<li><strong>Nuremberg Trials (1945–1946):</strong> Nazi leaders tried for war crimes and crimes against humanity. Many convicted and executed. Established precedent for holding leaders accountable for atrocities.</li>
<li><strong>The Superpowers Emerge:</strong> U.S. and Soviet Union emerged as the two superpowers. Allies during WWII, but deep ideological differences (capitalism vs. communism) set the stage for the Cold War (1947–1991).</li>
<li><strong>American Dominance:</strong> Europe and Asia devastated; U.S. emerged unscathed and economically dominant. American military might unparalleled. U.S. became a global superpower with global responsibilities.</li>
</ul>

<div class="tip">💡 WWII fundamentally reshaped the world. European empires declined; the U.S. and USSR rose as superpowers; colonized peoples demanded independence; the Holocaust shocked the world conscience; the atomic bomb ushered in the nuclear age with unprecedented destructive power. The post-WWII world would be defined by U.S.-Soviet Cold War tensions.</div>
      `,
      questions: [
        { q: 'Appeasement was a policy of:', options: ['Aggressive territorial expansion through military force abroad', 'Giving in to aggressive demands to avoid war', 'Rapid military rearmament in preparation for inevitable conflict', 'Forming defensive alliances among threatened European democracies'], answer: 1, explanation: 'The correct answer is: Giving in to aggressive demands to avoid war.' },
        { q: "FDR's Good Neighbor Policy pledged:", options: ['Military intervention in Latin America', 'Non-intervention and cooperation with Latin American nations', 'Isolation from all neighbors', 'Trade war with Mexico'], answer: 1, explanation: "The correct answer is: Non-intervention and cooperation with Latin American nations." },
        { q: "FDR's Quarantine Speech (1937) compared aggressors to:", options: ['Criminals', 'A disease requiring quarantine', 'Natural disasters', 'Animals'], answer: 1, explanation: "The correct answer is: A disease requiring quarantine." },
        { q: '"Cash and Carry" meant belligerents could buy U.S. goods if they:', options: ['Used American merchant ships for transporting military supplies', 'Paid cash and used their own ships', 'Signed a formal bilateral treaty before purchasing any goods', 'Issued an official declaration of neutrality before all trades'], answer: 1, explanation: 'The correct answer is: Paid cash and used their own ships.' },
        { q: 'The Destroyer Deal (1940) involved:', options: ['Selling brand-new advanced warships directly to British forces', 'Trading 50 old destroyers to Britain for base leases', 'Destroying captured German submarines in coordinated naval raids', 'Purchasing British destroyers to bolster the American naval fleet'], answer: 1, explanation: 'The correct answer is: Trading 50 old destroyers to Britain for base leases.' },
        { q: 'The Atlantic Charter (1941) was a joint declaration by:', options: ['FDR and Stalin establishing a secret military alliance agreement', 'FDR and Churchill outlining post-war goals', 'Congress and the Supreme Court jointly defining wartime policy', 'Britain and France coordinating a unified European defense plan'], answer: 1, explanation: 'The correct answer is: FDR and Churchill outlining post-war goals.' },
        { q: 'Pearl Harbor was attacked on:', options: ['December 7, 1941', 'June 6, 1944', 'August 6, 1945', 'September 2, 1945'], answer: 0, explanation: 'The correct answer is: December 7, 1941.' },
        { q: 'D-Day (June 6, 1944) was:', options: ['The devastating atomic bomb drop on Japanese industrial cities', 'The massive German invasion of Soviet-controlled Eastern Europe', 'The largest amphibious invasion (Normandy, France)', 'The formal ceremony marking Japan\'s unconditional surrender'], answer: 2, explanation: 'The correct answer is: The largest amphibious invasion (Normandy, France).' },
        { q: 'The Battle of Midway (1942) was significant because:', options: ['Allied forces suffered a devastating defeat in the Pacific war', 'U.S. destroyed 4 Japanese aircraft carriers; turned the tide', 'Germany officially surrendered ending the European theater war', 'Japan won a decisive naval victory securing Pacific dominance'], answer: 1, explanation: 'The correct answer is: U.S. destroyed 4 Japanese aircraft carriers; turned the tide.' },
        { q: 'The Holocaust resulted in the murder of approximately:', options: ['1 million people across occupied European territories', '3 million people primarily in Eastern European nations', '6 million Jews and millions of others', '10 million people including all ethnic minorities in Europe'], answer: 2, explanation: 'The correct answer is: 6 million Jews and millions of others.' },
        { q: '"Rosie the Riveter" represented:', options: ['Male factory workers producing essential wartime military goods', 'Women entering the industrial workforce during wartime', 'Military nurses serving in overseas combat hospital facilities', 'Government propaganda artwork with no real workforce connection'], answer: 1, explanation: 'The correct answer is: Women entering the industrial workforce during wartime.' },
        { q: 'Japanese American internment (Executive Order 9066) violated:', options: ['Only the Constitution alone without affecting individual lives', 'Civil liberties; ~120,000 Japanese Americans incarcerated', 'Only specific state laws governing wartime labor regulations', 'No fundamental rights — internment was legally justified fully'], answer: 1, explanation: 'The correct answer is: Civil liberties; ~120,000 Japanese Americans incarcerated.' },
        { q: 'Atomic bombs were dropped on:', options: ['Tokyo and Osaka', 'Hiroshima and Nagasaki', 'Berlin and Munich', 'Seoul and Pyongyang'], answer: 1, explanation: 'The correct answer is: Hiroshima and Nagasaki.' },
        { q: 'The United Nations (1945) was created to:', options: ['Primarily increase American economic and political global power', 'Replace the League; maintain international peace', 'Establish a binding world government with legislative authority', 'Exclusively fight the spread of communism in developing nations'], answer: 1, explanation: 'The correct answer is: Replace the League; maintain international peace.' },
        { q: 'WWII resulted in:', options: ['Continued European dominance of global politics and economics', 'U.S. and Soviet Union emerging as superpowers; Cold War to follow', 'A significantly strengthened League of Nations organization', 'The Japanese empire surviving intact as a major world power'], answer: 1, explanation: 'The correct answer is: U.S. and Soviet Union emerging as superpowers; Cold War to follow.' }
      ]
    }
  ]
};
