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

/* ==== LOCAL ASSETS (Community) ==== */
import condo1 from "./assets/proposed-community/perspectives/CONDO/INITIAL/Image_1.png";
import condo2 from "./assets/proposed-community/perspectives/CONDO/INITIAL/Image_2.png";
import condo3 from "./assets/proposed-community/perspectives/CONDO/INITIAL/Image_3.png";
import condo4 from "./assets/proposed-community/perspectives/CONDO/INITIAL/Image_4.png";
import condo5 from "./assets/proposed-community/perspectives/CONDO/INITIAL/Image_5.png";
import condo6 from "./assets/proposed-community/perspectives/CONDO/INITIAL/Image_6.png";
import condo7 from "./assets/proposed-community/perspectives/CONDO/INITIAL/Image_7.png";
import condo8 from "./assets/proposed-community/perspectives/CONDO/INITIAL/Image.png";

import spotscene from "./assets/proposed-community/perspectives/spot-pres/Scene.png";
import spotscene1 from "./assets/proposed-community/perspectives/spot-pres/Scene-1.png";
import spotscene3 from "./assets/proposed-community/perspectives/spot-pres/Scene-3.png";
import spotscene4 from "./assets/proposed-community/perspectives/spot-pres/Scene-4.png";
import spotscene5 from "./assets/proposed-community/perspectives/spot-pres/Scene-5.png";
import spotscene6 from "./assets/proposed-community/perspectives/spot-pres/Scene-6.png";
import spotscene7 from "./assets/proposed-community/perspectives/spot-pres/Scene-7.png";
import spotscene8 from "./assets/proposed-community/perspectives/spot-pres/Scene-8.png";
import spotscene9 from "./assets/proposed-community/perspectives/spot-pres/Scene-9.png";

import aerial from "./assets/proposed-community/perspectives/street-scapes/aerial.png";
import clinic2 from "./assets/proposed-community/perspectives/street-scapes/clinic-2.png";
import clinic from "./assets/proposed-community/perspectives/street-scapes/clinic.png";
import mall2 from "./assets/proposed-community/perspectives/street-scapes/mall-2.png";
import maldiff from "./assets/proposed-community/perspectives/street-scapes/maldiff-sun_1.png";
import school from "./assets/proposed-community/perspectives/street-scapes/school-1.png";
import school2 from "./assets/proposed-community/perspectives/street-scapes/school-2.png";

import bedroomcross from "./assets/proposed-community/perspectives/studio-unit/1 BEDROOM CROSS.png";
import floorplan2 from "./assets/proposed-community/perspectives/studio-unit/FLOOR PLAN DIMENSION 2.png";
import floorplan from "./assets/proposed-community/perspectives/studio-unit/FLOOR PLAN DIMENSION.png";
import image1_1 from "./assets/proposed-community/perspectives/studio-unit/image.png";
import bedroomfloorplan from "./assets/proposed-community/perspectives/studio-unit/ONE BEDROOM FLOORPLAN.png";
import bedroomlong from "./assets/proposed-community/perspectives/studio-unit/ONE BEDROOM LONGITUDINAL.png";
import studioscene from "./assets/proposed-community/perspectives/studio-unit/Scene 1.png";
import studioscene2 from "./assets/proposed-community/perspectives/studio-unit/Scene 2.png";
import studioscene3 from "./assets/proposed-community/perspectives/studio-unit/Scene 3.png";
import studioscene4 from "./assets/proposed-community/perspectives/studio-unit/Scene 4.png";
import studioscene5 from "./assets/proposed-community/perspectives/studio-unit/Scene 6.png";
import studioscene6 from "./assets/proposed-community/perspectives/studio-unit/Scene 7.png";
import studioscene7 from "./assets/proposed-community/perspectives/studio-unit/Scene 8.png";
import studioscene8 from "./assets/proposed-community/perspectives/studio-unit/Scene 9.png";
import studioscene9 from "./assets/proposed-community/perspectives/studio-unit/Scene 10.png";
import studioscene10 from "./assets/proposed-community/perspectives/studio-unit/Scene 11.png";
import studiocross from "./assets/proposed-community/perspectives/studio-unit/STUDIO CROSS.png";
import studioiso from "./assets/proposed-community/perspectives/studio-unit/STUDIO ISOMETRIC.png";
import studioUNIT from "./assets/proposed-community/perspectives/studio-unit/STUDIO UNIT LONGITUDINAL.png";

import image1 from "./assets/proposed-community/placemaking/Image_1.png";
import image3 from "./assets/proposed-community/placemaking/Image_3.png";
import image4 from "./assets/proposed-community/placemaking/Image_4.png";
import image from "./assets/proposed-community/placemaking/Image.png";

import exterior2 from "./assets/proposed-community/spot-perspective/exterior-2.png";
import exterior from "./assets/proposed-community/spot-perspective/exterior.png";
import rainPng from "./assets/proposed-community/spot-perspective/raining.png";
import roof from "./assets/proposed-community/spot-perspective/roof.png";
import scene2 from "./assets/proposed-community/spot-perspective/scene-2.png";
import scene3 from "./assets/proposed-community/spot-perspective/scene-3.png";
import scene4 from "./assets/proposed-community/spot-perspective/scene-4.png";
import scene5 from "./assets/proposed-community/spot-perspective/scene-5.png";
import scene6 from "./assets/proposed-community/spot-perspective/scene-6.png";
import scene7 from "./assets/proposed-community/spot-perspective/scene-7_1.png";
import scene8 from "./assets/proposed-community/spot-perspective/scene-8_1.png";
import scene9 from "./assets/proposed-community/spot-perspective/scene-9.png";
import scene10 from "./assets/proposed-community/spot-perspective/scene-10.png";
import scene15 from "./assets/proposed-community/spot-perspective/scene-15_3.png";
import scene16 from "./assets/proposed-community/spot-perspective/scene-16.png";
import spot from "./assets/proposed-community/spot-perspective/spot-for-detail.png";


//PROPOSED PARK
import parkaerial2 from "./assets/proposed-park/AERIAL 2.png";
import parkaerial from "./assets/proposed-park/AERIAL.png";
import parkimage1 from "./assets/proposed-park/Image_1.png";
import parkimage2 from "./assets/proposed-park/Image_2.png";
import parkimage3 from "./assets/proposed-park/Image_3.png";
import parkimage4 from "./assets/proposed-park/Image_4.png";
import parkimage5 from "./assets/proposed-park/Image_5.png";
import parkimage6 from "./assets/proposed-park/Image_6.png";
import parkimage7 from "./assets/proposed-park/Image_7.png";
import parkimage8 from "./assets/proposed-park/Image_8.png";
import parkimage9 from "./assets/proposed-park/Image_9.png";
import parkimage11 from "./assets/proposed-park/Image_11.png";
import parkimage12 from "./assets/proposed-park/Image_12.png";
import parkimage13 from "./assets/proposed-park/Image_13.png";
import parkimage14 from "./assets/proposed-park/Image_14.png";
import parkimage16 from "./assets/proposed-park/Image_16.png";
import parkimage17 from "./assets/proposed-park/Image_17.png";
import parkimage18 from "./assets/proposed-park/Image_18.png";
import parkimage20 from "./assets/proposed-park/Image_20.png";
import parkimage21 from "./assets/proposed-park/Image_21.png";
import parkimage from "./assets/proposed-park/Image.png";

//SAMPLE RENDER
import renderbedroom from "./assets/sample-render/bedroom.jpg";
import renderlivingarea1 from "./assets/sample-render/Living Area 1.jpg";

/* ======== CONFIGURABLE CONTENT ======== */
const PROFILE = {
  name: "KIAN LOUISE G. SABORDO",
  role: "Architecture",
  blurb:
    "Speculative, parametric, beautifully unreal. I explore architecture where material logic meets digital imagination.",
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

const PROJECTS = [
{
  title: "PROPOSED COMMUNITY",
  year: 2024,
  type: "Public Space / Pavilion",
  cover: aerial,
  tags: ["perspectives", "condo", "spot-pres", "street-scapes", "studio-unit", "placemaking"],
  summary:
    "Visual studies grouped by topic. 'Perspectives' contains 4 subfolders (Condo, Spot Pres, Street Scapes, Studio Unit).",

  folders: [
    {
      name: "Perspectives",
      folders: [
        // 1) CONDO — INITIAL
        {
          name: "Condo — Initial",
          images: [condo1, condo2, condo3, condo4, condo5, condo6, condo7, condo8],
        },
        // 2) SPOT PRES
        {
          name: "Spot Pres",
          images: [
            spotscene, spotscene1, spotscene3, spotscene4, spotscene5,
            spotscene6, spotscene7, spotscene8, spotscene9
          ],
        },
        // 3) STREET-SCAPES
        {
          name: "Street Scapes",
          images: [aerial, clinic, clinic2, mall2, maldiff, school, school2],
        },
        // 4) STUDIO UNIT
        {
          name: "Studio Unit",
          images: [
            // scenes
            studioscene, studioscene2, studioscene3, studioscene4,
            studioscene5, studioscene6, studioscene7, studioscene8,
            studioscene9, studioscene10,
            // diagrams / plans
            studiocross, studioiso, studioUNIT,
            bedroomcross, bedroomfloorplan, bedroomlong,
            floorplan, floorplan2, image1_1
          ],
        },
      ],
    },

    // Other topics as leaf folders
    {
      name: "Place Making",
      images: [image, image1, image3, image4],
    },
    {
      name: "Spot Perspectives (Set B)",
      images: [
        exterior, exterior2, rainPng,
        scene2, scene3, scene4, scene5, scene6, scene7, scene8, scene9, scene10,
        roof, scene15, scene16, spot
      ],
    },
  ],
},
{
  title: "PROPOSED PARK",
  year: 2025,
  type: "Landscape / Park",
  cover: parkaerial, // local cover
  tags: ["aerials", "perspectives", "boards"],
  summary:
    "Park scheme rendered locally. Aerial studies, perspective views, and reference boards.",
  folders: [
    {
      name: "Aerials",
      images: [parkaerial, parkaerial2],
    },
    {
      name: "Perspectives — Set A",
      images: [
        parkimage1, parkimage2, parkimage3, parkimage4, parkimage5,
        parkimage6, parkimage7, parkimage8, parkimage9
      ],
    },
    {
      name: "Perspectives — Set B",
      images: [
        parkimage11, parkimage12, parkimage13, parkimage14,
        parkimage16, parkimage17, parkimage18, parkimage20, parkimage21
      ],
    },
    {
      name: "Boards / References",
      images: [parkimage], // Image.png
    },
  ],
},

{
  title: "SAMPLE RENDER",
  year: 2023,
  type: "Residential / Interiors",
  cover: renderbedroom, // local cover
  tags: ["interior", "lighting", "materials"],
  summary:
    "Sample interior renders (bedroom and living area) from local assets.",
  folders: [
    {
      name: "Residential Interiors",
      images: [renderbedroom, renderlivingarea1],
    },
  ],
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
    return saved || "light";
  });

  const stageRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

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

              {/* Dark Mode Toggle (icon-only) */}
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
                  <div className="caption">Unreal studies — {yearRange}</div>
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
                  <div className="ratio ratio-4x3 overflow-hidden position-relative">
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

      {/* Modal with Folder Switcher */}
      <ProjectModal
        show={show}
        onHide={() => setShow(false)}
        project={active}
      />
    </div>
  );
}

function ProjectModal({ show, onHide, project }) {
  const [folderIndex, setFolderIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const dockRef = useRef(null);

  useEffect(() => {
    setFolderIndex(0);
    setSubIndex(0);
  }, [project]);

  if (!project) return null;

  // Normalize data
  const folders =
    Array.isArray(project.folders) && project.folders.length
      ? project.folders
      : [{ name: "All", images: project.images || [] }];

  const activeFolder = folders[folderIndex] || folders[0];
  const isGroup = Array.isArray(activeFolder?.folders);
  const subfolders = isGroup ? activeFolder.folders : null;

  const currentImages = isGroup
    ? subfolders?.[subIndex]?.images ?? []
    : activeFolder?.images ?? [];

  // Helpers for previews
  const folderPreview = (f) => {
    if (Array.isArray(f.folders) && f.folders.length)
      return f.folders[0]?.images?.[0];
    return f.images?.[0];
  };
  const countOf = (f) =>
    Array.isArray(f.folders)
      ? f.folders.reduce((n, sf) => n + (sf.images?.length || 0), 0)
      : (f.images?.length || 0);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (!show) return;
      if (e.key === "ArrowRight") {
        setFolderIndex((i) => (i + 1) % folders.length);
        setSubIndex(0);
      }
      if (e.key === "ArrowLeft") {
        setFolderIndex((i) => (i - 1 + folders.length) % folders.length);
        setSubIndex(0);
      }
      if (isGroup && e.key === "ArrowDown") {
        setSubIndex((i) => (i + 1) % subfolders.length);
      }
      if (isGroup && e.key === "ArrowUp") {
        setSubIndex((i) => (i - 1 + subfolders.length) % subfolders.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [show, folders.length, isGroup, subfolders?.length]);

  // Auto scroll active chip into view
  useEffect(() => {
    const el = dockRef.current?.querySelector('[data-active="true"]');
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [folderIndex]);

  return (
    <Modal show={show} onHide={onHide} size="lg" centered className="project-modal">
      <Modal.Header closeButton className="modal-head">
        <Modal.Title className="modal-title-strong">
          {project.title}
          <span className="modal-sub"> · {project.type}</span>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="modal-body-ink">
        {/* Breadcrumbs */}
        <div className="crumbs readable-strong mb-2">
          <span>{project.title}</span>
          <span className="sep">›</span>
          <span className="muted">{activeFolder.name}</span>
          {isGroup && (
            <>
              <span className="sep">›</span>
              <span className="muted">{subfolders[subIndex]?.name}</span>
            </>
          )}
        </div>

        {/* FOLDER DOCK */}
        <div className="folder-dock" ref={dockRef} role="tablist" aria-label="Project folders">
          {folders.map((f, i) => {
            const active = i === folderIndex;
            const preview = folderPreview(f);
            return (
              <button
                key={`${f.name}-${i}`}
                role="tab"
                aria-selected={active}
                data-active={active ? "true" : "false"}
                className={`folder-pill ${active ? "active" : ""}`}
                onClick={() => {
                  setFolderIndex(i);
                  setSubIndex(0);
                }}
                title={f.name}
              >
                <div className="thumb" aria-hidden>
                  {preview ? <img src={preview} alt="" /> : <span className="placeholder">📁</span>}
                </div>
                <div className="meta">
                  <div className="name">{f.name}{Array.isArray(f.folders) ? " · group" : ""}</div>
                  <div className="count muted small">{countOf(f)} images</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* SUBFOLDER GRID (only for groups like Perspectives) */}
        {isGroup && (
          <div className="sub-grid" role="tablist" aria-label={`${activeFolder.name} subfolders`}>
            {subfolders.map((sf, i) => {
              const active = i === subIndex;
              const prev = sf.images?.[0];
              return (
                <button
                  key={`${sf.name}-${i}`}
                  role="tab"
                  aria-selected={active}
                  className={`sub-card ${active ? "active" : ""}`}
                  onClick={() => setSubIndex(i)}
                  title={sf.name}
                >
                  <div className="sub-thumb">
                    {prev ? <img src={prev} alt="" /> : <span className="placeholder">🖼️</span>}
                  </div>
                  <div className="sub-name readable-strong">{sf.name}</div>
                  <div className="sub-count muted small">{sf.images?.length || 0} images</div>
                </button>
              );
            })}
          </div>
        )}

        <div className="book-edge" aria-hidden />
        <Carousel interval={4200} fade>
          {currentImages.map((src, i) => (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100 modal-img"
                src={src}
                alt={`${project.title} — ${
                  isGroup ? `${activeFolder.name} / ${subfolders[subIndex]?.name}` : activeFolder.name
                } — ${i + 1}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>

        {project.summary && <p className="mt-3 readable">{project.summary}</p>}
        {project.tags?.length > 0 && (
          <div className="d-flex flex-wrap gap-2 mt-2">
            {project.tags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        )}
      </Modal.Body>

      <Modal.Footer className="modal-foot">
        <Button variant="outline-secondary" onClick={onHide} className="btn-outline-ink">
          Close
        </Button>
        <Button
          variant="secondary"
          className="btn-ink"
          href={`mailto:${PROFILE.email}?subject=${encodeURIComponent(
            `Inquiry about ${project.title}${
              isGroup
                ? " — " + activeFolder.name + " / " + (subfolders?.[subIndex]?.name ?? "")
                : " — " + (activeFolder?.name ?? "")
            }`
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
          Thanks! Your message was staged. In production, wire this to your email or a service like Formspree.
        </Alert>
      )}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="g-3">
          <Col md={6}>
            <Form.Group controlId="name">
              <Form.Label className="readable-strong">Name</Form.Label>
              <Form.Control required type="text" placeholder="Your name" />
              <Form.Control.Feedback type="invalid">Please provide your name.</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="email">
              <Form.Label className="readable-strong">Email</Form.Label>
              <Form.Control required type="email" placeholder="you@email.com" />
              <Form.Control.Feedback type="invalid">A valid email is required.</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col xs={12}>
            <Form.Group controlId="message">
              <Form.Label className="readable-strong">Message</Form.Label>
              <Form.Control required as="textarea" rows={4} placeholder="Tell me about your project…" />
              <Form.Control.Feedback type="invalid">Please add a short message.</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col xs={12}>
            <Button type="submit" className="btn-ink">Send Message</Button>
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

/* ======== STYLES (Palette-first + Dark Mode) ======== */
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
:root[data-theme="dark"]{
  --paper:#455763;
  --sand:#D6C9B4;
  --ink:#E8E2DA;
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
.text-gradient{ background: linear-gradient(92deg,var(--ink-900), var(--ink-500)); -webkit-background-clip:text; background-clip:text; color:transparent; }

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
.glass-nav{ background: linear-gradient(180deg, color-mix(in oklab, var(--paper), transparent 25%), rgba(0,0,0,0)); backdrop-filter: blur(8px); border-bottom: 1px solid color-mix(in oklab, var(--ink), transparent 70%); }

.theme-toggle{ appearance:none; border:0; background:none; padding:0; margin:0; display:inline-block; }
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
.theme-toggle .toggle-icon{ position:absolute; top:50%; transform:translateY(-50%); font-size:14px; opacity:.8; pointer-events:none; user-select:none; }
.theme-toggle .toggle-icon.left{  left:8px;  }
.theme-toggle .toggle-icon.right{ right:8px; }

.hero{ padding-top: 96px; min-height: 86vh; position: relative; }
.hero-stage{ perspective:800px; }
.floating-card{ --rx:0deg; --ry:0deg; --tx:0px; --ty:0px; transform: rotateX(var(--rx)) rotateY(var(--ry)) translate(var(--tx), var(--ty)); transition: transform .08s linear; position: relative; border-radius: 24px; overflow: hidden; border:1px solid color-mix(in oklab, var(--ink), transparent 70%); box-shadow: 0 24px 60px color-mix(in oklab, var(--ink), transparent 70%), inset 0 0 0 1px color-mix(in oklab, var(--ink), transparent 92%); }
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

.py-6{ padding: 6rem 0; }
.badge-chip{ border:1px solid color-mix(in oklab, var(--ink), transparent 65%); color:var(--ink-700); background:color-mix(in oklab, var(--paper), white 10%); padding:.35rem .6rem; border-radius:999px; }

.project-card{ background: color-mix(in oklab, var(--paper), white 8%); border: 1px solid color-mix(in oklab, var(--ink), transparent 70%); cursor:pointer; transition: transform .25s ease, box-shadow .25s ease; border-radius: 20px; overflow:hidden; }
.project-card:hover{ transform: translateY(-6px); box-shadow: 0 24px 80px color-mix(in oklab, var(--ink), transparent 72%);} 
.project-card .project-img{ width:100%; height:100%; object-fit:cover; transition: transform .5s ease; filter:saturate(1.02) contrast(1.02); }
.project-card:hover .project-img{ transform: scale(1.06);} 
.tag{ font-size:.8rem; padding:.25rem .55rem; border-radius:999px; border:1px solid color-mix(in oklab, var(--ink), transparent 65%); background:color-mix(in oklab, var(--paper), white 14%); color:var(--ink-700); }

.about-card, .contact-form, .contact-card{
  background: color-mix(in oklab, var(--paper), white 10%); border: 1px solid color-mix(in oklab, var(--ink), transparent 70%);
  box-shadow: 0 12px 40px color-mix(in oklab, var(--ink), transparent 85%);
}

.skill-row .progress{ height: 10px; background: color-mix(in oklab, var(--ink), transparent 90%); border:1px solid color-mix(in oklab, var(--ink), transparent 80%); }
.skill-row .progress-bar{ background: linear-gradient(90deg, var(--ink), var(--ink-500)); box-shadow: 0 0 18px color-mix(in oklab, var(--ink), transparent 75%); }

.btn-ink{ background: var(--ink); color: color-mix(in oklab, var(--paper), white 10%); border:1px solid var(--ink-900); border-radius:999px; padding:.6rem 1rem; font-weight:700; letter-spacing:.2px; }
.btn-ink:hover{ filter: brightness(0.95); }
.btn-outline-ink{ background: transparent; color: var(--ink); border:1px solid var(--ink); border-radius:999px; padding:.6rem 1rem; font-weight:700; }
.btn-outline-ink:hover{ background: color-mix(in oklab, var(--paper), var(--ink) 6%); }

a.link-ink{ color: var(--ink-900); text-decoration: underline; text-underline-offset: 3px; }

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

.center{text-align:center}
/* —— Creative Folder Picker —— */
.crumbs{ display:flex; gap:.5rem; align-items:center; }
.crumbs .sep{ opacity:.5; }

.folder-dock{
  display:flex; gap:.6rem; overflow:auto; padding:.25rem .25rem .5rem;
  margin-bottom: .75rem;
  scroll-snap-type: x mandatory;
}
.folder-pill{
  scroll-snap-align: center;
  display:flex; align-items:center; gap:.65rem;
  background: color-mix(in oklab, var(--paper), white 12%);
  border:1px solid color-mix(in oklab, var(--ink), transparent 70%);
  border-radius: 999px;
  padding:.35rem .55rem .35rem .35rem;
  transition: transform .15s ease, box-shadow .2s ease, background .2s ease;
  cursor:pointer; min-width: 220px; text-align:left;
}
.folder-pill:hover{ transform: translateY(-2px); box-shadow:0 8px 24px color-mix(in oklab, var(--ink), transparent 85%); }
.folder-pill.active{ background: color-mix(in oklab, var(--paper), var(--sand) 12%); border-color: color-mix(in oklab, var(--ink), transparent 55%); }
.folder-pill .thumb{
  width:44px; height:44px; border-radius:10px; overflow:hidden; flex:0 0 44px;
  border:1px solid color-mix(in oklab, var(--ink), transparent 75%);
  background: color-mix(in oklab, var(--paper), white 8%);
}
.folder-pill .thumb img{ width:100%; height:100%; object-fit:cover; display:block; }
.folder-pill .placeholder{ display:grid; place-items:center; width:100%; height:100%; font-size:22px; opacity:.7; }
.folder-pill .meta .name{ font-weight:700; line-height:1.1; }
.folder-pill .meta .count{ font-size:.8rem; }

.sub-grid{
  display:grid; grid-template-columns: repeat(auto-fill, minmax(160px,1fr));
  gap:.75rem; margin:.25rem 0 1rem;
}
.sub-card{
  text-align:left; border-radius:14px; padding:.45rem; cursor:pointer;
  background: color-mix(in oklab, var(--paper), white 8%);
  border:1px solid color-mix(in oklab, var(--ink), transparent 75%);
  transition: transform .15s ease, box-shadow .2s ease, background .2s ease, border-color .2s ease;
}
.sub-card:hover{ transform: translateY(-2px); box-shadow:0 12px 28px color-mix(in oklab, var(--ink), transparent 85%); }
.sub-card.active{ background: color-mix(in oklab, var(--paper), var(--sand) 10%); border-color: color-mix(in oklab, var(--ink), transparent 55%); }
.sub-thumb{ aspect-ratio: 4/3; border-radius:10px; overflow:hidden; border:1px solid color-mix(in oklab, var(--ink), transparent 80%); background:color-mix(in oklab, var(--paper), white 6%); }
.sub-thumb img{ width:100%; height:100%; object-fit:cover; display:block; }
.sub-name{ margin-top:.45rem; }
.sub-count{ font-size:.8rem; }
`;