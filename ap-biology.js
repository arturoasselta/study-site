var APBIOLOGY_DATA = {
  title: 'AP Biology',
  shortTitle: 'AP Bio',
  description: 'Cells, genetics, evolution, ecology, and biochemistry for the AP Biology exam.',
  icon: '🧬',
  courseName: 'AP Biology — Exam Review',
  units: [

    /* ────────── UNIT 1: Chemistry of Life ────────── */
    {
      title: 'Chemistry of Life',
      video: 'H8WJ2KENlK0',
      content: `
<h2>⚗️ Chemistry of Life</h2>
<p>All biological processes are grounded in chemistry. Understanding the molecules of life is the foundation of AP Biology.</p>

<h3>Water & Its Properties</h3>
<table>
<tr><th>Property</th><th>Explanation</th><th>Biological Significance</th></tr>
<tr><td><strong>Cohesion</strong></td><td>Water molecules attract each other (H-bonds)</td><td>Water transport in plants (xylem); surface tension</td></tr>
<tr><td><strong>Adhesion</strong></td><td>Water sticks to other surfaces</td><td>Capillary action in plant vessels</td></tr>
<tr><td><strong>High Specific Heat</strong></td><td>Absorbs large amounts of heat before temp rises</td><td>Buffers climate; stabilizes body temperature</td></tr>
<tr><td><strong>High Heat of Vaporization</strong></td><td>Much energy needed to evaporate</td><td>Evaporative cooling (sweating)</td></tr>
<tr><td><strong>Expansion on Freezing</strong></td><td>Ice is less dense than liquid water</td><td>Ice floats — lakes freeze from top, aquatic life survives</td></tr>
<tr><td><strong>Universal Solvent</strong></td><td>Polar molecule dissolves ionic/polar substances</td><td>Transports nutrients, gases, waste in organisms</td></tr>
</table>

<h3>Macromolecules</h3>
<table>
<tr><th>Macromolecule</th><th>Monomer</th><th>Bond</th><th>Functions</th></tr>
<tr><td><strong>Carbohydrates</strong></td><td>Monosaccharides (glucose)</td><td>Glycosidic bond</td><td>Energy storage (starch, glycogen), structure (cellulose, chitin)</td></tr>
<tr><td><strong>Lipids</strong></td><td>Glycerol + fatty acids</td><td>Ester bond</td><td>Cell membranes (phospholipids), energy storage, hormones (steroids)</td></tr>
<tr><td><strong>Proteins</strong></td><td>Amino acids</td><td>Peptide bond</td><td>Enzymes, structure (collagen), transport (hemoglobin), signaling</td></tr>
<tr><td><strong>Nucleic Acids</strong></td><td>Nucleotides</td><td>Phosphodiester bond</td><td>DNA (genetic info), RNA (gene expression), ATP (energy)</td></tr>
</table>

<h3>Protein Structure Levels</h3>
<ol>
<li><strong>Primary:</strong> Sequence of amino acids (determined by DNA)</li>
<li><strong>Secondary:</strong> α-helices and β-pleated sheets (H-bonds between backbone)</li>
<li><strong>Tertiary:</strong> 3D folding — R-group interactions (H-bonds, ionic, hydrophobic, disulfide)</li>
<li><strong>Quaternary:</strong> Multiple polypeptide chains (e.g., hemoglobin = 4 subunits)</li>
</ol>

<h3>Enzymes</h3>
<ul>
<li>Biological catalysts — lower <strong>activation energy</strong>; not consumed in reaction</li>
<li><strong>Active site</strong> — specific region that binds substrate (lock-and-key or induced fit)</li>
<li>Affected by: temperature, pH, substrate concentration, inhibitors</li>
<li><strong>Competitive inhibition:</strong> inhibitor mimics substrate, blocks active site</li>
<li><strong>Noncompetitive inhibition:</strong> inhibitor binds allosteric site, changes shape of active site</li>
</ul>

<div class="tip">💡 Denaturation = protein loses shape (and function) due to heat or pH change. Shape = function in biology. A denatured enzyme cannot catalyze its reaction.</div>
      `,
      questions: [
        { q: 'Which property of water allows lakes to support life in winter?', options: ['High specific heat — which overlooks the underlying mechanism', 'Ice being less dense than liquid water', 'Cohesion — though this describes a different concept entirely', 'Universal solvent property — this is a partial explanation that omits the key mechanism'], answer: 1 },
        { q: 'The monomers of proteins are: — this applies only in exceptional cases, not as a general rule', options: ['Nucleotides', 'Monosaccharides — though this only applies under specific conditions', 'Amino acids connected by peptide bonds', 'Fatty acids — a common misconception not supported by the evidence'], answer: 2 },
        { q: 'An enzyme lowers: — but this applies to a separate process', options: ['The free energy change (ΔG) of the reaction', 'The activation energy needed to start the reaction', 'The temperature of the reaction — this misidentifies the primary mechanism responsible', 'The concentration of products — this applies only in exceptional cases, not as a general rule'], answer: 1 },
        { q: 'Competitive inhibition works by:', options: ['Changing the shape of the active site', 'Binding the allosteric site — but this conflates correlation with causation in the process', 'Mimicking the substrate and blocking the active site', 'Denaturing the enzyme — this applies only in exceptional cases, not as a general rule'], answer: 2 },
        { q: 'Cellulose and starch are both made of glucose, but differ because:', options: ['Starch uses α-glucose', 'Cellulose has more energy than starch', 'Starch is found in animals; cellulose is in bacteria', 'They use different monomers entirely'], answer: 0 },
        { q: 'The tertiary structure of a protein is maintained by:', options: ['Only hydrogen bonds between backbone atoms', 'R-group interactions: H-bonds, ionic bonds, hydrophobic interactions, disulfide bridges', 'Only the sequence of amino acids', 'Phosphodiester bonds'], answer: 1 }
      ],
      flashcards: [
        { front: 'Cohesion vs. Adhesion', back: 'Cohesion: water sticks to water (H-bonds). Adhesion: water sticks to other surfaces. Both enable capillary action.' },
        { front: 'Peptide bond', back: 'Covalent bond linking amino acids (between carboxyl group of one and amino group of next). Formed by dehydration synthesis.' },
        { front: 'Denaturation', back: 'Loss of protein\'s 3D shape (and function) due to heat or pH changes. Primary structure stays intact.' },
        { front: 'Competitive vs. Noncompetitive Inhibition', back: 'Competitive: blocks active site (substrate-like). Noncompetitive: binds allosteric site, changes active site shape.' },
        { front: 'Phospholipid bilayer', back: 'Cell membrane structure — hydrophilic phosphate heads face outward, hydrophobic fatty acid tails face inward.' },
        { front: 'ATP', back: 'Adenosine triphosphate — universal energy currency of the cell. Energy released when phosphate bond breaks (ATP → ADP + Pi).' }
      ]
    },

    /* ────────── UNIT 2: Cell Structure & Function ────────── */
    {
      title: 'Cell Structure & Function',
      video: 'URUJD5NEXC8',
      content: `
<h2>🔬 Cell Structure & Function</h2>

<h3>Prokaryotic vs. Eukaryotic Cells</h3>
<table>
<tr><th>Feature</th><th>Prokaryotic</th><th>Eukaryotic</th></tr>
<tr><td>Nucleus</td><td>No (nucleoid region)</td><td>Yes (membrane-bound)</td></tr>
<tr><td>Organelles</td><td>No membrane-bound organelles</td><td>Many membrane-bound organelles</td></tr>
<tr><td>Ribosomes</td><td>70S (smaller)</td><td>80S (larger); 70S in mitochondria/chloroplasts</td></tr>
<tr><td>Cell wall</td><td>Peptidoglycan (bacteria)</td><td>Cellulose (plants), chitin (fungi), none in animals</td></tr>
<tr><td>DNA</td><td>Circular, in cytoplasm</td><td>Linear chromosomes in nucleus</td></tr>
<tr><td>Examples</td><td>Bacteria, Archaea</td><td>Plants, animals, fungi, protists</td></tr>
</table>

<h3>Key Eukaryotic Organelles</h3>
<table>
<tr><th>Organelle</th><th>Function</th></tr>
<tr><td><strong>Mitochondria</strong></td><td>ATP production via cellular respiration; double membrane; own DNA (endosymbiosis)</td></tr>
<tr><td><strong>Chloroplasts</strong></td><td>Photosynthesis; double membrane; own DNA (endosymbiosis)</td></tr>
<tr><td><strong>Rough ER</strong></td><td>Protein synthesis + processing (has ribosomes)</td></tr>
<tr><td><strong>Smooth ER</strong></td><td>Lipid synthesis, detoxification, Ca²⁺ storage</td></tr>
<tr><td><strong>Golgi Apparatus</strong></td><td>Modify, sort, and ship proteins (the "post office")</td></tr>
<tr><td><strong>Lysosomes</strong></td><td>Intracellular digestion — contain hydrolytic enzymes (animal cells)</td></tr>
<tr><td><strong>Vacuoles</strong></td><td>Storage; large central vacuole in plants maintains turgor pressure</td></tr>
<tr><td><strong>Ribosomes</strong></td><td>Protein synthesis (found free in cytoplasm or on rough ER)</td></tr>
</table>

<h3>Endomembrane System</h3>
<p>Coordinates cellular activities through a system of interconnected membranes:</p>
<p><strong>Rough ER → Golgi (cis) → Golgi (trans) → Secretory vesicles → Plasma membrane / Lysosomes</strong></p>

<h3>Endosymbiotic Theory</h3>
<ul>
<li>Mitochondria and chloroplasts were once free-living prokaryotes engulfed by a host cell</li>
<li>Evidence: own circular DNA, 70S ribosomes, double membranes, reproduce by binary fission</li>
</ul>

<h3>Cell Membrane — Fluid Mosaic Model</h3>
<ul>
<li>Phospholipid bilayer — fluid (phospholipids move laterally)</li>
<li>Proteins: integral (span membrane) and peripheral (surface)</li>
<li>Cholesterol — stabilizes membrane fluidity at extreme temperatures</li>
<li>Glycoproteins/glycolipids — cell identity, recognition, immune response</li>
</ul>

<div class="tip">💡 Remember: Mitochondria and chloroplasts have 70S ribosomes (like bacteria) — supporting endosymbiotic theory. All other eukaryotic ribosomes are 80S.</div>
      `,
      questions: [
        { q: 'Which two organelles support the endosymbiotic theory?', options: ['Nucleus and Golgi apparatus', 'Mitochondria and chloroplasts (own DNA, 70S ribosomes, double membranes)', 'Rough ER and smooth ER — but evidence shows this explanation is insufficient alone', 'Lysosomes and vacuoles — but evidence shows this explanation is insufficient alone'], answer: 1 },
        { q: 'The correct order in the endomembrane secretory pathway is:', options: ['Golgi → Rough ER → Plasma membrane', 'Rough ER → Golgi → Secretory vesicles → Plasma membrane', 'Nucleus → Ribosome → Smooth ER → Golgi', 'Lysosome → Golgi → Rough ER — but this conflates correlation with causation in the process'], answer: 1 },
        { q: 'Cholesterol\'s role in the cell membrane is to:', options: ['Transport proteins across the membrane', 'Stabilize membrane fluidity at temperature extremes', 'Provide energy for active transport', 'Form glycoproteins for cell recognition'], answer: 1 },
        { q: 'Lysosomes function by: — this is true in isolation but misses the full picture', options: ['Synthesizing lipids for the cell membrane', 'Containing hydrolytic enzymes for intracellular digestion', 'Producing ATP for the cell — this is a partial explanation that omits the key mechanism', 'Packaging proteins for export — this applies only in exceptional cases, not as a general rule'], answer: 1 },
        { q: 'The central vacuole in plant cells is important for:', options: ['Photosynthesis', 'Maintaining turgor pressure and storage', 'Protein synthesis — though this describes a related but distinct phenomenon', 'ATP production — this is true in isolation but misses the full picture'], answer: 1 },
        { q: 'A key difference between prokaryotic and eukaryotic ribosomes is:', options: ['Only eukaryotes have ribosomes', 'Prokaryotes have 70S; eukaryotes have 80S (except in mitochondria/chloroplasts)', 'Prokaryotic ribosomes are in the nucleus', 'Eukaryotic ribosomes are only found in the cytoplasm'], answer: 1 }
      ],
      flashcards: [
        { front: 'Endosymbiotic Theory', back: 'Mitochondria and chloroplasts were once free prokaryotes. Evidence: own circular DNA, 70S ribosomes, double membranes, binary fission.' },
        { front: 'Fluid Mosaic Model', back: 'Cell membrane = phospholipid bilayer with embedded proteins. "Fluid" — lipids move laterally; "mosaic" — diverse proteins embedded.' },
        { front: 'Golgi Apparatus', back: 'Modifies, sorts, and ships proteins/lipids. Cis face receives from ER; trans face ships to destinations.' },
        { front: 'Rough ER vs. Smooth ER', back: 'Rough ER: has ribosomes, makes proteins. Smooth ER: no ribosomes, makes lipids, detoxifies.' },
        { front: 'Integral vs. Peripheral proteins', back: 'Integral proteins span the lipid bilayer. Peripheral proteins are loosely attached to the surface.' },
        { front: 'Turgor pressure', back: 'Pressure of water against cell wall in plant cells — keeps plants upright. Lost when cells lose water (wilting).' }
      ]
    },

    /* ────────── UNIT 3: Cellular Energetics ────────── */
    {
      title: 'Cellular Energetics',
      video: 'eymQn-F6Hco',
      content: `
<h2>⚡ Cellular Energetics</h2>

<h3>Photosynthesis Overview</h3>
<p><strong>Overall equation:</strong> 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂</p>
<table>
<tr><th>Stage</th><th>Location</th><th>Inputs</th><th>Outputs</th></tr>
<tr><td><strong>Light Reactions</strong></td><td>Thylakoid membranes</td><td>Light, H₂O, ADP, NADP⁺</td><td>ATP, NADPH, O₂ (waste)</td></tr>
<tr><td><strong>Calvin Cycle (C3)</strong></td><td>Stroma</td><td>CO₂, ATP, NADPH</td><td>G3P (sugar precursor), ADP, NADP⁺</td></tr>
</table>

<h3>Cellular Respiration Overview</h3>
<p><strong>Overall equation:</strong> C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ~32 ATP</p>
<table>
<tr><th>Stage</th><th>Location</th><th>Inputs</th><th>Net ATP Yield</th></tr>
<tr><td><strong>Glycolysis</strong></td><td>Cytoplasm</td><td>Glucose</td><td>2 ATP net, 2 NADH, 2 pyruvate</td></tr>
<tr><td><strong>Pyruvate Oxidation</strong></td><td>Mitochondrial matrix</td><td>Pyruvate</td><td>2 Acetyl-CoA, 2 CO₂, 2 NADH</td></tr>
<tr><td><strong>Krebs Cycle</strong></td><td>Mitochondrial matrix</td><td>Acetyl-CoA</td><td>2 ATP, 6 NADH, 2 FADH₂, 4 CO₂</td></tr>
<tr><td><strong>Oxidative Phosphorylation</strong></td><td>Inner mitochondrial membrane</td><td>NADH, FADH₂, O₂</td><td>~28 ATP (via ATP synthase)</td></tr>
</table>

<h3>ATP Synthase & Chemiosmosis</h3>
<ul>
<li>Electrons from NADH/FADH₂ move through <strong>electron transport chain (ETC)</strong></li>
<li>Energy pumps H⁺ (protons) into intermembrane space → concentration gradient</li>
<li>H⁺ flows back through <strong>ATP synthase</strong> → generates ATP (chemiosmosis)</li>
<li>O₂ is the final electron acceptor → forms H₂O</li>
</ul>

<h3>Fermentation (Anaerobic)</h3>
<ul>
<li>Occurs when O₂ is absent; regenerates NAD⁺ to keep glycolysis running</li>
<li><strong>Lactic acid fermentation:</strong> Pyruvate → lactate (muscle cells, some bacteria)</li>
<li><strong>Alcoholic fermentation:</strong> Pyruvate → ethanol + CO₂ (yeast, plants)</li>
<li>Only yields 2 ATP (from glycolysis) — much less efficient than aerobic respiration</li>
</ul>

<h3>Photorespiration & C4/CAM Plants</h3>
<ul>
<li><strong>Photorespiration:</strong> RuBisCO fixes O₂ instead of CO₂ on hot/dry days → wastes energy</li>
<li><strong>C4 plants</strong> (corn, sugarcane): Fix CO₂ in mesophyll, concentrate it around RuBisCO in bundle sheath</li>
<li><strong>CAM plants</strong> (cacti, succulents): Fix CO₂ at night, use it during day — stomata closed in heat</li>
</ul>

<div class="tip">💡 The ETC is where most ATP is made (~28 of ~32 total). NADH yields ~2.5 ATP; FADH₂ yields ~1.5 ATP. O₂ is essential as the final electron acceptor — without it, the ETC shuts down.</div>
      `,
      questions: [
        { q: 'The Calvin Cycle (light-independent reactions) takes place in the:', options: ['Thylakoid membranes — but this conflates correlation with causation in the process', 'Stroma of the chloroplast', 'Inner mitochondrial membrane — while plausible, this overgeneralizes without key distinctions', 'Cytoplasm — but this applies to a separate process'], answer: 1 },
        { q: 'Glycolysis produces a net gain of how many ATP?', options: ['38', '4', '2', '0'], answer: 2 },
        { q: 'Chemiosmosis in mitochondria involves:', options: ['Direct synthesis of ATP from glucose', 'H⁺ flowing through ATP synthase down a concentration gradient, generating ATP', 'CO₂ being fixed into organic molecules', 'Light energy splitting water molecules'], answer: 1 },
        { q: 'The purpose of fermentation is to: — this is a partial explanation that omits the key mechanism', options: ['Produce more ATP than aerobic respiration', 'Regenerate NAD⁺ so glycolysis can continue in the absence of O₂', 'Break down CO₂ into glucose — but this conflates correlation with causation in the process', 'Transfer electrons to O₂ — but this reverses the actual causal relationship'], answer: 1 },
        { q: 'C4 plants reduce photorespiration by: — but this describes the opposite relationship', options: ['Only doing photosynthesis at night — which overlooks the underlying mechanism', 'Fixing CO₂ in mesophyll cells and concentrating it near RuBisCO in bundle sheath', 'Completely eliminating the Calvin cycle — though this only applies under specific conditions', 'Using FADH₂ instead of NADPH in the light reactions — but this conflates correlation with causation in the process'], answer: 1 },
        { q: 'Oxygen\'s role in cellular respiration is:', options: ['To donate electrons to the ETC', 'To synthesize glucose directly', 'To serve as the final electron acceptor in the ETC, forming water', 'To drive the Calvin cycle'], answer: 2 }
      ],
      flashcards: [
        { front: 'Photosynthesis equation', back: '6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂ (occurs in chloroplasts)' },
        { front: 'Cellular respiration equation', back: 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ~32 ATP (occurs in mitochondria)' },
        { front: 'Chemiosmosis', back: 'ATP synthesis driven by H⁺ flowing through ATP synthase down an electrochemical gradient (across inner mitochondrial or thylakoid membrane)' },
        { front: 'Fermentation', back: 'Anaerobic ATP production — regenerates NAD⁺ for glycolysis. Yields only 2 ATP. Lactic acid (animals) or alcoholic (yeast).' },
        { front: 'C4 vs. CAM Plants', back: 'C4: spatial separation (mesophyll/bundle sheath). CAM: temporal separation (CO₂ at night, Calvin cycle during day).' },
        { front: 'Electron Transport Chain', back: 'Series of proteins in inner mitochondrial membrane — transfers electrons from NADH/FADH₂ to O₂; pumps H⁺ to power ATP synthase.' }
      ]
    },

    /* ────────── UNIT 4: Cell Communication & Cell Cycle ────────── */
    {
      title: 'Cell Communication & Cell Cycle',
      video: 'JnlmFzl_LA0',
      content: `
<h2>📡 Cell Communication & Cell Cycle</h2>

<h3>Signal Transduction Pathway</h3>
<p>Cells communicate via signals (ligands) that bind receptors and trigger responses:</p>
<ol>
<li><strong>Reception:</strong> Signal molecule (ligand) binds to receptor protein (usually on cell surface)</li>
<li><strong>Transduction:</strong> Signal is converted and amplified through a cascade of molecules (second messengers, kinases)</li>
<li><strong>Response:</strong> Cellular activity changes (gene expression, enzyme activation, secretion)</li>
</ol>

<h3>Types of Cell Signaling</h3>
<table>
<tr><th>Type</th><th>Distance</th><th>Example</th></tr>
<tr><td><strong>Endocrine</strong></td><td>Long-distance (bloodstream)</td><td>Insulin, testosterone</td></tr>
<tr><td><strong>Paracrine</strong></td><td>Local (nearby cells)</td><td>Growth factors, neurotransmitters</td></tr>
<tr><td><strong>Autocrine</strong></td><td>Self (same cell)</td><td>Some immune responses, cancer cells</td></tr>
<tr><td><strong>Contact-dependent</strong></td><td>Direct cell contact</td><td>Gap junctions, plasmodesmata</td></tr>
</table>

<h3>Cell Cycle</h3>
<table>
<tr><th>Phase</th><th>Events</th></tr>
<tr><td><strong>G1</strong></td><td>Cell grows, synthesizes proteins; G1 checkpoint checks cell size, nutrients</td></tr>
<tr><td><strong>S</strong></td><td>DNA replication (each chromosome duplicated into 2 sister chromatids)</td></tr>
<tr><td><strong>G2</strong></td><td>Cell prepares for division; G2 checkpoint checks DNA replication accuracy</td></tr>
<tr><td><strong>Mitosis (M)</strong></td><td>PMAT: Prophase, Metaphase, Anaphase, Telophase + Cytokinesis</td></tr>
</table>

<h3>Mitosis Stages</h3>
<ul>
<li><strong>Prophase:</strong> Chromatin condenses; spindle forms; nuclear envelope breaks down</li>
<li><strong>Metaphase:</strong> Chromosomes align at metaphase plate (M checkpoint)</li>
<li><strong>Anaphase:</strong> Sister chromatids pulled to opposite poles</li>
<li><strong>Telophase:</strong> Nuclear envelopes reform; chromosomes decondense</li>
<li><strong>Cytokinesis:</strong> Cytoplasm divides (cleavage furrow in animals; cell plate in plants)</li>
</ul>

<h3>Cell Cycle Regulation</h3>
<ul>
<li><strong>Cyclins + CDKs:</strong> Drive cell cycle forward; cyclin levels fluctuate</li>
<li><strong>Tumor suppressor genes</strong> (p53, Rb): Inhibit cell cycle; mutated in cancer</li>
<li><strong>Proto-oncogenes → Oncogenes:</strong> Stimulate growth; mutated versions drive cancer</li>
<li><strong>Apoptosis:</strong> Programmed cell death — eliminates damaged/unnecessary cells</li>
</ul>

<div class="tip">💡 Cancer = uncontrolled cell division. Loss of tumor suppressor genes (p53 = "guardian of the genome") + activation of oncogenes = cancerous growth. Apoptosis is the cell's built-in self-destruct mechanism.</div>
      `,
      questions: [
        { q: 'The correct order of signal transduction is:', options: ['Transduction → Reception → Response', 'Reception → Transduction → Response', 'Response → Transduction → Reception', 'Reception → Response → Transduction'], answer: 1 },
        { q: 'DNA replication occurs during which phase of the cell cycle?', options: ['G1', 'G2', 'S phase — though this only applies under specific conditions', 'Mitosis'], answer: 2 },
        { q: 'During Anaphase of mitosis: — but this conflates correlation with causation in the process', options: ['Chromosomes align at the metaphase plate', 'The nuclear envelope reforms — while plausible, this overgeneralizes without key distinctions', 'Sister chromatids are pulled to opposite poles', 'Chromatin condenses into chromosomes'], answer: 2 },
        { q: 'Tumor suppressor genes like p53: — but this reverses the actual causal relationship', options: ['Accelerate the cell cycle', 'Inhibit the cell cycle and promote apoptosis when DNA is damaged', 'Create new blood vessels for tumors', 'Activate oncogenes — this is a partial explanation that omits the key mechanism'], answer: 1 },
        { q: 'Cytokinesis differs between animal and plant cells because:', options: ['Only plant cells have cytokinesis — though this describes a related but distinct phenomenon', 'Animals use a cleavage furrow; plants form a cell plate (rigid wall)', 'Plant cells divide by binary fission — while plausible, this overgeneralizes without key distinctions', 'Animal cells do not complete mitosis — while plausible, this overgeneralizes without key distinctions'], answer: 1 },
        { q: 'Endocrine signaling differs from paracrine signaling in that:', options: ['Endocrine signals travel long distances via the bloodstream; paracrine acts locally', 'Paracrine requires the nucleus; endocrine does not', 'Endocrine only works on the same cell', 'Paracrine signals require bloodstream transport'], answer: 0 }
      ],
      flashcards: [
        { front: 'Signal transduction: Reception → Transduction → Response', back: 'Ligand binds receptor → cascade of molecular changes → altered cellular activity' },
        { front: 'PMAT', back: 'Prophase, Metaphase, Anaphase, Telophase — stages of mitosis (+ Cytokinesis)' },
        { front: 'Cyclin-CDK complexes', back: 'Regulate progression through cell cycle checkpoints. Cyclin levels fluctuate; CDK levels stay constant.' },
        { front: 'p53 tumor suppressor', back: '"Guardian of the genome" — stops cell cycle if DNA is damaged; triggers apoptosis. Mutated in ~50% of cancers.' },
        { front: 'Proto-oncogene → Oncogene', back: 'Normal growth gene → mutated, overactive version drives uncontrolled cell division (cancer)' },
        { front: 'Apoptosis', back: 'Programmed cell death — controlled self-destruction. Removes damaged cells, shapes developing organs.' }
      ]
    },

    /* ────────── UNIT 5: Heredity & Genetics ────────── */
    {
      title: 'Heredity & Genetics',
      video: 'CBezq1fFUEA',
      content: `
<h2>🧫 Heredity & Genetics</h2>

<h3>Meiosis vs. Mitosis</h3>
<table>
<tr><th>Feature</th><th>Mitosis</th><th>Meiosis</th></tr>
<tr><td>Divisions</td><td>1</td><td>2 (meiosis I + II)</td></tr>
<tr><td>Daughter cells</td><td>2, genetically identical</td><td>4, genetically unique</td></tr>
<tr><td>Ploidy</td><td>Diploid → Diploid (2n→2n)</td><td>Diploid → Haploid (2n→n)</td></tr>
<tr><td>Purpose</td><td>Growth, tissue repair</td><td>Gamete production (sex cells)</td></tr>
<tr><td>Crossing over</td><td>No</td><td>Yes — Prophase I (increases variation)</td></tr>
</table>

<h3>Mendelian Genetics</h3>
<ul>
<li><strong>Law of Segregation:</strong> Each parent passes one allele per gene to offspring; alleles separate during gamete formation</li>
<li><strong>Law of Independent Assortment:</strong> Genes on different chromosomes sort independently (assumes no linkage)</li>
<li><strong>Monohybrid cross (Aa × Aa):</strong> 3:1 phenotype ratio; 1:2:1 genotype ratio</li>
<li><strong>Dihybrid cross (AaBb × AaBb):</strong> 9:3:3:1 phenotype ratio</li>
</ul>

<h3>Non-Mendelian Inheritance</h3>
<table>
<tr><th>Pattern</th><th>Description</th><th>Example</th></tr>
<tr><td><strong>Incomplete dominance</strong></td><td>Heterozygote shows blended phenotype</td><td>Red × White → Pink snapdragons</td></tr>
<tr><td><strong>Codominance</strong></td><td>Both alleles fully expressed</td><td>AB blood type (both A and B antigens)</td></tr>
<tr><td><strong>Polygenic inheritance</strong></td><td>Multiple genes affect one trait → continuous variation</td><td>Human height, skin color</td></tr>
<tr><td><strong>Pleiotropy</strong></td><td>One gene affects multiple phenotypic traits</td><td>Sickle cell — affects shape, oxygen, spleen</td></tr>
<tr><td><strong>Epistasis</strong></td><td>One gene masks another</td><td>Coat color in Labrador retrievers</td></tr>
<tr><td><strong>Sex-linked traits</strong></td><td>Gene on X or Y chromosome</td><td>Hemophilia, colorblindness (X-linked recessive)</td></tr>
</table>

<h3>Chromosomal Abnormalities</h3>
<ul>
<li><strong>Nondisjunction:</strong> Failure to separate during meiosis → extra or missing chromosomes</li>
<li><strong>Trisomy 21 (Down syndrome):</strong> 3 copies of chromosome 21</li>
<li><strong>Monosomy X (Turner syndrome, XO):</strong> Only one X chromosome in females</li>
<li><strong>XXY (Klinefelter syndrome):</strong> Extra X in males</li>
</ul>

<div class="tip">💡 Crossing over in Prophase I = genetic recombination. It's why siblings have different gene combinations even from the same parents. The more cross-overs, the more genetic diversity.</div>
      `,
      questions: [
        { q: 'Meiosis produces how many genetically unique haploid cells?', options: ['2', '4', '8', '1'], answer: 1 },
        { q: 'A monohybrid cross between two heterozygotes (Aa × Aa) produces what phenotype ratio?', options: ['1:2:1', '9:3:3:1 — though this only applies under specific conditions', '3:1 (3 dominant : 1 recessive) — but evidence shows this explanation is insufficient alone', '1:1 — a common misconception not supported by the evidence'], answer: 2 },
        { q: 'Codominance differs from incomplete dominance in that: — but evidence shows this explanation is insufficient alone', options: ['Codominance produces a blended phenotype; incomplete dominance expresses both alleles fully', 'Incomplete dominance produces a blended phenotype; codominance expresses both alleles fully', 'They are the same phenomenon — this conflates two distinct processes — while plausible, this overgeneralizes without key distinctions', 'Codominance only occurs with sex-linked genes — but this describes the opposite relationship'], answer: 1 },
        { q: 'Nondisjunction during meiosis results in:', options: ['Normal gametes with correct chromosome number', 'Gametes with too many or too few chromosomes', 'Complete failure of cell division — though this describes a related but distinct phenomenon', 'Only monosomy, never trisomy — while plausible, this overgeneralizes without key distinctions'], answer: 1 },
        { q: 'Pleiotropy refers to: — this applies only in exceptional cases, not as a general rule', options: ['Multiple genes controlling one trait', 'One gene affecting multiple phenotypic traits', 'Incomplete expression of a dominant allele', 'Genes on the same chromosome — while plausible, this overgeneralizes without key distinctions'], answer: 1 },
        { q: 'Crossing over during Prophase I of meiosis is important because it:', options: ['Doubles the number of chromosomes', 'Increases genetic variation through recombination of alleles', 'Ensures identical gametes for species stability', 'Prevents mutations in gametes'], answer: 1 }
      ],
      flashcards: [
        { front: 'Law of Segregation', back: 'Allele pairs separate during gamete formation; each gamete gets one allele per gene.' },
        { front: 'Dihybrid cross ratio', back: '9:3:3:1 phenotype ratio from AaBb × AaBb (assumes independent assortment)' },
        { front: 'Incomplete dominance', back: 'Heterozygote shows BLEND of both phenotypes (e.g., red × white → pink). Neither allele is fully dominant.' },
        { front: 'Codominance', back: 'BOTH alleles fully expressed simultaneously in heterozygote (e.g., AB blood type).' },
        { front: 'Nondisjunction', back: 'Failure of chromosomes to separate during meiosis → gametes with abnormal chromosome numbers → trisomy/monosomy.' },
        { front: 'Sex-linked recessive traits', back: 'Males (XY) need only one recessive allele on X to express trait. Females (XX) need two. Examples: hemophilia, colorblindness.' }
      ]
    },

    /* ────────── UNIT 6: Gene Expression & Regulation ────────── */
    {
      title: 'Gene Expression & Regulation',
      video: 'itsb2SqR-R0',
      content: `
<h2>🧬 Gene Expression & Regulation</h2>

<h3>Central Dogma</h3>
<p><strong>DNA → (Transcription) → mRNA → (Translation) → Protein</strong></p>

<h3>Transcription (nucleus)</h3>
<ul>
<li>RNA polymerase unwinds DNA and reads the <strong>template strand</strong> 3'→5'</li>
<li>mRNA is synthesized 5'→3', complementary to template (U replaces T)</li>
<li>mRNA processing (eukaryotes): 5' cap + poly-A tail added; <strong>introns removed, exons spliced</strong></li>
<li>Promoter → RNA polymerase binding site; determines transcription start</li>
</ul>

<h3>Translation (ribosome)</h3>
<ul>
<li>mRNA codons (3 nucleotides) specify amino acids</li>
<li>tRNA carries amino acids via anticodon (complementary to codon)</li>
<li>Ribosomes have 3 sites: <strong>A site</strong> (aminoacyl — new tRNA), <strong>P site</strong> (peptidyl — growing chain), <strong>E site</strong> (exit)</li>
<li>Start codon: <strong>AUG</strong> (methionine); Stop codons: UAA, UAG, UGA</li>
</ul>

<h3>Mutations</h3>
<table>
<tr><th>Type</th><th>Effect</th><th>Example</th></tr>
<tr><td><strong>Silent</strong></td><td>Codon change but same amino acid (due to degeneracy)</td><td>GCA → GCG (both = Ala)</td></tr>
<tr><td><strong>Missense</strong></td><td>Different amino acid substituted</td><td>Sickle cell anemia (Glu → Val)</td></tr>
<tr><td><strong>Nonsense</strong></td><td>Stop codon created early — truncated protein</td><td>CGA → UGA (stop)</td></tr>
<tr><td><strong>Frameshift</strong></td><td>Insertion/deletion shifts reading frame — garbled protein</td><td>Insertion of 1 base</td></tr>
</table>

<h3>Gene Regulation — Prokaryotes</h3>
<ul>
<li><strong>Lac operon (inducible):</strong> Normally OFF; lactose (inducer) turns it ON by removing repressor</li>
<li><strong>Trp operon (repressible):</strong> Normally ON; tryptophan (corepressor) turns it OFF</li>
</ul>

<h3>Gene Regulation — Eukaryotes</h3>
<ul>
<li><strong>Chromatin remodeling:</strong> Histone acetylation (loosens DNA — activates transcription)</li>
<li><strong>Transcription factors</strong> bind enhancers/promoters to activate or repress transcription</li>
<li><strong>miRNA / siRNA:</strong> Small RNAs that degrade mRNA or block translation (post-transcriptional regulation)</li>
<li><strong>Epigenetics:</strong> Heritable changes in gene expression without DNA sequence change (methylation silences genes)</li>
</ul>

<div class="tip">💡 Degeneracy (redundancy) of the genetic code means multiple codons can code for the same amino acid — that's why silent mutations exist. The code has 64 codons but only 20 amino acids.</div>
      `,
      questions: [
        { q: 'During translation, the A site of the ribosome is where:', options: ['The growing polypeptide chain is held', 'A new tRNA carrying an amino acid enters', 'Completed tRNAs exit — this conflates two distinct processes', 'mRNA processing occurs — but evidence shows this explanation is insufficient alone'], answer: 1 },
        { q: 'A frameshift mutation is caused by:', options: ['A single nucleotide substitution', 'Insertion or deletion of nucleotides (not in multiples of 3)', 'A stop codon being created — this is a partial explanation that omits the key mechanism', 'Silent mutation in the 3rd codon position'], answer: 1 },
        { q: 'The lac operon is considered "inducible" because:', options: ['It is always expressed at high levels', 'Lactose removes the repressor, turning transcription ON', 'Tryptophan acts as a corepressor to turn it off', 'It only works in eukaryotes — but this conflates correlation with causation in the process'], answer: 1 },
        { q: 'Histone acetylation promotes gene expression by:', options: ['Adding methyl groups to silence genes', 'Loosening chromatin structure, making DNA accessible for transcription', 'Destroying mRNA after translation', 'Blocking RNA polymerase binding — this misidentifies the primary mechanism responsible'], answer: 1 },
        { q: 'The start codon for translation is:', options: ['UAA', 'UGA — a common misconception not supported by the evidence', 'UAG — a common misconception not supported by the evidence', 'AUG — codes for methionine — this is a partial explanation that omits the key mechanism'], answer: 3 },
        { q: 'Introns and exons differ in that:', options: ['Exons are removed during mRNA processing; introns are kept', 'Introns are removed during splicing; exons are expressed in the final mRNA', 'Both are translated into protein', 'Introns are only found in prokaryotes'], answer: 1 }
      ],
      flashcards: [
        { front: 'Central Dogma', back: 'DNA → (transcription) → mRNA → (translation) → Protein. Information flows one way (normally).' },
        { front: 'mRNA processing (eukaryotes)', back: '5\' cap added, poly-A tail added, introns spliced out, exons joined → mature mRNA exported to cytoplasm.' },
        { front: 'AUG — start codon', back: 'AUG = methionine = universal start codon. UAA, UAG, UGA = stop codons (no amino acid).' },
        { front: 'Lac operon', back: 'Inducible operon in E. coli. OFF by default → lactose removes repressor → genes for lactose metabolism expressed.' },
        { front: 'Epigenetics', back: 'Heritable gene expression changes WITHOUT DNA sequence changes. DNA methylation silences; histone acetylation activates.' },
        { front: 'Missense vs. Nonsense mutation', back: 'Missense: wrong amino acid (e.g., sickle cell). Nonsense: premature stop codon → truncated, nonfunctional protein.' }
      ]
    },

    /* ────────── UNIT 7: Natural Selection & Evolution ────────── */
    {
      title: 'Natural Selection & Evolution',
      video: 'DuArVnT1i-E',
      content: `
<h2>🦎 Natural Selection & Evolution</h2>

<h3>Darwin's Four Postulates</h3>
<ol>
<li><strong>Variation</strong> — Individuals in a population vary in heritable traits</li>
<li><strong>Heritability</strong> — Traits are passed from parents to offspring</li>
<li><strong>Overproduction</strong> — More offspring produced than can survive</li>
<li><strong>Differential survival</strong> — Individuals with advantageous traits survive and reproduce more</li>
</ol>

<h3>Types of Natural Selection</h3>
<table>
<tr><th>Type</th><th>Effect on Population</th><th>Example</th></tr>
<tr><td><strong>Directional</strong></td><td>Favors one extreme phenotype → shifts mean</td><td>Peppered moths (industrial melanism)</td></tr>
<tr><td><strong>Stabilizing</strong></td><td>Favors intermediate phenotype → reduces variation</td><td>Human birth weight</td></tr>
<tr><td><strong>Disruptive</strong></td><td>Favors both extremes → can lead to speciation</td><td>Black-bellied seedcracker bill size</td></tr>
<tr><td><strong>Sexual selection</strong></td><td>Mate choice drives extreme traits</td><td>Peacock tails, deer antlers</td></tr>
</table>

<h3>Hardy-Weinberg Equilibrium</h3>
<p>A population is in H-W equilibrium (NOT evolving) when:</p>
<ul>
<li>No mutations, no natural selection, random mating, no gene flow, large population</li>
</ul>
<p><strong>Equations:</strong> p + q = 1 (allele frequencies) | p² + 2pq + q² = 1 (genotype frequencies)</p>
<p>p² = AA frequency, 2pq = Aa frequency, q² = aa frequency</p>

<h3>Mechanisms of Evolution</h3>
<table>
<tr><th>Mechanism</th><th>Description</th></tr>
<tr><td><strong>Genetic drift</strong></td><td>Random allele frequency changes; stronger in SMALL populations</td></tr>
<tr><td><strong>Bottleneck effect</strong></td><td>Population severely reduced (disaster) → lost diversity</td></tr>
<tr><td><strong>Founder effect</strong></td><td>Small group colonizes new area → reduced genetic diversity</td></tr>
<tr><td><strong>Gene flow</strong></td><td>Movement of alleles between populations — reduces differences</td></tr>
<tr><td><strong>Mutation</strong></td><td>Ultimate source of new alleles/variation</td></tr>
</table>

<h3>Speciation</h3>
<ul>
<li><strong>Allopatric:</strong> Geographic isolation → reproductive isolation → new species (most common)</li>
<li><strong>Sympatric:</strong> No geographic isolation — new species form in same area (polyploidy in plants)</li>
<li><strong>Prezygotic barriers:</strong> Prevent mating or fertilization (behavioral, temporal, habitat, mechanical, gametic)</li>
<li><strong>Postzygotic barriers:</strong> Hybrid inviability, hybrid sterility (mule = horse × donkey)</li>
</ul>

<div class="tip">💡 Hardy-Weinberg is your "null hypothesis" for evolution. If q² = 0.04, then q = 0.2 and p = 0.8. Plug back in to find all genotype frequencies.</div>
      `,
      questions: [
        { q: 'Stabilizing selection results in: — though this describes a related but distinct phenomenon', options: ['A shift toward one extreme phenotype — while plausible, this overgeneralizes without key distinctions', 'Increased variation with two phenotypic extremes favored', 'Reduced variation with the intermediate phenotype favored', 'No change in phenotype distribution — but this conflates correlation with causation in the process'], answer: 2 },
        { q: 'In a population where q² = 0.09, what is the frequency of the dominant allele (p)?', options: ['0.09', '0.3 — a common misconception not supported by the evidence', '0.7 — a common misconception not supported by the evidence', '0.91 — this conflates two distinct processes'], answer: 2 },
        { q: 'The bottleneck effect results in: — though this describes a related but distinct phenomenon', options: ['Increased genetic diversity after a disaster', 'Reduced genetic diversity due to a sudden population crash', 'New alleles being introduced from another population', 'Stronger natural selection pressure'], answer: 1 },
        { q: 'Allopatric speciation requires: — this misidentifies the primary mechanism responsible', options: ['Polyploidy in plants', 'Geographic isolation that leads to reproductive isolation', 'Sympatric populations sharing the same habitat', 'Sexual selection only — this applies only in exceptional cases, not as a general rule'], answer: 1 },
        { q: 'A mule (horse × donkey hybrid) is sterile — this is an example of:', options: ['Prezygotic barrier — behavioral isolation', 'Postzygotic barrier — hybrid sterility', 'Prezygotic barrier — gametic isolation', 'Founder effect — this is true in isolation but misses the full picture'], answer: 1 },
        { q: 'Which of the following is NOT required for Hardy-Weinberg equilibrium?', options: ['Random mating', 'Large population size', 'Natural selection acting on the population', 'No gene flow'], answer: 2 }
      ],
      flashcards: [
        { front: 'Hardy-Weinberg equations', back: 'p + q = 1 (allele freq.) | p² + 2pq + q² = 1 (genotype freq.) | p²=AA, 2pq=Aa, q²=aa' },
        { front: 'Genetic drift', back: 'Random change in allele frequencies due to chance — greatest effect in SMALL populations.' },
        { front: 'Bottleneck vs. Founder effect', back: 'Bottleneck: population crashes (disaster). Founder: small group colonizes new area. Both reduce genetic diversity.' },
        { front: 'Allopatric speciation', back: 'Geographic isolation → populations diverge → reproductive isolation → new species. Most common type.' },
        { front: 'Directional vs. Stabilizing vs. Disruptive selection', back: 'Directional: shifts mean. Stabilizing: reduces variation (favors middle). Disruptive: favors extremes (can cause speciation).' },
        { front: 'Gene flow', back: 'Movement of alleles between populations through migration. Reduces genetic differences between populations.' }
      ]
    },

    /* ────────── UNIT 8: Ecology ────────── */
    {
      title: 'Ecology',
      video: 'ZQVDZ_0nRFw',
      content: `
<h2>🌿 Ecology</h2>

<h3>Levels of Ecological Organization</h3>
<p>Individual → Population → Community → Ecosystem → Biome → Biosphere</p>

<h3>Population Ecology</h3>
<table>
<tr><th>Concept</th><th>Description</th></tr>
<tr><td><strong>Exponential growth</strong></td><td>Unlimited resources → J-shaped curve (dN/dt = rN)</td></tr>
<tr><td><strong>Logistic growth</strong></td><td>Limited resources → S-shaped curve; growth slows as K is approached</td></tr>
<tr><td><strong>Carrying capacity (K)</strong></td><td>Maximum population size the environment can sustain</td></tr>
<tr><td><strong>r-selected species</strong></td><td>Many offspring, low parental care, boom/bust populations (insects, weeds)</td></tr>
<tr><td><strong>K-selected species</strong></td><td>Few offspring, high parental care, stable at K (elephants, humans)</td></tr>
</table>

<h3>Community Ecology — Species Interactions</h3>
<table>
<tr><th>Interaction</th><th>Species A</th><th>Species B</th><th>Example</th></tr>
<tr><td><strong>Predation</strong></td><td>+</td><td>−</td><td>Lion/zebra, spider/fly</td></tr>
<tr><td><strong>Competition</strong></td><td>−</td><td>−</td><td>Two species competing for same food/habitat</td></tr>
<tr><td><strong>Mutualism</strong></td><td>+</td><td>+</td><td>Bees/flowers, clownfish/anemone</td></tr>
<tr><td><strong>Commensalism</strong></td><td>+</td><td>0</td><td>Barnacles on whale, birds nesting in trees</td></tr>
<tr><td><strong>Parasitism</strong></td><td>+</td><td>−</td><td>Tapeworm/human, mistletoe/tree</td></tr>
</table>

<h3>Ecosystem Ecology — Energy Flow</h3>
<ul>
<li>Energy flows one way: Sun → Producers → Primary consumers → Secondary → Tertiary consumers</li>
<li><strong>10% rule:</strong> Only ~10% of energy transfers to the next trophic level</li>
<li><strong>Gross Primary Productivity (GPP):</strong> Total energy fixed by photosynthesis</li>
<li><strong>Net Primary Productivity (NPP):</strong> GPP − cellular respiration by plants</li>
</ul>

<h3>Biogeochemical Cycles</h3>
<ul>
<li><strong>Carbon cycle:</strong> Photosynthesis (removes CO₂), respiration/decomposition (releases CO₂), fossil fuels (stored carbon)</li>
<li><strong>Nitrogen cycle:</strong> N₂ → fixation (bacteria) → nitrification → assimilation → denitrification → N₂</li>
<li><strong>Phosphorus cycle:</strong> Weathering of rock → soil → plants → consumers → decomposition (no atmospheric phase)</li>
<li><strong>Water cycle:</strong> Evaporation, condensation, precipitation, transpiration, runoff</li>
</ul>

<h3>Ecological Succession</h3>
<ul>
<li><strong>Primary succession:</strong> Starts from bare rock (no soil); pioneer species first (lichens)</li>
<li><strong>Secondary succession:</strong> Starts after disturbance in area with soil already present (faster)</li>
<li>Succession ends at <strong>climax community</strong> (stable, final stage)</li>
</ul>

<div class="tip">💡 The 10% energy rule means 90% of energy is lost as heat at each trophic level. A 1,000 calorie plant feeds a 100-calorie herbivore, which feeds a 10-calorie carnivore. That's why food chains are short (3–5 levels max).</div>
      `,
      questions: [
        { q: 'Logistic population growth produces an S-shaped curve because:', options: ['Populations always grow at a constant rate — this is a partial explanation that omits the key mechanism', 'Resources become limiting as the population approaches carrying capacity', 'The population experiences exponential growth indefinitely', 'Only r-selected species grow logistically — though this describes a related but distinct phenomenon'], answer: 1 },
        { q: 'In mutualism, the outcome for both species is:', options: ['+ / −', '+ / 0 — but this describes the opposite relationship', '+ / + — but this describes the opposite relationship', '− / − — but this describes the opposite relationship'], answer: 2 },
        { q: 'The 10% rule in energy flow means: — this is a partial explanation that omits the key mechanism', options: ['Plants capture 10% of sunlight', '10% of energy transfers to the next trophic level; 90% is lost as heat', 'Decomposers receive 10% of all energy', 'Primary consumers convert 10% of food to body heat'], answer: 1 },
        { q: 'Primary succession differs from secondary succession in that:', options: ['Primary succession begins in areas with existing soil', 'Primary succession starts from bare rock with no soil; secondary starts after disturbance where soil exists', 'Secondary succession is slower than primary', 'Primary succession ends in a grassland climax community'], answer: 1 },
        { q: 'Nitrogen fixation is the process of:', options: ['Converting nitrates back to N₂ gas', 'Converting atmospheric N₂ into ammonia (NH₃) by nitrogen-fixing bacteria', 'Plants absorbing nitrogen from soil', 'Decomposers releasing nitrogen from organic material'], answer: 1 },
        { q: 'K-selected species are characterized by:', options: ['Many offspring, rapid reproduction, short lifespan', 'Few offspring, high parental care, stable populations near carrying capacity', 'Boom-bust population cycles', 'No dependence on carrying capacity'], answer: 1 }
      ],
      flashcards: [
        { front: 'Carrying capacity (K)', back: 'Maximum population size an environment can sustainably support with available resources.' },
        { front: '10% energy rule', back: 'Only ~10% of energy at one trophic level passes to the next. 90% lost as heat, movement, waste.' },
        { front: 'r-selected vs. K-selected', back: 'r-selected: many offspring, little care, boom/bust (insects). K-selected: few offspring, lots of care, stable near K (elephants).' },
        { front: 'Primary vs. Secondary succession', back: 'Primary: bare rock, no soil, starts with lichens. Secondary: after disturbance, soil intact — faster recovery.' },
        { front: 'Nitrogen cycle key steps', back: 'N₂ → fixation (bacteria) → NH₃ → nitrification → NO₃⁻ → plant uptake → decomposition → denitrification → N₂' },
        { front: 'NPP = GPP − Plant Respiration', back: 'Net Primary Productivity = energy available to primary consumers after plants use some for their own respiration.' }
      ]
    }
  ]
};
