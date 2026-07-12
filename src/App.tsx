import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, Download, Mail, Menu, X } from 'lucide-react'

const chapters = [
  { id: 'prologue', label: 'Prologue' },
  { id: 'journey', label: 'The journey' },
  { id: 'work', label: 'Selected work' },
  { id: 'systems', label: 'How I build' },
  { id: 'contact', label: 'Let’s talk' },
]

const roles = [
  {
    years: '2025 — now',
    number: '04',
    title: 'CTO & Full-Stack Developer',
    company: 'Bogzin',
    story: 'Leading a 10+ person cross-functional team while staying close to the code. I turn product questions into architecture, releases, and systems that hold up in production.',
    tags: ['Kotlin', 'Next.js', 'PostgreSQL', 'Docker Swarm'],
  },
  {
    years: '2025 — 2026',
    number: '03',
    title: 'AI Backend Developer & PM',
    company: '3D Continuum · Custom RAG',
    story: 'Built retrieval systems from ingestion to answer: document parsing, chunking, embeddings, vector search, and the services around them.',
    tags: ['FastAPI', 'Neo4j', 'AWS Bedrock', 'Redis'],
  },
  {
    years: '2020 — 2023',
    number: '02',
    title: 'Frontend Lead → Project Manager',
    company: 'Nilasoft',
    story: 'Grew from shipping interfaces to guiding delivery. Led frontend work, contributed to Spring services, ran sprints, and learned how teams make good software together.',
    tags: ['Angular', 'React', 'Spring Boot', 'Leadership'],
  },
  {
    years: '2018 — 2020',
    number: '01',
    title: 'Intern → Frontend Developer',
    company: 'Nilasoft',
    story: 'The beginning: reusable components, real APIs, stubborn bugs, and the habit of asking why before deciding how.',
    tags: ['TypeScript', 'Angular', 'HTML', 'CSS'],
  },
]

const projects = [
  {
    index: '01', title: 'Bogzin Platform', type: 'Commerce infrastructure',
    summary: 'The operating system behind a B2B/B2C marketplace — from trust and verification to the final movement of inventory and money.',
    details: ['Order & payment lifecycles', 'Wallets, refunds & reservations', 'Admin and operational tooling'],
    color: 'clay',
  },
  {
    index: '02', title: 'Custom RAG', type: 'Applied AI',
    summary: 'A retrieval backend that makes large document collections useful, searchable, and grounded for domain-specific conversations.',
    details: ['Ingestion & chunking pipelines', 'Embeddings & vector retrieval', 'Bedrock-powered answer flows'],
    color: 'moss',
  },
  {
    index: '03', title: 'DecentraBNB', type: 'Blockchain product',
    summary: 'A product experience for a decentralized hospitality concept, balancing unfamiliar technology with familiar, usable journeys.',
    details: ['Frontend team leadership', 'Angular & React interfaces', 'Java backend contribution'],
    color: 'ink',
  },
]

const principles = [
  ['01', 'Start with the system', 'Map the actors, states, failure modes, and business rules before choosing a framework.'],
  ['02', 'Make delivery visible', 'Small releases, useful reviews, observable services, and a shared picture of what “done” means.'],
  ['03', 'Stay with the outcome', 'A feature is not finished at merge. Production behavior and user value are part of the work.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('prologue')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-30% 0px -60% 0px' },
    )
    chapters.forEach(({ id }) => { const node = document.getElementById(id); if (node) observer.observe(node) })
    return () => observer.disconnect()
  }, [])

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <button className="wordmark" onClick={() => go('prologue')} aria-label="Back to top">
          <span>AS</span><span className="wordmark-text">FIELD NOTES<br />VOL. 08</span>
        </button>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {chapters.map((item, i) => (
            <button key={item.id} className={active === item.id ? 'active' : ''} onClick={() => go(item.id)}>
              <span>0{i + 1}</span>{item.label}
            </button>
          ))}
        </nav>
        <a className="availability" href="mailto:aref.shadbakhsh@gmail.com"><i /> Available for the right project</a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {menuOpen && <div className="mobile-menu">{chapters.map(item => <button key={item.id} onClick={() => go(item.id)}>{item.label}</button>)}</div>}

      <main>
        <section className="hero" id="prologue">
          <div className="eyebrow"><span>Tehran · Remote</span><span>Est. 2018</span></div>
          <div className="hero-title-wrap">
            <p className="issue-label">A working journal of<br />products, systems & teams</p>
            <h1>Aref<br /><em>Shadbakhsh.</em></h1>
          </div>
          <div className="hero-bottom">
            <div className="intro-copy">
              <p>I’m a full-stack developer and technical leader who moves between <strong>code, architecture, and people</strong> to turn complicated product ideas into dependable systems.</p>
              <button onClick={() => go('journey')}>Begin the story <ArrowDown size={18} /></button>
            </div>
            <div className="hero-note">
              <span>Currently</span>
              <p>CTO at Bogzin, building commerce infrastructure and exploring grounded AI systems.</p>
            </div>
          </div>
          <div className="orbit" aria-hidden="true"><span>8</span><small>YEARS<br />BUILDING</small></div>
        </section>

        <section className="journey section" id="journey">
          <div className="section-heading">
            <span className="kicker">Chapter one · The journey</span>
            <h2>From the interface<br />to the <em>whole system.</em></h2>
            <p>Each role widened the frame — from a single component, to a product, to the team and infrastructure behind it.</p>
          </div>
          <div className="timeline">
            {roles.map(role => (
              <article className="role" key={role.number}>
                <div className="role-meta"><span>{role.number}</span><time>{role.years}</time></div>
                <div className="role-body"><p className="company">{role.company}</p><h3>{role.title}</h3><p>{role.story}</p><div className="tags">{role.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
              </article>
            ))}
          </div>
        </section>

        <section className="work section" id="work">
          <div className="section-heading light">
            <span className="kicker">Chapter two · Selected work</span>
            <h2>Systems with<br /><em>something at stake.</em></h2>
          </div>
          <div className="project-grid">
            {projects.map(project => (
              <article className={`project ${project.color}`} key={project.index}>
                <div className="project-top"><span>{project.index}</span><span>{project.type}</span></div>
                <div className="project-symbol" aria-hidden="true"><span /><span /><span /></div>
                <h3>{project.title}</h3><p>{project.summary}</p>
                <ul>{project.details.map(item => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
          <p className="confidential-note">The best work is often private. These notes focus on the systems, decisions, and outcomes I can share.</p>
        </section>

        <section className="systems section" id="systems">
          <div className="systems-intro">
            <span className="kicker">Chapter three · How I build</span>
            <blockquote>“Technology matters.<br />The <em>way we reason</em><br />about it matters more.”</blockquote>
          </div>
          <div className="principles">
            {principles.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
          <div className="toolbox">
            <span>Working vocabulary</span>
            <p>Kotlin · Java · Spring Boot · Angular · React · Next.js · TypeScript · PostgreSQL · Redis · Neo4j · FastAPI · Docker · Nginx · GitLab CI/CD · AWS</p>
          </div>
        </section>

        <section className="contact section" id="contact">
          <span className="kicker">Epilogue · What’s next?</span>
          <h2>Let’s build the<br /><em>next chapter.</em></h2>
          <p>I’m interested in ambitious products, thoughtful engineering teams, and problems that deserve both technical depth and clear leadership.</p>
          <div className="contact-actions">
            <a className="primary-action" href="mailto:aref.shadbakhsh@gmail.com"><Mail size={20} /> Start a conversation <ArrowUpRight size={20} /></a>
            <a className="secondary-action" href="/Aref_Shadbakhsh_Resume.pdf" download><Download size={18} /> Download résumé</a>
          </div>
          <footer><span>© {new Date().getFullYear()} Aref Shadbakhsh</span><span>Built with care in Tehran</span><a href="mailto:aref.shadbakhsh@gmail.com">aref.shadbakhsh@gmail.com</a></footer>
        </section>
      </main>
    </div>
  )
}

export default App
