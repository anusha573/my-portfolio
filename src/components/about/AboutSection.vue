<template>
  <section id="about" class="about-section reveal">
    <div class="about-container">
      <!-- Section Heading -->
      <div class="section-heading">
        <p class="section-label">ABOUT ME</p>

        <h2>
          Building interfaces that are
          <span>simple, responsive & reliable.</span>
        </h2>

        <div class="heading-line"></div>
      </div>

      <!-- Main Content -->
      <div class="about-content">
        <!-- Left -->
        <div class="about-text">
          <p class="intro">
            I'm a Frontend Developer who loves turning ideas into fast,
            intuitive, and scalable web applications.
          </p>

          <p>
            I work primarily with Vue.js, Nuxt.js, JavaScript, and TypeScript,
            integrating REST APIs to bring designs and requirements to life as
            clean, reusable, and maintainable interfaces.
          </p>

          <p>
            My approach centers on component-based architecture, responsive
            design, and performance — building experiences that feel smooth and
            consistent across every device.
          </p>

          <p>
            I'm always learning, exploring new tools and techniques to build
            better, more modern web applications.
          </p>
        </div>

        <!-- Right -->
        <!-- Services & Capabilities -->
        <div class="about-highlights">
          <div class="capabilities-heading">
            <p>SERVICES & CAPABILITIES</p>
            <h3>What I can bring to a project</h3>
          </div>

          <!-- Frontend Development -->
          <div class="highlight-card">
            <div class="highlight-icon">⚡</div>

            <div>
              <h3>Frontend Development</h3>

              <p>
                Building modern, responsive, and interactive web applications
                from the ground up.
              </p>
            </div>
          </div>

          <!-- Reusable Components -->
          <div class="highlight-card">
            <div class="highlight-icon">🧩</div>

            <div>
              <h3>Reusable Components</h3>

              <p>
                Designing clean, maintainable, component-based interfaces built
                to scale.
              </p>
            </div>
          </div>

          <!-- API Integration -->
          <div class="highlight-card">
            <div class="highlight-icon">🔗</div>

            <div>
              <h3>API Integration</h3>

              <p>
                Connecting frontend applications with REST APIs and transforming
                backend data into seamless user experiences.
              </p>
            </div>
          </div>

          <!-- Problem Solving -->
          <div class="highlight-card">
            <div class="highlight-icon">🧠</div>

            <div>
              <h3>Problem Solving</h3>

              <p>
                Turning tricky development and UI challenges into practical,
                working solutions.
              </p>
            </div>
          </div>

          <!-- Debugging -->
          <div class="highlight-card">
            <div class="highlight-icon">🐞</div>

            <div>
              <h3>Debugging</h3>

              <p>
                Identifying and resolving UI, JavaScript, API and runtime issues
                through structured troubleshooting.
              </p>
            </div>
          </div>

          <!-- Code Optimization -->
          <div class="highlight-card">
            <div class="highlight-icon">⚙️</div>

            <div>
              <h3>Code Optimization</h3>

              <p>
                Improving code quality, maintainability and application
                performance for smoother and more reliable experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Stats -->
      <div class="about-stats">
        <div class="stat">
          <strong>2+</strong>
          <span>Years of Experience</span>
        </div>

        <div class="stat">
          <strong>4</strong>
          <span>Professional Project</span>
        </div>

        <div class="stat">
          <strong>10+</strong>
          <span>Frontend Technologies</span>
        </div>

        <div class="stat">
          <strong>∞</strong>
          <span>Curiosity to Learn</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ========================================
   ABOUT SECTION
======================================== */

.about-section {
  padding: 110px 24px;

  background: var(--bg-secondary);

  color: var(--text-primary);

  transition:
    background 0.3s ease,
    color 0.3s ease;
}

.about-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

/* ========================================
   SECTION HEADING
======================================== */

.section-heading {
  max-width: 750px;
  margin-bottom: 65px;
}

.section-label {
  margin: 0 0 12px;

  color: #6b7280;

  font-size: 0.75rem;
  font-weight: 800;

  letter-spacing: 0.16em;
}

.section-heading h2 {
  color: var(--text-primary);
}

.section-heading h2 span {
  color: var(--text-secondary);
}

.heading-line {
  width: 55px;
  height: 4px;

  margin-top: 22px;

  border-radius: 999px;

  background: #111827;
}

/* ========================================
   MAIN CONTENT
======================================== */

.about-content {
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 80px;

  align-items: start;
}

/* ========================================
   ABOUT TEXT
======================================== */

.about-text {
  color: var(--text-secondary);
}

.about-text p {
  margin: 0 0 20px;
}

.about-text .intro {
  color: var(--text-primary);
}

/* ========================================
   SERVICES & CAPABILITIES
======================================== */

.about-highlights {
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 16px;
}

/* Capabilities Heading */

.capabilities-heading {
  grid-column: 1 / -1;

  margin-bottom: 6px;
}

.capabilities-heading p {
  margin: 0 0 8px;

  color: #6b7280;

  font-size: 0.7rem;

  font-weight: 800;

  letter-spacing: 0.15em;
}

.capabilities-heading h3 {
  margin: 0;

  color: #111827;

  font-size: 1.5rem;

  font-weight: 750;

  line-height: 1.3;
}

/* ========================================
   CAPABILITY CARDS
======================================== */

.highlight-card {
  display: flex;

  gap: 15px;

  padding: 22px;

  border: 1px solid #e5e7eb;

  border-radius: 16px;

  background: #ffffff;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}

.highlight-card:hover {
  transform: translateY(-5px);

  border-color: #d1d5db;

  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.07);
}

/* Card Icon */

.highlight-icon {
  width: 40px;
  height: 40px;

  flex-shrink: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 10px;

  background: #111827;

  color: #ffffff;

  font-size: 1rem;
}

/* Card Heading */

.highlight-card h3 {
  margin: 0 0 6px;

  color: #111827;

  font-size: 0.9rem;

  font-weight: 700;

  line-height: 1.4;
}

/* Card Description */

.highlight-card p {
  margin: 0;

  color: #6b7280;

  font-size: 0.75rem;

  line-height: 1.6;
}

/* ========================================
   BOTTOM STATS
======================================== */

.about-stats {
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  margin-top: 70px;

  padding-top: 40px;

  border-top: 1px solid var(--border-color);

  transition: border-color 0.3s ease;
}

.stat {
  display: flex;

  flex-direction: column;

  align-items: center;

  gap: 6px;

  padding: 10px 20px;

  border-right: 1px solid var(--border-color);

  text-align: center;
}

.stat:last-child {
  border-right: none;
}

/* Numbers */

.stat strong {
  display: block;

  color: var(--text-primary) !important;

  font-size: 2rem;

  font-weight: 800;

  line-height: 1.2;

  opacity: 1 !important;

  visibility: visible !important;

  transition: color 0.3s ease;
}

/* Labels */

.stat span {
  display: block;

  color: var(--text-secondary) !important;

  font-size: 0.72rem;

  font-weight: 600;

  line-height: 1.4;

  opacity: 1 !important;

  visibility: visible !important;

  transition: color 0.3s ease;
}

/* Dark theme protection */

:global(.dark-theme) .stat strong {
  color: #ffffff !important;
}

:global(.dark-theme) .stat span {
  color: #d1d5db !important;
}

:global(.dark-theme) .about-stats {
  border-top-color: #374151;
}

:global(.dark-theme) .stat {
  border-right-color: #374151;
}

/* ========================================
   TABLET
======================================== */

@media (max-width: 900px) {
  .about-content {
    grid-template-columns: 1fr;

    gap: 50px;
  }

  .about-highlights {
    grid-template-columns: 1fr 1fr;
  }
}

/* ========================================
   MOBILE
======================================== */

@media (max-width: 600px) {
  .about-section {
    padding: 80px 18px;
  }

  .section-heading {
    margin-bottom: 45px;
  }

  .about-highlights {
    grid-template-columns: 1fr;
  }

  .capabilities-heading {
    grid-column: 1;
  }

  .capabilities-heading h3 {
    font-size: 1.3rem;
  }

  .highlight-card {
    padding: 18px;
  }

  .about-stats {
    grid-template-columns: 1fr 1fr;

    gap: 20px;

    margin-top: 55px;
  }

  .stat {
    border-right: none;

    border-bottom: 1px solid #e5e7eb;

    padding: 10px 10px 20px;
  }

  .stat:nth-child(3),
  .stat:nth-child(4) {
    border-bottom: none;
  }

  .stat strong {
    font-size: 1.7rem;
  }
}
</style>
