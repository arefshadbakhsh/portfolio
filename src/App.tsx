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
    tags: ['Kotlin', 'Spring Boot', 'Angular', 'Next.js', 'PostgreSQL', 'Redis', 'Docker Swarm', 'Nginx', 'GitLab CI/CD'],
  },
  {
    years: '2025 — 2026',
    number: '03',
    title: 'AI Backend Developer & PM',
    company: '3D Continuum · Custom RAG',
    story: 'Built retrieval systems from ingestion to answer: document parsing, chunking, embeddings, vector search, and the services around them.',
    tags: ['Python', 'FastAPI', 'Spring Boot', 'Neo4j', 'PostgreSQL', 'Redis', 'AWS Bedrock', 'SageMaker', 'AWS Glue'],
  },
  {
    years: '2020 — 2023',
    number: '02',
    title: 'Frontend Lead → Project Manager',
    company: 'Nilasoft',
    story: 'Grew from shipping interfaces to guiding delivery. Led frontend work, contributed to Spring services, ran sprints, and learned how teams make good software together.',
    tags: ['Angular', 'React', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'REST APIs', 'Scrum', 'Leadership'],
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
    index: '01', title: 'Nobat Link', type: 'Live SaaS product', symbol: 'calendar',
    summary: 'A solo, AI-assisted full-stack product for small service businesses to manage customers, availability, payments, reservations, and reminders from one place.',
    details: ['Designed & built end-to-end', 'Currently in user testing', 'Booking, payment & reminder flows'],
    tags: ['Next.js', 'FastAPI', 'PostgreSQL', 'Docker'],
    color: 'amber', link: 'https://nobatlink.shop', status: 'User testing',
  },
  {
    index: '02', title: 'Bogzin Platform', type: 'Commerce infrastructure', symbol: 'commerce',
    summary: 'The operating system behind a B2B/B2C marketplace — from trust and verification to the final movement of inventory and money.',
    details: ['Order & payment lifecycles', 'Wallets, refunds & reservations', 'Admin and operational tooling'],
    tags: ['Kotlin', 'Angular', 'Next.js', 'PostgreSQL', 'Redis'],
    color: 'clay', status: 'Production',
  },
  {
    index: '03', title: 'Custom RAG', type: 'Applied AI', symbol: 'nodes',
    summary: 'A retrieval backend that makes large document collections useful, searchable, and grounded for domain-specific conversations.',
    details: ['Ingestion & chunking pipelines', 'Embeddings & vector retrieval', 'Bedrock-powered answer flows'],
    tags: ['FastAPI', 'Neo4j', 'Redis', 'AWS Bedrock'],
    color: 'moss', status: 'Client work',
  },
  {
    index: '04', title: 'DecentraBNB', type: 'Blockchain product', symbol: 'chain',
    summary: 'A product experience for a decentralized hospitality concept, balancing unfamiliar technology with familiar, usable journeys.',
    details: ['Frontend team leadership', 'Angular & React interfaces', 'Java backend contribution'],
    tags: ['Angular', 'React', 'Spring Boot', 'PostgreSQL'],
    color: 'ink', status: 'Selected work',
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
          <span>AS</span><span className="wordmark-text"><strong>Aref Shadbakhsh</strong><br />Full-stack · Technical lead</span>
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
          <div className="eyebrow"><span>Rasht, Iran · Working remotely</span><span>Building since 2018</span></div>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="issue-label">Full-stack developer · Technical leader · CTO</p>
              <h1>Aref<br /><em>Shadbakhsh.</em></h1>
              <p className="hero-lede">I work across <strong>code, architecture, and people</strong> to turn complicated product ideas into dependable systems.</p>
              <div className="hero-actions">
                <button onClick={() => go('work')}>Explore my work <ArrowDown size={17} /></button>
                <a href="mailto:aref.shadbakhsh@gmail.com?subject=Let%27s%20work%20together">Let’s work together <ArrowUpRight size={17} /></a>
              </div>
            </div>
            <figure className="portrait-wrap">
              <img src="/aref-shadbakhsh.jpg" alt="Aref Shadbakhsh" />
              <figcaption><span>Currently</span> CTO at Bogzin, building commerce infrastructure and grounded AI systems.</figcaption>
              <div className="experience-stamp"><strong>8+</strong><small>YEARS OF<br />EXPERIENCE</small></div>
            </figure>
          </div>
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
                <div className="project-top"><span>{project.index}</span><span>{project.type}</span><span className="project-status">{project.status}</span></div>
                <div className={`project-symbol ${project.symbol}`} aria-hidden="true"><span /><span /><span /></div>
                <h3>{project.title}</h3><p>{project.summary}</p>
                <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                <ul>{project.details.map(item => <li key={item}>{item}</li>)}</ul>
                {'link' in project && project.link && <a className="project-link" href={project.link} target="_blank" rel="noreferrer">View live product <ArrowUpRight size={16} /></a>}
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
          <div className="contact-grid">
            <div><h2>Let’s build the<br /><em>next chapter.</em></h2><p>I’m interested in ambitious products, thoughtful engineering teams, and problems that deserve both technical depth and clear leadership.</p></div>
            <div className="contact-card">
              <span>Have a project or role in mind?</span>
              <h3>Tell me what you’re building.</h3>
              <a className="primary-action" href="mailto:aref.shadbakhsh@gmail.com?subject=Project%20conversation%20with%20Aref"><Mail size={20} /> Email Aref <ArrowUpRight size={20} /></a>
              <a className="email-address" href="mailto:aref.shadbakhsh@gmail.com">aref.shadbakhsh@gmail.com</a>
              <div className="contact-links"><a href="https://github.com/arefshadbakhsh" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a><a href="/Aref_Shadbakhsh_Resume.pdf" download><Download size={14} /> Résumé</a></div>
            </div>
          </div>
          <footer><span>© {new Date().getFullYear()} Aref Shadbakhsh</span><span>Built with care in Tehran</span><a href="mailto:aref.shadbakhsh@gmail.com">aref.shadbakhsh@gmail.com</a></footer>
        </section>
      </main>
    </div>
  )
}

export default App
