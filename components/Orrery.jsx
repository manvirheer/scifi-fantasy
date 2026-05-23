export default function Orrery() {
  const CX = 960;
  const CY = 90;

  const planets = [
    { name: "Mercury", r: 110, pr: 5,   period: 14,  a0: 150 },
    { name: "Venus",   r: 170, pr: 7,   period: 22,  a0: 200 },
    { name: "Earth",   r: 235, pr: 8,   period: 30,  a0: 175 },
    { name: "Mars",    r: 305, pr: 6.5, period: 42,  a0: 215 },
    { name: "Jupiter", r: 395, pr: 18,  period: 70,  a0: 168 },
    { name: "Saturn",  r: 500, pr: 15,  period: 95,  a0: 200, ring: true },
    { name: "Uranus",  r: 600, pr: 11,  period: 130, a0: 158 },
    { name: "Neptune", r: 720, pr: 12,  period: 170, a0: 188 },
  ];

  const rays = [];
  const rayCount = 40;
  for (let i = 0; i < rayCount; i++) {
    const a = (i * 360) / rayCount;
    const tier = i % 4;
    const long = tier === 0;
    const med  = tier === 2;
    const inner = 38;
    const outer = inner + (long ? 60 : med ? 36 : 20);
    rays.push(
      <line
        key={i}
        x1={CX} y1={CY - inner}
        x2={CX} y2={CY - outer}
        stroke="currentColor"
        strokeWidth={long ? 1.6 : med ? 0.9 : 0.6}
        opacity={long ? 0.95 : med ? 0.7 : 0.45}
        transform={`rotate(${a} ${CX} ${CY})`}
        strokeLinecap="round"
      />
    );
  }

  const arrow = (r, angDeg, size = 7) => {
    const a = (angDeg * Math.PI) / 180;
    const x = CX + r * Math.cos(a);
    const y = CY + r * Math.sin(a);
    return (
      <g transform={`translate(${x} ${y}) rotate(${angDeg + 90})`}>
        <path d={`M 0 ${-size} L ${size*0.7} ${size*0.7} L 0 ${size*0.2} L ${-size*0.7} ${size*0.7} Z`} fill="currentColor" opacity="0.9" />
      </g>
    );
  };

  const stars = [
    [60,180,1.3],[140,90,0.8],[210,40,1.0],[290,100,0.7],[80,260,1.1],[40,360,0.9],
    [120,420,1.2],[200,500,0.8],[60,580,1.0],[160,650,0.7],[230,730,1.1],[340,780,0.9],
    [430,820,1.0],[540,860,0.8],[640,890,1.2],[750,920,0.9],[280,330,0.7],[380,260,0.9],
    [460,180,0.8],[550,140,0.6],[660,80,0.7],[770,60,0.5],[180,180,0.6],[340,460,1.3],
    [420,540,0.7],[510,620,1.0],[620,700,0.8],[720,760,1.0],[820,820,0.6],[900,880,0.8],
    [40,500,0.6],[150,560,0.5],[260,610,0.7],[380,660,0.5],[490,720,0.6],[580,790,0.7],
    [780,400,0.5],[700,300,0.6],[820,500,0.5],[900,640,0.6],[860,720,0.5],[940,780,0.4],
    [220,250,0.5],[420,380,0.4],[600,540,0.5],[150,720,0.5],[330,580,0.5],[520,470,0.4],
    [60,720,0.4],[100,820,0.6],[300,860,0.5],[480,930,0.5],[660,960,0.4],[860,960,0.5],
  ];

  return (
    <div className="orrery" aria-hidden="true">
      <svg viewBox="0 0 1000 1000" className="orrery-svg" preserveAspectRatio="xMaxYMin meet">
        <defs>
          <radialGradient id="sun-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#ffffff" />
            <stop offset="55%"  stopColor="#e8e6e0" />
            <stop offset="100%" stopColor="#7d7a72" />
          </radialGradient>
          <radialGradient id="sun-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="55%"  stopColor="#ffffff" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="planet-shade" cx="32%" cy="32%" r="80%">
            <stop offset="0%"   stopColor="#e8e6e0" />
            <stop offset="55%"  stopColor="#8a877f" />
            <stop offset="100%" stopColor="#070707" />
          </radialGradient>
        </defs>

        {stars.map(([x,y,r], i) => (
          <circle key={i} cx={x} cy={y} r={r} fill="currentColor" opacity={0.35 + (r/3)} />
        ))}

        <circle cx={CX} cy={CY} r={180} fill="url(#sun-halo)" />

        {planets.map((p, i) => (
          <circle
            key={p.name}
            cx={CX} cy={CY} r={p.r}
            fill="none"
            stroke="currentColor"
            strokeWidth={i >= 4 ? 0.9 : 0.7}
            opacity={0.65}
            strokeDasharray={i % 2 === 0 ? "5 7" : "3 7"}
          />
        ))}

        {arrow(170, 130)}
        {arrow(235, 200)}
        {arrow(395, 150)}
        {arrow(500, 175)}
        {arrow(600, 135)}
        {arrow(720, 110)}

        <g className="orrery-sun-rays">{rays}</g>

        <g>
          <circle cx={CX} cy={CY} r={38} fill="url(#sun-grad)" stroke="#ffffff" strokeWidth="1.4" />
        </g>

        {planets.map((p) => (
          <g
            key={p.name}
            className="orrery-orbit"
            style={{
              animation: `orrery-rot ${p.period}s linear infinite`,
              transformOrigin: `${CX}px ${CY}px`,
              transformBox: "view-box",
            }}
            transform={`rotate(${p.a0} ${CX} ${CY})`}
          >
            <g transform={`translate(${CX + p.r} ${CY})`}>
              <circle r={p.pr + 2} fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.35" />
              <circle r={p.pr} fill="url(#planet-shade)" stroke="#ffffff" strokeWidth="0.7" />
              <path
                d={`M 0 ${-p.pr} A ${p.pr} ${p.pr} 0 0 1 0 ${p.pr} Z`}
                fill="#0a0805" opacity="0.6"
              />
              {p.ring && (
                <ellipse
                  rx={p.pr + 9} ry={p.pr * 0.38}
                  fill="none" stroke="#ffffff" strokeWidth="1.1" opacity="0.95"
                  transform="rotate(-18)"
                />
              )}
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
}
