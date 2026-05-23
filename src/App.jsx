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
// Proposed Community — spot-perspective
import rainPng from "./assets/proposed-community/spot-perspective/raining.png";
import exterior from "./assets/proposed-community/spot-perspective/EXTERIOR.png";
import exterior2 from "./assets/proposed-community/spot-perspective/exterior-2.png";
import spotRoof from "./assets/proposed-community/spot-perspective/ROOF.png";
import spotForDetail from "./assets/proposed-community/spot-perspective/FOR SPOT DETAIL.png";
import spotScene2 from "./assets/proposed-community/spot-perspective/Scene 2.png";
import spotScene3 from "./assets/proposed-community/spot-perspective/Scene 3.png";
import spotScene4 from "./assets/proposed-community/spot-perspective/Scene 4.png";
import spotScene5 from "./assets/proposed-community/spot-perspective/Scene 5.png";
import spotScene6 from "./assets/proposed-community/spot-perspective/Scene 6.png";
import spotScene7 from "./assets/proposed-community/spot-perspective/Scene 7_1.png";
import spotScene8 from "./assets/proposed-community/spot-perspective/Scene 8_1.png";
import spotScene9 from "./assets/proposed-community/spot-perspective/Scene 9.png";
import spotScene10 from "./assets/proposed-community/spot-perspective/Scene 10.png";
import spotScene15 from "./assets/proposed-community/spot-perspective/Scene 15_3.png";
import spotScene16 from "./assets/proposed-community/spot-perspective/Scene 16.png";
// Proposed Community — placemaking
import placeImg0 from "./assets/proposed-community/placemaking/Image.png";
import placeImg1 from "./assets/proposed-community/placemaking/Image_1.png";
import placeImg3 from "./assets/proposed-community/placemaking/Image_3.png";
import placeImg4 from "./assets/proposed-community/placemaking/Image_4.png";
// Proposed Community — perspectives / CONDO
import condoImg0 from "./assets/proposed-community/perspectives/CONDO/INITIAL/Image.png";
import condoImg1 from "./assets/proposed-community/perspectives/CONDO/INITIAL/Image_1.png";
import condoImg2 from "./assets/proposed-community/perspectives/CONDO/INITIAL/Image_2.png";
import condoImg3 from "./assets/proposed-community/perspectives/CONDO/INITIAL/Image_3.png";
import condoImg4 from "./assets/proposed-community/perspectives/CONDO/INITIAL/Image_4.png";
import condoImg5 from "./assets/proposed-community/perspectives/CONDO/INITIAL/Image_5.png";
import condoImg6 from "./assets/proposed-community/perspectives/CONDO/INITIAL/Image_6.png";
import condoImg7 from "./assets/proposed-community/perspectives/CONDO/INITIAL/Image_7.png";
// Proposed Community — perspectives / SPOT PERS
import spotPers1a from "./assets/proposed-community/perspectives/SPOT PERS/Scene 1 (1).png";
import spotPers1 from "./assets/proposed-community/perspectives/SPOT PERS/Scene 1.png";
import spotPers3 from "./assets/proposed-community/perspectives/SPOT PERS/Scene 3.png";
import spotPers4 from "./assets/proposed-community/perspectives/SPOT PERS/Scene 4.png";
import spotPers5 from "./assets/proposed-community/perspectives/SPOT PERS/Scene 5.png";
import spotPers6 from "./assets/proposed-community/perspectives/SPOT PERS/Scene 6.png";
import spotPers7 from "./assets/proposed-community/perspectives/SPOT PERS/Scene 7.png";
import spotPers8 from "./assets/proposed-community/perspectives/SPOT PERS/Scene 8.png";
import spotPers9 from "./assets/proposed-community/perspectives/SPOT PERS/Scene 9.png";
// Proposed Community — perspectives / STREET SCAPES
import streetAerial from "./assets/proposed-community/perspectives/STREET SCAPES/AERIAL.png";
import streetClinic2 from "./assets/proposed-community/perspectives/STREET SCAPES/CLINIC 2.png";
import streetClinic from "./assets/proposed-community/perspectives/STREET SCAPES/CLINIC.png";
import streetMall2 from "./assets/proposed-community/perspectives/STREET SCAPES/MALL 2.png";
import streetMallDiff from "./assets/proposed-community/perspectives/STREET SCAPES/MALLDIFF SUN_1.png";
import streetSchool1 from "./assets/proposed-community/perspectives/STREET SCAPES/SCHOOL 1.png";
import streetSchool2 from "./assets/proposed-community/perspectives/STREET SCAPES/SCHOOL2.png";
// Proposed Community — perspectives / STUDIO UNIT
import studio1BedCross from "./assets/proposed-community/perspectives/STUDIO UNIT/1 BEDROOM CROSS.png";
import studioFloorDim2 from "./assets/proposed-community/perspectives/STUDIO UNIT/FLOOR PLAN DIMENSION 2.png";
import studioFloorDim from "./assets/proposed-community/perspectives/STUDIO UNIT/FLOOR PLAN DIMENSION.png";
import studioImg from "./assets/proposed-community/perspectives/STUDIO UNIT/Image.png";
import studio1BedFloor from "./assets/proposed-community/perspectives/STUDIO UNIT/ONE BEDROOM FLOORPLAN.png";
import studio1BedLong from "./assets/proposed-community/perspectives/STUDIO UNIT/ONE BEDROOM LONGITUDINAL.png";
import studioCross from "./assets/proposed-community/perspectives/STUDIO UNIT/STUDIO CROSS.png";
import studioIso from "./assets/proposed-community/perspectives/STUDIO UNIT/STUDIO ISOMETRIC.png";
import studioLong from "./assets/proposed-community/perspectives/STUDIO UNIT/STUDIO UNIT LONGITUDINAL.png";
import studioScene1 from "./assets/proposed-community/perspectives/STUDIO UNIT/Scene 1.png";
import studioScene2 from "./assets/proposed-community/perspectives/STUDIO UNIT/Scene 2.png";
import studioScene3 from "./assets/proposed-community/perspectives/STUDIO UNIT/Scene 3.png";
import studioScene4 from "./assets/proposed-community/perspectives/STUDIO UNIT/Scene 4.png";
import studioScene6 from "./assets/proposed-community/perspectives/STUDIO UNIT/Scene 6.png";
import studioScene7 from "./assets/proposed-community/perspectives/STUDIO UNIT/Scene 7.png";
import studioScene8 from "./assets/proposed-community/perspectives/STUDIO UNIT/Scene 8.png";
import studioScene9 from "./assets/proposed-community/perspectives/STUDIO UNIT/Scene 9.png";
import studioScene10 from "./assets/proposed-community/perspectives/STUDIO UNIT/Scene 10.png";
import studioScene11 from "./assets/proposed-community/perspectives/STUDIO UNIT/Scene 11.png";

// Proposed Park
import parkAerial from "./assets/proposed-park/AERIAL.png";
import parkAerial2 from "./assets/proposed-park/AERIAL 2.png";
import parkImg0 from "./assets/proposed-park/Image.png";
import parkImg1 from "./assets/proposed-park/Image_1.png";
import parkImg2 from "./assets/proposed-park/Image_2.png";
import parkImg3 from "./assets/proposed-park/Image_3.png";
import parkImg4 from "./assets/proposed-park/Image_4.png";
import parkImg5 from "./assets/proposed-park/Image_5.png";
import parkImg6 from "./assets/proposed-park/Image_6.png";
import parkImg7 from "./assets/proposed-park/Image_7.png";
import parkImg8 from "./assets/proposed-park/Image_8.png";
import parkImg9 from "./assets/proposed-park/Image_9.png";
import parkImg11 from "./assets/proposed-park/Image_11.png";
import parkImg12 from "./assets/proposed-park/Image_12.png";
import parkImg13 from "./assets/proposed-park/Image_13.png";
import parkImg14 from "./assets/proposed-park/Image_14.png";
import parkImg16 from "./assets/proposed-park/Image_16.png";
import parkImg17 from "./assets/proposed-park/Image_17.png";
import parkImg18 from "./assets/proposed-park/Image_18.png";
import parkImg20 from "./assets/proposed-park/Image_20.png";
import parkImg21 from "./assets/proposed-park/Image_21.png";

// Sample Render
import renderLiving from "./assets/sample-render/Living Area 1.jpg";
import renderBedroom from "./assets/sample-render/bedroom.jpg";

// ======== CONFIGURABLE CONTENT ========
const PROFILE = {
  name: "KIAN LOUISE G. SABORDO",
  role: "Architecture",
  blurb:
    "Speculative, parametric, beautiful. I explore architecture where material logic meets digital imagination.",
  email: "klgsabordo.21@gmail.com",
  location: "Tabun, Angeles City, Pampanga",
  socials: [
    { label: "Instagram", href: "https://instagram.com/", icon: "bi-instagram" },
    { label: "Behance", href: "https://behance.net/", icon: "bi-behance" },
    { label: "LinkedIn", href: "https://linkedin.com/in/", icon: "bi-linkedin" },
    { label: "X", href: "https://x.com/", icon: "bi-twitter-x" },
  ],
  course: "BS Architecture, Holy Angel University",
};

// Replace with your own images.
const PROJECTS = [
  {
    title: "PROPOSED COMMUNITY",
    year: 2024,
    type: "MARANGLE KABIT KO?",
    cover: rainPng,
    images: [
      exterior, rainPng, exterior2, spotRoof, spotForDetail,
      spotScene2, spotScene3, spotScene4, spotScene5, spotScene6,
      spotScene7, spotScene8, spotScene9, spotScene10, spotScene15, spotScene16,
      placeImg0, placeImg1, placeImg3, placeImg4,
      condoImg0, condoImg1, condoImg2, condoImg3, condoImg4, condoImg5, condoImg6, condoImg7,
      spotPers1a, spotPers1, spotPers3, spotPers4, spotPers5, spotPers6, spotPers7, spotPers8, spotPers9,
      streetAerial, streetClinic2, streetClinic, streetMall2, streetMallDiff, streetSchool1, streetSchool2,
      studio1BedCross, studioFloorDim2, studioFloorDim, studioImg, studio1BedFloor, studio1BedLong,
      studioCross, studioIso, studioLong,
      studioScene1, studioScene2, studioScene3, studioScene4, studioScene6,
      studioScene7, studioScene8, studioScene9, studioScene10, studioScene11,
    ],
    tags: ["hindi", "ko", "alam"],
    summary: "send ka summary mo dito.",
  },
  {
    title: "PROPOSED PARK",
    year: 2024,
    type: "Landscape / Urban",
    cover: parkAerial,
    images: [
      parkAerial, parkAerial2, parkImg0, parkImg1, parkImg2, parkImg3, parkImg4,
      parkImg5, parkImg6, parkImg7, parkImg8, parkImg9,
      parkImg11, parkImg12, parkImg13, parkImg14, parkImg16,
      parkImg17, parkImg18, parkImg20, parkImg21,
    ],
    tags: ["landscape", "park", "urban"],
    summary: "send ka summary mo dito.",
  },
  {
    title: "SAMPLE RENDER",
    year: 2025,
    type: "Interior / Visualization",
    cover: renderLiving,
    images: [renderLiving, renderBedroom],
    tags: ["interior", "render", "visualization"],
    summary: "send ka summary mo dito.",
  },
];

const SKILLS = [
  { name: "AutoCAD", value: 100 },
  { name: "SketchUp", value: 99 },
  { name: "Lumion", value: 99 },
  { name: "D5", value: 99 },
  { name: "Enscape", value: 99 },
];

export default function ArchitectPortfolio() {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(null);
  const [theme, setTheme] = useState(() => {
  const saved = localStorage.getItem("theme");
    if (saved) document.documentElement.setAttribute("data-theme", saved);
    // default: light
    return "light";
  });
  const stageRef = useRef(null);

  // Apply theme to <html data-theme="">
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Parallax grid card
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

  const yearRange = React.useMemo(() => {
    const years = PROJECTS.map((p) => p.year);
    return `${Math.min(...years)}–${Math.max(...years)}`;
  }, []);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <div>
      <style>{stylesCss}</style>
      <NeonBackdrop />

      <Navbar expand="lg" className="py-3 glass-nav fixed-top">
        <Container>
          <Navbar.Brand href="#home" className="brand">
            {PROFILE.name}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="nav" />
          <Navbar.Collapse id="nav">
            <Nav className="ms-auto align-items-lg-center gap-lg-2">
              <Nav.Link href="#work">Work</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>

              {/* Dark Mode Toggle */}
<button
  type="button"
  onClick={toggleTheme}
  className={`theme-toggle ms-lg-3 ${theme}`}
  aria-label="Toggle dark mode"
  role="switch"
  aria-checked={theme === "dark"}
>
  <span className="toggle-track">
    <span className="toggle-icon left" aria-hidden>☀️</span>
    <span className="toggle-icon right" aria-hidden>🌙</span>
    <span className="toggle-thumb" aria-hidden />
  </span>
</button>

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
              <p className="lead readable mb-4">{PROFILE.blurb}</p>
              <div className="d-flex flex-wrap gap-2">
                {PROFILE.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-ink"
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
                    studies &mdash; {yearRange}
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
            <h2 className="section-title m-0">Selected Work</h2>
            <Badge bg="" className="badge-chip">
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
                      <Card.Title className="h5 m-0 readable-strong">
                        {p.title}
                      </Card.Title>
                      <span className="muted">{p.year}</span>
                    </div>
                    <Card.Text className="small muted mb-2">{p.type}</Card.Text>
                    <div className="d-flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="tag">{t}</span>
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
                <h2 className="section-title mb-3">About</h2>
                <p className="readable mb-4">
                  I design with clarity and curiosity. Short 1–3 lines here work
                  best to keep the page clean and focused.
                </p>
                <ul className="list-unstyled m-0 readable">
                  <li className="mb-2">
                    <i className="bi bi-mortarboard me-2" /> {PROFILE.course}
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-geo-alt me-2" /> {PROFILE.location}
                  </li>
                  <li>
                    <i className="bi bi-envelope me-2" />
                    <a href={`mailto:${PROFILE.email}`} className="link-ink">
                      {PROFILE.email}
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={6} id="skills">
              <Row className="g-3">
                {SKILLS.map((s) => (
                  <Col key={s.name} xs={12}>
                    <div className="skill-row">
                      <div className="d-flex justify-content-between mb-1 readable-strong">
                        <span>{s.name}</span>
                        <span className="muted">{s.value}%</span>
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
              <h2 className="section-title mb-3">Let’s collaborate</h2>
              <p className="readable mb-4">
                For commissions, competitions, or speaking, drop a line below. I’ll
                get back within 48 hours.
              </p>
              <ContactForm />
            </Col>
            <Col lg={6}>
              <div className="contact-card h-100 p-4 rounded-4">
                <h5 className="readable-strong mb-3">Capabilities</h5>
                <ul className="readable small mb-4">
                  <li>Concept-to-detail parametric design</li>
                  <li>Visualization & real-time rendering</li>
                  <li>Competition packages & presentations</li>
                </ul>
                <h5 className="readable-strong mb-3">Recognition</h5>
                <ul className="readable small">
                  <li>Sample Certificate (2025)</li>
                  <li>Another Recognition (2024)</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <footer className="py-4 small center muted">
        © {new Date().getFullYear()} {PROFILE.name} — Portfolio
      </footer>

      <ProjectModal show={show} onHide={() => setShow(false)} project={active} />
    </div>
  );
}

function ProjectModal({ show, onHide, project }) {
  if (!project) return null;
  return (
    <Modal show={show} onHide={onHide} size="lg" centered className="project-modal">
      <Modal.Header closeButton className="modal-head">
        <Modal.Title className="modal-title-strong">
          {project.title} <span className="modal-sub">· {project.type}</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-ink">
        <div className="book-edge" aria-hidden />
        <Carousel interval={4200} fade>
          {project.images.map((src, i) => (
            <Carousel.Item key={i}>
              <img className="d-block w-100 modal-img" src={src} alt={`${project.title} ${i + 1}`} />
            </Carousel.Item>
          ))}
        </Carousel>
        <p className="mt-3 readable">{project.summary}</p>
        <div className="d-flex flex-wrap gap-2 mt-2">
          {project.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer className="modal-foot">
        <Button variant="outline-secondary" onClick={onHide} className="btn-outline-ink">
          Close
        </Button>
        <Button
          variant="secondary"
          className="btn-ink"
          href={`mailto:${PROFILE.email}?subject=${encodeURIComponent(`Inquiry about ${project.title}`)}`}
        >
          Inquire
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [validated, setValidated] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    setValidated(true);
    setSubmitting(true);
    setError(false);
    try {
      const res = await fetch(import.meta.env.VITE_FORMSPREE_URL, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSent(true);
        form.reset();
        setValidated(false);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-form p-4 rounded-4">
      {sent && (
        <Alert variant="success" onClose={() => setSent(false)} dismissible>
          Thanks! I'll get back to you within 48 hours.
        </Alert>
      )}
      {error && (
        <Alert variant="danger" onClose={() => setError(false)} dismissible>
          Something went wrong. Please try again or email directly.
        </Alert>
      )}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="g-3">
          <Col md={6}>
            <Form.Group controlId="name">
              <Form.Label className="readable-strong">Name</Form.Label>
              <Form.Control required type="text" name="name" placeholder="Your name" />
              <Form.Control.Feedback type="invalid">Please provide your name.</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="email">
              <Form.Label className="readable-strong">Email</Form.Label>
              <Form.Control required type="email" name="email" placeholder="you@email.com" />
              <Form.Control.Feedback type="invalid">A valid email is required.</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col xs={12}>
            <Form.Group controlId="message">
              <Form.Label className="readable-strong">Message</Form.Label>
              <Form.Control required as="textarea" rows={4} name="message" placeholder="Tell me about your project…" />
              <Form.Control.Feedback type="invalid">Please add a short message.</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col xs={12}>
            <Button type="submit" className="btn-ink" disabled={submitting}>{submitting ? "Sending…" : "Send Message"}</Button>
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
      <div className="grid-lines" />
      <div className="grain" />
    </div>
  );
}

// ======== STYLES (Palette-first + Dark Mode) ========
const stylesCss = `
:root{
  --paper:#E8E2DA;
  --sand:#D6C9B4;
  --ink:#455763;       /* dominant */
  --ink-900:#2d3a44;
  --ink-700:#3a4b56;
  --ink-500:#5b6b76;
  --glass:rgba(69,87,99,0.08);
}

/* DARK THEME — uses the same palette flipped */
:root[data-theme="dark"]{
  --paper:#455763;     /* canvas */
  --sand:#D6C9B4;      /* accent */
  --ink:#E8E2DA;       /* text */
  --ink-900:#F5F1EA;
  --ink-700:#E8E2DA;
  --ink-500:#D6C9B4;
  --glass:rgba(232,226,218,0.08);
}

html, body, #root{ height:100%; background:var(--paper); color:var(--ink); }

.muted{opacity:.78}
.readable{ font-size:1.05rem; line-height:1.7; letter-spacing:.1px; }
.readable-strong{ font-weight:600; letter-spacing:.2px; }

.brand{ font-weight:800; letter-spacing:.5px; text-transform:uppercase; color:var(--ink); }
.section-title{ font-weight:800; letter-spacing:.3px; color:var(--ink-900); }

.text-gradient{
  background: linear-gradient(92deg,var(--ink-900), var(--ink-500));
  -webkit-background-clip:text; background-clip:text; color:transparent;
}

/* backdrop */
.neon-bg{ position:fixed; inset:0; pointer-events:none; z-index:-1; overflow:hidden; }
.orb{ position:absolute; filter:blur(60px); opacity:.35; mix-blend-mode:multiply; }
.orb-a{ width:40vw; height:40vw; left:-10vw; top:-10vw; background: radial-gradient(circle, var(--sand), transparent 60%); }
.orb-b{ width:50vw; height:50vw; right:-15vw; bottom:-10vw; background: radial-gradient(circle, var(--ink-500), transparent 60%); opacity:.25;}
.orb-c{ width:30vw; height:30vw; left:40vw; top:30vh; background: radial-gradient(circle, var(--ink), transparent 60%); opacity:.18;}
.grid-lines{ position:absolute; inset:0; background:
  linear-gradient(transparent 39px, rgba(69,87,99,.12) 40px),
  linear-gradient(90deg, transparent 39px, rgba(69,87,99,.12) 40px);
  background-size:40px 40px; mask-image: radial-gradient(circle at 50% 50%, black 30%, transparent 70%);
}
:root[data-theme="dark"] .grid-lines{
  background:
    linear-gradient(transparent 39px, rgba(232,226,218,.12) 40px),
    linear-gradient(90deg, transparent 39px, rgba(232,226,218,.12) 40px);
}

.grain{ position:absolute; inset:-50%; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' opacity='0.05'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.65'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); mix-blend-mode:multiply; }

.glass-nav{
  background: linear-gradient(180deg, color-mix(in oklab, var(--paper), transparent 25%), rgba(0,0,0,0));
  backdrop-filter: blur(8px);
  border-bottom: 1px solid color-mix(in oklab, var(--ink), transparent 70%);
}

/* Theme toggle button */
.theme-toggle{
  display:inline-flex; align-items:center; gap:.25rem;
  border:1px solid color-mix(in oklab, var(--ink), transparent 65%);
  background: color-mix(in oklab, var(--paper), var(--ink) 6%);
  color: var(--ink);
  padding:.45rem .8rem; border-radius:999px; font-weight:700; letter-spacing:.2px;
}
.theme-toggle:hover{ filter:brightness(.96); }
.theme-toggle .toggle-icon{ font-size:1.05rem; line-height:1; }

/* Hero */
.hero{ padding-top: 96px; min-height: 86vh; position: relative; }
.hero-stage{ perspective:800px; }
.floating-card{
  --rx:0deg; --ry:0deg; --tx:0px; --ty:0px;
  transform: rotateX(var(--rx)) rotateY(var(--ry)) translate(var(--tx), var(--ty));
  transition: transform .08s linear;
  position: relative; border-radius: 24px; overflow: hidden;
  border:1px solid color-mix(in oklab, var(--ink), transparent 70%);
  box-shadow: 0 24px 60px color-mix(in oklab, var(--ink), transparent 70%), inset 0 0 0 1px color-mix(in oklab, var(--ink), transparent 92%);
}
.floating-card .grid{ width:100%; aspect-ratio: 4/3; background:
  radial-gradient(1200px 600px at 80% 20%, color-mix(in oklab, var(--ink), transparent 82%), transparent 50%),
  conic-gradient(from 180deg at 50% 50%, color-mix(in oklab, var(--sand), transparent 72%), transparent 65%),
  repeating-linear-gradient( to bottom, color-mix(in oklab, var(--ink), transparent 92%) 0 2px, transparent 2px 40px),
  linear-gradient( to bottom right, color-mix(in oklab, var(--paper), white 20%), color-mix(in oklab, var(--sand), white 10%) );
}
.floating-card .holo{ position:absolute; inset:0; background:
  radial-gradient(800px 300px at 30% 120%, color-mix(in oklab, var(--ink), transparent 82%), transparent 60%),
  radial-gradient(600px 300px at 90% -10%, color-mix(in oklab, var(--sand), transparent 76%), transparent 60%);
  mix-blend-mode:multiply;
}
.floating-card .caption{ position:absolute; left:16px; bottom:12px; font-weight:700; opacity:.85; color:var(--ink-900); }

/* Sections */
.py-6{ padding: 6rem 0; }
.badge-chip{ border:1px solid color-mix(in oklab, var(--ink), transparent 65%); color:var(--ink-700); background:color-mix(in oklab, var(--paper), white 10%); padding:.35rem .6rem; border-radius:999px; }

/* Cards */
.project-card{ background: color-mix(in oklab, var(--paper), white 8%); border: 1px solid color-mix(in oklab, var(--ink), transparent 70%); cursor:pointer; transition: transform .25s ease, box-shadow .25s ease; border-radius: 20px; overflow:hidden; }
.project-card:hover{ transform: translateY(-6px); box-shadow: 0 24px 80px color-mix(in oklab, var(--ink), transparent 72%);} 
.project-card .project-img{ width:100%; height:100%; object-fit:cover; transition: transform .5s ease; filter:saturate(1.02) contrast(1.02); }
.project-card:hover .project-img{ transform: scale(1.06);} 
.tag{ font-size:.8rem; padding:.25rem .55rem; border-radius:999px; border:1px solid color-mix(in oklab, var(--ink), transparent 65%); background:color-mix(in oklab, var(--paper), white 14%); color:var(--ink-700); }

/* Info blocks */
.about-card, .contact-form, .contact-card{
  background: color-mix(in oklab, var(--paper), white 10%); border: 1px solid color-mix(in oklab, var(--ink), transparent 70%);
  box-shadow: 0 12px 40px color-mix(in oklab, var(--ink), transparent 85%);
}

/* Progress */
.skill-row .progress{ height: 10px; background: color-mix(in oklab, var(--ink), transparent 90%); border:1px solid color-mix(in oklab, var(--ink), transparent 80%); }
.skill-row .progress-bar{ background: linear-gradient(90deg, var(--ink), var(--ink-500)); box-shadow: 0 0 18px color-mix(in oklab, var(--ink), transparent 75%); }

/* Buttons */
.btn-ink{ background: var(--ink); color: color-mix(in oklab, var(--paper), white 10%); border:1px solid var(--ink-900); border-radius:999px; padding:.6rem 1rem; font-weight:700; letter-spacing:.2px; }
.btn-ink:hover{ filter: brightness(0.95); }
.btn-outline-ink{ background: transparent; color: var(--ink); border:1px solid var(--ink); border-radius:999px; padding:.6rem 1rem; font-weight:700; }
.btn-outline-ink:hover{ background: color-mix(in oklab, var(--paper), var(--ink) 6%); }

/* Links */
a.link-ink{ color: var(--ink-900); text-decoration: underline; text-underline-offset: 3px; }

/* Modal — uses current theme vars */
.project-modal .modal-content{ background: color-mix(in oklab, var(--paper), white 10%); border:1px solid color-mix(in oklab, var(--ink), transparent 70%); box-shadow: 0 32px 90px color-mix(in oklab, var(--ink), transparent 65%); }
.modal-head{ border-bottom:1px solid color-mix(in oklab, var(--ink), transparent 80%); background: linear-gradient(180deg, color-mix(in oklab, var(--sand), transparent 65%), transparent); }
.modal-title-strong{ font-weight:800; color:var(--ink-900); letter-spacing:.3px; }
.modal-sub{ font-size:.95rem; opacity:.8; font-weight:600; color:var(--ink-500); margin-left:.35rem; }
.modal-body-ink{ position:relative; }
.book-edge{ position:absolute; inset:auto 0 0 0; height:12px; background:
  repeating-linear-gradient(90deg, color-mix(in oklab, var(--ink), transparent 78%) 0 2px, transparent 2px 6px);
  opacity:.35; border-top:1px solid color-mix(in oklab, var(--ink), transparent 86%);
}
.modal-img{ border-radius:12px; border:1px solid color-mix(in oklab, var(--ink), transparent 80%); }
.modal-foot{ border-top:1px solid color-mix(in oklab, var(--ink), transparent 80%); background: color-mix(in oklab, var(--paper), white 8%); }

/* Helpers */
.center{text-align:center}
/* Theme toggle slider (icon-only) */
.theme-toggle{
  appearance:none; border:0; background:none; padding:0; margin:0;
  display:inline-block;
}
.theme-toggle .toggle-track{
  position:relative; width:56px; height:30px; border-radius:999px;
  background: color-mix(in oklab, var(--paper), var(--ink) 6%);
  border:1px solid color-mix(in oklab, var(--ink), transparent 65%);
  box-shadow: inset 0 2px 6px color-mix(in oklab, var(--ink), transparent 85%);
  display:inline-block;
}
.theme-toggle .toggle-thumb{
  position:absolute; top:2px; left:2px; width:26px; height:26px; border-radius:50%;
  background: var(--ink);
  box-shadow: 0 2px 8px color-mix(in oklab, var(--ink), transparent 70%);
  transition: transform .25s ease;
}
.theme-toggle.light .toggle-thumb{ transform: translateX(0); }
.theme-toggle.dark  .toggle-thumb{ transform: translateX(26px); }

.theme-toggle .toggle-icon{
  position:absolute; top:50%; transform:translateY(-50%); font-size:14px; opacity:.8;
  pointer-events:none; user-select:none;
}
.theme-toggle .toggle-icon.left{  left:8px;  }
.theme-toggle .toggle-icon.right{ right:8px; }

/* Hover/active states */
.theme-toggle .toggle-track:hover{ filter:brightness(.98); }
.theme-toggle .toggle-track:active .toggle-thumb{ transform: translateX(13px) scale(0.98); }

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce){
  .theme-toggle .toggle-thumb{ transition:none; }
}
`;