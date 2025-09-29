
import { headers } from 'next/headers';

function absoluteUrl(path = '') {
  const h = headers();
  const host = h.get('x-forwarded-host') ?? h.get('host');
  const proto = h.get('x-forwarded-proto') ?? 'https';
  return `${proto}://${host}${path}`;
}

async function fetchProjects() {
  const res = await fetch(absoluteUrl('/api/projects'), { cache: 'no-store' });
  if (!res.ok) return [];
  return res.json();
}

export default async function Page() {
  const projects = await fetchProjects();
  return (
    <main id="home" className="container">
      <header>
        <div className="container">
          <nav>
            <a href="#home" className="brand">Shehroze Amir</a>
            <div className="nav-links">
              <a href="#experience">Experience</a>
              <a href="#research">Research</a>
              <a href="#projects">Projects</a>
              <a href="#publications">Publications</a>
              <a href="#education">Education</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="nav-links">
              <a href="https://github.com/shehrozeamir5" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/shehroze-amir-sheeri/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://scholar.google.com/citations?user=S605aWcAAAAJ&hl=en" target="_blank" rel="noreferrer">Scholar</a>
            </div>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="grid hero-grid">
          <div>
            <h1 className="title">Hi, I’m Shehroze</h1>
            <p className="subtitle">RF / Microwave • Antennas • FPGA • Embedded Systems</p>
            <div style={{display:'flex',gap:12,flexWrap:'wrap',margin:'20px 0 10px'}}>
              <a className="btn" href="#projects">See my work</a>
              <a className="btn btn-outline" href="/resume_shehroze.pdf" download>Download Résumé</a>
            </div>
            <div style={{display:'flex',gap:8,flexWrap:'wrap',marginTop:16}}>
              <span className="pill">Calgary, AB, Canada</span>
              <a className="pill" href="mailto:shehrozeamir5@gmail.com">shehrozeamir5@gmail.com</a>
              <a className="pill" href="tel:+18258827555">+1 (825) 882‑7555</a>
            </div>
          </div>
          <div>
            <div className="card">
              <div className="head"><h3>Core Skills</h3></div>
              <div className="body">
                <div className="muted" style={{textTransform:'uppercase',fontSize:12,marginBottom:6}}>Software</div>
                <div>
                  <span className="badge">ADS</span><span className="badge">CST</span><span className="badge">HFSS</span><span className="badge">Lumerical</span><span className="badge">MATLAB/Simulink</span><span className="badge">Vivado</span><span className="badge">Altium</span><span className="badge">Virtuoso</span><span className="badge">Keil</span><span className="badge">Raspberry Pi OS</span><span className="badge">LaTeX</span>
                </div>
                <div className="muted" style={{textTransform:'uppercase',fontSize:12,margin:'14px 0 6px'}}>RF Measurements</div>
                <div>
                  <span className="badge">Keysight M9019A VNA</span><span className="badge">Agilent N5230A VNA</span><span className="badge">R&S FSW43</span><span className="badge">NI 5793 TX</span><span className="badge">NI 5646R TRX</span><span className="badge">Logic analyzers</span><span className="badge">RF power meters</span>
                </div>
                <div className="muted" style={{textTransform:'uppercase',fontSize:12,margin:'14px 0 6px'}}>Programming & Technical</div>
                <div>
                  <span className="badge">C/C++</span><span className="badge">Python</span><span className="badge">Verilog</span><span className="badge">FreeRTOS</span><span className="badge">MQTT</span><span className="badge">Linux kernel</span><span className="badge">RFSoC</span><span className="badge">RF PCB & antennas</span><span className="badge">RF debugging/testing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience">
        <h2>Experience</h2>
        <div className="cards">
          <div className="card" style={{gridColumn:'span 6'}}>
            <div className="head"><h3>Hardware Design Engineer · <span className="muted">Electro‑dynamic Systems (EDS)</span></h3><div className="muted" style={{fontSize:14}}>Jun 2023 – Jul 2025 · NSTP, Islamabad</div></div>
            <div className="body">
              <ul>
                <li>Project lead: Ku‑band SATCOM phased array design & development.</li>
                <li>QTRM + frequency converter unit for 160 W, 64‑element X‑band AESA pulse‑Doppler radar; supported technology transfer (TOT).</li>
                <li>X‑band FMCW radar components (PLL synthesizer, spectrum analyzer) with ~5% reduction in signal degradation.</li>
                <li>Implemented MUSIC DOA on ZCU‑104+ FPGA & AD9361; extended detection to 6 GHz.</li>
                <li>Synchronized multi‑chip ADRV9002 transceivers for phase & delay alignment across channels.</li>
              </ul>
            </div>
          </div>
          <div className="card" style={{gridColumn:'span 6'}}>
            <div className="head"><h3>Research Engineer (Part‑time) · <span className="muted">Fusion Technologies</span></h3><div className="muted" style={{fontSize:14}}>Jan 2025 – Aug 2025 · Remote (UK)</div></div>
            <div className="body">
              <ul>
                <li>Time‑tagger photon counting for laser scanning microscopy; frequency stability using modified Allan deviation.</li>
                <li>Validated algorithms on Xilinx ZCU111 RFSoC.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="research" style={{marginTop:28}}>
        <h2>Research</h2>
        <div className="cards">
          <div className="card" style={{gridColumn:'span 4'}}>
            <div className="head"><h3>iRadio Lab, University of Calgary</h3><div className="muted" style={{fontSize:14}}>Graduate Researcher (Advisor: Prof. F. M. Ghannouchi)</div><div className="muted" style={{fontSize:12}}>Aug 2025 – Present</div></div>
            <div className="body"><ul><li>Programming ZCU216 RFSoC</li><li>NN‑based DPD: PA modeling & linearization</li></ul></div>
          </div>
          <div className="card" style={{gridColumn:'span 4'}}>
            <div className="head"><h3>AEEL Lab (KSA)</h3><div className="muted" style={{fontSize:14}}>Researcher (Advisor: Dr. Muhammad Amin)</div><div className="muted" style={{fontSize:12}}>Jun 2023 – Aug 2025</div></div>
            <div className="body"><ul><li>EIT resonator for passive beam steering at sub‑THz.</li><li>Anomalous Phase Detection for GPR; calibrated phase‑slope double‑shift near antenna resonance.</li></ul></div>
          </div>
          <div className="card" style={{gridColumn:'span 4'}}>
            <div className="head"><h3>TUIL Virtual Research Lab</h3><div className="muted" style={{fontSize:14}}>Research Engineer (Advisor: Dr. Nosherwan Shoaib)</div><div className="muted" style={{fontSize:12}}>Jun 2024 – Jun 2025</div></div>
            <div className="body"><ul><li>GNSS record/replay & simulator (GPS L1/L2/L5, BeiDou B1/B2/B3).</li><li>Generated L1 & B1 on Raspberry Pi 4; TX via bladeRF.</li></ul></div>
          </div>
        </div>
      </section>

      <section id="projects" style={{marginTop:28}}>
        <h2>Selected Projects</h2>
        <div className="cards">
          {projects.map((p:any) => (
            <div className="card" style={{gridColumn:'span 4'}} key={p.title}>
              <div className="head"><h3>{p.title}</h3></div>
              <div className="body"><p className="muted">{p.desc}</p><div>{p.tags.map((t:string)=>(<span className="badge" key={t}>{t}</span>))}</div></div>
            </div>
          ))}
        </div>
      </section>

      <section id="publications" style={{marginTop:28}}>
        <h2>Publications</h2>
        <div className="cards">
          <div className="card" style={{gridColumn:'span 4'}}><div className="head"><h3>Fluid‑Driven Pattern Reconfigurable Antenna With Cavity‑Backed Slot</h3><div className="muted">IEEE T-AP (Working)</div></div><div className="body"><div className="muted">Awab Muhammad, Shehroze Amir, Adnan Nadeem, M. U. Khan, R. K. Arya, P. Chaudhary, R. Mittra</div></div></div>
          <div className="card" style={{gridColumn:'span 4'}}><div className="head"><h3>Anomalous Phase Detection in Monostatic GPR Sensing</h3><div className="muted">Nature Communications (Submitted)</div></div><div className="body"><div className="muted">S. Amir, M. Amin, O. Siddiqui, T. Almoneef</div></div></div>
          <div className="card" style={{gridColumn:'span 4'}}><div className="head"><h3>A ‘See‑Through’ Metallic Sensor via Proximity Resonant Coupling</h3><div className="muted">IEEE Sensors Journal (Submitted)</div></div><div className="body"><div className="muted">T. Almoneef, S. Amir, M. Amin, O. Siddiqui</div></div></div>
        </div>
      </section>

      <section id="education" style={{marginTop:28}}>
        <h2>Education</h2>
        <div className="cards">
          <div className="card" style={{gridColumn:'span 6'}}><div className="head"><h3>University of Calgary</h3><div className="muted">MSc, Electrical Engineering · Aug 2025 – Jun 2027</div></div><div className="body"><div className="muted">Supervisor: Prof. F. M. Ghannouchi</div></div></div>
          <div className="card" style={{gridColumn:'span 6'}}><div className="head"><h3>NUST</h3><div className="muted">BE, Electrical Engineering (CGPA 3.56/4.0) · Aug 2019 – Jun 2023</div></div><div className="body"><div className="muted">Rector’s Gold Medal nominee (FYP); 3rd place UG Open House (CRPA)</div></div></div>
        </div>
      </section>

      <section id="contact" style={{margin:'28px 0 8px'}}>
        <h2>Contact</h2>
        <div className="card"><div className="body" style={{display:'flex',gap:12,flexWrap:'wrap',alignItems:'center'}}>
          <a className="btn btn-outline" href="mailto:shehrozeamir5@gmail.com">Email</a>
          <a className="btn btn-outline" href="tel:+18258827555">Call</a>
          <a className="btn btn-outline" target="_blank" rel="noreferrer" href="https://github.com/shehrozeamir5">GitHub</a>
          <a className="btn btn-outline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/shehroze-amir-sheeri/">LinkedIn</a>
          <a className="btn btn-outline" target="_blank" rel="noreferrer" href="https://scholar.google.com/citations?user=S605aWcAAAAJ&hl=en">Google Scholar</a>
          <span className="muted" style={{marginLeft:'auto'}}>Open to research & industry collaborations.</span>
        </div></div>
      </section>

      <div className="footer">© {new Date().getFullYear()} Shehroze Amir. All rights reserved.</div>
    </main>
  );
}
