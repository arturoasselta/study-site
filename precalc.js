const PRECALC_DATA = {
  title: 'Pre-Calculus',
  shortTitle: 'PreCalc',
  icon: '📐',
  courseName: 'Pre-Calculus 2nd Trimester Honors Exam Review',
  units: [
    /* ────────── UNIT 1: Factoring ────────── */
    {
      video: 'u2CFHYJWS60', // Prof Leonard: Using Factoring to Solve Quadratics (PreCalc Algebra 18)
      title: 'Factoring Techniques',
      content: `
<h2>🧮 Unit 1: Factoring Techniques</h2>

<h3>Factoring Out the Greatest Common Factor (GCF)</h3>
<p><strong>Concept:</strong> Find the largest expression that divides all terms and factor it out.</p>
<p><strong>Examples:</strong></p>
<ul>
<li>6x² + 9x = 3x(2x + 3)</li>
<li>4a³b² + 8a²b³ + 12ab = 4ab(a²b + 2ab² + 3)</li>
</ul>
<p><strong>Process:</strong> Find GCF of coefficients AND variables, then divide each term by the GCF.</p>

<h3>Factoring Difference of Squares</h3>
<p><strong>Pattern:</strong> a² - b² = (a + b)(a - b)</p>
<p><strong>Key:</strong> Recognize perfect squares and subtract them.</p>
<ul>
<li>x² - 9 = (x + 3)(x - 3)</li>
<li>4a² - 25b² = (2a + 5b)(2a - 5b)</li>
<li>x⁴ - 16 = (x²)² - 4² = (x² + 4)(x² - 4) = (x² + 4)(x + 2)(x - 2)</li>
</ul>

<h3>Factoring Trinomials (ax² + bx + c)</h3>
<p><strong>When a = 1:</strong> Find two numbers that multiply to c and add to b.</p>
<ul>
<li>x² + 5x + 6 = (x + 2)(x + 3)  [2 × 3 = 6, 2 + 3 = 5]</li>
<li>x² - 7x + 12 = (x - 3)(x - 4)  [(-3) × (-4) = 12, (-3) + (-4) = -7]</li>
</ul>

<p><strong>When a ≠ 1:</strong> Use AC method or trial-and-error.</p>
<ul>
<li>2x² + 7x + 3: a·c = 6. Find factors of 6 that add to 7 → (1, 6). Rewrite: 2x² + x + 6x + 3 = x(2x + 1) + 3(2x + 1) = (x + 3)(2x + 1)</li>
<li>3x² - 10x + 8 = (3x - 4)(x - 2)</li>
</ul>

<h3>Factoring Sum and Difference of Cubes</h3>
<p><strong>Sum of Cubes:</strong> a³ + b³ = (a + b)(a² - ab + b²)</p>
<ul>
<li>x³ + 8 = x³ + 2³ = (x + 2)(x² - 2x + 4)</li>
</ul>

<p><strong>Difference of Cubes:</strong> a³ - b³ = (a - b)(a² + ab + b²)</p>
<ul>
<li>x³ - 27 = x³ - 3³ = (x - 3)(x² + 3x + 9)</li>
<li>8a³ - 1 = (2a)³ - 1³ = (2a - 1)(4a² + 2a + 1)</li>
</ul>

<h3>Factoring by Grouping</h3>
<p><strong>Process:</strong> Group terms in pairs, factor each pair, then factor out the common binomial.</p>
<ul>
<li>x³ + 2x² + 3x + 6 = x²(x + 2) + 3(x + 2) = (x² + 3)(x + 2)</li>
<li>2xy + 6x + 5y + 15 = 2x(y + 3) + 5(y + 3) = (2x + 5)(y + 3)</li>
</ul>

<div class="tip">💡 Always check if you can factor out a GCF first, before trying other methods. Sometimes you need to combine techniques (e.g., difference of squares followed by trinomial factoring).</div>
      `,
      questions: [
        { q: 'Factor 12x³ + 18x²:', options: ['6x²(2x + 3)', '6x(2x² + 3x)', '12x²(x + 1.5)', 'x²(12x + 18)'], answer: 0, explanation: 'The correct answer is: 6x²(2x + 3).' },
        { q: 'Factor x² - 16:', options: ['(x - 4)²', '(x - 4)(x + 4)', '(x + 4)²', 'x(x - 16)'], answer: 1, explanation: 'The correct answer is: (x - 4)(x + 4).' },
        { q: 'Factor x² + 8x + 15:', options: ['(x + 3)(x + 5)', '(x + 2)(x + 7.5)', '(x + 4)(x + 4)', '(x + 1)(x + 15)'], answer: 0, explanation: 'The correct answer is: (x + 3)(x + 5).' },
        { q: 'Factor 4x² - 9:', options: ['(2x - 3)²', '(2x + 3)²', '(2x + 3)(2x - 3)', '4(x - 2.25)'], answer: 2, explanation: 'The correct answer is: (2x + 3)(2x - 3).' },
        { q: 'Factor x³ + 27:', options: ['(x + 3)(x² - 3x + 9)', '(x + 3)(x² + 3x + 9)', '(x + 3)³', '(x + 27)(x² - 1)'], answer: 0, explanation: 'The correct answer is: (x + 3)(x² - 3x + 9).' },
        { q: 'Factor 3x² + 11x + 6:', options: ['(3x + 1)(x + 6)', '(3x + 2)(x + 3)', '(x + 2)(3x + 3)', '(3x + 6)(x + 1)'], answer: 1, explanation: 'The correct answer is: (3x + 2)(x + 3).' },
        { q: 'Factor x³ - 8:', options: ['(x - 2)(x² + 2x + 4)', '(x - 2)(x² - 2x + 4)', '(x - 2)³', '(x - 8)(x² + 1)'], answer: 0, explanation: 'The correct answer is: (x - 2)(x² + 2x + 4).' }
      ]
    },

    /* ────────── UNIT 2: Multiplying Polynomials & Quadratic Formula ────────── */
    {
      video: 'v-pnhWbHmQ8', // Prof Leonard: Creating Polynomials from Real Zeros (PreCalc Algebra 30)
      title: 'Multiplying Polynomials & Quadratic Formula',
      content: `
<h2>📐 Unit 2: Multiplying Polynomials & Quadratic Formula</h2>

<h3>Multiplying Polynomials</h3>
<p><strong>FOIL Method (Binomials):</strong> First, Outer, Inner, Last</p>
<ul>
<li>(2x + 3)(x + 5) = 2x² + 10x + 3x + 15 = 2x² + 13x + 15</li>
<li>(a - 2)(a + 7) = a² + 7a - 2a - 14 = a² + 5a - 14</li>
</ul>

<p><strong>Box Method (or Distributive Property):</strong> Works for all polynomials.</p>
<ul>
<li>(x + 3)(x² + 2x + 1) = x(x² + 2x + 1) + 3(x² + 2x + 1) = x³ + 2x² + x + 3x² + 6x + 3 = x³ + 5x² + 7x + 3</li>
</ul>

<p><strong>Special Products:</strong></p>
<ul>
<li>(a + b)² = a² + 2ab + b²</li>
<li>(a - b)² = a² - 2ab + b²</li>
<li>(a + b)(a - b) = a² - b²</li>
</ul>

<h3>The Quadratic Formula</h3>
<p><strong>For ax² + bx + c = 0:</strong></p>
<p style="text-align: center; font-size: 1.2em;"><strong>x = [-b ± √(b² - 4ac)] / (2a)</strong></p>

<p><strong>The Discriminant:</strong> b² - 4ac</p>
<ul>
<li>If b² - 4ac > 0: Two distinct real solutions</li>
<li>If b² - 4ac = 0: One repeated real solution (double root)</li>
<li>If b² - 4ac < 0: No real solutions (two complex solutions)</li>
</ul>

<p><strong>Example:</strong> Solve 2x² + 5x - 3 = 0</p>
<ul>
<li>a = 2, b = 5, c = -3</li>
<li>Discriminant: 5² - 4(2)(-3) = 25 + 24 = 49 (perfect square!)</li>
<li>x = [-5 ± √49] / (2·2) = [-5 ± 7] / 4</li>
<li>x = 2/4 = 1/2 or x = -12/4 = -3</li>
</ul>

<h3>Applications</h3>
<p><strong>Solving Quadratic Equations:</strong> Use the quadratic formula when factoring is difficult or impossible.</p>
<p><strong>Finding Zeros of Parabolas:</strong> Set the function equal to zero; solve using the quadratic formula.</p>

<div class="tip">💡 Always simplify your answer. If the discriminant is negative, your solutions will involve imaginary numbers (complex numbers with i = √(-1)).</div>
      `,
      questions: [
        { q: '(3x + 2)(x - 5) =', options: ['3x² - 13x - 10', '3x² - 15x + 2x - 10', '3x² + 17x - 10', '3x - 13x - 10'], answer: 0, explanation: 'The correct answer is: 3x² - 13x - 10.' },
        { q: '(x + 4)² =', options: ['x² + 16', 'x² + 8x + 16', 'x² + 4x + 16', 'x² + 4x + 4'], answer: 1, explanation: 'The correct answer is: x² + 8x + 16.' },
        { q: 'In 2x² - 8x + 3 = 0, the discriminant is:', options: ['40', '64', '28', '-4'], answer: 2, explanation: 'The correct answer is: 28.' },
        { q: 'For x² + 2x - 15 = 0, the quadratic formula gives:', options: ['x = 3 or x = -5', 'x = -1 or x = -15', 'x = 1 or x = -3', 'x = 5 or x = -3'], answer: 0, explanation: 'The correct answer is: x = 3 or x = -5.' },
        { q: 'If the discriminant is negative, the solutions are:', options: ['Real', 'Complex/Imaginary', 'No solutions exist', 'All real numbers'], answer: 1, explanation: 'The correct answer is: Complex/Imaginary.' }
      ]
    },

    /* ────────── UNIT 3: Complex & Imaginary Numbers ────────── */
    {
      video: 'SP-YJe7Vldo', // Khan Academy: Introduction to Complex Numbers
      title: 'Complex & Imaginary Numbers',
      content: `
<h2>🔢 Unit 3: Complex & Imaginary Numbers</h2>

<h3>Imaginary Unit (i)</h3>
<p><strong>Definition:</strong> i² = -1, so i = √(-1)</p>
<p><strong>Powers of i:</strong></p>
<ul>
<li>i¹ = i</li>
<li>i² = -1</li>
<li>i³ = i² · i = -1 · i = -i</li>
<li>i⁴ = i² · i² = (-1)(-1) = 1</li>
<li>Pattern repeats every 4 powers</li>
</ul>

<h3>Complex Numbers</h3>
<p><strong>Form:</strong> a + bi (where a is real, b is real, and i is imaginary)</p>
<ul>
<li>3 + 2i (real part = 3, imaginary part = 2)</li>
<li>-5i (real part = 0, imaginary part = -5)</li>
<li>7 (real part = 7, imaginary part = 0; purely real)</li>
</ul>

<h3>Operations with Complex Numbers</h3>

<p><strong>Addition:</strong> (a + bi) + (c + di) = (a + c) + (b + d)i</p>
<ul>
<li>(3 + 2i) + (1 + 4i) = 4 + 6i</li>
</ul>

<p><strong>Subtraction:</strong> (a + bi) - (c + di) = (a - c) + (b - d)i</p>
<ul>
<li>(5 + 3i) - (2 + i) = 3 + 2i</li>
</ul>

<p><strong>Multiplication:</strong> Use FOIL; remember i² = -1</p>
<ul>
<li>(2 + 3i)(1 + i) = 2 + 2i + 3i + 3i² = 2 + 5i + 3(-1) = -1 + 5i</li>
</ul>

<p><strong>Division:</strong> Multiply numerator and denominator by the complex conjugate</p>
<ul>
<li>Conjugate of (a + bi) is (a - bi)</li>
<li>(3 + 2i) / (1 - i) = (3 + 2i)(1 + i) / [(1 - i)(1 + i)] = (3 + 3i + 2i + 2i²) / (1 - i²) = (1 + 5i) / 2 = 1/2 + 5i/2</li>
</ul>

<h3>Solving Equations with Complex Solutions</h3>
<p><strong>Example:</strong> x² + 4 = 0</p>
<ul>
<li>x² = -4</li>
<li>x = ±√(-4) = ±2i</li>
</ul>

<div class="tip">💡 Complex numbers extend the real number system. Every polynomial equation has a solution in the complex numbers (Fundamental Theorem of Algebra).</div>
      `,
      questions: [
        { q: 'i² equals:', options: ['1', '-1', 'i', 'Undefined'], answer: 1, explanation: 'The correct answer is: -1.' },
        { q: 'i⁵ equals:', options: ['1', '-1', 'i', '-i'], answer: 2, explanation: 'The correct answer is: i.' },
        { q: '(2 + 3i) + (1 - i) =', options: ['3 + 4i', '3 + 2i', '1 + 2i', '2 + 2i'], answer: 1, explanation: 'The correct answer is: 3 + 2i.' },
        { q: '(1 + i)(1 - i) =', options: ['0', '1 - i²', '2', '-2i'], answer: 2, explanation: 'The correct answer is: 2.' },
        { q: 'The complex conjugate of 5 - 2i is:', options: ['5 + 2i', '-5 - 2i', '2 - 5i', '5i - 2'], answer: 0, explanation: 'The correct answer is: 5 + 2i.' },
        { q: 'Solve x² + 9 = 0:', options: ['x = 3i', 'x = ±3i', 'x = 9i', 'No solution'], answer: 1, explanation: 'The correct answer is: x = ±3i.' }
      ]
    },

    /* ────────── UNIT 4: Evaluating Functions (Domain, Range, Discontinuity) ────────── */
    {
      video: 'DrEXTC6mIO8', // Functions - Domain, Range & Vertical Line Test
      title: 'Evaluating Functions: Domain, Range & Discontinuity',
      content: `
<h2>📊 Unit 4: Evaluating Functions</h2>

<h3>Domain & Range</h3>

<p><strong>Domain:</strong> All possible input (x) values for which the function is defined.</p>
<ul>
<li><strong>Polynomial:</strong> Domain = all real numbers (ℝ)</li>
<li><strong>Rational function (fraction):</strong> Denominator ≠ 0</li>
<li><strong>Square root:</strong> Radicand (inside) ≥ 0</li>
<li><strong>Logarithm:</strong> Argument > 0</li>
</ul>

<p><strong>Examples:</strong></p>
<ul>
<li>f(x) = 1/(x - 2): Domain is all real x except x = 2. In interval notation: (-∞, 2) ∪ (2, ∞)</li>
<li>f(x) = √(x - 3): Domain is x ≥ 3. In interval notation: [3, ∞)</li>
<li>f(x) = log(x): Domain is x > 0. In interval notation: (0, ∞)</li>
</ul>

<p><strong>Range:</strong> All possible output (y) values that the function produces.</p>
<ul>
<li><strong>Horizontal line test:</strong> If any horizontal line crosses the graph more than once, the function is not one-to-one (but the function still has a range)</li>
<li>For f(x) = x², range is [0, ∞) (never negative)</li>
<li>For f(x) = |x|, range is [0, ∞)</li>
<li>For exponential f(x) = 2^x, range is (0, ∞)</li>
</ul>

<h3>Discontinuity</h3>

<p><strong>Types of Discontinuity:</strong></p>

<p><strong>1. Vertical Asymptote (VA):</strong> Where the denominator = 0 and the numerator ≠ 0</p>
<ul>
<li>f(x) = 1/(x - 3) has a VA at x = 3</li>
<li>As x → 3⁺, f(x) → +∞; as x → 3⁻, f(x) → -∞</li>
</ul>

<p><strong>2. Horizontal Asymptote (HA):</strong> The line y = k that the function approaches as x → ±∞</p>
<ul>
<li>For rational functions: compare degrees of numerator and denominator</li>
<li>If deg(numerator) < deg(denominator): HA is y = 0</li>
<li>If deg(numerator) = deg(denominator): HA is y = (leading coeff of num) / (leading coeff of denom)</li>
<li>If deg(numerator) > deg(denominator): No HA (slant asymptote instead)</li>
<li>Example: f(x) = (3x² + 2)/(x² + 1) has HA at y = 3</li>
</ul>

<p><strong>3. Point Discontinuity (Hole):</strong> Where both numerator and denominator = 0 (removable discontinuity)</p>
<ul>
<li>f(x) = (x² - 1)/(x - 1) = (x - 1)(x + 1)/(x - 1) = (x + 1) for x ≠ 1</li>
<li>Hole at (1, 2)</li>
</ul>

<h3>Function Behavior</h3>

<p><strong>Increasing/Decreasing:</strong></p>
<ul>
<li>Increasing on interval I if f(x₁) < f(x₂) whenever x₁ < x₂ in I</li>
<li>Decreasing on interval I if f(x₁) > f(x₂) whenever x₁ < x₂ in I</li>
</ul>

<p><strong>Bounded/Unbounded:</strong></p>
<ul>
<li>Bounded above: There exists M such that f(x) ≤ M for all x in the domain</li>
<li>Bounded below: There exists m such that f(x) ≥ m for all x in the domain</li>
<li>Unbounded: Not bounded above or below</li>
</ul>

<p><strong>Symmetry:</strong></p>
<ul>
<li><strong>Even function:</strong> f(-x) = f(x) (symmetric about the y-axis). Example: f(x) = x² or f(x) = cos(x)</li>
<li><strong>Odd function:</strong> f(-x) = -f(x) (symmetric about the origin). Example: f(x) = x³ or f(x) = sin(x)</li>
</ul>

<div class="tip">💡 Always check the domain first before analyzing the range and behavior of a function. Discontinuities restrict the domain and affect the function's properties.</div>
      `,
      questions: [
        { q: 'The domain of f(x) = 1/(x² - 4) is:', options: ['All real numbers', 'All x except 2 and -2', 'x > 2', 'x ≥ 0'], answer: 1, explanation: 'The correct answer is: All x except 2 and -2.' },
        { q: 'The domain of f(x) = √(x + 5) is:', options: ['x ≥ 5', 'x ≥ -5', 'All real numbers', 'x > 0'], answer: 1, explanation: 'The correct answer is: x ≥ -5.' },
        { q: 'The vertical asymptote of f(x) = 3/(x - 1) is:', options: ['x = 0', 'x = 1', 'y = 0', 'y = 3'], answer: 1, explanation: 'The correct answer is: x = 1.' },
        { q: 'The horizontal asymptote of f(x) = (2x² + 1)/(x² + 3) is:', options: ['y = 0', 'y = 1', 'y = 2', 'No HA'], answer: 2, explanation: 'The correct answer is: y = 2.' },
        { q: 'f(x) = x³ is:', options: ['Even', 'Odd', 'Neither', 'Both'], answer: 1, explanation: 'The correct answer is: Odd.' },
        { q: 'The range of f(x) = x² is:', options: ['All real numbers', '[0, ∞)', '(-∞, 0]', '(-∞, ∞)'], answer: 1 }
      ]
    },

    /* ────────── UNIT 5: Basic Functions & End Behavior ────────── */
    {
      video: '7JZ0IfCQ488', // What Is a Function? | Precalculus
      title: 'Basic Functions & End Behavior',
      content: `
<h2>📈 Unit 5: Basic Functions & End Behavior</h2>

<h3>Common Basic Functions</h3>

<p><strong>1. Linear Function:</strong> f(x) = mx + b</p>
<ul>
<li>Graph: Straight line</li>
<li>Slope: m; y-intercept: b</li>
<li>Domain & Range: All real numbers</li>
</ul>

<p><strong>2. Quadratic Function:</strong> f(x) = a(x - h)² + k (vertex form)</p>
<ul>
<li>Graph: Parabola</li>
<li>Vertex: (h, k)</li>
<li>Opens upward if a > 0; downward if a < 0</li>
<li>Domain: All real numbers</li>
<li>Range: [k, ∞) if a > 0; (-∞, k] if a < 0</li>
</ul>

<p><strong>3. Cubic Function:</strong> f(x) = ax³ + ... (odd degree)</p>
<ul>
<li>Graph: S-shaped curve</li>
<li>Domain & Range: All real numbers</li>
</ul>

<p><strong>4. Absolute Value:</strong> f(x) = |x|</p>
<ul>
<li>Graph: V-shaped</li>
<li>Domain: All real numbers</li>
<li>Range: [0, ∞)</li>
</ul>

<p><strong>5. Square Root:</strong> f(x) = √x</p>
<ul>
<li>Graph: Half-parabola opening right</li>
<li>Domain: [0, ∞)</li>
<li>Range: [0, ∞)</li>
</ul>

<p><strong>6. Exponential:</strong> f(x) = a^x (a > 0, a ≠ 1)</p>
<ul>
<li>Domain: All real numbers</li>
<li>Range: (0, ∞)</li>
<li>Horizontal asymptote: y = 0</li>
<li>If a > 1: increasing; if 0 < a < 1: decreasing</li>
</ul>

<p><strong>7. Logarithmic:</strong> f(x) = log_a(x) (a > 0, a ≠ 1)</p>
<ul>
<li>Inverse of exponential</li>
<li>Domain: (0, ∞)</li>
<li>Range: All real numbers</li>
<li>Vertical asymptote: x = 0</li>
</ul>

<h3>End Behavior</h3>

<p><strong>For polynomial functions:</strong> f(x) = a_n x^n + a_{n-1} x^{n-1} + ... + a_1 x + a_0</p>

<p><strong>The leading term a_n x^n determines end behavior:</strong></p>

<table>
<tr><th>Degree & Leading Coeff</th><th>As x → +∞</th><th>As x → -∞</th></tr>
<tr><td>Even degree, a_n > 0</td><td>f(x) → +∞</td><td>f(x) → +∞</td></tr>
<tr><td>Even degree, a_n < 0</td><td>f(x) → -∞</td><td>f(x) → -∞</td></tr>
<tr><td>Odd degree, a_n > 0</td><td>f(x) → +∞</td><td>f(x) → -∞</td></tr>
<tr><td>Odd degree, a_n < 0</td><td>f(x) → -∞</td><td>f(x) → +∞</td></tr>
</table>

<p><strong>Examples:</strong></p>
<ul>
<li>f(x) = 3x⁴ + 2x² - 5: Even degree, positive leading coeff → ends go up on both sides</li>
<li>f(x) = -2x³ + x: Odd degree, negative leading coeff → up on left, down on right</li>
</ul>

<h3>Transformations of Functions</h3>

<p><strong>If g(x) = f(x - h) + k:</strong></p>
<ul>
<li>Shift right h units (if h > 0) or left |h| units (if h < 0)</li>
<li>Shift up k units (if k > 0) or down |k| units (if k < 0)</li>
</ul>

<p><strong>If g(x) = -f(x):</strong> Reflect over the x-axis</p>
<p><strong>If g(x) = f(-x):</strong> Reflect over the y-axis</p>
<p><strong>If g(x) = c·f(x):</strong> Vertical stretch/compress (if |c| > 1: stretch; if 0 < |c| < 1: compress)</p>

<div class="tip">💡 Understanding end behavior helps you sketch polynomials and understand their long-term behavior without graphing every point.</div>
      `,
      questions: [
        { q: 'The vertex of f(x) = 2(x - 3)² + 5 is:', options: ['(3, 5)', '(-3, 5)', '(3, -5)', '(2, 5)'], answer: 0, explanation: 'The correct answer is: (3, 5).' },
        { q: 'The domain of f(x) = √(x - 2) is:', options: ['x ≥ 2', 'x > 2', 'x ≤ 2', 'All real numbers'], answer: 0, explanation: 'The correct answer is: x ≥ 2.' },
        { q: 'As x → ∞, the function f(x) = -3x⁴ + 2x²:', options: ['→ +∞', '→ -∞', '→ 0', '→ oscillates'], answer: 1, explanation: 'The correct answer is: → -∞.' },
        { q: 'The horizontal asymptote of f(x) = 2^x is:', options: ['y = 0', 'y = 2', 'y = 1', 'No HA'], answer: 0, explanation: 'The correct answer is: y = 0.' },
        { q: 'The range of exponential f(x) = 3^x is:', options: ['All real numbers', '(0, ∞)', '[0, ∞)', '(-∞, 0)'], answer: 1, explanation: 'The correct answer is: (0, ∞).' },
        { q: 'If g(x) = f(x - 2) + 3, the function is shifted:', options: ['Left 2, up 3', 'Right 2, up 3', 'Right 2, down 3', 'Left 2, down 3'], answer: 1, explanation: 'The correct answer is: Right 2, up 3.' }
      ]
    },

    /* ────────── UNIT 6: Piecewise Functions & Inverses ────────── */
    {
      video: 'xuhk2kSVwe0', // Prof Leonard: Finding ALL Solutions of Polynomials (PreCalc Algebra 37)
      title: 'Piecewise Functions & Finding Inverses',
      content: `
<h2>🔀 Unit 6: Piecewise Functions & Inverses of Rational Functions</h2>

<h3>Piecewise Functions</h3>

<p><strong>Definition:</strong> A function defined by different expressions for different parts of its domain.</p>

<p><strong>Example:</strong></p>
<pre>
f(x) = { 2x + 1,    if x < 0
       { x²,       if 0 ≤ x ≤ 3
       { 5,        if x > 3
</pre>

<p><strong>To evaluate a piecewise function:</strong> Determine which condition the input satisfies, then use the corresponding expression.</p>

<ul>
<li>f(-2) = 2(-2) + 1 = -3 (uses first piece: -2 < 0)</li>
<li>f(2) = 2² = 4 (uses second piece: 0 ≤ 2 ≤ 3)</li>
<li>f(5) = 5 (uses third piece: 5 > 3)</li>
</ul>

<p><strong>Common piecewise function: Absolute value</strong></p>
<p>|x| = { -x,  if x < 0; x, if x ≥ 0 }</p>

<h3>Inverse Functions</h3>

<p><strong>Definition:</strong> If f(a) = b, then f⁻¹(b) = a. The inverse "undoes" what the function does.</p>

<p><strong>Conditions for an inverse to exist:</strong></p>
<ul>
<li>The function must be one-to-one (injective): Each output comes from exactly one input</li>
<li>Graphically: Passes the horizontal line test (no horizontal line intersects the graph more than once)</li>
</ul>

<p><strong>Finding the inverse algebraically:</strong></p>
<ul>
<li>Replace f(x) with y: y = ...</li>
<li>Swap x and y: x = ...</li>
<li>Solve for y: y = ...</li>
<li>Replace y with f⁻¹(x): f⁻¹(x) = ...</li>
</ul>

<p><strong>Example:</strong> Find the inverse of f(x) = 2x + 3</p>
<ul>
<li>y = 2x + 3</li>
<li>x = 2y + 3</li>
<li>x - 3 = 2y</li>
<li>y = (x - 3)/2</li>
<li>f⁻¹(x) = (x - 3)/2</li>
</ul>

<p><strong>Example: Inverse of a rational function</strong> f(x) = (3x + 1)/(x - 2)</p>
<ul>
<li>y = (3x + 1)/(x - 2)</li>
<li>x = (3y + 1)/(y - 2)</li>
<li>x(y - 2) = 3y + 1</li>
<li>xy - 2x = 3y + 1</li>
<li>xy - 3y = 2x + 1</li>
<li>y(x - 3) = 2x + 1</li>
<li>y = (2x + 1)/(x - 3)</li>
<li>f⁻¹(x) = (2x + 1)/(x - 3)</li>
</ul>

<p><strong>Verifying the inverse:</strong> f(f⁻¹(x)) = x and f⁻¹(f(x)) = x</p>

<h3>Graphical Relationship Between f and f⁻¹</h3>

<p>The graph of f⁻¹ is the reflection of f over the line y = x.</p>

<div class="tip">💡 Not all functions have inverses. Only one-to-one functions have inverses. For example, f(x) = x² doesn't have an inverse (unless restricted to x ≥ 0), because multiple x values map to the same y value.</div>
      `,
      questions: [
        { q: 'For the piecewise function f(x) = {x² if x < 1; 2x if x ≥ 1}, find f(0.5):', options: ['0.5', '1', '0.25', '1.5'], answer: 2, explanation: 'The correct answer is: 0.25.' },
        { q: 'For the piecewise function f(x) = {x² if x < 1; 2x if x ≥ 1}, find f(2):', options: ['4', '2', '1', '3'], answer: 0, explanation: 'The correct answer is: 4.' },
        { q: 'Which function does NOT have an inverse?', options: ['f(x) = 2x + 1', 'f(x) = x³', 'f(x) = x² (unrestricted)', 'f(x) = 3ˣ'], answer: 2, explanation: 'The correct answer is: f(x) = x² (unrestricted).' },
        { q: 'The inverse of f(x) = 4x - 7 is:', options: ['f⁻¹(x) = (x + 7)/4', 'f⁻¹(x) = (x - 7)/4', 'f⁻¹(x) = x/4 - 7', 'f⁻¹(x) = 4x + 7'], answer: 0, explanation: 'The correct answer is: f⁻¹(x) = (x + 7)/4.' },
        { q: 'The graph of f⁻¹ is the reflection of f over:', options: ['The x-axis', 'The y-axis', 'The line y = x', 'The line y = -x'], answer: 2, explanation: 'The correct answer is: The line y = x.' }
      ]
    },

    /* ────────── UNIT 7: Sign Graphs & Synthetic Division ────────── */
    {
      video: 'g-69B5jkcO4', // Prof Leonard: Introduction to Complex Solutions (PreCalc Algebra 35)
      title: 'Sign Graphs & Synthetic Division',
      content: `
<h2>📉 Unit 7: Sign Graphs & Synthetic Division</h2>

<h3>Sign Graphs (Sign Analysis)</h3>

<p><strong>Purpose:</strong> Determine where a function is positive, negative, zero, or undefined.</p>

<p><strong>Steps:</strong></p>
<ol>
<li>Find the zeros (where the numerator = 0)</li>
<li>Find the discontinuities (where the denominator = 0)</li>
<li>Create a number line with critical points</li>
<li>Test a point in each interval to determine the sign</li>
<li>Summarize positive/negative/zero/undefined regions</li>
</ol>

<p><strong>Example:</strong> f(x) = (x + 2)(x - 1)/(x - 3)</p>

<ul>
<li>Zeros: x = -2, x = 1</li>
<li>Discontinuity: x = 3</li>
<li>Critical points: -2, 1, 3</li>
<li>Sign chart:
<pre>
  -2     1     3
  ─────────────────
  (-) | (+) | (-) | (+)
</pre>
</li>
<li>f(x) > 0 on (-2, 1) ∪ (3, ∞)</li>
<li>f(x) < 0 on (-∞, -2) ∪ (1, 3)</li>
<li>f(x) = 0 at x = -2, 1</li>
<li>f(x) undefined at x = 3</li>
</ul>

<h3>Synthetic Division</h3>

<p><strong>Purpose:</strong> Divide a polynomial by a linear factor (x - c) more efficiently than long division.</p>

<p><strong>Process:</strong> Write the coefficients of the dividend; use c from the divisor (x - c)</p>

<p><strong>Example:</strong> Divide 2x³ + 3x² - 5x + 1 by (x - 2)</p>

<pre>
     2  |  2    3   -5    1
        |       4   14   18
        ─────────────────────
           2    7    9   19
</pre>

<p><strong>Result:</strong> Quotient is 2x² + 7x + 9 with remainder 19</p>
<p>So: (2x³ + 3x² - 5x + 1) / (x - 2) = 2x² + 7x + 9 + 19/(x - 2)</p>

<h3>The Remainder Theorem & Factor Theorem</h3>

<p><strong>Remainder Theorem:</strong> If polynomial P(x) is divided by (x - c), the remainder is P(c)</p>

<p><strong>Factor Theorem:</strong> (x - c) is a factor of P(x) if and only if P(c) = 0</p>

<p><strong>Using synthetic division with Factor Theorem:</strong></p>
<ul>
<li>If remainder = 0, then (x - c) is a factor</li>
<li>Can use to find all factors of a polynomial</li>
</ul>

<div class="tip">💡 Synthetic division is faster than long division for linear divisors. Use the factor theorem to determine whether a value is a zero of the polynomial.</div>
      `,
      questions: [
        { q: 'For f(x) = (x - 2)(x + 1)/(x - 4), the zeros are:', options: ['2, -1, 4', '2, -1', '4', '-1, 2, 4'], answer: 1, explanation: 'The correct answer is: 2, -1.' },
        { q: 'For f(x) = (x - 2)(x + 1)/(x - 4), the discontinuity is at:', options: ['x = 2, x = -1', 'x = 4', 'x = 0', 'x = 1'], answer: 1, explanation: 'The correct answer is: x = 4.' },
        { q: 'Using synthetic division to divide 3x² + 2x - 5 by (x - 1), the remainder is:', options: ['0', '1', '0 (use synthetic division to verify)', 'x - 1 is not a factor'], answer: 2, explanation: 'The correct answer is: 0 (use synthetic division to verify).' },
        { q: 'By the factor theorem, (x - 3) is a factor of P(x) if:', options: ['P(0) = 0', 'P(3) = 0', 'P(-3) = 0', 'P(x) is divisible by 3'], answer: 1, explanation: 'The correct answer is: P(3) = 0.' }
      ]
    },

    /* ────────── UNIT 8: Possible Rational Zeros ────────── */
    {
      video: 'lIFeZLHVWmc', // Prof Leonard: Creating Polynomials from Complex Solutions (PreCalc Algebra 36)
      title: 'Possible Rational Zeros (PRZ)',
      content: `
<h2>🔍 Unit 8: Possible Rational Zeros (PRZ)</h2>

<h3>The Rational Root Theorem</h3>

<p><strong>Theorem:</strong> If P(x) = a_n x^n + ... + a_1 x + a_0 has integer coefficients, and p/q is a rational zero (in lowest terms), then:</p>
<ul>
<li>p divides a_0 (the constant term)</li>
<li>q divides a_n (the leading coefficient)</li>
</ul>

<p><strong>Finding all possible rational zeros:</strong></p>
<ol>
<li>List all factors of a_0 (constant term)</li>
<li>List all factors of a_n (leading coefficient)</li>
<li>Form all fractions p/q where p is a factor of a_0 and q is a factor of a_n</li>
<li>Include both positive and negative values</li>
</ol>

<p><strong>Example:</strong> P(x) = 2x³ + 3x² - 8x - 12</p>

<ul>
<li>a_0 = -12, factors: ±1, ±2, ±3, ±4, ±6, ±12</li>
<li>a_n = 2, factors: ±1, ±2</li>
<li>Possible rational zeros: ±1, ±2, ±3, ±4, ±6, ±12, ±1/2, ±3/2</li>
</ul>

<p><strong>Testing the candidates:</strong> Use synthetic division or direct substitution to test each possible zero.</p>

<ul>
<li>P(2) = 2(8) + 3(4) - 8(2) - 12 = 16 + 12 - 16 - 12 = 0 ✓</li>
<li>So x = 2 is a zero, and (x - 2) is a factor</li>
</ul>

<h3>Using Descartes' Rule of Signs (Optional but helpful)</h3>

<p><strong>Rule:</strong> The number of positive real zeros of P(x) equals the number of sign changes in the coefficients of P(x), or less by an even number.</p>

<p><strong>For negative zeros:</strong> Count sign changes in P(-x)</p>

<p><strong>Example:</strong> P(x) = 2x³ + 3x² - 8x - 12</p>
<ul>
<li>Signs: + + - - (changes: at 3 to -8) → 1 change → 1 positive real zero</li>
<li>P(-x) = -2x³ + 3x² + 8x - 12</li>
<li>Signs: - + + - (changes: at -2 to +3, at +8 to -12) → 2 changes → 2 or 0 negative real zeros</li>
</ul>

<p>This narrows down which candidates to test.</p>

<div class="tip">💡 The Rational Root Theorem doesn't guarantee that any of the possible rational zeros are actual zeros—it just narrows down the list of candidates to test. Always verify with synthetic division or substitution.</div>
      `,
      questions: [
        { q: 'For P(x) = x³ + 2x² - 5x - 6, the factors of a_0 are:', options: ['±1, ±2', '±1, ±2, ±3, ±6', '±1, ±3', '±1, ±5, ±6'], answer: 1, explanation: 'The correct answer is: ±1, ±2, ±3, ±6.' },
        { q: 'For P(x) = 3x² - 7x + 4, a possible rational zero is:', options: ['2/3', '7/3', '4/3', '3/7'], answer: 0, explanation: 'The correct answer is: 2/3.' },
        { q: 'For P(x) = 2x³ + x² - 5x + 2, possible rational zeros include:', options: ['1/2 only', '±1, ±2, ±1/2', '±1, ±2, ±5', '±1, ±1/2 only'], answer: 1, explanation: 'The correct answer is: ±1, ±2, ±1/2.' }
      ]
    },

    /* ────────── UNIT 9: Logarithms ────────── */
    {
      video: 'jfnTwz79PWU', // Prof Leonard: Introduction to Logarithms and Their Graphs (PreCalc Algebra 55)
      title: 'Logarithms: Expanding, Condensing & Solving',
      content: `
<h2>📊 Unit 9: Logarithms</h2>

<h3>Logarithm Definition & Properties</h3>

<p><strong>Definition:</strong> log_a(x) = y means a^y = x</p>
<ul>
<li>log₁₀(100) = 2 because 10² = 100</li>
<li>log₂(8) = 3 because 2³ = 8</li>
<li>log_a(a) = 1 and log_a(1) = 0 for any base a > 0, a ≠ 1</li>
</ul>

<p><strong>Common Logarithms:</strong> log(x) or log₁₀(x)</p>
<p><strong>Natural Logarithm:</strong> ln(x) or log_e(x) (base e ≈ 2.718)</p>

<h3>Logarithm Laws</h3>

<p><strong>1. Product Rule:</strong> log_a(xy) = log_a(x) + log_a(y)</p>
<p><strong>2. Quotient Rule:</strong> log_a(x/y) = log_a(x) - log_a(y)</p>
<p><strong>3. Power Rule:</strong> log_a(x^n) = n·log_a(x)</p>
<p><strong>4. Change of Base:</strong> log_a(x) = log_b(x) / log_b(a) (convert to different base)</p>

<h3>Expanding Logarithms</h3>

<p><strong>Use the laws to break down a single log into multiple logs:</strong></p>

<p>log(2x²y) = log(2) + log(x²) + log(y) = log(2) + 2log(x) + log(y)</p>

<p>ln(x³/y) = ln(x³) - ln(y) = 3ln(x) - ln(y)</p>

<p>log_a(√(x² + 1)) = log_a((x² + 1)^(1/2)) = (1/2)·log_a(x² + 1)</p>

<h3>Condensing Logarithms</h3>

<p><strong>Combine multiple logs into a single log (reverse of expanding):</strong></p>

<p>2log(x) + log(3) = log(x²) + log(3) = log(3x²)</p>

<p>ln(x) - 2ln(y) = ln(x) - ln(y²) = ln(x/y²)</p>

<h3>Solving Logarithmic Equations</h3>

<p><strong>Strategy 1: Convert to exponential form</strong></p>
<p>log_2(x) = 3 → 2³ = x → x = 8</p>

<p><strong>Strategy 2: Use logarithmic properties</strong></p>
<p>log(x) + log(3) = log(15)</p>
<p>log(3x) = log(15)</p>
<p>3x = 15</p>
<p>x = 5</p>

<p><strong>Strategy 3: Isolate the logarithm, then exponentiate</strong></p>
<p>2ln(x) = 6</p>
<p>ln(x) = 3</p>
<p>e³ = x</p>
<p>x = e³ ≈ 20.09</p>

<p><strong>Important: Check that solutions don't create undefined logs (argument must be > 0)</strong></p>

<div class="tip">💡 Logarithms are the inverse of exponentials. If you can convert between log and exponential form fluently, you can solve most logarithmic equations.</div>
      `,
      questions: [
        { q: 'log₂(16) equals:', options: ['2', '4', '8', '16'], answer: 1, explanation: 'The correct answer is: 4.' },
        { q: 'Expand log(x²y):', options: ['2log(xy)', 'log(x²) + log(y)', '2log(x) + log(y)', 'log(x) + 2log(y)'], answer: 2, explanation: 'The correct answer is: 2log(x) + log(y).' },
        { q: 'Condense 3ln(x) - ln(2):', options: ['ln(x³/2)', 'ln(x/2³)', 'ln(3x - 2)', 'ln(x³ - 2)'], answer: 0, explanation: 'The correct answer is: ln(x³/2).' },
        { q: 'Solve log₃(x) = 2:', options: ['x = 6', 'x = 9', 'x = 3', 'x = 2'], answer: 1, explanation: 'The correct answer is: x = 9.' },
        { q: 'Solve 2log(x) = 1:', options: ['x = 10', 'x = 100', 'x = √10', 'x = 5'], answer: 2, explanation: 'The correct answer is: x = √10.' }
      ]
    },

    /* ────────── UNIT 10: Trigonometry ────────── */
    {
      video: 'Sy_ZCtD2tWo', // Prof Leonard: Introduction to Right Triangle Trigonometry
      title: 'Trigonometry: Solving Sides & Angles',
      content: `
<h2>📐 Unit 10: Trigonometry</h2>

<h3>Right Triangle Trigonometry</h3>

<p><strong>Basic Trig Ratios (in a right triangle):</strong></p>
<ul>
<li>sin(θ) = opposite / hypotenuse</li>
<li>cos(θ) = adjacent / hypotenuse</li>
<li>tan(θ) = opposite / adjacent</li>
</ul>

<p><strong>Mnemonic: SOH-CAH-TOA</strong></p>

<h3>Solving for Missing Sides</h3>

<p><strong>Example:</strong> In a right triangle, one angle is 35°, and the hypotenuse is 10. Find the opposite side.</p>

<ul>
<li>sin(35°) = opposite / 10</li>
<li>opposite = 10·sin(35°) ≈ 10(0.574) ≈ 5.74</li>
</ul>

<p><strong>Example:</strong> In a right triangle, the opposite side is 8 and the adjacent side is 6. Find the hypotenuse.</p>

<ul>
<li>By Pythagorean theorem: hyp² = 8² + 6² = 64 + 36 = 100</li>
<li>hyp = 10</li>
</ul>

<h3>Solving for Missing Angles</h3>

<p><strong>Use inverse trig functions:</strong></p>
<ul>
<li>sin⁻¹(x) or arcsin(x): inverse of sine</li>
<li>cos⁻¹(x) or arccos(x): inverse of cosine</li>
<li>tan⁻¹(x) or arctan(x): inverse of tangent</li>
</ul>

<p><strong>Example:</strong> In a right triangle, opposite = 7, hypotenuse = 12. Find the angle θ.</p>

<ul>
<li>sin(θ) = 7/12</li>
<li>θ = sin⁻¹(7/12) ≈ 35.54°</li>
</ul>

<h3>Law of Sines & Law of Cosines (Non-Right Triangles)</h3>

<p><strong>Law of Sines:</strong> a/sin(A) = b/sin(B) = c/sin(C)</p>
<ul>
<li>Use when you know an angle-side pair and another angle</li>
<li>Can solve for unknown sides or angles</li>
</ul>

<p><strong>Law of Cosines:</strong> c² = a² + b² - 2ab·cos(C)</p>
<ul>
<li>Use when you know all three sides (to find an angle) or two sides and the included angle (to find the third side)</li>
<li>Generalization of Pythagorean theorem</li>
</ul>

<p><strong>Example:</strong> In a triangle, a = 5, b = 7, C = 60°. Find c (the side opposite angle C).</p>

<ul>
<li>c² = 5² + 7² - 2(5)(7)cos(60°)</li>
<li>c² = 25 + 49 - 70(0.5)</li>
<li>c² = 74 - 35 = 39</li>
<li>c = √39 ≈ 6.24</li>
</ul>

<h3>Area of a Triangle Using Trigonometry</h3>

<p><strong>Formula:</strong> Area = (1/2)ab·sin(C)</p>

<p>Where a and b are two sides, and C is the included angle between them.</p>

<p><strong>Example:</strong> Two sides are 8 and 10, with an included angle of 50°.</p>

<ul>
<li>Area = (1/2)(8)(10)sin(50°) = 40·sin(50°) ≈ 40(0.766) ≈ 30.64 square units</li>
</ul>

<div class="tip">💡 Use Law of Sines when you have angles and sides that "pair up." Use Law of Cosines when you know all three sides or two sides and the included angle. For area, the formula Area = (1/2)ab·sin(C) is faster than using Heron's formula.</div>
      `,
      questions: [
        { q: 'In a right triangle, sin(30°) ≈:', options: ['0.5', '0.866', '0.707', '1'], answer: 0, explanation: 'The correct answer is: 0.5.' },
        { q: 'In a right triangle, opposite = 5, hypotenuse = 13. sin(θ) =:', options: ['5/13', '13/5', '12/13', '5/12'], answer: 0, explanation: 'The correct answer is: 5/13.' },
        { q: 'Find the missing angle: sin(θ) = 0.6:', options: ['θ ≈ 37°', 'θ ≈ 53°', 'θ ≈ 60°', 'θ ≈ 45°'], answer: 0, explanation: 'The correct answer is: θ ≈ 37°.' },
        { q: 'Using Law of Cosines with a = 3, b = 4, C = 90°, find c:', options: ['5', '7', '√7', '6'], answer: 0, explanation: 'The correct answer is: 5.' },
        { q: 'Area of a triangle with sides 6 and 8 and included angle 45°:', options: ['24', '12√2 ≈ 16.97', '20', '12'], answer: 1, explanation: 'The correct answer is: 12√2 ≈ 16.97.' }
      ]
    },

    /* ────────── UNIT 11: Trig Functions & Trig Logic ────────── */
    {
      video: '__nefjOhVks', // Prof Leonard: Trigonometric Functions & the Unit Circle (Trig 6)
      title: 'Evaluating Trig Functions & Trig Logic',
      content: `
<h2>📊 Unit 11: Evaluating Trig Functions & Trig Logic</h2>

<h3>Exact Values of Trig Functions</h3>

<p><strong>Key angles (0°, 30°, 45°, 60°, 90°):</strong></p>

<table>
<tr><th>Angle</th><th>sin(θ)</th><th>cos(θ)</th><th>tan(θ)</th></tr>
<tr><td>0°</td><td>0</td><td>1</td><td>0</td></tr>
<tr><td>30°</td><td>1/2</td><td>√3/2</td><td>1/√3</td></tr>
<tr><td>45°</td><td>√2/2</td><td>√2/2</td><td>1</td></tr>
<tr><td>60°</td><td>√3/2</td><td>1/2</td><td>√3</td></tr>
<tr><td>90°</td><td>1</td><td>0</td><td>undefined</td></tr>
</table>

<h3>Unit Circle & Special Angles</h3>

<p><strong>The Unit Circle:</strong> A circle with radius 1 centered at the origin. Any point (x, y) on the unit circle satisfies x² + y² = 1.</p>

<p>For an angle θ measured counterclockwise from the positive x-axis:
<ul>
<li>cos(θ) = x-coordinate</li>
<li>sin(θ) = y-coordinate</li>
<li>tan(θ) = y/x</li>
</ul>
</p>

<p><strong>Quadrants & Signs:</strong></p>
<ul>
<li><strong>Quadrant I (0° to 90°):</strong> sin, cos, tan all positive</li>
<li><strong>Quadrant II (90° to 180°):</strong> sin positive, cos negative, tan negative</li>
<li><strong>Quadrant III (180° to 270°):</strong> sin negative, cos negative, tan positive</li>
<li><strong>Quadrant IV (270° to 360°):</strong> sin negative, cos positive, tan negative</li>
</ul>

<p><strong>Mnemonic: "All Students Take Calculus"</strong> (All quadrants, Students-Quad II sin, Take-Quad III tan, Calculus-Quad IV cos)</p>

<h3>Evaluating Values of Trig Functions</h3>

<p><strong>Example 1:</strong> sin(150°)</p>
<ul>
<li>150° is in Quadrant II (between 90° and 180°)</li>
<li>Reference angle: 180° - 150° = 30°</li>
<li>sin(150°) = sin(30°) = 1/2 (positive in Quad II)</li>
</ul>

<p><strong>Example 2:</strong> cos(240°)</p>
<ul>
<li>240° is in Quadrant III (between 180° and 270°)</li>
<li>Reference angle: 240° - 180° = 60°</li>
<li>cos(240°) = -cos(60°) = -1/2 (negative in Quad III)</li>
</ul>

<p><strong>Example 3:</strong> tan(π/3) [in radians]</p>
<ul>
<li>π/3 = 60°</li>
<li>tan(60°) = √3</li>
</ul>

<h3>Trigonometric Identities & Logic</h3>

<p><strong>Pythagorean Identity:</strong> sin²(θ) + cos²(θ) = 1</p>

<p><strong>Reciprocal Identities:</strong></p>
<ul>
<li>csc(θ) = 1/sin(θ)</li>
<li>sec(θ) = 1/cos(θ)</li>
<li>cot(θ) = 1/tan(θ)</li>
</ul>

<p><strong>Quotient Identity:</strong> tan(θ) = sin(θ)/cos(θ)</p>

<p><strong>Sum & Difference Formulas (for reference):</strong></p>
<ul>
<li>sin(A ± B) = sin(A)cos(B) ± cos(A)sin(B)</li>
<li>cos(A ± B) = cos(A)cos(B) ∓ sin(A)sin(B)</li>
</ul>

<p><strong>Double Angle Formulas:</strong></p>
<ul>
<li>sin(2θ) = 2sin(θ)cos(θ)</li>
<li>cos(2θ) = cos²(θ) - sin²(θ) = 2cos²(θ) - 1 = 1 - 2sin²(θ)</li>
<li>tan(2θ) = 2tan(θ) / (1 - tan²(θ))</li>
</ul>

<h3>Verifying Trigonometric Identities</h3>

<p><strong>Strategy:</strong> Work with one side (usually the more complex side) and manipulate it to match the other side using known identities.</p>

<p><strong>Example:</strong> Verify tan(θ)cos(θ) = sin(θ)</p>
<ul>
<li>LHS: tan(θ)cos(θ) = [sin(θ)/cos(θ)]cos(θ) = sin(θ) = RHS ✓</li>
</ul>

<div class="tip">💡 Memorize the special angles (30°, 45°, 60°) and the unit circle. Understand quadrants and reference angles. These are the foundation for all trig problems.</div>
      `,
      questions: [
        { q: 'sin(45°) equals:', options: ['1/2', '√2/2', '√3/2', '1'], answer: 1, explanation: 'The correct answer is: √2/2.' },
        { q: 'cos(120°) equals:', options: ['1/2', '-1/2', '√3/2', '-√3/2'], answer: 1, explanation: 'The correct answer is: -1/2.' },
        { q: 'tan(π/4) equals:', options: ['1', '√3', '0', 'undefined'], answer: 0, explanation: 'The correct answer is: 1.' },
        { q: 'sin(θ) is positive in quadrants:', options: ['I and II', 'II and III', 'III and IV', 'I and IV'], answer: 0, explanation: 'The correct answer is: I and II.' },
        { q: 'Using the Pythagorean identity, if cos(θ) = 3/5, then sin(θ) =:', options: ['4/5', '±4/5', '2/5', '5/3'], answer: 1, explanation: 'The correct answer is: ±4/5.' },
        { q: 'Verify: sin(θ)csc(θ) = 1. This is true because:', options: ['sin and csc are reciprocals', 'They\'re always equal', 'sin is larger', 'Never true'], answer: 0, explanation: 'The correct answer is: sin and csc are reciprocals.' }
      ]
    }
  ]
};
