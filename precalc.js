/* ═══════════════════════════════════════════════════
   Pre-Calculus — StudyLab Data File
   6 Units · ~45 Quiz Questions
   ═══════════════════════════════════════════════════ */

const PRECALC_DATA = {
  icon: '📐',
  title: 'Pre-Calculus',
  shortTitle: 'PreCalc',
  description: 'Functions, polynomials, trigonometry, and more — build the foundation for calculus.',
  units: [

/* ── UNIT 1: Functions & Their Properties ────────── */
{
  title: 'Functions & Their Properties',
  content: `
<h3>What Is a Function?</h3>
<p>A <span class="key-term">function</span> is a relation where each input (x) maps to exactly one output (y). We write <strong>f(x)</strong> to denote the output of function f at input x.</p>
<div class="formula">f(x) = 2x + 3 → input 4 → f(4) = 2(4) + 3 = 11</div>

<h3>Domain & Range</h3>
<p>The <span class="key-term">domain</span> is the set of all valid inputs. The <span class="key-term">range</span> is the set of all possible outputs.</p>
<p>Common domain restrictions:</p>
<ul>
  <li><strong>Fractions:</strong> Denominator ≠ 0</li>
  <li><strong>Square roots:</strong> Expression under radical ≥ 0</li>
  <li><strong>Logarithms:</strong> Argument > 0</li>
</ul>
<div class="tip">💡 To find the domain, ask: "What x-values would break this function?" Then exclude those values.</div>

<h3>Function Notation & Evaluation</h3>
<p>Given f(x) = x² − 3x + 2:</p>
<ul>
  <li>f(0) = 0 − 0 + 2 = <strong>2</strong></li>
  <li>f(−1) = 1 + 3 + 2 = <strong>6</strong></li>
  <li>f(a+1) = (a+1)² − 3(a+1) + 2 = a² + 2a + 1 − 3a − 3 + 2 = <strong>a² − a</strong></li>
</ul>

<h3>Types of Functions</h3>
<table>
  <tr><th>Type</th><th>Form</th><th>Example</th></tr>
  <tr><td>Linear</td><td>f(x) = mx + b</td><td>f(x) = 3x − 1</td></tr>
  <tr><td>Quadratic</td><td>f(x) = ax² + bx + c</td><td>f(x) = x² − 4x + 3</td></tr>
  <tr><td>Absolute Value</td><td>f(x) = |ax + b|</td><td>f(x) = |x − 2|</td></tr>
  <tr><td>Piecewise</td><td>Different rules for different intervals</td><td>f(x) = { x² if x < 0; 2x if x ≥ 0 }</td></tr>
</table>

<h3>Transformations</h3>
<p>Starting from a parent function y = f(x):</p>
<ul>
  <li><strong>f(x) + k</strong> → shift UP by k</li>
  <li><strong>f(x) − k</strong> → shift DOWN by k</li>
  <li><strong>f(x − h)</strong> → shift RIGHT by h</li>
  <li><strong>f(x + h)</strong> → shift LEFT by h</li>
  <li><strong>−f(x)</strong> → reflect over x-axis</li>
  <li><strong>f(−x)</strong> → reflect over y-axis</li>
  <li><strong>a·f(x)</strong> where |a| > 1 → vertical stretch; 0 < |a| < 1 → vertical compression</li>
</ul>
<div class="warning">⚠️ Horizontal shifts are counterintuitive: f(x − 3) shifts RIGHT, not left. Think of it as "what input gives the same output as x did before?"</div>

<h3>Even & Odd Functions</h3>
<ul>
  <li><strong>Even:</strong> f(−x) = f(x) — symmetric about the y-axis (e.g., x², |x|, cos x)</li>
  <li><strong>Odd:</strong> f(−x) = −f(x) — symmetric about the origin (e.g., x³, sin x)</li>
</ul>
`,
  questions: [
    {
      q: 'Given f(x) = 3x² − 2x + 1, what is f(−1)?',
      options: ['2', '6', '4', '0'],
      answer: 1,
      explanation: 'f(−1) = 3(−1)² − 2(−1) + 1 = 3(1) + 2 + 1 = 6.'
    },
    {
      q: 'What is the domain of f(x) = √(x − 5)?',
      options: ['x > 5', 'x ≥ 5', 'x ≤ 5', 'All real numbers'],
      answer: 1,
      explanation: 'The expression under the square root must be ≥ 0: x − 5 ≥ 0, so x ≥ 5.'
    },
    {
      q: 'The graph of f(x) + 4 is the graph of f(x) shifted:',
      options: ['Right 4 units', 'Left 4 units', 'Up 4 units', 'Down 4 units'],
      answer: 2,
      explanation: 'Adding a constant outside the function shifts the graph vertically upward.'
    },
    {
      q: 'Which function is even?',
      options: ['f(x) = x³', 'f(x) = x² + 1', 'f(x) = x', 'f(x) = sin(x)'],
      answer: 1,
      explanation: 'f(−x) = (−x)² + 1 = x² + 1 = f(x). Since f(−x) = f(x), the function is even.'
    },
    {
      q: 'The graph of f(x − 2) is shifted:',
      options: ['Left 2', 'Right 2', 'Up 2', 'Down 2'],
      answer: 1,
      explanation: 'f(x − h) shifts the graph RIGHT by h units. So f(x − 2) shifts right by 2.'
    },
    {
      q: 'A function maps each input to:',
      options: ['Multiple outputs', 'Exactly one output', 'At least two outputs', 'No outputs'],
      answer: 1,
      explanation: 'By definition, a function assigns exactly one output to each input in its domain.'
    },
    {
      q: 'The domain of f(x) = 1/(x − 3) is:',
      options: ['All real numbers', 'x ≠ 0', 'x ≠ 3', 'x > 3'],
      answer: 2,
      explanation: 'The denominator cannot equal zero: x − 3 ≠ 0, so x ≠ 3.'
    }
  ]
},

/* ── UNIT 2: Polynomial & Rational Functions ─────── */
{
  title: 'Polynomial & Rational Functions',
  content: `
<h3>Polynomials</h3>
<p>A <span class="key-term">polynomial</span> is an expression of the form:</p>
<div class="formula">f(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + … + a₁x + a₀</div>
<p>The <strong>degree</strong> is the highest exponent. The <strong>leading coefficient</strong> is aₙ.</p>

<h3>End Behavior</h3>
<p>As x → ±∞, the leading term dominates:</p>
<table>
  <tr><th>Degree</th><th>Leading Coeff</th><th>Left End</th><th>Right End</th></tr>
  <tr><td>Even</td><td>Positive</td><td>↑ (up)</td><td>↑ (up)</td></tr>
  <tr><td>Even</td><td>Negative</td><td>↓ (down)</td><td>↓ (down)</td></tr>
  <tr><td>Odd</td><td>Positive</td><td>↓ (down)</td><td>↑ (up)</td></tr>
  <tr><td>Odd</td><td>Negative</td><td>↑ (up)</td><td>↓ (down)</td></tr>
</table>

<h3>Zeros (Roots) of Polynomials</h3>
<p>A <span class="key-term">zero</span> of f(x) is a value where f(x) = 0. Key facts:</p>
<ul>
  <li>A polynomial of degree n has <strong>at most n</strong> real zeros</li>
  <li><strong>Multiplicity:</strong> If (x − r)ᵏ is a factor, r has multiplicity k</li>
  <li>Odd multiplicity → graph <em>crosses</em> the x-axis at r</li>
  <li>Even multiplicity → graph <em>touches</em> the x-axis at r and bounces back</li>
</ul>
<div class="tip">💡 To find zeros: factor the polynomial, set each factor = 0, and solve.</div>

<h3>The Remainder & Factor Theorems</h3>
<ul>
  <li><strong>Remainder Theorem:</strong> When f(x) is divided by (x − c), the remainder is f(c)</li>
  <li><strong>Factor Theorem:</strong> (x − c) is a factor of f(x) if and only if f(c) = 0</li>
</ul>

<h3>Rational Functions</h3>
<p>A <span class="key-term">rational function</span> is a ratio of two polynomials: f(x) = P(x)/Q(x).</p>
<ul>
  <li><strong>Vertical Asymptotes:</strong> Where Q(x) = 0 (denominator is zero and doesn't cancel)</li>
  <li><strong>Horizontal Asymptote:</strong>
    <ul>
      <li>Degree of P < Degree of Q → y = 0</li>
      <li>Degree of P = Degree of Q → y = leading coeff of P / leading coeff of Q</li>
      <li>Degree of P > Degree of Q → no horizontal asymptote (check for slant asymptote)</li>
    </ul>
  </li>
  <li><strong>Holes:</strong> Where a factor cancels in both numerator and denominator</li>
</ul>
<div class="formula">f(x) = (x−2)(x+1) / (x−2)(x−3) → Hole at x = 2, vertical asymptote at x = 3</div>
`,
  questions: [
    {
      q: 'What is the degree and leading coefficient of f(x) = −3x⁴ + 2x² − x + 7?',
      options: ['Degree 4, leading coeff −3', 'Degree 2, leading coeff 2', 'Degree 4, leading coeff 3', 'Degree 7, leading coeff −3'],
      answer: 0,
      explanation: 'The highest power is x⁴ (degree 4) and its coefficient is −3.'
    },
    {
      q: 'If f(x) = x³ − 2x² − 5x + 6 and f(1) = 0, then:',
      options: ['x = 1 is not related to the polynomial', '(x − 1) is a factor of f(x)', '(x + 1) is a factor of f(x)', 'The polynomial has no real roots'],
      answer: 1,
      explanation: 'By the Factor Theorem, if f(c) = 0, then (x − c) is a factor. Since f(1) = 0, (x − 1) is a factor.'
    },
    {
      q: 'A polynomial with odd degree and positive leading coefficient has what end behavior?',
      options: ['Both ends up', 'Both ends down', 'Left down, right up', 'Left up, right down'],
      answer: 2,
      explanation: 'Odd degree + positive leading coefficient: as x → −∞, f(x) → −∞ (down); as x → +∞, f(x) → +∞ (up).'
    },
    {
      q: 'If (x − 3)² is a factor of f(x), the graph at x = 3:',
      options: ['Crosses the x-axis', 'Touches the x-axis and bounces back', 'Has a vertical asymptote', 'Is undefined'],
      answer: 1,
      explanation: 'Even multiplicity (2) means the graph touches the x-axis at that zero but does not cross it.'
    },
    {
      q: 'For f(x) = (2x + 1)/(x − 4), the vertical asymptote is at:',
      options: ['x = −1/2', 'x = 4', 'x = −4', 'y = 2'],
      answer: 1,
      explanation: 'Vertical asymptotes occur where the denominator equals zero: x − 4 = 0, so x = 4.'
    },
    {
      q: 'For f(x) = (3x² + 1)/(x² − 5), the horizontal asymptote is:',
      options: ['y = 0', 'y = 3', 'y = −5', 'No horizontal asymptote'],
      answer: 1,
      explanation: 'When degrees are equal, the horizontal asymptote is the ratio of leading coefficients: 3/1 = 3, so y = 3.'
    },
    {
      q: 'A "hole" in a rational function occurs when:',
      options: ['The denominator is always zero', 'A factor cancels in both numerator and denominator', 'The degree of the numerator exceeds the denominator', 'The function is undefined everywhere'],
      answer: 1,
      explanation: 'A hole occurs at a value where both numerator and denominator are zero (the factor cancels), leaving a removable discontinuity.'
    }
  ]
},

/* ── UNIT 3: Exponential & Logarithmic Functions ── */
{
  title: 'Exponential & Logarithmic Functions',
  content: `
<h3>Exponential Functions</h3>
<p>An <span class="key-term">exponential function</span> has the form:</p>
<div class="formula">f(x) = a · bˣ   where b > 0, b ≠ 1</div>
<ul>
  <li>If <strong>b > 1</strong> → exponential <em>growth</em></li>
  <li>If <strong>0 < b < 1</strong> → exponential <em>decay</em></li>
  <li>The y-intercept is always <strong>a</strong> (since b⁰ = 1)</li>
  <li>Horizontal asymptote: <strong>y = 0</strong> (the x-axis)</li>
</ul>

<h3>The Number e</h3>
<p><span class="key-term">e ≈ 2.71828</span> is the base of the natural exponential function. It arises naturally in compound interest, population growth, and calculus.</p>
<div class="formula">Continuous compound interest: A = Pe^(rt)<br>where P = principal, r = rate, t = time</div>

<h3>Logarithmic Functions</h3>
<p>A <span class="key-term">logarithm</span> is the inverse of an exponential:</p>
<div class="formula">y = log_b(x)  means  b^y = x</div>
<p>Special logarithms:</p>
<ul>
  <li><strong>log(x)</strong> = log₁₀(x) — common logarithm</li>
  <li><strong>ln(x)</strong> = logₑ(x) — natural logarithm</li>
</ul>

<h3>Properties of Logarithms</h3>
<table>
  <tr><th>Property</th><th>Formula</th></tr>
  <tr><td>Product Rule</td><td>log_b(MN) = log_b(M) + log_b(N)</td></tr>
  <tr><td>Quotient Rule</td><td>log_b(M/N) = log_b(M) − log_b(N)</td></tr>
  <tr><td>Power Rule</td><td>log_b(M^p) = p · log_b(M)</td></tr>
  <tr><td>Change of Base</td><td>log_b(x) = ln(x) / ln(b)</td></tr>
</table>
<div class="tip">💡 "Logs turn multiplication into addition, division into subtraction, and exponents into multiplication."</div>

<h3>Solving Exponential & Log Equations</h3>
<p><strong>Exponential equations:</strong> Take the log of both sides.</p>
<div class="formula">3ˣ = 81 → x·ln(3) = ln(81) → x = ln(81)/ln(3) = 4</div>
<p><strong>Log equations:</strong> Rewrite in exponential form.</p>
<div class="formula">log₂(x) = 5 → 2⁵ = x → x = 32</div>
<div class="warning">⚠️ Always check solutions in log equations — you can't take the log of a negative number or zero.</div>
`,
  questions: [
    {
      q: 'If f(x) = 5 · 2ˣ, what is f(3)?',
      options: ['30', '40', '15', '80'],
      answer: 1,
      explanation: 'f(3) = 5 · 2³ = 5 · 8 = 40.'
    },
    {
      q: 'log₃(81) equals:',
      options: ['3', '4', '27', '9'],
      answer: 1,
      explanation: 'We need 3 raised to what power equals 81: 3⁴ = 81, so log₃(81) = 4.'
    },
    {
      q: 'Which property states log_b(MN) = log_b(M) + log_b(N)?',
      options: ['Power Rule', 'Quotient Rule', 'Product Rule', 'Change of Base'],
      answer: 2,
      explanation: 'The Product Rule for logarithms says the log of a product equals the sum of the logs.'
    },
    {
      q: 'The natural logarithm ln(x) has base:',
      options: ['10', '2', 'e ≈ 2.718', 'π'],
      answer: 2,
      explanation: 'The natural logarithm uses base e, where e ≈ 2.71828. It is written ln(x) = logₑ(x).'
    },
    {
      q: 'If an exponential function has base b where 0 < b < 1, the function represents:',
      options: ['Growth', 'Decay', 'Linear increase', 'No change'],
      answer: 1,
      explanation: 'When 0 < b < 1, each successive output is smaller than the previous one — exponential decay.'
    },
    {
      q: 'Solve: 2ˣ = 16',
      options: ['x = 3', 'x = 4', 'x = 8', 'x = 2'],
      answer: 1,
      explanation: '2⁴ = 16, so x = 4. You can also solve by taking log₂ of both sides: log₂(16) = 4.'
    },
    {
      q: 'The domain of f(x) = ln(x − 3) is:',
      options: ['x > 0', 'x > 3', 'x ≥ 3', 'All real numbers'],
      answer: 1,
      explanation: 'The argument of a logarithm must be positive: x − 3 > 0, so x > 3.'
    },
    {
      q: 'Using the Power Rule, log(x⁵) simplifies to:',
      options: ['5 + log(x)', 'x · log(5)', '5 · log(x)', 'log(5x)'],
      answer: 2,
      explanation: 'The Power Rule: log(x⁵) = 5 · log(x). The exponent comes out front as a multiplier.'
    }
  ]
},

/* ── UNIT 4: Trigonometry Fundamentals ───────────── */
{
  title: 'Trigonometry Fundamentals',
  content: `
<h3>Angles & Radian Measure</h3>
<p>Angles can be measured in degrees or <span class="key-term">radians</span>.</p>
<div class="formula">π radians = 180°<br>To convert: radians = degrees × (π/180)  |  degrees = radians × (180/π)</div>
<p>Common conversions:</p>
<table>
  <tr><th>Degrees</th><td>0°</td><td>30°</td><td>45°</td><td>60°</td><td>90°</td><td>180°</td><td>360°</td></tr>
  <tr><th>Radians</th><td>0</td><td>π/6</td><td>π/4</td><td>π/3</td><td>π/2</td><td>π</td><td>2π</td></tr>
</table>

<h3>The Unit Circle</h3>
<p>The <span class="key-term">unit circle</span> is a circle of radius 1 centered at the origin. A point on the unit circle at angle θ has coordinates <strong>(cos θ, sin θ)</strong>.</p>
<p>Key values to memorize:</p>
<table>
  <tr><th>θ</th><th>sin θ</th><th>cos θ</th><th>tan θ</th></tr>
  <tr><td>0 (0°)</td><td>0</td><td>1</td><td>0</td></tr>
  <tr><td>π/6 (30°)</td><td>1/2</td><td>√3/2</td><td>√3/3</td></tr>
  <tr><td>π/4 (45°)</td><td>√2/2</td><td>√2/2</td><td>1</td></tr>
  <tr><td>π/3 (60°)</td><td>√3/2</td><td>1/2</td><td>√3</td></tr>
  <tr><td>π/2 (90°)</td><td>1</td><td>0</td><td>undefined</td></tr>
</table>
<div class="tip">💡 Mnemonic for sin values at 0°, 30°, 45°, 60°, 90°: √0/2, √1/2, √2/2, √3/2, √4/2 — which simplifies to 0, 1/2, √2/2, √3/2, 1.</div>

<h3>The Six Trig Functions</h3>
<table>
  <tr><th>Function</th><th>Definition</th><th>Reciprocal</th></tr>
  <tr><td>sin θ = opp/hyp</td><td>y-coordinate</td><td>csc θ = 1/sin θ</td></tr>
  <tr><td>cos θ = adj/hyp</td><td>x-coordinate</td><td>sec θ = 1/cos θ</td></tr>
  <tr><td>tan θ = opp/adj = sin/cos</td><td>y/x</td><td>cot θ = 1/tan θ = cos/sin</td></tr>
</table>
<p>Remember <strong>SOH-CAH-TOA</strong>: Sine = Opposite/Hypotenuse, Cosine = Adjacent/Hypotenuse, Tangent = Opposite/Adjacent.</p>

<h3>Signs by Quadrant</h3>
<p>Use the mnemonic <strong>"All Students Take Calculus"</strong>:</p>
<ul>
  <li><strong>Quadrant I:</strong> All positive</li>
  <li><strong>Quadrant II:</strong> Sin positive (and csc)</li>
  <li><strong>Quadrant III:</strong> Tan positive (and cot)</li>
  <li><strong>Quadrant IV:</strong> Cos positive (and sec)</li>
</ul>

<h3>Graphs of Sin & Cos</h3>
<p>For y = A sin(Bx − C) + D or y = A cos(Bx − C) + D:</p>
<ul>
  <li><strong>Amplitude = |A|</strong> (height from center to peak)</li>
  <li><strong>Period = 2π/|B|</strong> (length of one full cycle)</li>
  <li><strong>Phase shift = C/B</strong> (horizontal shift)</li>
  <li><strong>Vertical shift = D</strong></li>
</ul>
`,
  questions: [
    {
      q: 'Convert 120° to radians:',
      options: ['π/3', '2π/3', '3π/4', '2π/5'],
      answer: 1,
      explanation: '120° × (π/180°) = 120π/180 = 2π/3.'
    },
    {
      q: 'What is sin(π/6)?',
      options: ['√3/2', '1/2', '√2/2', '0'],
      answer: 1,
      explanation: 'π/6 = 30°. sin(30°) = 1/2. Remember: sin values go 0, 1/2, √2/2, √3/2, 1.'
    },
    {
      q: 'On the unit circle, the coordinates at angle θ are:',
      options: ['(sin θ, cos θ)', '(cos θ, sin θ)', '(tan θ, sin θ)', '(1, θ)'],
      answer: 1,
      explanation: 'A point on the unit circle at angle θ from the positive x-axis is (cos θ, sin θ).'
    },
    {
      q: 'In Quadrant II, which trig function is positive?',
      options: ['Cosine', 'Tangent', 'Sine', 'Secant'],
      answer: 2,
      explanation: 'In QII, only sine (and its reciprocal, cosecant) is positive. Remember: "All Students Take Calculus."'
    },
    {
      q: 'The period of y = sin(2x) is:',
      options: ['2π', 'π', 'π/2', '4π'],
      answer: 1,
      explanation: 'Period = 2π/|B| = 2π/2 = π. The factor of 2 compresses the graph horizontally.'
    },
    {
      q: 'tan θ is undefined when:',
      options: ['sin θ = 0', 'cos θ = 0', 'Both sin and cos are 0', 'tan θ is always defined'],
      answer: 1,
      explanation: 'Since tan θ = sin θ / cos θ, it is undefined when cos θ = 0 (at π/2, 3π/2, etc.).'
    },
    {
      q: 'The amplitude of y = 3cos(x) − 1 is:',
      options: ['1', '3', '−1', '4'],
      answer: 1,
      explanation: 'Amplitude = |A| = |3| = 3. The −1 is a vertical shift, not part of the amplitude.'
    }
  ]
},

/* ── UNIT 5: Trig Identities & Equations ─────────── */
{
  title: 'Trig Identities & Equations',
  content: `
<h3>Fundamental Identities</h3>
<p>These identities are true for all valid values of θ:</p>
<div class="formula">
<strong>Pythagorean Identities:</strong><br>
sin²θ + cos²θ = 1<br>
1 + tan²θ = sec²θ<br>
1 + cot²θ = csc²θ
</div>
<div class="formula">
<strong>Reciprocal Identities:</strong><br>
csc θ = 1/sin θ  |  sec θ = 1/cos θ  |  cot θ = 1/tan θ
</div>
<div class="formula">
<strong>Quotient Identities:</strong><br>
tan θ = sin θ / cos θ  |  cot θ = cos θ / sin θ
</div>

<h3>Sum & Difference Formulas</h3>
<table>
  <tr><th>Formula</th></tr>
  <tr><td>sin(A ± B) = sin A cos B ± cos A sin B</td></tr>
  <tr><td>cos(A ± B) = cos A cos B ∓ sin A sin B</td></tr>
  <tr><td>tan(A ± B) = (tan A ± tan B) / (1 ∓ tan A tan B)</td></tr>
</table>
<div class="warning">⚠️ Note the sign flip in the cosine formula: cos(A − B) uses + between the terms, and cos(A + B) uses −.</div>

<h3>Double-Angle Formulas</h3>
<div class="formula">
sin(2θ) = 2 sin θ cos θ<br>
cos(2θ) = cos²θ − sin²θ = 2cos²θ − 1 = 1 − 2sin²θ<br>
tan(2θ) = 2tan θ / (1 − tan²θ)
</div>

<h3>Verifying Identities</h3>
<p>Strategy: Work with ONE side of the equation (usually the more complex side) and transform it to match the other.</p>
<p>Useful techniques:</p>
<ul>
  <li>Convert everything to sin and cos</li>
  <li>Factor when possible</li>
  <li>Multiply by a conjugate (e.g., 1 + sin θ)</li>
  <li>Use Pythagorean identities to substitute</li>
</ul>

<h3>Solving Trig Equations</h3>
<p>Steps:</p>
<ol>
  <li>Isolate the trig function</li>
  <li>Find the reference angle</li>
  <li>Determine all solutions in [0, 2π) using the unit circle</li>
  <li>Add the general solution: + 2nπ (for sin, cos) or + nπ (for tan)</li>
</ol>
<div class="formula">
Example: 2sin θ − 1 = 0<br>
sin θ = 1/2<br>
θ = π/6 or θ = 5π/6 (in [0, 2π))<br>
General: θ = π/6 + 2nπ or θ = 5π/6 + 2nπ
</div>
`,
  questions: [
    {
      q: 'Which is a Pythagorean identity?',
      options: ['sin θ + cos θ = 1', 'sin²θ + cos²θ = 1', 'sin²θ − cos²θ = 1', 'tan²θ + cot²θ = 1'],
      answer: 1,
      explanation: 'The fundamental Pythagorean identity: sin²θ + cos²θ = 1. This comes directly from the unit circle (x² + y² = 1).'
    },
    {
      q: 'sin(2θ) equals:',
      options: ['2 sin θ', 'sin²θ + cos²θ', '2 sin θ cos θ', 'sin θ cos θ'],
      answer: 2,
      explanation: 'The double-angle formula for sine: sin(2θ) = 2 sin θ cos θ.'
    },
    {
      q: 'cos(A − B) equals:',
      options: ['cos A cos B − sin A sin B', 'cos A cos B + sin A sin B', 'sin A cos B − cos A sin B', 'cos A sin B + sin A cos B'],
      answer: 1,
      explanation: 'cos(A − B) = cos A cos B + sin A sin B. Note the + sign (opposite of what you might expect).'
    },
    {
      q: 'To verify a trig identity, you should:',
      options: ['Cross-multiply both sides', 'Work with one side and transform it to match the other', 'Substitute θ = 0 and check', 'Add the same thing to both sides'],
      answer: 1,
      explanation: 'The correct approach is to work with one side (usually the more complex side) and algebraically transform it until it matches the other side.'
    },
    {
      q: 'Solve sin θ = √3/2 in [0, 2π). The solutions are:',
      options: ['π/6 and 5π/6', 'π/3 and 2π/3', 'π/4 and 3π/4', 'π/3 and 5π/3'],
      answer: 1,
      explanation: 'sin θ = √3/2 → reference angle = π/3. Sin is positive in QI and QII: θ = π/3 and θ = π − π/3 = 2π/3.'
    },
    {
      q: 'Which form of cos(2θ) is most useful if you need to eliminate sin²θ?',
      options: ['cos²θ − sin²θ', '2cos²θ − 1', '1 − 2sin²θ', 'None of these'],
      answer: 1,
      explanation: 'cos(2θ) = 2cos²θ − 1 contains only cos² (no sin²), making it useful when you want to eliminate sin²θ using sin²θ = 1 − cos²θ.'
    },
    {
      q: '1 + tan²θ equals:',
      options: ['csc²θ', 'sec²θ', 'cot²θ', 'sin²θ + cos²θ'],
      answer: 1,
      explanation: 'This is the second Pythagorean identity: 1 + tan²θ = sec²θ. Derived by dividing sin²θ + cos²θ = 1 by cos²θ.'
    }
  ]
},

/* ── UNIT 6: Sequences, Series & Limits ──────────── */
{
  title: 'Sequences, Series & Limits',
  content: `
<h3>Sequences</h3>
<p>A <span class="key-term">sequence</span> is an ordered list of numbers following a pattern. Each number is called a <strong>term</strong>.</p>

<h3>Arithmetic Sequences</h3>
<p>Each term differs from the previous by a constant <strong>common difference (d)</strong>.</p>
<div class="formula">
aₙ = a₁ + (n − 1)d<br>
Example: 3, 7, 11, 15, 19, … → a₁ = 3, d = 4<br>
a₁₀ = 3 + (10−1)(4) = 3 + 36 = 39
</div>
<p><strong>Sum of n terms (Arithmetic Series):</strong></p>
<div class="formula">Sₙ = n/2 · (a₁ + aₙ)  or  Sₙ = n/2 · (2a₁ + (n−1)d)</div>

<h3>Geometric Sequences</h3>
<p>Each term is multiplied by a constant <strong>common ratio (r)</strong>.</p>
<div class="formula">
aₙ = a₁ · r^(n−1)<br>
Example: 2, 6, 18, 54, … → a₁ = 2, r = 3<br>
a₆ = 2 · 3⁵ = 2 · 243 = 486
</div>
<p><strong>Sum of n terms (Geometric Series):</strong></p>
<div class="formula">Sₙ = a₁ · (1 − rⁿ)/(1 − r)   (when r ≠ 1)</div>
<p><strong>Infinite Geometric Series</strong> (converges when |r| < 1):</p>
<div class="formula">S = a₁ / (1 − r)</div>
<div class="tip">💡 An infinite geometric series only has a finite sum when |r| < 1. If |r| ≥ 1, the series diverges (sum is infinite).</div>

<h3>Sigma (Σ) Notation</h3>
<p>Sigma notation is shorthand for writing sums:</p>
<div class="formula">∑(i=1 to n) aᵢ = a₁ + a₂ + a₃ + … + aₙ</div>
<p>Useful formulas:</p>
<ul>
  <li>∑(i=1 to n) i = n(n+1)/2</li>
  <li>∑(i=1 to n) i² = n(n+1)(2n+1)/6</li>
  <li>∑(i=1 to n) c = cn  (constant times n)</li>
</ul>

<h3>Introduction to Limits</h3>
<p>A <span class="key-term">limit</span> describes what value a function approaches as x gets close to some number.</p>
<div class="formula">lim(x→c) f(x) = L means "as x approaches c, f(x) approaches L"</div>
<p>Key limit rules:</p>
<ul>
  <li><strong>Direct substitution:</strong> If f(c) is defined and continuous, lim(x→c) f(x) = f(c)</li>
  <li><strong>Factoring:</strong> If you get 0/0, try factoring and canceling</li>
  <li><strong>Limits at infinity:</strong> For rational functions, divide every term by the highest power of x in the denominator</li>
</ul>
<div class="formula">
Example: lim(x→2) (x²−4)/(x−2) = lim(x→2) (x+2)(x−2)/(x−2) = lim(x→2) (x+2) = 4
</div>
<div class="warning">⚠️ A limit can exist even if the function is undefined at that point. Limits describe behavior near a point, not at it.</div>
`,
  questions: [
    {
      q: 'In the arithmetic sequence 5, 9, 13, 17, …, the common difference is:',
      options: ['5', '4', '3', '9'],
      answer: 1,
      explanation: 'd = 9 − 5 = 4. Each term is 4 more than the previous.'
    },
    {
      q: 'Find the 8th term of the geometric sequence 3, 6, 12, 24, …',
      options: ['192', '384', '768', '96'],
      answer: 1,
      explanation: 'a₁ = 3, r = 2. a₈ = 3 · 2⁷ = 3 · 128 = 384.'
    },
    {
      q: 'The sum of the first 10 terms of the arithmetic sequence 2, 5, 8, 11, … is:',
      options: ['145', '155', '165', '135'],
      answer: 1,
      explanation: 'a₁ = 2, d = 3, a₁₀ = 2 + 9(3) = 29. S₁₀ = 10/2 · (2 + 29) = 5 · 31 = 155.'
    },
    {
      q: 'An infinite geometric series converges (has a finite sum) when:',
      options: ['|r| > 1', '|r| = 1', '|r| < 1', 'r = 0'],
      answer: 2,
      explanation: 'An infinite geometric series converges only when the absolute value of the common ratio is less than 1.'
    },
    {
      q: 'The sum of the infinite geometric series 10 + 5 + 2.5 + 1.25 + … is:',
      options: ['15', '20', '25', '∞'],
      answer: 1,
      explanation: 'a₁ = 10, r = 1/2. S = a₁/(1−r) = 10/(1−0.5) = 10/0.5 = 20.'
    },
    {
      q: 'What is lim(x→3) (x² − 9)/(x − 3)?',
      options: ['0', '3', '6', 'Undefined'],
      answer: 2,
      explanation: 'Factor: (x² − 9)/(x − 3) = (x+3)(x−3)/(x−3) = x + 3. As x → 3: 3 + 3 = 6.'
    },
    {
      q: '∑(i=1 to 5) 2i equals:',
      options: ['10', '20', '30', '15'],
      answer: 2,
      explanation: '∑(i=1 to 5) 2i = 2(1) + 2(2) + 2(3) + 2(4) + 2(5) = 2 + 4 + 6 + 8 + 10 = 30.'
    },
    {
      q: 'If direct substitution into a limit gives 0/0, you should:',
      options: ['Say the limit is 0', 'Say the limit doesn\'t exist', 'Try factoring and canceling', 'Say the limit is undefined'],
      answer: 2,
      explanation: '0/0 is an indeterminate form — it doesn\'t tell you the answer. Try factoring, rationalizing, or other algebraic techniques to resolve it.'
    }
  ]
}

  ] // end units
}; // end PRECALC_DATA
