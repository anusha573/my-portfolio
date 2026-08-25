<template>
  <section id="skills" class="skills-section reveal">
    <div class="skills-container">
      <!-- Heading -->
      <div class="section-heading">
        <p class="section-label">TECHNOLOGIES</p>

        <h2>
          Tools I use to
          <span>build modern applications.</span>
        </h2>

        <p class="section-description">
          A collection of frontend technologies, frameworks and tools I use to
          build responsive, maintainable and user-friendly applications.
        </p>
      </div>

      <!-- Skill Categories -->
      <div class="skills-categories">
        <!-- Frontend -->
        <div class="skill-category">
          <div class="category-header">
            <div class="category-icon">
              <Icon icon="mdi:code-tags" />
            </div>

            <div>
              <!-- Frontend -->
              <h3>Frontend</h3>
              <p>Core technologies for building modern web interfaces</p>
            </div>
          </div>

          <div class="skills-grid">
            <div
              v-for="skill in frontendSkills"
              :key="skill.name"
              class="skill-card"
            >
              <Icon :icon="skill.icon" width="38" height="38" />

              <span>{{ skill.name }}</span>
            </div>
          </div>
        </div>

        <!-- Vue Ecosystem -->
        <div class="skill-category">
          <div class="category-header">
            <div class="category-icon">
              <Icon icon="mdi:vuejs" />
            </div>

            <div>
              <!-- Vue Ecosystem -->
              <h3>Vue Ecosystem</h3>
              <p>Frameworks and tools for component-based development</p>
            </div>
          </div>

          <div class="skills-grid">
            <div
              v-for="skill in vueSkills"
              :key="skill.name"
              class="skill-card"
            >
              <Icon :icon="skill.icon" width="38" height="38" />

              <span>{{ skill.name }}</span>
            </div>
          </div>
        </div>

        <!-- UI & Styling -->
        <div class="skill-category">
          <div class="category-header">
            <div class="category-icon">
              <Icon icon="mdi:palette-outline" />
            </div>

            <div>
              <!-- UI & Styling -->
              <h3>UI & Styling</h3>
              <p>Tools for responsive and polished user interfaces</p>
            </div>
          </div>

          <div class="skills-grid">
            <div v-for="skill in uiSkills" :key="skill.name" class="skill-card">
              <Icon :icon="skill.icon" width="38" height="38" />

              <span>{{ skill.name }}</span>
            </div>
          </div>
        </div>

        <!-- Tools -->
        <div class="skill-category">
          <div class="category-header">
            <div class="category-icon">
              <Icon icon="mdi:tools" />
            </div>

            <div>
              <!-- Development Tools -->
              <h3>Development Tools</h3>
              <p>Build tools and version control for efficient development</p>
            </div>
          </div>

          <div class="skills-grid">
            <div
              v-for="skill in toolSkills"
              :key="skill.name"
              class="skill-card"
            >
              <Icon :icon="skill.icon" width="38" height="38" />

              <span>{{ skill.name }}</span>
            </div>
          </div>
        </div>

        <!-- APIs & Data -->
        <div class="skill-category">
          <div class="category-header">
            <div class="category-icon">
              <Icon icon="mdi:database-outline" />
            </div>

            <div>
              <!-- APIs & Data -->
              <h3>APIs & Data</h3>
              <p>
                Technologies for connecting applications with data and services
              </p>
            </div>
          </div>

          <div class="skills-grid">
            <div
              v-for="skill in dataSkills"
              :key="skill.name"
              class="skill-card"
            >
              <Icon :icon="skill.icon" width="38" height="38" />

              <span>{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

const frontendSkills = [
  {
    name: "HTML5",
    icon: "devicon:html5",
  },
  {
    name: "CSS3",
    icon: "devicon:css3",
  },
  {
    name: "JavaScript",
    icon: "devicon:javascript",
  },
  {
    name: "TypeScript",
    icon: "devicon:typescript",
  },
];

const vueSkills = [
  {
    name: "Vue.js",
    icon: "devicon:vuejs",
  },
  {
    name: "Nuxt.js",
    icon: "devicon:nuxtjs",
  },
  {
    name: "Pinia",
    icon: "logos:pinia",
  },
  {
    name: "Vue Router",
    icon: "devicon:vuejs",
  },
  {
    name: "Composition API",
    icon: "devicon:vuejs",
  },
];

const uiSkills = [
  {
    name: "Tailwind CSS",
    icon: "devicon:tailwindcss",
  },
  {
    name: "Bootstrap",
    icon: "devicon:bootstrap",
  },
  {
    name: "Responsive Design",
    icon: "mdi:responsive",
  },
];

const toolSkills = [
  {
    name: "Vite",
    icon: "devicon:vitejs",
  },
  {
    name: "Webpack",
    icon: "devicon:webpack",
  },
  {
    name: "Git",
    icon: "devicon:git",
  },
  {
    name: "GitHub",
    icon: "devicon:github",
  },
];

const dataSkills = [
  {
    name: "REST APIs",
    icon: "mdi:api",
  },
  {
    name: "MySQL",
    icon: "devicon:mysql",
  },
];
</script>

<style scoped>
/* ========================================
   SECTION
======================================== */

.skills-section {
  padding: 110px 24px;

  background: #f9fafb;
}

.skills-container {
  width: 100%;
  max-width: 1200px;

  margin: 0 auto;
}

/* ========================================
   HEADING
======================================== */

.section-heading {
  max-width: 750px;

  margin-bottom: 60px;
}

.section-label {
  margin: 0 0 12px;

  color: #6b7280;

  font-size: 0.75rem;

  font-weight: 800;

  letter-spacing: 0.16em;
}

.section-heading h2 {
  margin: 0;

  color: #111827;

  font-size: clamp(2.2rem, 4vw, 3.6rem);

  line-height: 1.15;

  letter-spacing: -0.03em;
}

.section-heading h2 span {
  display: block;

  color: #6b7280;
}

.section-description {
  max-width: 650px;

  margin: 20px 0 0;

  color: #6b7280;

  font-size: 1rem;

  line-height: 1.7;
}

/* ========================================
   CATEGORIES
======================================== */

.skills-categories {
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  gap: 20px;
}

/* ========================================
   CATEGORY
======================================== */

.skill-category {
  padding: 28px;

  border: 1px solid #e5e7eb;

  border-radius: 18px;

  background: #ffffff;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}

.skill-category:hover {
  transform: translateY(-4px);

  border-color: #d1d5db;

  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.06);
}

/* ========================================
   CATEGORY HEADER
======================================== */

.category-header {
  display: flex;

  align-items: center;

  gap: 14px;

  margin-bottom: 24px;
}

.category-icon {
  width: 42px;
  height: 42px;

  flex-shrink: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 11px;

  background: #111827;

  color: #ffffff;

  font-size: 1.2rem;
}

.category-header h3 {
  margin: 0;

  color: #111827;

  font-size: 1rem;

  font-weight: 750;
}

.category-header p {
  margin: 3px 0 0;

  color: #9ca3af;

  font-size: 0.7rem;
}

/* ========================================
   SKILLS GRID
======================================== */

.skills-grid {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 10px;
}

/* ========================================
   SKILL CARD
======================================== */

.skill-card {
  min-height: 95px;

  display: flex;

  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 10px;

  padding: 12px;

  border: 1px solid #f0f0f0;

  border-radius: 12px;

  background: #fafafa;

  transition:
    transform 0.2s ease,
    background 0.2s ease,
    border-color 0.2s ease;
}

.skill-card:hover {
  transform: translateY(-3px);

  border-color: #d1d5db;

  background: #ffffff;
}

.skill-card span {
  color: #374151;

  font-size: 0.7rem;

  font-weight: 600;

  text-align: center;
}

/* ========================================
   TABLET
======================================== */

@media (max-width: 900px) {
  .skills-categories {
    grid-template-columns: 1fr;
  }
}

/* ========================================
   MOBILE
======================================== */

@media (max-width: 600px) {
  .skills-section {
    padding: 80px 18px;
  }

  .section-heading {
    margin-bottom: 45px;
  }

  .skill-category {
    padding: 20px;
  }

  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
