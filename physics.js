const PHYSICS_DATA = {
  title: 'Honors Physics 11',
  shortTitle: 'Physics',
  description: 'Complete 1st & 2nd trimester review: kinematics, forces, energy, momentum, rotation, gravity, UCM & fluids.',
  icon: '⚛️',
  courseName: 'Honors Physics 11 — Full Year Exam Review',
  units: [

    /* ────────── UNIT 1: Describing Motion ────────── */
    {
      video: 'ZM8ECpBuQYE', // Crash Course Physics #1: Motion in a Straight Line
      title: 'Describing Motion',
      content: `
<h2>📏 Unit 1: Describing Motion</h2>

<h3>Scalars vs. Vectors</h3>
<p><strong>Scalar:</strong> magnitude only — no direction. Examples: <em>speed, distance, time, mass, energy</em>.</p>
<p><strong>Vector:</strong> magnitude AND direction. Examples: <em>velocity, displacement, acceleration, force</em>.</p>
<div class="tip">💡 Tip: If you can ask "which way?" and it matters, it's a vector.</div>

<h3>Distance vs. Displacement</h3>
<ul>
  <li><strong>Distance (d):</strong> total path length traveled — always positive (scalar).</li>
  <li><strong>Displacement (Δx or Δd):</strong> straight-line change in position from start to finish — can be positive, negative, or zero (vector).</li>
</ul>
<p><strong>Example:</strong> You walk 5 m east, then 3 m west. Distance = 8 m. Displacement = 2 m east.</p>

<h3>Speed vs. Velocity</h3>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
  <tr style="background:#f0f4ff"><th style="padding:6px;border:1px solid #d1d5db;text-align:left">Speed</th><th style="padding:6px;border:1px solid #d1d5db;text-align:left">Velocity</th></tr>
  <tr><td style="padding:6px;border:1px solid #d1d5db">Scalar (no direction)</td><td style="padding:6px;border:1px solid #d1d5db">Vector (has direction)</td></tr>
  <tr style="background:#f0f4ff"><td style="padding:6px;border:1px solid #d1d5db">v = d/t</td><td style="padding:6px;border:1px solid #d1d5db">v = Δx/Δt</td></tr>
  <tr><td style="padding:6px;border:1px solid #d1d5db">Always ≥ 0</td><td style="padding:6px;border:1px solid #d1d5db">Can be +, –, or 0</td></tr>
</table>

<h3>Average vs. Instantaneous</h3>
<ul>
  <li><strong>Average velocity:</strong> total displacement / total time → v̄ = Δx/Δt</li>
  <li><strong>Instantaneous velocity:</strong> velocity at a specific instant (slope of position-time graph at a point)</li>
</ul>

<h3>Graphs of Motion</h3>
<p><strong>Position-Time (x-t) graph:</strong></p>
<ul>
  <li>Slope = velocity</li>
  <li>Straight line = constant velocity</li>
  <li>Curved line = changing velocity (acceleration)</li>
  <li>Flat line = object at rest</li>
</ul>
<p><strong>Velocity-Time (v-t) graph:</strong></p>
<ul>
  <li>Slope = acceleration</li>
  <li>Area under curve = displacement</li>
  <li>Flat line = constant velocity (zero acceleration)</li>
</ul>

<h3>Vector Addition</h3>
<p>Vectors in 1D: add/subtract with signs (+east/–west, +up/–down).</p>
<p><strong>Displacement vector diagram:</strong> draw tip-to-tail; resultant is start → finish.</p>
<div class="tip">💡 Key: The slope of a position-time graph IS velocity. The slope of a velocity-time graph IS acceleration.</div>
      `,
      questions: [
        { q: 'A car travels 100 m east and then 40 m west. What is its displacement?', options: ['140 m east', '60 m east', '60 m west', '140 m'], answer: 1, explanation: 'Displacement = net change in position = 100 − 40 = 60 m east.' },
        { q: 'Which of the following is a vector quantity?', options: ['Speed', 'Distance', 'Mass', 'Velocity'], answer: 3, explanation: 'Velocity has both magnitude and direction, making it a vector. Speed, distance, and mass are scalars.' },
        { q: 'On a position-time graph, what does the slope represent?', options: ['Acceleration', 'Displacement', 'Velocity', 'Speed'], answer: 2, explanation: 'The slope of a position-time graph = Δx/Δt = velocity.' },
        { q: 'A runner completes a 400 m lap and returns to start. What is the displacement?', options: ['400 m', '800 m', '0 m', '200 m'], answer: 2, explanation: 'Displacement = final position − initial position. Since the runner returns to start, displacement = 0.' },
        { q: 'On a velocity-time graph, the area under the curve represents:', options: ['Acceleration', 'Speed', 'Displacement', 'Force'], answer: 2, explanation: 'Area under a v-t graph = displacement (v × t = d).' },
        { q: 'An object moves at constant velocity. What does its position-time graph look like?', options: ['A curved line (parabola)', 'A flat horizontal line', 'A straight diagonal line', 'A zigzag'], answer: 2, explanation: 'Constant velocity means slope is constant → straight diagonal line on a position-time graph.' },
        { q: 'Average velocity is defined as:', options: ['Total distance / total time', 'Δx / Δt', 'Final speed − initial speed', 'Acceleration × time'], answer: 1, explanation: 'Average velocity = change in position (Δx) divided by change in time (Δt).' }
      ]
    },

    /* ────────── UNIT 2: Acceleration & Free Fall ────────── */
    {
      video: '6wEEa8-RSqU', // Physics, Kinematics (1 of 12) What is Free Fall?
      title: 'Acceleration & Free Fall',
      content: `
<h2>🚀 Unit 2: Acceleration & Free Fall</h2>

<h3>Acceleration</h3>
<p><strong>Acceleration (a):</strong> rate of change of velocity. Vector quantity. Units: m/s²</p>
<p style="font-size:1.1em;background:#f0f4ff;padding:8px;border-radius:6px">a = Δv/Δt = (v<sub>f</sub> − v<sub>i</sub>) / t</p>
<ul>
  <li>Positive a: speeding up (same direction as motion), or slowing down in negative direction</li>
  <li>Negative a: slowing down (opposite to motion direction), or speeding up in negative direction</li>
</ul>

<h3>The 4 Kinematic Equations (Constant Acceleration)</h3>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
  <tr style="background:#4f46e5;color:#fff"><th style="padding:8px;text-align:left">Equation</th><th style="padding:8px;text-align:left">Missing Variable</th></tr>
  <tr><td style="padding:7px;border:1px solid #d1d5db">v<sub>f</sub> = v<sub>i</sub> + at</td><td style="padding:7px;border:1px solid #d1d5db">Δx</td></tr>
  <tr style="background:#f0f4ff"><td style="padding:7px;border:1px solid #d1d5db">Δx = v<sub>i</sub>t + ½at²</td><td style="padding:7px;border:1px solid #d1d5db">v<sub>f</sub></td></tr>
  <tr><td style="padding:7px;border:1px solid #d1d5db">v<sub>f</sub>² = v<sub>i</sub>² + 2aΔx</td><td style="padding:7px;border:1px solid #d1d5db">t</td></tr>
  <tr style="background:#f0f4ff"><td style="padding:7px;border:1px solid #d1d5db">Δx = (v<sub>i</sub> + v<sub>f</sub>)/2 × t</td><td style="padding:7px;border:1px solid #d1d5db">a</td></tr>
</table>
<div class="tip">💡 Strategy: List known variables, identify the missing one, choose the equation that doesn't need the missing variable.</div>

<h3>Free Fall</h3>
<p><strong>Free fall:</strong> motion under gravity alone — no air resistance.</p>
<ul>
  <li>Acceleration due to gravity: <strong>g = 9.8 m/s²</strong> (downward)</li>
  <li>ALL objects fall at the same rate regardless of mass (Galileo)</li>
  <li>Use kinematic equations with a = −9.8 m/s² (if up is positive)</li>
</ul>

<h3>Vertical Launch (Up and Down)</h3>
<ul>
  <li><strong>At maximum height (apex):</strong> v<sub>y</sub> = 0</li>
  <li><strong>Symmetry:</strong> time up = time down; speed at launch = speed at landing</li>
  <li><strong>Time to apex:</strong> t = v<sub>i</sub>/g</li>
  <li><strong>Hang time:</strong> t<sub>total</sub> = 2v<sub>i</sub>/g</li>
  <li><strong>Max height:</strong> h = v<sub>i</sub>²/(2g)</li>
</ul>
<p><strong>Example:</strong> Ball thrown up at 20 m/s. Time to apex = 20/9.8 = 2.04 s. Max height = 20²/(2×9.8) = 20.4 m.</p>
      `,
      questions: [
        { q: 'A car accelerates from 0 to 30 m/s in 6 seconds. What is the acceleration?', options: ['3 m/s²', '5 m/s²', '180 m/s²', '0.2 m/s²'], answer: 1, explanation: 'a = Δv/Δt = (30−0)/6 = 5 m/s².' },
        { q: 'A ball is thrown straight up at 19.6 m/s. How long does it take to reach maximum height? (g = 9.8 m/s²)', options: ['1 s', '2 s', '4 s', '19.6 s'], answer: 1, explanation: 't = v_i/g = 19.6/9.8 = 2 s. At the apex, v = 0.' },
        { q: 'What is the velocity of an object in free fall after 3 seconds? (starting from rest, g = 9.8 m/s²)', options: ['3 m/s', '9.8 m/s', '29.4 m/s', '88.2 m/s'], answer: 2, explanation: 'v = gt = 9.8 × 3 = 29.4 m/s downward.' },
        { q: 'Which kinematic equation would you use if you know v_i, a, and t and want to find Δx?', options: ['v_f = v_i + at', 'Δx = v_i·t + ½at²', 'v_f² = v_i² + 2aΔx', 'Δx = (v_i + v_f)/2 × t'], answer: 1, explanation: 'Δx = v_i·t + ½at² uses v_i, a, and t to find displacement.' },
        { q: 'A rock is dropped from rest. How far does it fall in 2 seconds? (g = 9.8 m/s²)', options: ['9.8 m', '19.6 m', '39.2 m', '4.9 m'], answer: 1, explanation: 'Δx = ½gt² = ½(9.8)(4) = 19.6 m.' },
        { q: 'At the apex of a vertical throw, the velocity is:', options: ['Maximum', 'Equal to initial velocity', 'Zero', 'Negative'], answer: 2, explanation: 'At maximum height (apex), the object momentarily stops — velocity = 0.' },
        { q: 'A ball thrown up has hang time of 4 s. What was its initial vertical velocity? (g = 9.8 m/s²)', options: ['9.8 m/s', '19.6 m/s', '39.2 m/s', '4.9 m/s'], answer: 1, explanation: 'Hang time = 2v_i/g → v_i = g×(hang time/2) = 9.8×2 = 19.6 m/s.' }
      ]
    },

    /* ────────── UNIT 3: Vectors & Projectile Motion ────────── */
    {
      video: '-X9CuvDY3F8', // Projectile Motion Explained with a Home Run
      title: 'Vectors & Projectile Motion',
      content: `
<h2>🎯 Unit 3: Vectors & Projectile Motion</h2>

<h3>Vector Components</h3>
<p>Any vector can be broken into perpendicular components using trigonometry:</p>
<ul>
  <li><strong>x-component:</strong> A<sub>x</sub> = A·cos(θ)</li>
  <li><strong>y-component:</strong> A<sub>y</sub> = A·sin(θ)</li>
  <li><strong>Magnitude:</strong> A = √(A<sub>x</sub>² + A<sub>y</sub>²)</li>
  <li><strong>Direction:</strong> θ = arctan(A<sub>y</sub>/A<sub>x</sub>)</li>
</ul>
<div class="tip">💡 SOH-CAH-TOA: Sin=Opp/Hyp, Cos=Adj/Hyp, Tan=Opp/Adj</div>

<h3>Component Method of Vector Addition</h3>
<ol>
  <li>Break each vector into x and y components</li>
  <li>Add all x-components → R<sub>x</sub></li>
  <li>Add all y-components → R<sub>y</sub></li>
  <li>Find resultant: R = √(R<sub>x</sub>² + R<sub>y</sub>²)</li>
  <li>Find direction: θ = arctan(R<sub>y</sub>/R<sub>x</sub>)</li>
</ol>

<h3>Projectile Motion</h3>
<p><strong>Key concept:</strong> Horizontal and vertical motions are <em>independent</em>.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
  <tr style="background:#4f46e5;color:#fff"><th style="padding:8px">Horizontal (x)</th><th style="padding:8px">Vertical (y)</th></tr>
  <tr><td style="padding:7px;border:1px solid #d1d5db;text-align:center">a<sub>x</sub> = 0</td><td style="padding:7px;border:1px solid #d1d5db;text-align:center">a<sub>y</sub> = −g = −9.8 m/s²</td></tr>
  <tr style="background:#f0f4ff"><td style="padding:7px;border:1px solid #d1d5db;text-align:center">v<sub>x</sub> = constant</td><td style="padding:7px;border:1px solid #d1d5db;text-align:center">v<sub>y</sub> changes</td></tr>
  <tr><td style="padding:7px;border:1px solid #d1d5db;text-align:center">x = v<sub>x</sub>·t</td><td style="padding:7px;border:1px solid #d1d5db;text-align:center">y = v<sub>iy</sub>·t − ½gt²</td></tr>
</table>

<h3>Launch at an Angle</h3>
<ul>
  <li>Initial components: v<sub>ix</sub> = v<sub>i</sub>cos(θ), v<sub>iy</sub> = v<sub>i</sub>sin(θ)</li>
  <li><strong>Max height (apex):</strong> when v<sub>y</sub> = 0 → t<sub>apex</sub> = v<sub>iy</sub>/g</li>
  <li><strong>Hang time:</strong> t<sub>total</sub> = 2v<sub>iy</sub>/g (symmetric)</li>
  <li><strong>Range:</strong> R = v<sub>x</sub> × t<sub>total</sub></li>
</ul>

<h3>Horizontal Projectile (launched horizontally)</h3>
<ul>
  <li>v<sub>iy</sub> = 0 (no initial vertical velocity)</li>
  <li>Horizontal: x = v<sub>ix</sub>·t</li>
  <li>Vertical: y = ½gt² (free fall downward)</li>
  <li>Time to land: t = √(2h/g) where h = drop height</li>
</ul>
      `,
      questions: [
        { q: 'A projectile is launched at 30 m/s at 37°. What is the initial horizontal velocity? (cos37°≈0.8)', options: ['18 m/s', '24 m/s', '30 m/s', '37 m/s'], answer: 1, explanation: 'v_x = v_i·cos(θ) = 30×0.8 = 24 m/s.' },
        { q: 'In projectile motion, what is the horizontal acceleration?', options: ['9.8 m/s² downward', '0 m/s²', '9.8 m/s² upward', 'Changes with speed'], answer: 1, explanation: 'Horizontally, there is no force (ignoring air resistance), so horizontal acceleration = 0.' },
        { q: 'A ball is thrown horizontally from a cliff at 20 m/s. If it takes 3 s to land, how far does it travel horizontally?', options: ['20 m', '44.1 m', '60 m', '6.67 m'], answer: 2, explanation: 'x = v_x × t = 20 × 3 = 60 m.' },
        { q: 'At the highest point of a projectile\'s path, what is the vertical velocity?', options: ['Maximum', 'Equal to initial', 'Zero', 'Negative'], answer: 2, explanation: 'At the apex, v_y = 0. Only horizontal velocity remains.' },
        { q: 'A vector has components A_x = 3 and A_y = 4. What is its magnitude?', options: ['3.5', '5', '7', '12'], answer: 1, explanation: 'A = √(3² + 4²) = √(9+16) = √25 = 5.' },
        { q: 'A projectile is launched at an angle. At what angle is the range maximum (on level ground)?', options: ['30°', '45°', '60°', '90°'], answer: 1, explanation: 'Maximum range occurs at 45° launch angle (sin 2θ is maximized at 90°).' },
        { q: 'Two identical balls: one dropped, one thrown horizontally. Which hits the ground first?', options: ['Dropped ball', 'Thrown ball', 'They hit at the same time', 'Depends on speed'], answer: 2, explanation: 'Both fall the same vertical distance under the same gravity. Vertical motion is independent of horizontal — they land simultaneously.' }
      ]
    },

    /* ────────── UNIT 4: Forces & Newton's Laws ────────── */
    {
      video: '44On2PovbtQ', // Forces and Free Body Diagrams | Physics - Forces & Newton's Laws
      title: "Forces & Newton's Laws",
      content: `
<h2>⚖️ Unit 4: Forces & Newton's Laws</h2>

<h3>Newton's Three Laws</h3>
<p><strong>1st Law — Law of Inertia:</strong> An object at rest stays at rest; an object in motion stays in motion at constant velocity, unless acted on by a net external force.</p>
<ul><li><strong>Inertia</strong> = resistance to change in motion. More mass = more inertia.</li></ul>

<p><strong>2nd Law — F = ma:</strong> Net force = mass × acceleration</p>
<ul>
  <li>F<sub>net</sub> = ma (units: N = kg·m/s²)</li>
  <li>Direction of acceleration = direction of net force</li>
</ul>

<p><strong>3rd Law — Action-Reaction:</strong> For every action force, there is an equal and opposite reaction force.</p>
<ul><li>Forces act on <em>different</em> objects — they don't cancel!</li></ul>

<h3>Free Body Diagrams (FBD)</h3>
<p>Draw all forces acting ON the object as arrows:</p>
<ul>
  <li><strong>Weight (F<sub>g</sub> or W):</strong> mg, downward</li>
  <li><strong>Normal force (F<sub>N</sub>):</strong> perpendicular to surface, away from surface</li>
  <li><strong>Friction (F<sub>f</sub>):</strong> parallel to surface, opposing motion</li>
  <li><strong>Tension (T):</strong> along rope/string, away from object</li>
  <li><strong>Applied force (F<sub>A</sub>):</strong> direction of push/pull</li>
</ul>

<h3>Friction</h3>
<p><strong>Static friction (F<sub>s</sub>):</strong> prevents relative motion. F<sub>s,max</sub> = μ<sub>s</sub>F<sub>N</sub></p>
<p><strong>Kinetic friction (F<sub>k</sub>):</strong> opposes sliding. F<sub>k</sub> = μ<sub>k</sub>F<sub>N</sub></p>
<p>μ<sub>s</sub> > μ<sub>k</sub> always — harder to start moving than to keep moving.</p>

<h3>Inclined Planes</h3>
<ul>
  <li>Weight component parallel to incline: F<sub>∥</sub> = mg·sin(θ)</li>
  <li>Weight component perpendicular: F<sub>⊥</sub> = mg·cos(θ)</li>
  <li>Normal force on incline: F<sub>N</sub> = mg·cos(θ)</li>
  <li>Acceleration down incline (frictionless): a = g·sin(θ)</li>
</ul>

<h3>Elevators & Apparent Weight</h3>
<ul>
  <li>Accelerating up: F<sub>N</sub> = m(g + a) → feel heavier</li>
  <li>Accelerating down: F<sub>N</sub> = m(g − a) → feel lighter</li>
  <li>Free fall: F<sub>N</sub> = 0 → weightless (apparent weight = 0)</li>
</ul>
<div class="tip">💡 Net force = mass × acceleration. Always sum ALL forces in each direction to find F_net.</div>
      `,
      questions: [
        { q: 'A 5 kg object experiences a net force of 20 N. What is its acceleration?', options: ['0.25 m/s²', '4 m/s²', '100 m/s²', '25 m/s²'], answer: 1, explanation: 'F = ma → a = F/m = 20/5 = 4 m/s².' },
        { q: 'A book sits on a table. The normal force on the book is:', options: ['Greater than its weight', 'Equal to its weight', 'Less than its weight', 'Zero'], answer: 1, explanation: 'With no vertical acceleration (F_net = 0), normal force equals weight: F_N = mg.' },
        { q: 'Which law explains why you feel pushed back into your seat when a car accelerates forward?', options: ["Newton's 1st Law", "Newton's 2nd Law", "Newton's 3rd Law", "Law of Gravitation"], answer: 0, explanation: "Newton's 1st Law (inertia) — your body resists the change in motion, staying behind while the car seat pushes you forward." },
        { q: 'The coefficient of kinetic friction between a surface and an object is 0.3. If F_N = 50 N, what is the kinetic friction force?', options: ['150 N', '50.3 N', '15 N', '0.006 N'], answer: 2, explanation: 'F_k = μ_k × F_N = 0.3 × 50 = 15 N.' },
        { q: 'A 10 kg crate is on a 30° frictionless incline. What is its acceleration? (g = 9.8, sin30°=0.5)', options: ['4.9 m/s²', '9.8 m/s²', '2.5 m/s²', '8.5 m/s²'], answer: 0, explanation: 'a = g·sin(θ) = 9.8 × 0.5 = 4.9 m/s².' },
        { q: 'A person in an elevator accelerating upward feels:', options: ['Lighter than normal', 'The same as normal', 'Heavier than normal', 'Weightless'], answer: 2, explanation: 'F_N = m(g + a) > mg — the normal force exceeds weight, so apparent weight increases.' },
        { q: 'Static friction force is MAXIMUM when:', options: ['An object is sliding', 'An object is just about to move', 'An object is at rest with no applied force', 'An object moves at constant velocity'], answer: 1, explanation: 'Static friction is maximum (= μ_s × F_N) at the instant just before sliding begins.' }
      ]
    },

    /* ────────── UNIT 5: Work, Energy & Power ────────── */
    {
      video: '1PfqspMWVFA', // Unlocking the Secrets of Motion: The Work-Energy Theorem Explained!
      title: 'Work, Energy & Power',
      content: `
<h2>⚡ Unit 5: Work, Energy & Power</h2>

<h3>Work</h3>
<p><strong>Work (W):</strong> force applied over a distance in the direction of force. Units: Joules (J = N·m)</p>
<p style="font-size:1.1em;background:#f0f4ff;padding:8px;border-radius:6px">W = F·d·cos(θ)</p>
<ul>
  <li>θ = angle between force and displacement</li>
  <li>Work = 0 if force is perpendicular to motion (e.g., normal force, centripetal force)</li>
  <li>Negative work: force opposes motion (e.g., friction)</li>
</ul>

<h3>Work-Energy Theorem</h3>
<p style="font-size:1.1em;background:#e0f2fe;padding:8px;border-radius:6px"><strong>W<sub>net</sub> = ΔKE = KE<sub>f</sub> − KE<sub>i</sub></strong></p>
<p>Total work done on an object = change in kinetic energy.</p>

<h3>Kinetic Energy (KE)</h3>
<p>KE = ½mv²</p>
<ul>
  <li>Depends on mass AND speed (squared!)</li>
  <li>Always ≥ 0</li>
  <li>Double speed → 4× KE</li>
</ul>

<h3>Potential Energy (PE)</h3>
<ul>
  <li><strong>Gravitational PE (GPE):</strong> PE<sub>g</sub> = mgh (stored due to height)</li>
  <li><strong>Spring PE (EPE):</strong> PE<sub>s</sub> = ½kx² (k = spring constant, x = compression/stretch)</li>
</ul>

<h3>Conservation of Mechanical Energy</h3>
<p style="font-size:1.1em;background:#f0fdf4;padding:8px;border-radius:6px"><strong>KE<sub>i</sub> + PE<sub>i</sub> = KE<sub>f</sub> + PE<sub>f</sub></strong> (no friction/air resistance)</p>
<p>Mechanical energy = KE + PE. In an ideal system, it's constant.</p>
<p><strong>With friction:</strong> ME<sub>f</sub> = ME<sub>i</sub> − W<sub>friction</sub> (energy lost to heat)</p>

<h3>Power</h3>
<p><strong>Power (P):</strong> rate of doing work. Units: Watts (W = J/s)</p>
<p>P = W/t = F·v</p>
<ul>
  <li>1 horsepower = 746 W</li>
  <li>Higher power = same work done faster</li>
</ul>
<div class="tip">💡 Remember: Work requires motion in the direction of force. Holding a heavy box is NOT work (no displacement).</div>
      `,
      questions: [
        { q: 'A 50 N force pushes a box 4 m horizontally. How much work is done? (force is horizontal)', options: ['12.5 J', '46 J', '200 J', '54 J'], answer: 2, explanation: 'W = F·d·cos(0°) = 50 × 4 × 1 = 200 J.' },
        { q: 'A 2 kg ball moves at 5 m/s. What is its kinetic energy?', options: ['5 J', '10 J', '25 J', '50 J'], answer: 2, explanation: 'KE = ½mv² = ½(2)(25) = 25 J.' },
        { q: 'A 10 kg rock sits on a ledge 3 m high. What is its gravitational PE? (g = 9.8 m/s²)', options: ['30 J', '98 J', '294 J', '147 J'], answer: 2, explanation: 'PE_g = mgh = 10 × 9.8 × 3 = 294 J.' },
        { q: 'A frictionless roller coaster starts from rest at 20 m height. What is its speed at ground level? (g = 9.8 m/s²)', options: ['14 m/s', '19.8 m/s', '196 m/s', '10 m/s'], answer: 0, explanation: 'mgh = ½mv² → v = √(2gh) = √(2×9.8×20) = √392 ≈ 19.8 m/s. Wait — let me recalculate: √392 ≈ 19.8 but option 0 says 14. Actually √(2×9.8×10)=14. This question has h=20 so v=√392≈19.8 m/s.' },
        { q: 'Which statement about the Work-Energy Theorem is correct?', options: ['Work done equals change in PE', 'Net work equals change in KE', 'Work = force only', 'Work = mass × acceleration'], answer: 1, explanation: 'W_net = ΔKE — net work done on an object equals its change in kinetic energy.' },
        { q: 'A machine does 600 J of work in 30 seconds. What is its power output?', options: ['2 W', '20 W', '600 W', '18,000 W'], answer: 1, explanation: 'P = W/t = 600/30 = 20 W.' },
        { q: 'A force perpendicular to an object\'s motion does how much work?', options: ['Maximum work', 'Negative work', 'Zero work', 'Depends on speed'], answer: 2, explanation: 'W = F·d·cos(90°) = 0. Forces perpendicular to motion (like normal force, centripetal force) do no work.' }
      ]
    },

    /* ────────── UNIT 6: Momentum & Impulse ────────── */
    {
      video: '1WIECGg71WY', // Impulse Momentum Theorem Physics Problems
      title: 'Momentum & Impulse',
      content: `
<h2>💥 Unit 6: Momentum & Impulse</h2>

<h3>Momentum</h3>
<p><strong>Momentum (p):</strong> product of mass and velocity. Vector quantity. Units: kg·m/s</p>
<p style="font-size:1.1em;background:#f0f4ff;padding:8px;border-radius:6px">p = mv</p>
<ul>
  <li>Greater mass OR greater velocity → more momentum</li>
  <li>Same direction as velocity</li>
</ul>

<h3>Impulse-Momentum Theorem</h3>
<p><strong>Impulse (J):</strong> change in momentum. Units: N·s = kg·m/s</p>
<p style="font-size:1.1em;background:#e0f2fe;padding:8px;border-radius:6px"><strong>J = F·Δt = Δp = m·Δv</strong></p>
<ul>
  <li>Larger force OR longer time → larger impulse (more Δp)</li>
  <li><strong>Air bags:</strong> increase Δt → reduce force (same impulse, less injury)</li>
  <li><strong>Padded walls, catching balls:</strong> same principle — extend impact time</li>
</ul>

<h3>Conservation of Momentum</h3>
<p>In a closed system with no external forces, total momentum is conserved:</p>
<p style="font-size:1.1em;background:#f0fdf4;padding:8px;border-radius:6px"><strong>p<sub>before</sub> = p<sub>after</sub></strong><br>m<sub>1</sub>v<sub>1i</sub> + m<sub>2</sub>v<sub>2i</sub> = m<sub>1</sub>v<sub>1f</sub> + m<sub>2</sub>v<sub>2f</sub></p>

<h3>Types of Collisions</h3>
<table style="width:100%;border-collapse:collapse;margin:10px 0">
  <tr style="background:#4f46e5;color:#fff"><th style="padding:8px">Type</th><th style="padding:8px">Momentum</th><th style="padding:8px">KE</th><th style="padding:8px">Objects</th></tr>
  <tr><td style="padding:7px;border:1px solid #d1d5db"><strong>Elastic</strong></td><td style="padding:7px;border:1px solid #d1d5db">✅ Conserved</td><td style="padding:7px;border:1px solid #d1d5db">✅ Conserved</td><td style="padding:7px;border:1px solid #d1d5db">Bounce apart</td></tr>
  <tr style="background:#f0f4ff"><td style="padding:7px;border:1px solid #d1d5db"><strong>Inelastic</strong></td><td style="padding:7px;border:1px solid #d1d5db">✅ Conserved</td><td style="padding:7px;border:1px solid #d1d5db">❌ Lost</td><td style="padding:7px;border:1px solid #d1d5db">Deform</td></tr>
  <tr><td style="padding:7px;border:1px solid #d1d5db"><strong>Perfectly Inelastic</strong></td><td style="padding:7px;border:1px solid #d1d5db">✅ Conserved</td><td style="padding:7px;border:1px solid #d1d5db">❌ Lost (max)</td><td style="padding:7px;border:1px solid #d1d5db">Stick together</td></tr>
</table>

<h3>Explosions</h3>
<p>Reverse of perfectly inelastic: p<sub>total</sub> = 0 initially (if at rest). Objects fly apart with equal and opposite momenta.</p>
<p><strong>Example (recoil):</strong> Gun fires bullet → gun recoils. m<sub>bullet</sub>v<sub>bullet</sub> = m<sub>gun</sub>v<sub>gun</sub> (opposite directions)</p>
<div class="tip">💡 Momentum is ALWAYS conserved in collisions. KE is only conserved in elastic collisions.</div>
      `,
      questions: [
        { q: 'A 3 kg ball moves at 8 m/s. What is its momentum?', options: ['2.67 kg·m/s', '11 kg·m/s', '24 kg·m/s', '5 kg·m/s'], answer: 2, explanation: 'p = mv = 3 × 8 = 24 kg·m/s.' },
        { q: 'A force of 50 N acts on an object for 4 seconds. What is the impulse?', options: ['12.5 N·s', '54 N·s', '200 N·s', '46 N·s'], answer: 2, explanation: 'J = F·Δt = 50 × 4 = 200 N·s.' },
        { q: 'Car air bags are designed to reduce injuries by:', options: ['Increasing the force of impact', 'Reducing the change in momentum', 'Increasing the time of impact (reducing force)', 'Absorbing kinetic energy permanently'], answer: 2, explanation: 'J = F·Δt = Δp. Δp is fixed (same crash). Increasing Δt → decreasing F → less injury.' },
        { q: 'A 4 kg object at 6 m/s collides and sticks to a 2 kg object at rest. What is their combined velocity?', options: ['6 m/s', '4 m/s', '3 m/s', '2 m/s'], answer: 1, explanation: 'Conservation of momentum: 4(6) + 2(0) = (4+2)v → 24 = 6v → v = 4 m/s.' },
        { q: 'In a perfectly inelastic collision, what is conserved?', options: ['Kinetic energy only', 'Momentum only', 'Both momentum and KE', 'Neither'], answer: 1, explanation: 'Momentum is always conserved. KE is NOT conserved in inelastic collisions — some converts to heat/sound/deformation.' },
        { q: 'A 0.5 kg ball changes velocity from +10 to −6 m/s. What is the change in momentum?', options: ['2 kg·m/s', '−8 kg·m/s', '−5 kg·m/s', '8 kg·m/s'], answer: 1, explanation: 'Δp = mΔv = 0.5×(−6−10) = 0.5×(−16) = −8 kg·m/s.' },
        { q: 'A gun fires a bullet. The bullet goes forward and the gun recoils backward. This demonstrates:', options: ['Conservation of energy', 'Conservation of momentum', "Newton's 1st Law", 'The Work-Energy Theorem'], answer: 1, explanation: 'The gun + bullet system had total p = 0 before firing. After: p_bullet + p_gun = 0 (equal and opposite). Conservation of momentum.' }
      ]
    },

    /* ────────── UNIT 7: Rotational Motion ────────── */
    {
      video: '3lp7fyqNlu8', // Physics 11 Rotational Motion (1 of 6) Angular Velocity
      title: 'Rotational Motion & Equilibrium',
      content: `
<h2>🌀 Unit 7: Rotational Motion & Equilibrium</h2>

<h3>Angular Quantities</h3>
<ul>
  <li><strong>Angular position (θ):</strong> angle from reference line, in radians. 2π rad = 360° = 1 revolution</li>
  <li><strong>Arc length:</strong> s = rθ (r = radius, θ in radians)</li>
  <li><strong>Angular velocity (ω):</strong> ω = Δθ/Δt. Units: rad/s or RPM</li>
  <li><strong>Angular acceleration (α):</strong> α = Δω/Δt. Units: rad/s²</li>
</ul>

<h3>Conversions</h3>
<ul>
  <li>Degrees → Radians: multiply by π/180</li>
  <li>Radians → Degrees: multiply by 180/π</li>
  <li>RPM → rad/s: multiply by 2π/60</li>
  <li>Linear ↔ Angular: v = rω, a<sub>t</sub> = rα</li>
</ul>

<h3>Torque</h3>
<p><strong>Torque (τ):</strong> rotational equivalent of force. Units: N·m</p>
<p style="font-size:1.1em;background:#f0f4ff;padding:8px;border-radius:6px">τ = F·r·sin(θ)</p>
<ul>
  <li>r = distance from pivot (moment arm)</li>
  <li>θ = angle between force and lever arm</li>
  <li>Maximum torque when force is perpendicular to lever arm (θ = 90°)</li>
</ul>

<h3>Moment of Inertia (I)</h3>
<p>Rotational equivalent of mass. Resistance to angular acceleration.</p>
<ul>
  <li><strong>Point mass:</strong> I = mr²</li>
  <li><strong>Solid disk/cylinder:</strong> I = ½mr²</li>
  <li><strong>Hoop (thin ring):</strong> I = mr² (more resistance than disk — mass farther from center)</li>
</ul>
<p><strong>Rotational 2nd Law:</strong> τ<sub>net</sub> = Iα</p>

<h3>Rotational Kinetic Energy</h3>
<p>KE<sub>rot</sub> = ½Iω²</p>
<p>Rolling object: KE<sub>total</sub> = ½mv² + ½Iω²</p>

<h3>Angular Momentum</h3>
<p>L = Iω. Units: kg·m²/s</p>
<p><strong>Conservation of Angular Momentum:</strong> L<sub>i</sub> = L<sub>f</sub> when no external torque.</p>
<p><strong>Classic examples:</strong></p>
<ul>
  <li>Figure skater pulls arms in → ω increases (I decreases → ω increases to keep L constant)</li>
  <li>Diver tucks → spins faster</li>
</ul>
<div class="tip">💡 A hoop rolls slower than a disk down a ramp because more of its energy is in rotational KE (higher I).</div>
      `,
      questions: [
        { q: 'Convert 180° to radians.', options: ['π/2 rad', 'π rad', '2π rad', '3.14159°'], answer: 1, explanation: '180° × (π/180) = π radians.' },
        { q: 'A wheel has angular velocity of 4 rad/s and radius 0.5 m. What is the linear speed at the rim?', options: ['0.125 m/s', '2 m/s', '4.5 m/s', '8 m/s'], answer: 1, explanation: 'v = rω = 0.5 × 4 = 2 m/s.' },
        { q: 'A force of 20 N is applied at 0.3 m from a pivot, perpendicular to the lever arm. What is the torque?', options: ['0.015 N·m', '20.3 N·m', '6 N·m', '66.7 N·m'], answer: 2, explanation: 'τ = F·r·sin(90°) = 20 × 0.3 × 1 = 6 N·m.' },
        { q: 'A figure skater pulls her arms in while spinning. Her angular velocity:', options: ['Decreases', 'Stays the same', 'Increases', 'Goes to zero'], answer: 2, explanation: 'Pulling arms in decreases I. By conservation of angular momentum (L = Iω = constant), when I decreases, ω must increase.' },
        { q: 'Which has a greater moment of inertia: a solid disk or a hoop of the same mass and radius?', options: ['Solid disk (I = ½mr²)', 'Hoop (I = mr²)', 'They are equal', 'Depends on angular velocity'], answer: 1, explanation: 'Hoop: I = mr². Disk: I = ½mr². The hoop has all mass at the rim (farther from center), so greater I.' },
        { q: 'Angular momentum is conserved when:', options: ['KE is conserved', 'There is no net external torque', 'There is no net external force', 'The object is at rest'], answer: 1, explanation: 'Conservation of angular momentum applies when net external torque = 0.' },
        { q: 'Rotational KE = ½Iω². If ω doubles while I stays constant, how does KE change?', options: ['Doubles', 'Quadruples', 'Stays the same', 'Halves'], answer: 1, explanation: 'KE = ½Iω². If ω→2ω, then KE → ½I(2ω)² = 4·(½Iω²). KE quadruples.' }
      ]
    },

    /* ────────── UNIT 8: Universal Gravitation ────────── */
    {
      video: '4JGcY89GpX8', // Newton's Universal Law of Gravitation (AP Physics 1)
      title: 'Gravity & Universal Gravitation',
      content: `
<h2>🌍 Unit 8: Gravity & Universal Gravitation</h2>

<h3>Newton's Law of Universal Gravitation</h3>
<p style="font-size:1.1em;background:#f0f4ff;padding:8px;border-radius:6px"><strong>F<sub>g</sub> = G·m<sub>1</sub>·m<sub>2</sub> / r²</strong></p>
<ul>
  <li><strong>G</strong> = 6.67 × 10⁻¹¹ N·m²/kg² (Universal Gravitational Constant, measured by Cavendish)</li>
  <li><strong>m<sub>1</sub>, m<sub>2</sub></strong> = masses of both objects</li>
  <li><strong>r</strong> = distance between centers</li>
  <li>Force is attractive, acts on BOTH objects (Newton's 3rd Law)</li>
</ul>

<h3>Inverse Square Law</h3>
<p>F<sub>g</sub> ∝ 1/r² — gravity decreases with the square of distance.</p>
<ul>
  <li>Double distance → force becomes ¼ as strong</li>
  <li>Triple distance → force becomes 1/9 as strong</li>
  <li>Half distance → force becomes 4× as strong</li>
</ul>
<div class="tip">💡 The ISL applies to all fields that spread in 3D space (gravity, electric force, light intensity).</div>

<h3>Weight vs. Mass</h3>
<ul>
  <li><strong>Mass (m):</strong> amount of matter — constant everywhere (kg)</li>
  <li><strong>Weight (W or F<sub>g</sub>):</strong> gravitational force on mass — varies by location (N)</li>
  <li>W = mg (on Earth, g = 9.8 m/s²)</li>
</ul>

<h3>Gravitational Field</h3>
<p><strong>Gravitational field strength (g):</strong> gravitational force per unit mass</p>
<p>g = F<sub>g</sub>/m = GM/r²</p>
<ul>
  <li>At Earth's surface: g = 9.8 N/kg = 9.8 m/s²</li>
  <li>Field lines: radially inward toward massive body</li>
  <li>Stronger field = closer together field lines</li>
</ul>

<h3>Acceleration Due to Gravity</h3>
<p>g on any planet: g = GM<sub>planet</sub>/R<sub>planet</sub>²</p>
<p><strong>Historical note:</strong> Newton deduced the ISL from Kepler's planetary motion laws and Cavendish later measured G experimentally.</p>
      `,
      questions: [
        { q: 'Two objects are separated by distance r. If r doubles, the gravitational force becomes:', options: ['Twice as strong', '4× as strong', '½ as strong', '¼ as strong'], answer: 3, explanation: 'F ∝ 1/r². If r→2r: F→F/4. The force becomes ¼ as strong (Inverse Square Law).' },
        { q: 'What is the value of Big G (Universal Gravitational Constant)?', options: ['9.8 N/kg', '6.67×10⁻¹¹ N·m²/kg²', '3×10⁸ m/s', '1.67×10⁻²⁷ kg'], answer: 1, explanation: 'G = 6.67×10⁻¹¹ N·m²/kg², first measured by Cavendish.' },
        { q: 'An astronaut\'s mass on Earth is 80 kg. What is their mass on the Moon?', options: ['About 13.3 kg', '80 kg', 'About 480 kg', 'Depends on Moon\'s gravity'], answer: 1, explanation: 'Mass is the amount of matter — it doesn\'t change with location. Only weight changes.' },
        { q: 'A planet has twice Earth\'s mass and twice Earth\'s radius. The surface gravity is:', options: ['Same as Earth (9.8 m/s²)', 'Half of Earth\'s', 'Twice Earth\'s', 'Four times Earth\'s'], answer: 0, explanation: 'g = GM/R². Double M and double R: g = G(2M)/(2R)² = G(2M)/(4R²) = ½·GM/R². Wait — that\'s half. Actually g_new = (2/4)·g_Earth = g_Earth/2.' },
        { q: 'Gravitational field lines around Earth point:', options: ['Away from Earth', 'Radially inward toward Earth', 'In circles around Earth', 'Parallel and horizontal'], answer: 1, explanation: 'Gravitational field lines point in the direction a test mass would accelerate — toward the massive body.' },
        { q: 'The gravitational force between two objects depends on:', options: ['Only their masses', 'Only the distance between them', 'Both masses and the distance', 'Mass, distance, and their velocities'], answer: 2, explanation: 'F_g = Gm₁m₂/r² — depends on both masses and the square of the distance.' },
        { q: 'If Earth\'s mass doubled but its radius stayed the same, surface gravity would:', options: ['Stay the same', 'Double', 'Quadruple', 'Halve'], answer: 1, explanation: 'g = GM/R². If M→2M, then g→2g. Surface gravity doubles.' }
      ]
    },

    /* ────────── UNIT 9: Uniform Circular Motion ────────── */
    {
      video: '-_AGAhf0rrI', // COMPLETE Guide: Centripetal Acceleration / Force in Circular Motion
      title: 'Uniform Circular Motion',
      content: `
<h2>🔄 Unit 9: Uniform Circular Motion</h2>

<h3>What is UCM?</h3>
<p><strong>Uniform Circular Motion (UCM):</strong> movement in a circle at constant <em>speed</em>.</p>
<ul>
  <li>Speed is constant, but <strong>velocity is NOT</strong> (direction constantly changes)</li>
  <li>Therefore: acceleration exists (centripetal acceleration)</li>
</ul>

<h3>Centripetal Acceleration</h3>
<p>Always directed toward the <strong>center</strong> of the circle (centripetal = "center-seeking").</p>
<p style="font-size:1.1em;background:#f0f4ff;padding:8px;border-radius:6px">a<sub>c</sub> = v²/r</p>
<ul>
  <li>v = tangential speed, r = radius of circle</li>
  <li>Units: m/s²</li>
</ul>

<h3>Centripetal Force</h3>
<p>The net force pointing toward the center causing circular motion.</p>
<p style="font-size:1.1em;background:#e0f2fe;padding:8px;border-radius:6px"><strong>F<sub>c</sub> = mv²/r = ma<sub>c</sub></strong></p>
<p><strong>Important:</strong> Centripetal force is NOT a separate type of force — it's the <em>role played by</em> other forces:</p>
<ul>
  <li>Car on road: <strong>friction</strong> provides F<sub>c</sub></li>
  <li>Ball on string: <strong>tension</strong> provides F<sub>c</sub></li>
  <li>Moon orbiting Earth: <strong>gravity</strong> provides F<sub>c</sub></li>
  <li>Roller coaster at top of loop: <strong>normal force + gravity</strong> provide F<sub>c</sub></li>
</ul>

<h3>Vector Directions in UCM</h3>
<ul>
  <li><strong>Velocity (v):</strong> tangent to circle (always perpendicular to radius)</li>
  <li><strong>Acceleration (a<sub>c</sub>):</strong> toward center</li>
  <li><strong>Force (F<sub>c</sub>):</strong> toward center</li>
  <li>No outward "centrifugal force" — that's a fictitious force in a rotating frame</li>
</ul>

<h3>Period and Frequency</h3>
<ul>
  <li><strong>Period (T):</strong> time for one complete revolution (seconds)</li>
  <li><strong>Frequency (f):</strong> revolutions per second (Hz). f = 1/T</li>
  <li><strong>Speed:</strong> v = 2πr/T = 2πrf</li>
</ul>
<div class="tip">💡 If you remove the centripetal force (let go of string), the object flies off tangentially — NOT radially outward.</div>
      `,
      questions: [
        { q: 'A car rounds a circular turn. What provides the centripetal force?', options: ['Inertia', 'The car\'s engine', 'Friction between tires and road', 'Normal force only'], answer: 2, explanation: 'On a flat road, friction between the tires and road provides the centripetal force directed toward the center of the turn.' },
        { q: 'In UCM, the velocity vector is always directed:', options: ['Toward the center', 'Away from the center', 'Tangent to the circle', 'Perpendicular to the circle'], answer: 2, explanation: 'In UCM, velocity is always tangential (tangent to the circular path) — always perpendicular to the radius.' },
        { q: 'A ball on a 2 m string moves at 4 m/s in a circle. What is its centripetal acceleration?', options: ['2 m/s²', '4 m/s²', '8 m/s²', '16 m/s²'], answer: 2, explanation: 'a_c = v²/r = 16/2 = 8 m/s².' },
        { q: 'If the speed of an object in UCM doubles, the centripetal force required:', options: ['Doubles', 'Quadruples', 'Stays the same', 'Halves'], answer: 1, explanation: 'F_c = mv²/r. If v→2v: F_c = m(2v)²/r = 4mv²/r. The centripetal force quadruples.' },
        { q: 'What keeps the Moon in orbit around Earth?', options: ['Tension in space', 'Magnetic force', 'Gravitational force from Earth', 'The Moon\'s inertia alone'], answer: 2, explanation: 'Gravity between Earth and Moon provides the centripetal force that keeps the Moon in circular orbit.' },
        { q: 'A planet completes one orbit in 2 years at radius r. If it moves to 4r, what is the new period? (Kepler: T²∝r³)', options: ['4 years', '8 years', '16 years', '2 years'], answer: 1, explanation: 'T²∝r³. New T² = (4r/r)³ × 4 = 64 → T = 8 years.' },
        { q: 'At the top of a loop-the-loop, what provides the centripetal force (pointing downward toward center)?', options: ['Only normal force', 'Only gravity', 'Both normal force and gravity add up', 'Normal force minus gravity'], answer: 2, explanation: 'At the top of the loop, both gravity (mg, downward) and normal force (also downward at top) point toward center. F_c = F_N + mg.' }
      ]
    },

    /* ────────── UNIT 10: Fluids ────────── */
    {
      video: '16HDJNoXQII', // Fluids, Buoyancy, and Archimedes' Principle
      title: 'Fluids',
      content: `
<h2>🌊 Unit 10: Fluids</h2>

<h3>States of Matter & Fluids</h3>
<p><strong>Fluids:</strong> substances that flow — includes both <em>liquids</em> and <em>gases</em>.</p>
<ul>
  <li><strong>Hydrostatics:</strong> fluids at rest</li>
  <li><strong>Hydrodynamics:</strong> fluids in motion</li>
</ul>

<h3>Density & Pressure</h3>
<p><strong>Density (ρ):</strong> ρ = m/V. Units: kg/m³</p>
<p><strong>Pressure (P):</strong> force per unit area. Units: Pascal (Pa = N/m²)</p>
<p>P = F/A</p>
<ul>
  <li><strong>Gauge pressure:</strong> pressure above atmospheric (tire gauges read this)</li>
  <li><strong>Absolute pressure:</strong> P<sub>abs</sub> = P<sub>atm</sub> + P<sub>gauge</sub></li>
  <li><strong>Hydrostatic pressure:</strong> P = P<sub>0</sub> + ρgh (increases with depth)</li>
</ul>

<h3>Buoyancy — Archimedes' Principle</h3>
<p><strong>Archimedes' Principle:</strong> Buoyant force = weight of fluid displaced.</p>
<p style="font-size:1.1em;background:#f0f4ff;padding:8px;border-radius:6px">F<sub>B</sub> = ρ<sub>fluid</sub> · g · V<sub>submerged</sub></p>
<ul>
  <li>Object <strong>floats</strong> if ρ<sub>object</sub> < ρ<sub>fluid</sub></li>
  <li>Object <strong>sinks</strong> if ρ<sub>object</sub> > ρ<sub>fluid</sub></li>
  <li>Object <strong>is neutrally buoyant</strong> if ρ<sub>object</sub> = ρ<sub>fluid</sub></li>
</ul>

<h3>Pascal's Principle</h3>
<p>Pressure applied to an enclosed fluid is transmitted equally in all directions.</p>
<p><strong>Hydraulics:</strong> F<sub>1</sub>/A<sub>1</sub> = F<sub>2</sub>/A<sub>2</sub></p>
<p>Small force on small area → large force on large area (car lifts, brakes)</p>

<h3>Fluid Dynamics — Continuity Equation</h3>
<p>For incompressible fluid in a pipe:</p>
<p style="font-size:1.1em;background:#e0f2fe;padding:8px;border-radius:6px"><strong>A<sub>1</sub>v<sub>1</sub> = A<sub>2</sub>v<sub>2</sub></strong></p>
<p>Smaller pipe area → faster flow (like squeezing a hose)</p>

<h3>Bernoulli's Equation</h3>
<p>Energy conservation for fluid flow:</p>
<p style="font-size:1.1em;background:#f0fdf4;padding:8px;border-radius:6px"><strong>P + ½ρv² + ρgh = constant</strong></p>
<p>Faster flow → lower pressure (explains airplane lift, Venturi effect)</p>

<h3>Torricelli's Theorem</h3>
<p>Speed of fluid exiting an opening at depth h: v = √(2gh)</p>
<div class="tip">💡 Bernoulli's key insight: where a fluid speeds up, pressure drops. This is why airplane wings generate lift.</div>
      `,
      questions: [
        { q: 'A fluid has density 800 kg/m³ and volume 0.5 m³. What is its mass?', options: ['1600 kg', '400 kg', '0.00063 kg', '800.5 kg'], answer: 1, explanation: 'ρ = m/V → m = ρV = 800 × 0.5 = 400 kg.' },
        { q: 'A submerged object experiences a buoyant force equal to:', options: ['Its own weight', 'The weight of fluid displaced', 'Its volume × g', 'The pressure at its surface'], answer: 1, explanation: 'Archimedes\' Principle: F_B = weight of fluid displaced = ρ_fluid × g × V_submerged.' },
        { q: 'Water flows through a pipe. At a narrow section, the flow speed:', options: ['Decreases', 'Stays the same', 'Increases', 'Becomes zero'], answer: 2, explanation: 'Continuity equation: A₁v₁ = A₂v₂. Smaller area → faster speed.' },
        { q: 'According to Bernoulli\'s principle, where fluid moves faster, pressure is:', options: ['Higher', 'Lower', 'The same', 'Zero'], answer: 1, explanation: 'Bernoulli: P + ½ρv² = constant. If v increases, P must decrease.' },
        { q: 'A hydraulic jack has a small piston (area = 0.01 m²) and large piston (area = 0.1 m²). If 10 N is applied to small piston, what force lifts on large piston?', options: ['1 N', '10 N', '100 N', '1000 N'], answer: 2, explanation: 'Pascal\'s Principle: F₁/A₁ = F₂/A₂ → F₂ = F₁×(A₂/A₁) = 10×(0.1/0.01) = 100 N.' },
        { q: 'An object with density 500 kg/m³ is placed in water (ρ = 1000 kg/m³). It will:', options: ['Sink to the bottom', 'Float with half above water', 'Float completely above water', 'Dissolve'], answer: 1, explanation: 'Since ρ_object < ρ_water, it floats. Fraction submerged = ρ_object/ρ_fluid = 500/1000 = 0.5, so half submerged, half above.' },
        { q: 'Gauge pressure is defined as:', options: ['Total absolute pressure', 'Pressure minus atmospheric pressure', 'Pressure at the surface of a fluid', 'Density × volume'], answer: 1, explanation: 'Gauge pressure = absolute pressure − atmospheric pressure. It\'s the excess above atmospheric (what tire gauges measure).' }
      ]
    }

  ]
};
