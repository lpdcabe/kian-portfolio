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
import "bootstrap-icons/font/bootstrap-icons.css";

/* ==== LOCAL ASSETS (Community) ==== */
import coffeestand from "./assets/proposed-community/neighborhood-stores/COFFEE STAND.png";
import corner from "./assets/proposed-community/neighborhood-stores/CORNER.png";
import neighboorhoodimage2 from "./assets/proposed-community/neighborhood-stores/Image_2.png";
import neighboorhoodimage4 from "./assets/proposed-community/neighborhood-stores/Image_4.png";
import neighboorhoodimage5 from "./assets/proposed-community/neighborhood-stores/Image_5.png";
import neighboorhood1 from "./assets/proposed-community/neighborhood-stores/NEIGHBORHOOD 1.png";
import neighboorhood2 from "./assets/proposed-community/neighborhood-stores/NEIGHBORHOOD 2.png";
import neighboorhood4 from "./assets/proposed-community/neighborhood-stores/NEIGHBORHOOD 4.png";
import neighboorhoodstore from "./assets/proposed-community/neighborhood-stores/NEIGHBORHOOD STORE.png";
import neighboorhoodnew from "./assets/proposed-community/neighborhood-stores/new.png";

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
import school2 from "./assets/proposed-community/perspectives/street-scapes/SCHOOL-2.png";

import bedroomcross from "./assets/proposed-community/perspectives/studio-unit/1 BEDROOM CROSS.png";
import image1_1 from "./assets/proposed-community/perspectives/studio-unit/Image.png";
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
import exterior from "./assets/proposed-community/spot-perspective/EXTERIOR.png";
import rainPng from "./assets/proposed-community/spot-perspective/raining.png";
import roof from "./assets/proposed-community/spot-perspective/ROOF.png";
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

// PROPOSED PARK
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

// SABA RESORT
import bedroomlumion2 from "./assets/saba-resort/bedroom-2-lumion.jpg";
import sababedroom2 from "./assets//saba-resort/BEDROOM 2.png";
import bedroomlumion from "./assets/saba-resort/bedroom-lumion.jpg";
import bedroomlumion3 from "./assets/saba-resort/BEDROOM 2.png";
import sababedroom from "./assets/saba-resort/BEDROOM.png";
import cabin from "./assets/saba-resort/CABIN 1 FLOOR PLAN.png";
import dining from "./assets/saba-resort/DINING AREA LUMION.jpg";
import frontelevation from "./assets/saba-resort/FRONT ELEVATION.png";
import kitchen from "./assets//saba-resort/KITCHEN.png";
import livingdining from "./assets/saba-resort/LIVING AND DINING.png";
import livingarea from "./assets/saba-resort/LIVING AREA.png";

// SAMPLE RENDER
import renderbedroom from "./assets/sample-render/bedroom.jpg";
import renderlivingarea1 from "./assets/sample-render/Living Area 1.jpg";

/* ======== CONFIGURABLE CONTENT ======== */
const PROFILE = {
  name: "KIAN LOUISE G. SABORDO",
  role: "Architecture",
  blurb:
    "Speculative, parametric, beautiful. I explore architecture where material logic meets digital imagination.",
  email: "klgsabordo.21@gmail.com",
  location: "Tabun, Angeles City, Pampanga",
  socials: [
    { label: "Instagram", href: "https://instagram.com/kian_louises", icon: "bi-instagram" },
    { label: "Facebook", href: "https://www.facebook.com/kian.sabordo.21", icon: "bi-facebook" },
  ],
  course: "BS Architecture, Holy Angel University",
};

const PROJECTS = [
  {
    title: "PROPOSED COMMUNITY",
    year: 2024,
    type: "Public Space / Pavilion",
    cover: aerial,
    tags: ["neighborhood stores", "perspectives", "spot pres", "street scapes", "studio unit", "placemaking"],
    summary:
      "Visual studies grouped by topic. 'Perspectives' contains 4 subfolders (Spot Pres, Street Scapes, Studio Unit).",

    folders: [
      {
        name: "Neighborhood Stores",
        images: [
          coffeestand,
          corner,
          neighboorhoodimage2,
          neighboorhoodimage4,
          neighboorhoodimage5,
          neighboorhood1,
          neighboorhood2,
          neighboorhood4,
          neighboorhoodstore,
          neighboorhoodnew,
        ],
      },
      {
        name: "Perspectives",
        folders: [
          {
            name: "Spot Pres",
            images: [
              spotscene,
              spotscene1,
              spotscene3,
              spotscene4,
              spotscene5,
              spotscene6,
              spotscene7,
              spotscene8,
              spotscene9,
            ],
          },
          {
            name: "Street Scapes",
            images: [aerial, clinic, clinic2, mall2, maldiff, school, school2],
          },
          {
            name: "Studio Unit",
            images: [
              studioscene,
              studioscene2,
              studioscene3,
              studioscene4,
              studioscene5,
              studioscene6,
              studioscene7,
              studioscene8,
              studioscene9,
              studioscene10,
              studiocross,
              studioiso,
              studioUNIT,
              bedroomcross,
              bedroomfloorplan,
              bedroomlong,
              image1_1,
            ],
          },
        ],
      },
      {
        name: "Place Making",
        images: [image, image1, image3, image4],
      },
      {
        name: "Spot Perspectives (Set B)",
        images: [
          exterior,
          exterior2,
          rainPng,
          scene2,
          scene3,
          scene4,
          scene5,
          scene6,
          scene7,
          scene8,
          scene9,
          scene10,
          roof,
          scene15,
          scene16,
          spot,
        ],
      },
    ],
  },
  {
    title: "PROPOSED PARK",
    year: 2025,
    type: "Landscape / Park",
    cover: parkaerial,
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
          parkimage1,
          parkimage2,
          parkimage3,
          parkimage4,
          parkimage5,
          parkimage6,
          parkimage7,
          parkimage8,
          parkimage9,
        ],
      },
      {
        name: "Perspectives — Set B",
        images: [
          parkimage11,
          parkimage12,
          parkimage13,
          parkimage14,
          parkimage16,
          parkimage17,
          parkimage18,
          parkimage20,
          parkimage21,
        ],
      },
      {
        name: "Boards / References",
        images: [parkimage],
      },
    ],
  },

  {
    title: "SABA RESORT",
    year: 2023,
    type: "Resort / Interiors",
    cover: livingarea,
    tags: ["interior", "lighting", "materials"],
    summary:
      "Sample interior renders (kitchen, bedroom and living area) from local assets.",
    folders: [
      {
        name: "Resort Interiors",
        images: [
          bedroomlumion2,
          bedroomlumion3,
          sababedroom2,
          bedroomlumion,
          sababedroom,
          cabin,
          dining,
          frontelevation,
          kitchen,
          livingdining,
        ],
      },
    ],
  },

  {
    title: "SAMPLE RENDER",
    year: 2023,
    type: "Residential / Interiors",
    cover: renderbedroom,
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

// New topic for the hero crossfade (carousel removed)
const HIGHLIGHTS = [
  { src: bedroomfloorplan, label: "1BR Floor Plan" },
  { src: studiocross,      label: "Studio Cross Section" },
  { src: studioiso,        label: "Studio Isometric" },
  { src: studioUNIT,       label: "Studio Longitudinal" },
  { src: bedroomcross,     label: "1BR Cross Section" },
  { src: cabin,            label: "Cabin Floor Plan" },
  { src: frontelevation,   label: "Front Elevation" },
  { src: parkimage,        label: "Boards / References" },
];

export default function ArchitectPortfolio() {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(null);

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) document.documentElement.setAttribute("data-theme", saved);
    return saved || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

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

              {/* Dark Mode Toggle (icon-only, unreal, with swapping sun/moon) */}
              <button
                type="button"
                onClick={(e) => {
                  toggleTheme();
                  e.currentTarget.classList.remove("burst");
                  void e.currentTarget.offsetWidth; // reflow for burst
                  e.currentTarget.classList.add("burst");
                }}
                className={`theme-toggle unreal ms-lg-3 ${theme}`}
                aria-label="Toggle dark mode"
                role="switch"
                aria-checked={theme === "dark"}
              >
                <span className="toggle-track">
                  <span className="toggle-aurora" aria-hidden />

                  {/* thumb carries the active icon; they swap to the front */}
                  <span className="toggle-thumb">
                    <span className={`thumb-icon sun ${theme === "light" ? "front" : ""}`} aria-hidden>☀️</span>
                    <span className={`thumb-icon moon ${theme === "dark" ? "front" : ""}`} aria-hidden>🌙</span>
                    <span className="thumb-sparkle" aria-hidden />
                  </span>

                  <span className="toggle-glow" aria-hidden />
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
              <div className="holo-frame">
                <div className="blueprint">
                  {/* Crossfading project shots */}
                  {HIGHLIGHTS.map((h, i) => (
                    <img
                      key={h.label + i}
                      src={h.src}
                      alt={h.label}
                      className="holo-img"
                      style={{ "--i": i }}
                    />
                  ))}

                  {/* FX layers */}
                  <div className="scanline" aria-hidden />
                  <div className="chromatic" aria-hidden />

                  {/* Blueprint corners */}
                  <span className="bp-corner tl" aria-hidden />
                  <span className="bp-corner tr" aria-hidden />
                  <span className="bp-corner bl" aria-hidden />
                  <span className="bp-corner br" aria-hidden />
                </div>

                <div className="holo-caption">
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
              <Col key={i} sm={6} lg={4}>
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
                  I design with clarity and curiosity. crafting spaces that feel inevitable, useful, and quietly bold.
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
                <h5 className="readable-strong mb-3">Educational Attainment</h5>
                <ul className="readable small mb-4">
                  <li>4th Year - Bachelor of Science in Architecture | Holy Angel University | 2022 - Present</li>
                  <li>Grade 11 & 12 - Bronze Academic Achievement | Angeles University Foundation | 2020-2022 </li>
                </ul>
                <h5 className="readable-strong mb-3">Experience</h5>
                <ul className="readable small">
                  <li>Pamintuan Construction | June 2025 - Present</li>
                  <li>EJG Home Design | May 2025</li>
                  <li>Shira Hospitality | April - June 2025</li>
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
      <ProjectModal show={show} onHide={() => setShow(false)} project={active} />
    </div>
  );
}

function ProjectModal({ show, onHide, project }) {
  const [folderIndex, setFolderIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);

  useEffect(() => {
    setFolderIndex(0);
    setSubIndex(0);
  }, [project]);

  if (!project) return null;

  const folders = Array.isArray(project.folders) && project.folders.length
    ? project.folders
    : [{ name: "All", images: project.images || [] }];

  const activeFolder = folders[folderIndex] || folders[0];
  const isGroup = Array.isArray(activeFolder?.folders);
  const subfolders = isGroup ? activeFolder.folders : null;

  const currentImages = isGroup
    ? (subfolders?.[subIndex]?.images ?? [])
    : (activeFolder?.images ?? []);

  return (
    <Modal show={show} onHide={onHide} size="lg" centered className="project-modal">
      <Modal.Header closeButton className="modal-head">
        <Modal.Title className="modal-title-strong">
          {project.title} <span className="modal-sub">· {project.type}</span>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="modal-body-ink">
        {/* CHIP PICKERS */}
        <div className="d-flex flex-column gap-3 mb-3">
          <div className="d-flex align-items-center gap-2 flex-wrap">
            <div className="readable-strong me-1">Folder:</div>
            <div className="chip-row" role="tablist" aria-label="Choose folder">
              {folders.map((f, i) => {
                const active = i === folderIndex;
                const grouped = Array.isArray(f.folders);
                return (
                  <button
                    key={`${f.name}-${i}`}
                    role="tab"
                    aria-selected={active}
                    className={`chip ${active ? 'active' : ''}`}
                    onClick={() => { setFolderIndex(i); setSubIndex(0); }}
                    title={grouped ? `${f.name} (group)` : f.name}
                  >
                    {f.name} {grouped ? <span className="chip-dot" aria-hidden>●</span> : null}
                  </button>
                );
              })}
            </div>
          </div>

          {isGroup && (
            <div className="d-flex align-items-center gap-2 flex-wrap">
              <div className="readable-strong me-1">Subfolder:</div>
              <div className="chip-row" role="tablist" aria-label="Choose subfolder">
                {subfolders.map((sf, i) => (
                  <button
                    key={`${sf.name}-${i}`}
                    role="tab"
                    aria-selected={i === subIndex}
                    className={`chip ${i === subIndex ? 'active' : ''}`}
                    onClick={() => setSubIndex(i)}
                    title={`${sf.name} (${i + 1}/${subfolders.length})`}
                  >
                    {sf.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

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
  const formRef = useRef(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [validated, setValidated] = useState(false);
  const [sending, setSending] = useState(false);

  const FORMSPREE_URL = "https://formspree.io/f/xqagbajl";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setSending(true);
    setError("");

    try {
      const formData = new FormData(form);
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSent(true);
        form.reset();
        setValidated(false);
      } else {
        const data = await res.json().catch(() => ({}));
        const msg =
          (data?.errors?.map((e) => e.message).join(", ")) ||
          "Sorry, something went wrong. Please try again.";
        setError(msg);
      }
    } catch (err) {
      setError("Network error. Please try again or email me directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="contact-form p-4 rounded-4">
      {sent && (
        <Alert variant="success" onClose={() => setSent(false)} dismissible>
          Thanks! Your message was sent. I’ll reply to your email shortly.
        </Alert>
      )}
      {error && (
        <Alert variant="danger" onClose={() => setError("")} dismissible>
          {error}
        </Alert>
      )}

      <Form ref={formRef} noValidate validated={validated} onSubmit={handleSubmit}>
        {/* Honeypot anti-spam (hidden) */}
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="d-none" />

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
              <Form.Control
                required
                as="textarea"
                rows={4}
                name="message"
                placeholder="Tell me about your project…"
              />
              <Form.Control.Feedback type="invalid">Please add a short message.</Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col xs={12}>
            <Button type="submit" className="btn-ink" disabled={sending}>
              {sending ? "Sending…" : "Send Message"}
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

/* ==== UNREAL THEME TOGGLE (with swapping sun/moon) ==== */
.theme-toggle{ appearance:none; border:0; background:none; padding:0; margin:0; display:inline-block; cursor:pointer; }
.theme-toggle .toggle-track{
  --w:64px; --h:34px; --r:999px;
  position:relative; width:var(--w); height:var(--h); border-radius:var(--r);
  background: color-mix(in oklab, var(--paper), var(--ink) 7%);
  border:1px solid color-mix(in oklab, var(--ink), transparent 60%);
  box-shadow:
    inset 0 2px 8px color-mix(in oklab, var(--ink), transparent 86%),
    0 10px 24px color-mix(in oklab, var(--ink), transparent 85%);
  overflow:hidden;
  display:inline-block;
}

/* Holographic aurora sweep */
.theme-toggle .toggle-aurora{
  position:absolute; inset:-40% -10%;
  background:
    radial-gradient(60% 40% at 25% 30%, color-mix(in oklab, var(--sand), transparent 70%), transparent 60%),
    radial-gradient(60% 40% at 75% 70%, color-mix(in oklab, var(--ink-500), transparent 72%), transparent 60%);
  mix-blend-mode: color-burn; opacity:.85;
  transform: translateX(-30%);
  animation: aurora-move 3.8s linear infinite;
}
@keyframes aurora-move {
  0%   { transform: translateX(-30%); }
  50%  { transform: translateX(10%); }
  100% { transform: translateX(-30%); }
}

/* Soft outer glow ring */
.theme-toggle .toggle-glow{
  position:absolute; inset:-35%;
  border-radius:999px;
  box-shadow: 0 0 120px color-mix(in oklab, var(--ink), transparent 80%);
  pointer-events:none;
}

/* Side markers (static) */
.theme-toggle .toggle-icon.side{
  position:absolute; top:50%; transform:translateY(-50%); font-size:14px; opacity:.75;
  pointer-events:none; user-select:none;
}
.theme-toggle .toggle-icon.side.left{  left:9px;  }
.theme-toggle .toggle-icon.side.right{ right:9px; }

/* Thumb with micro-parallax + shine */
.theme-toggle .toggle-thumb{
  position:absolute; top:3px; left:3px; width:28px; height:28px; border-radius:50%;
  background: linear-gradient(160deg, var(--ink), color-mix(in oklab, var(--ink), var(--paper) 10%));
  box-shadow:
    0 2px 10px color-mix(in oklab, var(--ink), transparent 65%),
    inset 0 0 0 1px color-mix(in oklab, var(--paper), transparent 70%);
  transition: transform .28s cubic-bezier(.2,.8,.2,1), background .25s ease;
  overflow:hidden;
  display:grid; place-items:center;
}

/* Icons inside the thumb — stacked and cross-fading */
.theme-toggle .thumb-icon{
  position:absolute; inset:0; display:grid; place-items:center;
  font-size:15px; line-height:1;
  opacity:0; transform: scale(.7) rotate(-10deg);
  filter: drop-shadow(0 1px 0.5px color-mix(in oklab, var(--paper), transparent 40%));
  transition: opacity .22s ease, transform .28s cubic-bezier(.2,.8,.2,1), z-index 0s linear;
  z-index:1;
}
.theme-toggle .thumb-icon.front{
  opacity:1; transform: scale(1) rotate(0deg); z-index:2;
}

/* Little sparkle inside the thumb */
.theme-toggle .thumb-sparkle{
  position:absolute; left:-40%; top:-40%; width:200%; height:200%;
  background:
    radial-gradient(8px 8px at 40% 45%, color-mix(in oklab, var(--paper), white 30%), transparent 60%),
    radial-gradient(12px 8px at 70% 60%, color-mix(in oklab, var(--sand), white 20%), transparent 60%);
  opacity:.55; filter: blur(0.3px);
  animation: sparkle 2.2s ease-in-out infinite;
}
@keyframes sparkle{
  0%,100%{ transform: translate(0,0) rotate(0deg); }
  50%    { transform: translate(6%, 6%) rotate(8deg); }
}

/* Thumb travel + slight parallax per mode */
.theme-toggle.light .toggle-thumb{ transform: translateX(0); }
.theme-toggle.dark  .toggle-thumb{ transform: translateX(30px); }
.theme-toggle.light .thumb-icon.sun.front { transform: translateX(-1px) scale(1); }
.theme-toggle.dark  .thumb-icon.moon.front{ transform: translateX(1px)  scale(1); }

/* Optional tint per mode */
.theme-toggle.light .toggle-thumb{
  background: linear-gradient(160deg, color-mix(in oklab, var(--ink), var(--paper) 8%), var(--ink));
}
.theme-toggle.dark .toggle-thumb{
  background: linear-gradient(160deg, var(--ink), color-mix(in oklab, var(--ink), var(--paper) 18%));
}

/* Click burst */
.theme-toggle.unreal.burst .toggle-track::after{
  content:""; position:absolute; inset:0; border-radius:999px;
  background:
    radial-gradient(circle at 50% 50%,
      color-mix(in oklab, var(--paper), var(--ink) 6%) 0%,
      transparent 60%);
  animation: burst .45s ease-out 1;
  pointer-events:none;
}
@keyframes burst{
  0%  { opacity:.85; transform: scale(0.9); }
  100%{ opacity:0;   transform: scale(1.15); }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce){
  .theme-toggle .toggle-aurora,
  .theme-toggle .thumb-sparkle,
  .theme-toggle .thumb-icon,
  .theme-toggle .toggle-thumb{ animation: none; transition: none; }
}

.hero{ padding-top: calc(80px + env(safe-area-inset-top)); min-height: 84vh; position: relative; }
.py-6{ padding: 5.5rem 0; }
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

/* ===== Modal ===== */
.project-modal .modal-content{ background: color-mix(in oklab, var(--paper), white 10%); border:1px solid color-mix(in oklab, var(--ink), transparent 70%); box-shadow: 0 32px 90px color-mix(in oklab, var(--ink), transparent 65%); }
.modal-head{ border-bottom:1px solid color-mix(in oklab, var(--ink), transparent 80%); background: linear-gradient(180deg, color-mix(in oklab, var(--sand), transparent 65%), transparent); }
.modal-title-strong{ font-weight:800; color:var(--ink-900); letter-spacing:.3px; }
.modal-sub{ font-size:.95rem; opacity:.8; font-weight:600; color:var(--ink-500); margin-left:.35rem; }
.modal-body-ink{ position:relative; }
.book-edge{ position:absolute; inset:auto 0 0 0; height:12px; background:
  repeating-linear-gradient(90deg, color-mix(in oklab, var(--ink), transparent 78%) 0 2px, transparent 2px 6px);
  opacity:.35; border-top:1px solid color-mix(in oklab, var(--ink), transparent 86%);
}
/* Key mobile/tablet fix: prevent overflow */
.modal-img{ border-radius:12px; border:1px solid color-mix(in oklab, var(--ink), transparent 80%); max-height: min(68vh, 900px); object-fit: contain; }
.modal-foot{ border-top:1px solid color-mix(in oklab, var(--ink), transparent 80%); background: color-mix(in oklab, var(--paper), white 8%); }

/* ===== CHIP PICKERS ===== */
.chip-row{ display:flex; gap:.5rem; flex-wrap:wrap; max-width:100%; overflow-x:auto; padding:.25rem; border-radius:12px; background: color-mix(in oklab, var(--paper), white 6%); border:1px dashed color-mix(in oklab, var(--ink), transparent 75%); }
.chip{ appearance:none; border:1px solid color-mix(in oklab, var(--ink), transparent 65%); background:color-mix(in oklab, var(--paper), white 12%); color:var(--ink-700); padding:.35rem .8rem; border-radius:999px; font-weight:700; letter-spacing:.2px; cursor:pointer; transition: transform .15s ease, background .15s ease, border-color .15s ease; white-space:nowrap; }
.chip:hover{ transform: translateY(-1px); background:color-mix(in oklab, var(--paper), white 18%); }
.chip.active{ border-color: var(--ink); background: var(--ink); color: color-mix(in oklab, var(--paper), white 8%); box-shadow: 0 8px 24px color-mix(in oklab, var(--ink), transparent 70%); }
.chip:focus{ outline: none; box-shadow: 0 0 0 3px color-mix(in oklab, var(--ink), transparent 70%); }
.chip-dot{ font-size:.9em; opacity:.65; margin-left:.4rem; }

.center{text-align:center}

/* ==== HOLOGRAPHIC BLUEPRINT SCANNER ==== */
.holo-frame{
  position: relative;
  border-radius: 24px;
  border:1px solid color-mix(in oklab, var(--ink), transparent 70%);
  overflow:hidden;
  box-shadow: 0 24px 60px color-mix(in oklab, var(--ink), transparent 70%),
              inset 0 0 0 1px color-mix(in oklab, var(--ink), transparent 92%);
}
.blueprint{
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
  background:
    linear-gradient(transparent 39px, color-mix(in oklab, var(--ink), transparent 86%) 40px),
    linear-gradient(90deg, transparent 39px, color-mix(in oklab, var(--ink), transparent 86%) 40px),
    radial-gradient(1200px 600px at 80% 20%, color-mix(in oklab, var(--ink), transparent 90%), transparent 60%),
    linear-gradient(to bottom right, color-mix(in oklab, var(--paper), white 8%), color-mix(in oklab, var(--sand), white 6%));
  background-size: 40px 40px, 40px 40px, auto, auto;
  overflow:hidden;
}
:root[data-theme="dark"] .blueprint{
  background:
    linear-gradient(transparent 39px, color-mix(in oklab, var(--ink), transparent 86%) 40px),
    linear-gradient(90deg, transparent 39px, color-mix(in oklab, var(--ink), transparent 86%) 40px),
    radial-gradient(1200px 600px at 80% 20%, color-mix(in oklab, var(--ink), transparent 90%), transparent 60%),
    linear-gradient(to bottom right, color-mix(in oklab, var(--paper), black 4%), color-mix(in oklab, var(--sand), black 6%));
}

/* Crossfade images */
.holo-img{
  position:absolute; inset:0;
  width:100%; height:100%; object-fit:cover;
  filter: saturate(1.05) contrast(1.05);
  opacity:0;
  animation: holoFade 20s linear infinite;
  animation-delay: calc(var(--i) * 5s);
}
@keyframes holoFade{
  0%{opacity:0}
  5%{opacity:1}
  25%{opacity:1}
  30%{opacity:0}
  100%{opacity:0}
}
/* Moving scanline */
.scanline{
  position:absolute; left:0; right:0; height:18%;
  top:-20%;
  background: linear-gradient(to bottom,
    transparent,
    color-mix(in oklab, var(--ink), transparent 80%),
    transparent);
  filter: blur(6px);
  animation: scan 4.2s linear infinite;
  mix-blend-mode: multiply;
}
@keyframes scan{
  0%{ transform: translateY(0); }
  100%{ transform: translateY(140%); }
}
/* Chromatic halo */
.chromatic{
  position:absolute; inset:-15%;
  background:
    radial-gradient(60% 40% at 30% 20%, color-mix(in oklab, var(--sand), transparent 70%), transparent 60%),
    radial-gradient(50% 40% at 80% 70%, color-mix(in oklab, var(--ink-500), transparent 75%), transparent 60%);
  mix-blend-mode: color-burn;
  pointer-events:none;
}
/* Blueprint corners */
.bp-corner{ position:absolute; width:42px; height:42px; }
.bp-corner::before, .bp-corner::after{
  content:""; position:absolute; background: color-mix(in oklab, var(--ink), transparent 45%);
}
.bp-corner.tl{ top:10px; left:10px; }
.bp-corner.tr{ top:10px; right:10px; }
.bp-corner.bl{ bottom:10px; left:10px; }
.bp-corner.br{ bottom:10px; right:10px; }
.bp-corner.tl::before, 
.bp-corner.bl::before { width:24px; height:2px; left:0; top:15; }
.bp-corner.tl::after, 
.bp-corner.tr::after { width:2px; height:24px; left:15; top:0; }
.bp-corner.tr::before{ width:24px; height:2px; right:0; top:0; }
.bp-corner.tr::after{ width:2px; height:24px; right:0; top:0; }
.bp-corner.bl::after{ width:2px; height:24px; left:0; bottom:0; }
.bp-corner.bl::before{ width:24px; height:2px; left:0; bottom:0; }
.bp-corner.br::before{ width:24px; height:2px; right:0; bottom:0; }
.bp-corner.br::after{ width:2px; height:24px; right:0; bottom:0; }
/* Caption */
.holo-caption{
  position:absolute; left:16px; bottom:12px;
  font-weight:800; letter-spacing:.2px;
  color:var(--ink-900);
  text-shadow: 0 1px 0 color-mix(in oklab, var(--paper), white 30%);
}

/* ===================== */
/*   RESPONSIVE TWEAKS   */
/* ===================== */

/* Tablets (<= 992px) */
@media (max-width: 991.98px){
  .hero{ min-height: 72vh; }
  .py-6{ padding: 4.5rem 0; }
  .section-title{ font-size: 1.6rem; }
  .holo-caption{ font-size: .95rem; }
  .orb-a{ width:60vw; height:60vw; }
  .orb-b{ width:60vw; height:60vw; }
  .orb-c{ width:40vw; height:40vw; }
  .project-card:hover, .project-card:hover .project-img{ transform:none; box-shadow:none; }
  .chip-row{ gap:.4rem; }
  .modal-img{ max-height: 64vh; }
}

/* Phones (<= 576px) */
@media (max-width: 575.98px){
  .hero{ min-height: 64vh; }
  .py-6{ padding: 3.75rem 0; }
  .brand{ font-size: 1rem; }
  .readable{ font-size: 1rem; line-height: 1.6; }
  .section-title{ font-size: 1.35rem; }
  .badge-chip{ display:none; } /* trims header clutter */
  .blueprint{ aspect-ratio: 1/1; } /* squarer frame on narrow screens */
  .holo-caption{ font-size: .9rem; }
  .chip{ padding:.3rem .7rem; }
  .modal-dialog{ margin: .75rem; } /* more room on small screens */
  .modal-img{ max-height: 60vh; }
}

/* Very small devices */
@media (max-width: 360px){
  .section-title{ font-size: 1.2rem; }
  .readable{ font-size: .98rem; }
}
`;