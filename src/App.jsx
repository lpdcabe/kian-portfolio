import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Carousel,
  Modal,
  Button,
  Badge,
  ProgressBar,
  Form,
  Alert,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// ======== CONFIGURABLE CONTENT ========
const PROFILE = {
  name: "KIAN LOUISE G. SABORDO",
  role: "Architecture?",
  blurb:
    "I design speculative architecture that blurs the line between physical and digital — parametric, adaptive, and beautifully unreal. (gemini yayni)",
  email: "klgsabordo.21@gmail.com",
  location: "Tabun, Angeles City, Pampanga",
  socials: [
    { label: "Instagram", href: "https://instagram.com/", icon: "bi-instagram" },
    { label: "socmed boss", href: "https://behance.net/", icon: "bi-behance" },
    { label: "LinkedIn", href: "https://linkedin.com/in/", icon: "bi-linkedin" },
    { label: "X", href: "https://x.com/", icon: "bi-twitter-x" },
  ],
  course: "BS Architecture, Holy Angel University",

};

// Replace with your own images. (Unsplash used as placeholders.)
const PROJECTS = [
  {
    title: "Parametric Canopy Pavilion",
    year: 2024,
    type: "Public Space / Pavilion",
    cover:
      "https://images.unsplash.com/photo-1515518381872-c1f711c6db02?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1496302662116-35cc4f36df92?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1496307042367-0e1d0a56bc55?q=80&w=1600&auto=format&fit=crop",
    ],
    tags: ["parametric", "wood", "pavilion"],
    summary:
      "A doubly-curved timber shell generated with a hexagonal panel logic. Components are CNC-milled and numerically indexed for rapid assembly.",
  },
  {
    title: "luklukan ikwa ke keng google",
    year: 2025,
    type: "dutung / paku",
    cover:
      "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1494415859740-21e878dd929d?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526483360412-f4dbaf036963?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
    ],
    tags: ["biophilic", "high-rise", "façade"],
    summary:
      "A biophilic tower with a responsive façade: operable fins and planter loggias tune daylight, ventilation, and privacy across seasons.",
  },
  {
    title: "Museum of Light",
    year: 2023,
    type: "Cultural / Museum",
    cover:
      "https://images.unsplash.com/photo-1520567263472-4d17a6b724b6?q=80&w=1600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1483825366482-1265f6e1e38f?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1537884944318-390069bb8665?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1600&auto=format&fit=crop",
    ],
    tags: ["gallery", "light", "concrete"],
    summary:
      "A subterranean museum carved with lightwells and catenary vaults. The gallery sequence is choreographed by gradients of luminance.",
  },
];

const SKILLS = [
  { name: "Intermediate AutoCad", value: 100 },
  { name: "Intermediate Sketchup", value: 99 },
  { name: "Lumion Renders", value: 99 },
  { name: "D5 Renders", value: 99 },
  { name: "Enscape Renders", value: 99 },
];

export default function ArchitectPortfolio() {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(null);
  const [theme, setTheme] = useState("dark");
  const stageRef = useRef(null);

  // Parallax neon grid (unreal vibe)
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty("--rx", `${y * 6}deg`);
      el.style.setProperty("--ry", `${-x * 6}deg`);
      el.style.setProperty("--tx", `${-x * 8}px`);
      el.style.setProperty("--ty", `${-y * 8}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  const openProject = (p) => {
    setActive(p);
    setShow(true);
  };

  const yearRange = useMemo(() => {
    const years = PROJECTS.map((p) => p.year);
    return `${Math.min(...years)}–${Math.max(...years)}`;
  }, []);

  return (
    <div data-bs-theme={theme}>
      <style>{stylesCss}</style>
      <NeonBackdrop />

      <Navbar expand="lg" className="py-3 glass-nav fixed-top">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold text-uppercase">
            {PROFILE.name}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="nav" />
          <Navbar.Collapse id="nav">
            <Nav className="ms-auto align-items-lg-center gap-lg-2">
              <Nav.Link href="#work">Work</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Button
                size="sm"
                variant="outline-light"
                className="ms-lg-3 glow-btn"
                onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
              >
                {theme === "dark" ? "Light" : "Dark"} Mode
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* HERO */}
      <section id="home" className="hero d-flex align-items-center">
        <Container>
          <Row className="align-items-center g-4">
            <Col lg={6}>
              <h1 className="display-5 fw-bold text-gradient mb-3">
                {PROFILE.role}
              </h1>
              <p className="lead op-80 mb-4">{PROFILE.blurb}</p>
              <div className="d-flex flex-wrap gap-2">
                {PROFILE.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-light glow-btn"
                  >
                    <i className={`bi ${s.icon} me-2`} /> {s.label}
                  </a>
                ))}
              </div>
            </Col>
            <Col lg={6}>
              <div ref={stageRef} className="hero-stage">
                <div className="floating-card">
                  <div className="grid"></div>
                  <div className="holo"></div>
                  <div className="caption">
                    uhhh tabalu kaku nanung lage ku — {yearRange}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* WORK */}
      <section id="work" className="py-6">
        <Container>
          <div className="d-flex justify-content-between align-items-end mb-4">
            <h2 className="fw-bold m-0">Selected Work</h2>
            <Badge bg="info" className="op-80">
              {PROJECTS.length} projects
            </Badge>
          </div>
          <Row className="g-4">
            {PROJECTS.map((p, i) => (
              <Col key={i} md={6} lg={4}>
                <Card className="project-card h-100" onClick={() => openProject(p)}>
                  <div className="ratio ratio-4x3 overflow-hidden">
                    <img src={p.cover} alt={p.title} className="project-img" />
                  </div>
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <Card.Title className="h5 m-0">{p.title}</Card.Title>
                      <span className="op-70">{p.year}</span>
                    </div>
                    <Card.Text className="small op-80 mb-2">{p.type}</Card.Text>
                    <div className="d-flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <Badge key={t} bg="secondary" className="op-80">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-6">
        <Container>
          <Row className="g-5 align-items-center">
            <Col lg={6}>
              <div className="about-card p-4 rounded-4">
                <h2 className="fw-bold mb-3">About</h2>
                <p className="op-85">
                  nanu ka sabyan me ing sarili mu tas siguru 1-3 sentence mu ne eme pakadakal
                  ---------------------------------------------------------------------------
                  ---------------------------------------------------------------------------
                  kunwari ya yang line na yan bantang lunto yang masanting kening page ayni.
                </p>
                <ul className="list-unstyled m-0 op-85">
                  <li className="mb-2">
                    <i className="bi bi-mortarboard me-2" /> {PROFILE.course}
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-geo-alt me-2" /> {PROFILE.location}
                  </li>
                  <li>
                    <i className="bi bi-envelope me-2" />
                    <a href={`mailto:${PROFILE.email}`} className="link-light">
                      {PROFILE.email}
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={6}>
              <Row className="g-3">
                {SKILLS.map((s) => (
                  <Col key={s.name} xs={12}>
                    <div className="skill-row">
                      <div className="d-flex justify-content-between mb-1">
                        <span>{s.name}</span>
                        <span className="op-70">{s.value}%</span>
                      </div>
                      <ProgressBar now={s.value} className="glow-progress" />
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-6">
        <Container>
          <Row className="g-4 align-items-stretch">
            <Col lg={6}>
              <h2 className="fw-bold mb-3">Let’s collaborate</h2>
              <p className="op-85 mb-4">
                For commissions, competitions, or speaking, drop a line below. I’ll
                get back within 48 hours.
              </p>
              <ContactForm />
            </Col>
            <Col lg={6}>
              <div className="contact-card h-100 p-4 rounded-4">
                <h5 className="mb-3">Capabilities</h5>
                <ul className="op-85 small">
                  <li>tabalu nanung ikabit mu keni</li>
                  <li>eme wari kadwanan?</li>
                  <li>atin ya rin pangatlu syempre</li>
                </ul>
                <h5 className="mt-4 mb-3">chenaan me mu keni certi makanyan</h5>
                <ul className="op-85 small">
                  <li>certificate mu keni (2025)</li>
                  <li>syempre ali ya metung adwa la (2024)</li>
                </ul>
                <h5 className="mt-4 mb-3">nanu pa waring buri mu?</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <footer className="py-4 op-70 small text-center">
        © {new Date().getFullYear()} {PROFILE.name} — Built by bossing vic sotto lance
      </footer>

      <ProjectModal show={show} onHide={() => setShow(false)} project={active} />
    </div>
  );
}

function ProjectModal({ show, onHide, project }) {
  if (!project) return null;
  return (
    <Modal show={show} onHide={onHide} size="lg" centered className="project-modal">
      <Modal.Header closeButton>
        <Modal.Title>
          {project.title} <span className="modal-sub">· {project.type}</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Carousel interval={4000} fade>
          {project.images.map((src, i) => (
            <Carousel.Item key={i}>
              <img className="d-block w-100" src={src} alt={`${project.title} ${i + 1}`} />
            </Carousel.Item>
          ))}
        </Carousel>
        <p className="mt-3 op-85">{project.summary}</p>
        <div className="d-flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <Badge key={t} bg="secondary" className="op-80">
              {t}
            </Badge>
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-light" onClick={onHide} className="glow-btn">
          Close
        </Button>
        <Button
          variant="light"
          className="glow-btn"
          href={`mailto:${PROFILE.email}?subject=${encodeURIComponent(
            `Inquiry about ${project.title}`
          )}`}
        >
          Inquire
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      setSent(true);
      form.reset();
    }
    setValidated(true);
  };

  return (
    <div className="contact-form p-4 rounded-4">
      {sent && (
        <Alert variant="success" onClose={() => setSent(false)} dismissible>
          Thanks! Your message was staged. In production, wire this to your
          email or a service like Formspree.
        </Alert>
      )}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="g-3">
          <Col md={6}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control required type="text" placeholder="Lance Bagsik" />
              <Form.Control.Feedback type="invalid">
                Please provide your name.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control required type="email" placeholder="email@mo.com" />
              <Form.Control.Feedback type="invalid">
                A valid email is required.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col xs={12}>
            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                required
                as="textarea"
                rows={4}
                placeholder="Tell me about your project…"
              />
              <Form.Control.Feedback type="invalid">
                Please add a short message.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col xs={12}>
            <Button type="submit" variant="light" className="glow-btn">
              Send Message
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

function NeonBackdrop() {
  return (
    <div className="neon-bg" aria-hidden>
      <div className="orb orb-a"></div>
      <div className="orb orb-b"></div>
      <div className="orb orb-c"></div>
    </div>
  );
}

// ======== STYLES ========
const stylesCss = `
:root {
  --bg:#0b0d14;
  --fg:#e9f2ff;
  --muted:#8aa0b8;
  --accent:#6ef3ff;
  --accent2:#c76bff;
  --glass:rgba(255,255,255,0.06);
}

[data-bs-theme="light"] {
  --bg:#f6f8ff;
  --fg:#0a0f1a;
  --muted:#3c4b61;
  --glass:rgba(0,0,0,0.06);
}

html, body, #root {
  height: 100%;
  background: var(--bg);
  color: var(--fg);
}

.op-70{opacity:.7}
.op-80{opacity:.8}
.op-85{opacity:.85}

.text-gradient{
  background: linear-gradient(92deg,var(--fg),var(--accent) 40%,var(--accent2));
  -webkit-background-clip: text; background-clip: text; color: transparent;
}

.glass-nav{
  background: linear-gradient(180deg, rgba(0,0,0,.35), rgba(0,0,0,0));
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(255,255,255,.08);
}

.hero{ padding-top: 96px; min-height: 88vh; position: relative; }

.hero-stage{
  perspective: 800px;
}
.floating-card{
  --rx: 0deg; --ry: 0deg; --tx: 0px; --ty: 0px;
  transform: rotateX(var(--rx)) rotateY(var(--ry)) translate(var(--tx), var(--ty));
  transition: transform .08s linear;
  position: relative; border-radius: 24px; overflow: hidden;
  box-shadow: 0 20px 60px rgba(0,0,0,.45), inset 0 0 0 1px rgba(255,255,255,.06);
}
.floating-card .grid{ width:100%; aspect-ratio: 4/3; background:
  radial-gradient(1200px 600px at 80% 20%, rgba(110,243,255,.25), transparent 50%),
  conic-gradient(from 180deg at 50% 50%, rgba(199,107,255,.18), transparent 65%),
  repeating-linear-gradient( to bottom, rgba(255,255,255,.05) 0 2px, transparent 2px 40px),
  linear-gradient( to bottom right, rgba(255,255,255,.06), rgba(255,255,255,.02) );
}
.floating-card .holo{
  position:absolute; inset:0; background:
    radial-gradient(800px 300px at 30% 120%, rgba(199,107,255,.18), transparent 60%),
    radial-gradient(600px 300px at 90% -10%, rgba(110,243,255,.22), transparent 60%);
  mix-blend-mode: screen;
}
.floating-card .caption{
  position:absolute; left:16px; bottom:12px; font-weight:600; opacity:.85;
}

.neon-bg{ position: fixed; inset: 0; pointer-events: none; z-index: -1; overflow:hidden; }
.orb{ position:absolute; filter: blur(60px); opacity:.35; mix-blend-mode: screen; }
.orb-a{ width: 40vw; height: 40vw; left: -10vw; top: -10vw; background: radial-gradient(circle, var(--accent), transparent 60%); }
.orb-b{ width: 50vw; height: 50vw; right: -15vw; bottom: -10vw; background: radial-gradient(circle, var(--accent2), transparent 60%); }
.orb-c{ width: 30vw; height: 30vw; left: 40vw; top: 30vh; background: radial-gradient(circle, #7cffb2, transparent 60%); opacity:.25 }

.py-6{ padding: 6rem 0; }

.project-card{ background: var(--glass); border: 1px solid rgba(255,255,255,.08); cursor:pointer; transition: transform .25s ease, box-shadow .25s ease; border-radius: 20px; overflow:hidden; }
.project-card:hover{ transform: translateY(-6px); box-shadow: 0 24px 80px rgba(0,0,0,.35), inset 0 0 0 1px rgba(255,255,255,.12);} 
.project-card .project-img{ width:100%; height:100%; object-fit:cover; transition: transform .5s ease; }
.project-card:hover .project-img{ transform: scale(1.06);} 

.skill-row .progress{ height: 10px; background: rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.08); }
.skill-row .progress-bar{ background: linear-gradient(90deg, var(--accent), var(--accent2)); box-shadow: 0 0 18px rgba(110,243,255,.35); }

.glow-btn{ box-shadow: 0 0 0 rgba(110,243,255,0); transition: box-shadow .2s ease, transform .2s ease; }
.glow-btn:hover{ transform: translateY(-1px); box-shadow: 0 0 20px rgba(110,243,255,.35); }

.about-card, .contact-form, .contact-card{
  background: var(--glass); border: 1px solid rgba(255,255,255,.08);
}

footer{ border-top: 1px solid rgba(255,255,255,.08); }

.project-modal .modal-content{ background: rgba(16,20,30,.9); backdrop-filter: blur(8px); border:1px solid rgba(255,255,255,.12); }
.project-modal .modal-title{ display:flex; align-items:center; gap:.5rem; }
.project-modal .modal-sub{ font-size:.9rem; opacity:.7; font-weight: 500; }
`;