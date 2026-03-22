/* ═══════════════════════════════════════════════════
   US History — StudyLab Data File
   6 Units · ~45 Quiz Questions
   ═══════════════════════════════════════════════════ */

const HISTORY_DATA = {
  icon: '🇺🇸',
  title: 'US History',
  shortTitle: 'History',
  description: 'From the colonial era through the modern age — key events, figures, and turning points that shaped America.',
  units: [

/* ── UNIT 1: Colonial America & the Revolution ──── */
{
  title: 'Colonial America & the Revolution',
  content: `
<h3>The Colonial Era (1607–1763)</h3>
<p>English colonization began with <span class="key-term">Jamestown</span> (1607), the first permanent English settlement in North America. The colony nearly failed due to disease and starvation before tobacco cultivation made it profitable.</p>
<p>The <span class="key-term">Pilgrims</span> arrived at Plymouth in 1620 aboard the Mayflower. They signed the <span class="key-term">Mayflower Compact</span>, an early agreement for self-governance that became a foundation of American democracy.</p>
<p>By the mid-1700s, 13 colonies stretched along the Atlantic coast, each with distinct economies:</p>
<table>
  <tr><th>Region</th><th>Colonies</th><th>Economy</th></tr>
  <tr><td>New England</td><td>MA, CT, RI, NH</td><td>Fishing, shipbuilding, trade</td></tr>
  <tr><td>Middle</td><td>NY, NJ, PA, DE</td><td>Farming (breadbasket), commerce</td></tr>
  <tr><td>Southern</td><td>MD, VA, NC, SC, GA</td><td>Plantation agriculture (tobacco, rice, indigo)</td></tr>
</table>
<div class="tip">💡 The Middle Colonies were known as the "Breadbasket Colonies" because they grew large amounts of wheat and grain.</div>

<h3>Road to Revolution (1763–1775)</h3>
<p>After the <span class="key-term">French and Indian War</span> (1754–1763), Britain faced massive war debt and began taxing the colonies to pay for it.</p>
<p>Key acts that enraged the colonists:</p>
<ul>
  <li><strong>Stamp Act (1765)</strong> — Tax on printed materials. Colonists protested: <em>"No taxation without representation!"</em></li>
  <li><strong>Townshend Acts (1767)</strong> — Taxes on glass, lead, paint, paper, tea</li>
  <li><strong>Tea Act (1773)</strong> — Led to the <span class="key-term">Boston Tea Party</span>, where colonists dumped 342 chests of tea into Boston Harbor</li>
  <li><strong>Intolerable Acts (1774)</strong> — Punished Massachusetts; closed Boston Harbor</li>
</ul>

<h3>The American Revolution (1775–1783)</h3>
<p>The first shots were fired at <span class="key-term">Lexington and Concord</span> (April 19, 1775) — "the shot heard round the world."</p>
<p>On July 4, 1776, the <span class="key-term">Declaration of Independence</span>, primarily written by <strong>Thomas Jefferson</strong>, formally declared the colonies free from British rule. Its central idea: all men are created equal with unalienable rights to life, liberty, and the pursuit of happiness.</p>
<p>Key turning points:</p>
<ul>
  <li><strong>Battle of Saratoga (1777)</strong> — American victory that convinced France to ally with the colonies</li>
  <li><strong>Winter at Valley Forge (1777–78)</strong> — Washington's army endured brutal conditions but emerged stronger</li>
  <li><strong>Battle of Yorktown (1781)</strong> — Final major battle; Cornwallis surrendered to Washington, effectively ending the war</li>
</ul>
<p>The <span class="key-term">Treaty of Paris (1783)</span> formally ended the war and recognized American independence.</p>
<div class="tip">💡 France's alliance was crucial — they provided troops, a navy, and financial support that tipped the balance.</div>
`,
  questions: [
    {
      q: 'What was the first permanent English settlement in North America?',
      options: ['Plymouth', 'Jamestown', 'Roanoke', 'Boston'],
      answer: 1,
      explanation: 'Jamestown, Virginia, was founded in 1607 and became the first permanent English settlement. Plymouth came later in 1620.'
    },
    {
      q: 'The Mayflower Compact (1620) was significant because it:',
      options: ['Declared independence from England', 'Established the first system of slavery', 'Was an early agreement for self-governance', 'Created the first colonial legislature'],
      answer: 2,
      explanation: 'The Mayflower Compact was signed by the Pilgrims and established a basic form of self-government by majority rule.'
    },
    {
      q: 'The primary cause of British taxation of the colonies after 1763 was:',
      options: ['Punishment for colonial disloyalty', 'War debt from the French and Indian War', 'Funding exploration of the western frontier', 'Paying for the British royal family'],
      answer: 1,
      explanation: 'Britain accumulated massive debt from the French and Indian War (1754–1763) and expected the colonists to help pay for it.'
    },
    {
      q: 'Which event directly led to the passage of the Intolerable Acts?',
      options: ['The Stamp Act Congress', 'The Boston Massacre', 'The Boston Tea Party', 'The Battle of Lexington'],
      answer: 2,
      explanation: 'The Boston Tea Party (1773) provoked Britain to pass the Intolerable Acts as punishment for Massachusetts.'
    },
    {
      q: 'Why was the Battle of Saratoga (1777) a turning point?',
      options: ['It was the final battle of the war', 'It led to the French alliance with America', 'George Washington was captured and then freed', 'It forced Britain to end the Stamp Act'],
      answer: 1,
      explanation: 'The American victory at Saratoga convinced France that the Americans could win, leading France to formally ally with and support the colonies.'
    },
    {
      q: 'The Declaration of Independence was primarily authored by:',
      options: ['Benjamin Franklin', 'John Adams', 'Thomas Jefferson', 'George Washington'],
      answer: 2,
      explanation: 'Thomas Jefferson was the principal author, though a committee of five (including Franklin and Adams) contributed.'
    },
    {
      q: 'Which battle effectively ended the American Revolution?',
      options: ['Bunker Hill', 'Saratoga', 'Yorktown', 'Trenton'],
      answer: 2,
      explanation: 'The Siege of Yorktown (1781) ended with Cornwallis\'s surrender and was the last major battle of the war.'
    }
  ]
},

/* ── UNIT 2: Constitution & Early Republic ──────── */
{
  title: 'Constitution & Early Republic',
  content: `
<h3>The Articles of Confederation (1781–1789)</h3>
<p>America's first governing document, the <span class="key-term">Articles of Confederation</span>, created a weak central government with no power to tax, regulate trade, or enforce laws.</p>
<p>Key weaknesses:</p>
<ul>
  <li>No executive branch (no president)</li>
  <li>No national judiciary</li>
  <li>Congress could not levy taxes — had to request money from states</li>
  <li>Each state had one vote regardless of size</li>
  <li>Amendments required unanimous consent of all 13 states</li>
</ul>
<p><span class="key-term">Shays' Rebellion</span> (1786–87) — a farmers' uprising in Massachusetts — exposed the weakness of the national government and convinced many leaders that a stronger central government was needed.</p>

<h3>The Constitutional Convention (1787)</h3>
<p>Delegates met in Philadelphia to revise the Articles but ended up writing an entirely new document — the <span class="key-term">U.S. Constitution</span>.</p>
<p>Major compromises:</p>
<table>
  <tr><th>Issue</th><th>Compromise</th></tr>
  <tr><td>Representation</td><td><strong>Great Compromise</strong>: Bicameral legislature — Senate (equal, 2 per state) + House (proportional to population)</td></tr>
  <tr><td>Slavery & counting</td><td><strong>Three-Fifths Compromise</strong>: Enslaved persons counted as 3/5 of a person for representation and taxation</td></tr>
  <tr><td>Trade</td><td>Congress could regulate interstate and foreign trade but could not tax exports</td></tr>
</table>

<h3>Ratification Debate</h3>
<p><span class="key-term">Federalists</span> (Hamilton, Madison, Jay) supported ratification. They wrote the <strong>Federalist Papers</strong> — 85 essays arguing for the Constitution.</p>
<p><span class="key-term">Anti-Federalists</span> (Patrick Henry, George Mason) opposed it, fearing a too-powerful central government. They demanded a Bill of Rights.</p>
<p>The Constitution was ratified in 1788. The <span class="key-term">Bill of Rights</span> (first 10 amendments) was added in 1791 to protect individual liberties.</p>

<h3>Key Principles of the Constitution</h3>
<ul>
  <li><strong>Separation of Powers</strong> — Three branches: Legislative, Executive, Judicial</li>
  <li><strong>Checks and Balances</strong> — Each branch can limit the others</li>
  <li><strong>Federalism</strong> — Power shared between national and state governments</li>
  <li><strong>Popular Sovereignty</strong> — Government derives power from the people</li>
</ul>

<h3>The Early Republic (1789–1800)</h3>
<p>George Washington became the first president (1789). Key events:</p>
<ul>
  <li><strong>Hamilton's Financial Plan</strong> — National bank, assumption of state debts, tariffs</li>
  <li><strong>First Political Parties</strong> — Federalists (Hamilton) vs. Democratic-Republicans (Jefferson)</li>
  <li><strong>Washington's Farewell Address</strong> — Warned against political parties and foreign alliances</li>
  <li><strong>John Adams</strong> (2nd president) — Alien and Sedition Acts, Quasi-War with France</li>
</ul>
<div class="warning">⚠️ The Three-Fifths Compromise is one of the most controversial provisions in American history, embedding the institution of slavery into the fabric of the new government.</div>
`,
  questions: [
    {
      q: 'The main weakness of the Articles of Confederation was:',
      options: ['Too much power in the executive branch', 'The national government was too weak to govern effectively', 'States had no representation', 'It did not allow for a military'],
      answer: 1,
      explanation: 'The Articles created a deliberately weak central government with no power to tax, enforce laws, or regulate trade, making it ineffective.'
    },
    {
      q: 'Shays\' Rebellion (1786–87) was significant because it:',
      options: ['Ended slavery in Massachusetts', 'Proved the Articles of Confederation worked well', 'Showed the need for a stronger central government', 'Led directly to the Bill of Rights'],
      answer: 2,
      explanation: 'The uprising revealed that the national government under the Articles was too weak to maintain order, spurring the call for the Constitutional Convention.'
    },
    {
      q: 'The Great Compromise resolved the dispute over:',
      options: ['Slavery', 'Presidential power', 'Representation in Congress', 'Foreign trade'],
      answer: 2,
      explanation: 'The Great Compromise created a bicameral legislature: the Senate (equal representation) and the House (proportional representation).'
    },
    {
      q: 'The Federalist Papers were written to:',
      options: ['Argue against ratifying the Constitution', 'Promote the Bill of Rights', 'Argue in favor of ratifying the Constitution', 'Propose the Articles of Confederation'],
      answer: 2,
      explanation: 'Hamilton, Madison, and Jay wrote 85 essays (the Federalist Papers) advocating for ratification of the Constitution.'
    },
    {
      q: 'Which constitutional principle divides power between national and state governments?',
      options: ['Separation of Powers', 'Popular Sovereignty', 'Federalism', 'Judicial Review'],
      answer: 2,
      explanation: 'Federalism is the system of shared power between the federal (national) government and state governments.'
    },
    {
      q: 'In Washington\'s Farewell Address, he warned against:',
      options: ['Expanding westward', 'Political parties and foreign entanglements', 'Creating a national bank', 'Abolishing slavery'],
      answer: 1,
      explanation: 'Washington cautioned against the divisiveness of political factions and warned against permanent alliances with foreign nations.'
    },
    {
      q: 'The Bill of Rights was added primarily because:',
      options: ['Federalists demanded it', 'Anti-Federalists insisted on protections for individual liberties', 'George Washington required it', 'It was part of the original Constitution'],
      answer: 1,
      explanation: 'Anti-Federalists refused to support ratification without guarantees of individual rights, leading to the first 10 amendments.'
    }
  ]
},

/* ── UNIT 3: Westward Expansion & Civil War ─────── */
{
  title: 'Westward Expansion & Civil War',
  content: `
<h3>Manifest Destiny & Expansion</h3>
<p><span class="key-term">Manifest Destiny</span> was the 19th-century belief that American expansion across the continent was both justified and inevitable.</p>
<p>Major territorial acquisitions:</p>
<table>
  <tr><th>Acquisition</th><th>Year</th><th>Details</th></tr>
  <tr><td>Louisiana Purchase</td><td>1803</td><td>Bought from France for $15 million — doubled the nation's size</td></tr>
  <tr><td>Florida</td><td>1819</td><td>Adams-Onís Treaty with Spain</td></tr>
  <tr><td>Texas Annexation</td><td>1845</td><td>Republic of Texas joined the Union</td></tr>
  <tr><td>Oregon Territory</td><td>1846</td><td>Treaty with Britain at the 49th parallel</td></tr>
  <tr><td>Mexican Cession</td><td>1848</td><td>Treaty of Guadalupe Hidalgo after Mexican-American War (CA, NV, UT, AZ, NM)</td></tr>
  <tr><td>Gadsden Purchase</td><td>1853</td><td>Southern AZ & NM from Mexico for $10 million</td></tr>
</table>

<h3>The Slavery Debate Intensifies</h3>
<p>Every new territory reignited the question: should slavery be allowed there?</p>
<ul>
  <li><strong>Missouri Compromise (1820)</strong> — Missouri entered as slave state, Maine as free; drew a line at 36°30′</li>
  <li><strong>Compromise of 1850</strong> — California free; stronger Fugitive Slave Act; popular sovereignty in Utah/New Mexico</li>
  <li><strong>Kansas-Nebraska Act (1854)</strong> — Repealed the Missouri Compromise; led to violent conflict ("Bleeding Kansas")</li>
  <li><strong>Dred Scott v. Sandford (1857)</strong> — Supreme Court ruled enslaved people were not citizens and Congress could not ban slavery in territories</li>
</ul>
<div class="warning">⚠️ The Dred Scott decision was one of the worst Supreme Court rulings in history and pushed the nation closer to civil war.</div>

<h3>The Civil War (1861–1865)</h3>
<p>After <strong>Abraham Lincoln</strong> won the 1860 election, 11 Southern states seceded and formed the <span class="key-term">Confederate States of America</span>.</p>
<p><strong>Causes:</strong> Slavery (primary), states' rights, economic differences between the industrial North and agricultural South, and political tensions over expansion.</p>
<p>Key events:</p>
<ul>
  <li><strong>Fort Sumter (April 1861)</strong> — First shots of the war</li>
  <li><strong>Battle of Antietam (Sept 1862)</strong> — Bloodiest single day; gave Lincoln the opening to issue the Emancipation Proclamation</li>
  <li><strong>Emancipation Proclamation (Jan 1, 1863)</strong> — Freed enslaved people in Confederate states; reframed the war as a fight against slavery</li>
  <li><strong>Battle of Gettysburg (July 1863)</strong> — Turning point; Lee's last invasion of the North was repelled</li>
  <li><strong>Sherman's March to the Sea (1864)</strong> — Total war strategy devastated Georgia</li>
  <li><strong>Lee surrenders at Appomattox (April 9, 1865)</strong></li>
</ul>

<h3>Reconstruction (1865–1877)</h3>
<p>The period after the war focused on reintegrating Southern states and defining the rights of freed people.</p>
<p>Key amendments:</p>
<ul>
  <li><strong>13th Amendment (1865)</strong> — Abolished slavery</li>
  <li><strong>14th Amendment (1868)</strong> — Granted citizenship and equal protection under the law</li>
  <li><strong>15th Amendment (1870)</strong> — Voting rights cannot be denied based on race</li>
</ul>
<p>Reconstruction ended with the <span class="key-term">Compromise of 1877</span>, which withdrew federal troops from the South. This led to the rise of <strong>Jim Crow laws</strong> and the systematic disenfranchisement of Black Americans for nearly a century.</p>
`,
  questions: [
    {
      q: 'The Louisiana Purchase (1803) was significant because it:',
      options: ['Gave the U.S. control of Florida', 'Doubled the size of the nation', 'Ended the War of 1812', 'Established the border with Canada'],
      answer: 1,
      explanation: 'Purchased from France for $15 million, the Louisiana Territory roughly doubled the size of the United States.'
    },
    {
      q: 'The Missouri Compromise (1820) attempted to resolve the issue of:',
      options: ['Tariffs on imported goods', 'The balance of slave and free states', 'Native American land rights', 'Presidential term limits'],
      answer: 1,
      explanation: 'The compromise admitted Missouri as a slave state and Maine as a free state, maintaining the balance in the Senate.'
    },
    {
      q: 'What was the primary cause of the Civil War?',
      options: ['Tariffs and trade policy', 'Slavery and its expansion', 'Border disputes with Mexico', 'Religious differences'],
      answer: 1,
      explanation: 'While multiple factors contributed, slavery — and the question of its expansion into new territories — was the central, primary cause.'
    },
    {
      q: 'The Emancipation Proclamation (1863) freed enslaved people in:',
      options: ['All U.S. states', 'Only Northern states', 'Confederate states in rebellion', 'Border states only'],
      answer: 2,
      explanation: 'The Proclamation applied only to states in rebellion against the Union. Slavery in border states was not affected until the 13th Amendment.'
    },
    {
      q: 'Which battle is considered the turning point of the Civil War?',
      options: ['Fort Sumter', 'Antietam', 'Gettysburg', 'Bull Run'],
      answer: 2,
      explanation: 'The Battle of Gettysburg (July 1863) halted Lee\'s invasion of the North and marked the beginning of the Confederacy\'s decline.'
    },
    {
      q: 'The 14th Amendment (1868) granted:',
      options: ['Freedom from slavery', 'Citizenship and equal protection under the law', 'Voting rights regardless of race', 'Women\'s suffrage'],
      answer: 1,
      explanation: 'The 14th Amendment defined citizenship, guaranteed equal protection and due process — one of the most important amendments in American law.'
    },
    {
      q: 'Reconstruction ended with the Compromise of 1877, which resulted in:',
      options: ['Expansion of civil rights in the South', 'Withdrawal of federal troops from the South', 'The election of a Black president', 'A new constitutional convention'],
      answer: 1,
      explanation: 'Federal troops were withdrawn, ending Reconstruction and allowing Southern states to implement Jim Crow laws that oppressed Black citizens.'
    }
  ]
},

/* ── UNIT 4: Industrialization & Progressive Era ── */
{
  title: 'Industrialization & Progressive Era',
  content: `
<h3>The Gilded Age (1870s–1900)</h3>
<p>The term <span class="key-term">Gilded Age</span> (coined by Mark Twain) describes a period of rapid economic growth masked by severe social problems — extreme wealth inequality, corruption, and poor working conditions.</p>
<p>Key developments:</p>
<ul>
  <li><strong>Transcontinental Railroad (1869)</strong> — Connected East and West coasts, transforming commerce and settlement</li>
  <li><strong>Steel Industry</strong> — <strong>Andrew Carnegie</strong> dominated through vertical integration</li>
  <li><strong>Oil Industry</strong> — <strong>John D. Rockefeller</strong> and Standard Oil used horizontal integration to create a monopoly</li>
  <li><strong>Banking</strong> — <strong>J.P. Morgan</strong> wielded enormous financial power</li>
</ul>
<div class="formula">
Vertical Integration = controlling every stage of production (raw materials → finished product)<br>
Horizontal Integration = buying out competitors at the same level of production
</div>

<h3>Immigration & Urbanization</h3>
<p>Millions of immigrants arrived, especially through <span class="key-term">Ellis Island</span> (opened 1892). Waves came from Southern and Eastern Europe, Ireland, and China.</p>
<p>Cities exploded in size, creating:</p>
<ul>
  <li>Overcrowded tenement housing</li>
  <li>Child labor (children as young as 5 in factories)</li>
  <li>Dangerous working conditions (12-16 hour days, low pay)</li>
  <li>Rise of labor unions — <strong>Knights of Labor</strong>, <strong>American Federation of Labor (AFL)</strong></li>
</ul>

<h3>The Progressive Era (1890s–1920)</h3>
<p>Progressives sought to fix the problems of industrialization through government reform.</p>
<p>Key reformers and achievements:</p>
<ul>
  <li><strong>Muckrakers</strong> — Investigative journalists who exposed corruption:
    <ul>
      <li>Upton Sinclair — <em>The Jungle</em> (meatpacking industry) → led to the Pure Food and Drug Act</li>
      <li>Ida Tarbell — Exposed Standard Oil's monopolistic practices</li>
      <li>Jacob Riis — <em>How the Other Half Lives</em> (tenement conditions)</li>
    </ul>
  </li>
  <li><strong>Theodore Roosevelt</strong> (president 1901–09) — "Trust-buster," conservationist, Square Deal</li>
  <li><strong>Constitutional Amendments:</strong>
    <ul>
      <li>16th (1913) — Federal income tax</li>
      <li>17th (1913) — Direct election of senators</li>
      <li>18th (1919) — Prohibition</li>
      <li>19th (1920) — Women's suffrage</li>
    </ul>
  </li>
</ul>
<div class="tip">💡 The 19th Amendment was the result of decades of activism by suffragists like Susan B. Anthony, Elizabeth Cady Stanton, and Alice Paul.</div>
`,
  questions: [
    {
      q: 'The "Gilded Age" refers to a period characterized by:',
      options: ['Political stability and equality', 'Rapid growth masking inequality and corruption', 'Economic depression and widespread poverty', 'Progressive social reform'],
      answer: 1,
      explanation: 'Mark Twain coined the term to suggest that beneath the surface glitter of wealth, serious social problems festered.'
    },
    {
      q: 'Andrew Carnegie built his steel empire through:',
      options: ['Horizontal integration', 'Vertical integration', 'Government subsidies only', 'Foreign investment'],
      answer: 1,
      explanation: 'Carnegie controlled every stage of steel production — from iron mines and coal fields to railroads and steel mills — which is vertical integration.'
    },
    {
      q: 'Upton Sinclair\'s "The Jungle" exposed conditions in:',
      options: ['Coal mines', 'The meatpacking industry', 'Textile factories', 'Oil refineries'],
      answer: 1,
      explanation: 'The novel\'s graphic depiction of unsanitary meatpacking conditions shocked the public and led to the Pure Food and Drug Act (1906).'
    },
    {
      q: 'Which president was known as the "Trust-Buster"?',
      options: ['William McKinley', 'Woodrow Wilson', 'Theodore Roosevelt', 'William Howard Taft'],
      answer: 2,
      explanation: 'Theodore Roosevelt aggressively used antitrust laws to break up monopolies, earning him the "Trust-Buster" nickname.'
    },
    {
      q: 'The 19th Amendment (1920) granted:',
      options: ['Freedom of speech', 'Prohibition of alcohol', 'Women the right to vote', 'Direct election of senators'],
      answer: 2,
      explanation: 'The 19th Amendment prohibited denying the right to vote based on sex, the culmination of the women\'s suffrage movement.'
    },
    {
      q: 'Ellis Island was primarily known as:',
      options: ['A military fort', 'An immigration processing center', 'A prison for political dissidents', 'A quarantine hospital'],
      answer: 1,
      explanation: 'Ellis Island in New York Harbor processed over 12 million immigrants between 1892 and 1954.'
    },
    {
      q: 'The muckrakers were important to the Progressive movement because they:',
      options: ['Ran for political office', 'Organized labor strikes', 'Exposed corruption and social problems through journalism', 'Funded charitable organizations'],
      answer: 2,
      explanation: 'Muckrakers used investigative journalism to reveal corporate abuses, government corruption, and social injustice, building public support for reform.'
    }
  ]
},

/* ── UNIT 5: World Wars & the Cold War ──────────── */
{
  title: 'World Wars & the Cold War',
  content: `
<h3>World War I (1914–1918)</h3>
<p>The U.S. initially stayed neutral. Key factors that drew America in:</p>
<ul>
  <li><strong>Unrestricted submarine warfare</strong> — Germany sank the Lusitania (1915), killing 1,198 including 128 Americans</li>
  <li><strong>Zimmermann Telegram (1917)</strong> — Germany proposed a military alliance with Mexico against the U.S.</li>
</ul>
<p>The U.S. entered the war in April 1917. American troops helped tip the balance, and Germany signed an <span class="key-term">armistice on November 11, 1918</span>.</p>
<p>President <strong>Woodrow Wilson</strong> proposed his <span class="key-term">Fourteen Points</span>, including the League of Nations. The Senate rejected the Treaty of Versailles, and the U.S. never joined the League.</p>

<h3>The Roaring Twenties & Great Depression</h3>
<p>The 1920s saw economic boom, jazz culture, and consumer excess. The <span class="key-term">Stock Market Crash</span> (October 29, 1929 — "Black Tuesday") triggered the <span class="key-term">Great Depression</span>.</p>
<p><strong>FDR's New Deal</strong> (1933–39) created programs to provide relief, recovery, and reform:</p>
<ul>
  <li><strong>CCC</strong> — Civilian Conservation Corps (jobs in conservation)</li>
  <li><strong>Social Security Act (1935)</strong> — Retirement and unemployment insurance</li>
  <li><strong>SEC</strong> — Securities and Exchange Commission (stock market regulation)</li>
  <li><strong>FDIC</strong> — Federal Deposit Insurance Corporation (bank deposit protection)</li>
</ul>

<h3>World War II (1939–1945)</h3>
<p>The U.S. entered after Japan's attack on <span class="key-term">Pearl Harbor</span> (December 7, 1941) — "a date which will live in infamy."</p>
<p>Key events:</p>
<ul>
  <li><strong>D-Day (June 6, 1944)</strong> — Allied invasion of Normandy, the largest amphibious assault in history</li>
  <li><strong>Battle of the Bulge (Dec 1944)</strong> — Germany's last major offensive in the West</li>
  <li><strong>V-E Day (May 8, 1945)</strong> — Germany surrendered</li>
  <li><strong>Atomic bombs</strong> — Hiroshima (Aug 6) and Nagasaki (Aug 9, 1945)</li>
  <li><strong>V-J Day (Aug 15, 1945)</strong> — Japan surrendered</li>
</ul>
<p>On the home front: women entered the workforce ("Rosie the Riveter"), and Japanese Americans were unjustly placed in <span class="key-term">internment camps</span> (Executive Order 9066).</p>
<div class="warning">⚠️ Japanese American internment is now widely recognized as one of the worst violations of civil liberties in U.S. history. The government formally apologized in 1988.</div>

<h3>The Cold War (1947–1991)</h3>
<p>After WWII, the U.S. and Soviet Union became rival superpowers in an ideological struggle: capitalism vs. communism.</p>
<p>Key events and policies:</p>
<ul>
  <li><strong>Truman Doctrine (1947)</strong> — U.S. would support free peoples resisting communism</li>
  <li><strong>Marshall Plan (1948)</strong> — Economic aid to rebuild Western Europe</li>
  <li><strong>NATO (1949)</strong> — Military alliance of Western nations</li>
  <li><strong>Korean War (1950–53)</strong> — U.S. fought to prevent communist takeover of South Korea</li>
  <li><strong>Cuban Missile Crisis (1962)</strong> — Closest the world came to nuclear war</li>
  <li><strong>Vietnam War (1955–75)</strong> — Long, divisive conflict; massive anti-war movement in the U.S.</li>
  <li><strong>Fall of the Berlin Wall (1989)</strong> and <strong>collapse of the USSR (1991)</strong> ended the Cold War</li>
</ul>
`,
  questions: [
    {
      q: 'The immediate trigger for U.S. entry into WWI was:',
      options: ['The sinking of the Titanic', 'The Zimmermann Telegram and unrestricted submarine warfare', 'A British request for military aid', 'Germany\'s invasion of France'],
      answer: 1,
      explanation: 'The Zimmermann Telegram (proposing a German-Mexican alliance) and Germany\'s unrestricted submarine warfare pushed the U.S. to enter WWI in 1917.'
    },
    {
      q: 'FDR\'s New Deal was designed to address:',
      options: ['The aftermath of World War I', 'The Great Depression', 'Cold War tensions', 'Civil rights inequality'],
      answer: 1,
      explanation: 'The New Deal was a series of programs and reforms aimed at providing relief for the unemployed, economic recovery, and financial reform during the Great Depression.'
    },
    {
      q: 'The attack on Pearl Harbor (December 7, 1941) led directly to:',
      options: ['The end of World War II', 'U.S. entry into World War II', 'The dropping of atomic bombs', 'The creation of the United Nations'],
      answer: 1,
      explanation: 'Japan\'s surprise attack on Pearl Harbor prompted the U.S. to declare war on Japan the next day, entering WWII.'
    },
    {
      q: 'D-Day (June 6, 1944) was:',
      options: ['The day Germany surrendered', 'The Allied invasion of Normandy, France', 'The day the atomic bomb was dropped', 'The Battle of the Bulge'],
      answer: 1,
      explanation: 'D-Day was the massive Allied amphibious invasion of Normandy, which opened a Western Front in Europe and began the liberation of France.'
    },
    {
      q: 'The Truman Doctrine stated that the U.S. would:',
      options: ['Avoid all foreign conflicts', 'Support peoples resisting communist takeover', 'Build nuclear weapons to deter the Soviets', 'Form a military alliance with the Soviet Union'],
      answer: 1,
      explanation: 'Announced in 1947, the Truman Doctrine pledged American support for nations threatened by communist expansion — a cornerstone of Cold War policy.'
    },
    {
      q: 'The Cuban Missile Crisis (1962) was significant because:',
      options: ['It ended the Cold War', 'It was the closest the world came to nuclear war', 'Cuba became a U.S. ally', 'The Soviet Union collapsed as a result'],
      answer: 1,
      explanation: 'For 13 days, the U.S. and Soviet Union stood on the brink of nuclear war over Soviet missiles in Cuba before a diplomatic resolution was reached.'
    },
    {
      q: 'Japanese American internment during WWII was ordered by:',
      options: ['The Supreme Court', 'Congress', 'Executive Order 9066', 'The War Department independently'],
      answer: 2,
      explanation: 'President Roosevelt signed Executive Order 9066 in 1942, authorizing the forced relocation and internment of approximately 120,000 Japanese Americans.'
    }
  ]
},

/* ── UNIT 6: Civil Rights & Modern America ──────── */
{
  title: 'Civil Rights & Modern America',
  content: `
<h3>The Civil Rights Movement (1954–1968)</h3>
<p>The struggle for Black Americans' full equality became the defining social movement of the 20th century.</p>
<p>Key events and figures:</p>
<ul>
  <li><strong>Brown v. Board of Education (1954)</strong> — Supreme Court ruled school segregation unconstitutional, overturning "separate but equal" (Plessy v. Ferguson, 1896)</li>
  <li><strong>Montgomery Bus Boycott (1955–56)</strong> — Sparked by <strong>Rosa Parks</strong>' refusal to give up her seat; <strong>Martin Luther King Jr.</strong> emerged as a leader</li>
  <li><strong>Little Rock Nine (1957)</strong> — Nine Black students integrated Central High School in Arkansas, escorted by federal troops</li>
  <li><strong>Sit-ins (1960)</strong> — Greensboro, NC lunch counter sit-ins challenged segregation</li>
  <li><strong>Freedom Rides (1961)</strong> — Testing desegregation on interstate buses</li>
  <li><strong>March on Washington (1963)</strong> — MLK's "I Have a Dream" speech before 250,000+ people</li>
  <li><strong>Civil Rights Act (1964)</strong> — Outlawed discrimination based on race, color, religion, sex, or national origin</li>
  <li><strong>Voting Rights Act (1965)</strong> — Eliminated barriers to Black voting (literacy tests, poll taxes)</li>
  <li><strong>MLK assassinated (April 4, 1968)</strong></li>
</ul>
<div class="tip">💡 The Civil Rights Act of 1964 and the Voting Rights Act of 1965 are considered the most significant civil rights legislation since Reconstruction.</div>

<h3>Other Social Movements</h3>
<p>The civil rights movement inspired others to demand equality:</p>
<ul>
  <li><strong>Women's Movement</strong> — Betty Friedan's <em>The Feminine Mystique</em> (1963), Title IX (1972), Roe v. Wade (1973)</li>
  <li><strong>César Chávez & the UFW</strong> — Fought for farmworkers' rights through strikes and boycotts</li>
  <li><strong>American Indian Movement (AIM)</strong> — Advocated for Native American rights; Occupation of Wounded Knee (1973)</li>
  <li><strong>Environmental Movement</strong> — Rachel Carson's <em>Silent Spring</em> (1962); Earth Day (1970); creation of the EPA</li>
</ul>

<h3>Late 20th Century</h3>
<ul>
  <li><strong>Watergate (1972–74)</strong> — Nixon resigned after cover-up of the break-in at DNC headquarters</li>
  <li><strong>Reagan Era (1981–89)</strong> — Conservative revolution, tax cuts, military buildup, end of Cold War</li>
  <li><strong>Fall of the Berlin Wall (1989)</strong> — Symbolic end of the Cold War</li>
  <li><strong>Persian Gulf War (1991)</strong> — U.S.-led coalition liberated Kuwait from Iraqi invasion</li>
</ul>

<h3>21st Century</h3>
<ul>
  <li><strong>September 11, 2001</strong> — Terrorist attacks killed nearly 3,000; led to the War on Terror, invasions of Afghanistan and Iraq</li>
  <li><strong>Great Recession (2007–09)</strong> — Worst economic downturn since the Great Depression</li>
  <li><strong>Barack Obama (2009–17)</strong> — First African American president; Affordable Care Act</li>
  <li><strong>Ongoing challenges</strong> — Political polarization, racial justice movements, immigration reform, climate change, technological disruption</li>
</ul>
<div class="tip">💡 The arc of American history shows a recurring pattern: the expansion of rights and freedoms, often hard-won through struggle, protest, and sacrifice.</div>
`,
  questions: [
    {
      q: 'Brown v. Board of Education (1954) ruled that:',
      options: ['Affirmative action was constitutional', 'School segregation was unconstitutional', 'Prayer in schools was banned', 'States could set their own education standards'],
      answer: 1,
      explanation: 'The Supreme Court unanimously ruled that "separate but equal" in public education was inherently unequal, overturning Plessy v. Ferguson.'
    },
    {
      q: 'The Montgomery Bus Boycott was sparked by:',
      options: ['Martin Luther King Jr.\'s assassination', 'Rosa Parks\' refusal to give up her bus seat', 'The bombing of a church', 'A Supreme Court ruling on transportation'],
      answer: 1,
      explanation: 'Rosa Parks\' arrest on December 1, 1955 for refusing to give up her seat launched a 381-day boycott that desegregated Montgomery\'s buses.'
    },
    {
      q: 'The Civil Rights Act of 1964 prohibited discrimination based on:',
      options: ['Race only', 'Race and gender only', 'Race, color, religion, sex, and national origin', 'Age and disability'],
      answer: 2,
      explanation: 'The landmark legislation broadly prohibited discrimination based on race, color, religion, sex, or national origin in employment and public accommodations.'
    },
    {
      q: 'The Watergate scandal led to:',
      options: ['President Kennedy\'s impeachment', 'President Nixon\'s resignation', 'The end of the Vietnam War', 'The creation of the CIA'],
      answer: 1,
      explanation: 'The Watergate cover-up led to impeachment proceedings against Nixon, who resigned on August 9, 1974 — the only president to do so.'
    },
    {
      q: 'César Chávez is best known for:',
      options: ['Leading the civil rights movement in the South', 'Fighting for farmworkers\' rights', 'Founding the American Indian Movement', 'Writing the first environmental protection law'],
      answer: 1,
      explanation: 'César Chávez co-founded the United Farm Workers and led strikes and boycotts to secure better wages and conditions for agricultural workers.'
    },
    {
      q: 'The September 11, 2001 attacks directly led to:',
      options: ['The Great Recession', 'The War on Terror and invasion of Afghanistan', 'The election of Barack Obama', 'The fall of the Berlin Wall'],
      answer: 1,
      explanation: 'The 9/11 attacks prompted the U.S. to launch the War on Terror, beginning with the invasion of Afghanistan in October 2001.'
    },
    {
      q: 'Which was a major achievement of the environmental movement?',
      options: ['The New Deal', 'Creation of the EPA and first Earth Day (1970)', 'The Marshall Plan', 'The Interstate Highway System'],
      answer: 1,
      explanation: 'Inspired by Rachel Carson\'s "Silent Spring" and growing awareness of pollution, the EPA was established in 1970, the same year as the first Earth Day.'
    },
    {
      q: 'The Voting Rights Act of 1965 was significant because it:',
      options: ['Gave women the right to vote', 'Eliminated barriers like literacy tests that prevented Black Americans from voting', 'Lowered the voting age to 18', 'Established the Electoral College'],
      answer: 1,
      explanation: 'The Act banned literacy tests, poll taxes, and other discriminatory practices used primarily in Southern states to prevent Black citizens from voting.'
    }
  ]
}

  ] // end units
}; // end HISTORY_DATA
