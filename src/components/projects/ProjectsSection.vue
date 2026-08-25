<template>
  <section id="projects" class="projects-section reveal">
    <div class="projects-container">
      <!-- Section Heading -->
      <div class="section-heading">
        <p class="section-label">MY WORK</p>
        <h2>Featured <span>projects I've worked on.</span></h2>
        <p class="section-description">
          A selection of applications I've contributed to as a Frontend
          Developer, focused on responsive interfaces, reusable components, API
          integration and user-friendly experiences.
        </p>
      </div>

      <!-- Projects -->
      <div class="projects-grid">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from "./ProjectCard.vue";
import starkImage from "../../assets/images/projects/stark-ai-candidates.png";
import crmImage from "../../assets/images/projects/crm-io-dashboard.png";
import voxdeskImage from "../../assets/images/projects/voxdesk-campaigns.png";
import pbxplusImage from "../../assets/images/projects/pbxplus-calls.png";

const projects = [
  {
    title: "Stark.ai",
    category: "AI Career Platform",
    description:
      "An AI-powered career platform where I contributed to responsive candidate-facing interfaces for managing profile information, job-related activities and career workflows.",
    image: starkImage,
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "Vue 3",
      "Nuxt.js",
      "Vite",
      "Composables",
      "REST APIs",
      "MySQL",
      "Bootstrap",
      "Tailwind CSS",
      "Responsive Design",
    ],
    github: "",
    liveDemo: "",
  },
  {
    title: "CRM.io",
    category: "CRM & Sales Platform",
    description:
      "A cloud-based CRM platform where I worked on responsive and reusable Vue interfaces for managing contacts, lists, sales pipelines and business workflows.",
    image: crmImage,
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "Vue 3",
      "Nuxt.js",
      "Vite",
      "Composables",
      "REST APIs",
      "MySQL",
      "Bootstrap",
      "Tailwind CSS",
      "Responsive Design",
    ],
    github: "",
    liveDemo: "",
  },
  {
    title: "VoxDesk",
    category: "Campaign Management Platform",
    description:
      "A voice communication and campaign management platform where I worked on interfaces for managing contact lists and campaign workflows, with REST API and Twilio integration.",
    image: voxdeskImage,
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Vue.js",
      "REST APIs",
      "MySQL",
      "Twilio",
      "Responsive Design",
    ],
    github: "",
    liveDemo: "",
  },
  {
    title: "PBXPlus",
    category: "Cloud Telephony Platform",
    description:
      "A cloud-based PBX application where I contributed to responsive interfaces for managing business calling workflows, API integration and telephony-related features.",
    image: pbxplusImage,
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Vue.js",
      "REST APIs",
      "MySQL",
      "Twilio",
      "Responsive Design",
    ],
    github: "",
    liveDemo: "",
  },
];
</script>

<style scoped>
/* ========================================
   SECTION
======================================== */

.projects-section {
  padding: 110px 24px;

  background: var(--bg-primary);
  color: var(--text-primary);

  transition:
    background 0.3s ease,
    color 0.3s ease;
}

.projects-container {
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

  color: var(--text-secondary);

  font-size: 0.75rem;

  font-weight: 800;

  letter-spacing: 0.16em;
}

.section-heading h2 {
  margin: 0;

  color: var(--text-primary);

  font-size: clamp(2.2rem, 4vw, 3.6rem);

  line-height: 1.15;

  letter-spacing: -0.03em;
}

.section-heading h2 span {
  display: block;

  color: var(--text-secondary);
}

.section-description {
  max-width: 650px;

  margin: 20px 0 0;

  color: var(--text-secondary);

  font-size: 1rem;

  line-height: 1.7;
}

/* ========================================
   PROJECT GRID
======================================== */

.projects-grid {
  display: grid;

  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 28px;
}

/* ========================================
   TABLET
======================================== */

@media (max-width: 900px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}

/* ========================================
   MOBILE
======================================== */

@media (max-width: 600px) {
  .projects-section {
    padding: 80px 18px;
  }

  .section-heading {
    margin-bottom: 45px;
  }

  .projects-grid {
    gap: 20px;
  }
}
</style>
