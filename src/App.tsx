import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, Download, Mail, Menu, X } from 'lucide-react'
import { copy, type Language } from './i18n'

const chapterIds = ['prologue', 'work', 'systems', 'journey', 'contact']

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
    index: '03', title: 'Drage Analytics', type: 'Analytics & data platform', symbol: 'nodes',
    summary: 'A distributed analytics platform spanning Java services, scraping, search, ETL, and production AWS infrastructure.',
    details: ['Scraping & ETL pipelines', 'OpenSearch & Redis services', 'AWS production infrastructure'],
    tags: ['Java', 'Spring Boot', 'Angular', 'Redis', 'OpenSearch', 'EC2', 'ECS', 'AWS ETL'],
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

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('prologue')
  const [lang, setLang] = useState<Language>(() => (localStorage.getItem('portfolio-language') as Language) || 'en')
  const t = copy[lang]
  const chapters = chapterIds.map((id, index) => ({ id, label: t.nav[index] }))
  const localizedProjects = projects.slice(1).map(project => {
    const key = project.title === 'Bogzin Platform' ? 'bogzin' : project.title === 'Drage Analytics' ? 'drage' : 'decentra'
    const translated = t.projects[key]
    const statusIndex = key === 'bogzin' ? 0 : key === 'drage' ? 1 : 2
    return { ...project, type: translated[0], summary: translated[1], details: translated[2], status: t.statusLabels[statusIndex] }
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-30% 0px -60% 0px' },
    )
    chapterIds.forEach(id => { const node = document.getElementById(id); if (node) observer.observe(node) })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr'
    localStorage.setItem('portfolio-language', lang)
  }, [lang])

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <button className="wordmark" onClick={() => go('prologue')} aria-label="Back to top">
          <img src="/aref-shadbakhsh.jpg" alt="" /><span className="wordmark-text"><strong>Aref Shadbakhsh</strong><small>Full-stack · Technical lead</small></span>
        </button>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {chapters.map((item, i) => (
            <button key={item.id} className={active === item.id ? 'active' : ''} onClick={() => go(item.id)}>
              <span>0{i + 1}</span>{item.label}
            </button>
          ))}
        </nav>
        <div className="header-end"><div className="language-switch" aria-label="Language">{(['en', 'fa', 'de'] as Language[]).map(code => <button key={code} className={lang === code ? 'active' : ''} onClick={() => setLang(code)}>{code.toUpperCase()}</button>)}</div><a className="availability" href="mailto:aref.shadbakhsh@gmail.com"><i /> {t.available}</a></div>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {menuOpen && <div className="mobile-menu">{chapters.map(item => <button key={item.id} onClick={() => go(item.id)}>{item.label}</button>)}</div>}

      <main>
        <section className="hero" id="prologue">
          <div className="eyebrow"><span>{t.location}</span><span>{t.since}</span></div>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="issue-label">{t.role}</p>
              <h1 dir="ltr">Aref<br /><em>Shadbakhsh.</em></h1>
              <p className="hero-lede">{t.lede}</p>
              <div className="hero-actions">
                <button onClick={() => go('work')}>{t.workCta} <ArrowDown size={17} /></button>
                <a href="mailto:aref.shadbakhsh@gmail.com?subject=Let%27s%20work%20together">{t.together} <ArrowUpRight size={17} /></a>
              </div>
            </div>
            <figure className="portrait-wrap">
              <img src="/aref-shadbakhsh.jpg" alt="Aref Shadbakhsh" />
              <figcaption><span>{t.current}</span> {t.currentText}</figcaption>
              <div className="experience-stamp"><strong>8+</strong><small>{t.years}</small></div>
            </figure>
          </div>
        </section>

        <section className="work section" id="work">
          <div className="section-heading light">
            <span className="kicker">{t.selected}</span>
            <h2>{t.products}</h2>
          </div>
          <article className="featured-case">
            <div className="case-copy">
              <div className="case-label"><span>{t.featured}</span><span className="case-status"><i /> {t.testing}</span></div>
              <img className="nobat-logo" src="/nobat-link-logo.png" alt="Nobat Link" />
              <h3>{t.nobatHeadline}</h3>
              <p className="case-intro">{t.nobatIntro}</p>
              <dl className="case-facts">
                <div><dt>{t.roleLabel}</dt><dd>{t.nobatRole}</dd></div>
                <div><dt>{t.builtWith}</dt><dd>Next.js · FastAPI · PostgreSQL · Docker</dd></div>
                <div><dt>{t.method}</dt><dd>{t.methodText}</dd></div>
              </dl>
              <a className="case-link" href="https://nobatlink.shop" target="_blank" rel="noreferrer">{t.visit} <ArrowUpRight size={18} /></a>
            </div>
            <div className="booking-map" aria-label="Nobat Link product flow">
              <div className="map-head"><span>{t.productScope}</span><span>nobatlink.shop</span></div>
              <div className="scope-orbit"><span>{t.book}</span><span>{t.operate}</span><span>{t.notify}</span><strong>N</strong></div>
              <p className="scope-caption">Next.js · FastAPI · PostgreSQL · Docker</p>
            </div>
          </article>
          <div className="supporting-heading"><span>{t.more}</span><p>{t.moreCopy}</p></div>
          <div className="case-list">
            {localizedProjects.map(project => (
              <article className="case-row" key={project.index}>
                <div className={`case-visual ${project.symbol}`} aria-hidden="true"><span /><span /><span />{project.title === 'Drage Analytics' && <b>DRAGE<br />ANALYTICS</b>}</div>
                <div className="case-row-copy">
                  <div className="project-top"><span>{project.type}</span><span className="project-status">{project.status}</span></div>
                  <h3>{project.title}</h3><p>{project.summary}</p>
                  <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <ul>{project.details.map(item => <li key={item}>{item}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
          <p className="confidential-note">{t.confidential}</p>
        </section>

        <section className="systems section" id="systems">
          <div className="systems-intro">
            <span className="kicker">{t.approach}</span>
            <blockquote>“{t.quote}”</blockquote>
          </div>
          <div className="principles">
            {t.principles.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
          <div className="toolbox">
            <span>{t.vocabulary}</span>
            <p>Kotlin · Java · Spring Boot · Angular · React · Next.js · TypeScript · PostgreSQL · Redis · Neo4j · FastAPI · Docker · Nginx · GitLab CI/CD · AWS</p>
          </div>
        </section>

        <section className="journey section" id="journey">
          <div className="experience-heading">
            <span className="kicker">{t.experience}</span>
            <h2>{t.experienceTitle}</h2>
            <p>{t.experienceCopy}</p>
          </div>
          <div className="timeline compact">
            {roles.map((role, index) => (
              <article className="role" key={role.number}>
                <div className="role-meta"><time>{role.years}</time></div>
                <div className="role-body"><p className="company">{role.company}</p><h3>{t.roleTitles[index]}</h3><p>{t.roles[index]}</p><div className="tags">{role.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section" id="contact">
          <span className="kicker">{t.epilogue}</span>
          <div className="contact-grid">
            <div><h2>{t.next}</h2><p>{t.interest}</p></div>
            <div className="contact-profile"><img src="/aref-shadbakhsh.jpg" alt="Aref Shadbakhsh" /><div className="contact-card">
              <span>{t.projectMind}</span>
              <h3>{t.tell}</h3>
              <a className="primary-action" href="mailto:aref.shadbakhsh@gmail.com?subject=Project%20conversation%20with%20Aref"><Mail size={20} /> {t.email} <ArrowUpRight size={20} /></a>
              <a className="email-address" href="mailto:aref.shadbakhsh@gmail.com">aref.shadbakhsh@gmail.com</a>
              <div className="contact-links"><a href="https://github.com/arefshadbakhsh" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a><a href="/Aref_Shadbakhsh_Resume.pdf" download><Download size={14} /> {t.resume}</a></div>
            </div></div>
          </div>
          <footer><span>© {new Date().getFullYear()} Aref Shadbakhsh</span><span>{t.builtIn}</span><a href="mailto:aref.shadbakhsh@gmail.com">aref.shadbakhsh@gmail.com</a></footer>
        </section>
      </main>
    </div>
  )
}

export default App
