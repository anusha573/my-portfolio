<template>
  <section id="services" class="services-section">
    <div class="services-container">
      <!-- Heading -->
      <div class="section-heading">
        <p class="section-label">SERVICES & CAPABILITIES</p>

        <h2>
          What I can
          <span>build for you.</span>
        </h2>

        <p class="section-description">
          I focus on creating modern, responsive and maintainable frontend
          applications that provide a smooth user experience.
        </p>
      </div>

      <!-- Services -->
      <div class="services-grid">
        <article
          v-for="service in services"
          :key="service.title"
          class="service-card"
        >
          <div class="service-number">
            {{ service.number }}
          </div>

          <div class="service-icon">
            <Icon :icon="service.icon" />
          </div>

          <h3>{{ service.title }}</h3>

          <p>{{ service.description }}</p>

          <div class="service-tags">
            <span v-for="tag in service.tags" :key="tag">
              {{ tag }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

const services = [
  {
    number: "01",
    icon: "mdi:monitor-dashboard",
    title: "Frontend Development",
    description:
      "Building responsive and interactive web applications with clean, maintainable frontend code.",
    tags: ["Vue.js", "JavaScript", "TypeScript"],
  },
  {
    number: "02",
    icon: "mdi:vuejs",
    title: "Vue.js Development",
    description:
      "Developing component-based applications using Vue.js, Vue 3, Composition API and reusable components.",
    tags: ["Vue 3", "Composition API", "Pinia"],
  },
  {
    number: "03",
    icon: "mdi:responsive",
    title: "Responsive UI",
    description:
      "Creating interfaces that adapt smoothly across desktop, tablet and mobile devices.",
    tags: ["CSS", "Bootstrap", "Tailwind CSS"],
  },
  {
    number: "04",
    icon: "mdi:api",
    title: "REST API Integration",
    description:
      "Connecting frontend applications with REST APIs and handling application data efficiently.",
    tags: ["REST APIs", "JSON", "API Integration"],
  },
  {
    number: "05",
    icon: "mdi:view-grid-plus",
    title: "Reusable Components",
    description:
      "Creating modular and reusable UI components that make applications easier to maintain and scale.",
    tags: ["Components", "Composition API", "Vite"],
  },
  {
    number: "06",
    icon: "mdi:database-outline",
    title: "Data Integration",
    description:
      "Working with application data and MySQL to retrieve, join and store data based on application requirements.",
    tags: ["MySQL", "Queries", "Data"],
  },
];
</script>

<style scoped>
.services-section {
  padding: 110px 24px;
  background: #ffffff;
}

.services-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

/* Heading */

.section-heading {
  max-width: 720px;
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

  font-size: clamp(2.3rem, 4vw, 3.6rem);

  line-height: 1.15;
  letter-spacing: -0.03em;
}

.section-heading h2 span {
  display: block;
  color: #6b7280;
}

.section-description {
  max-width: 600px;

  margin-top: 20px;

  color: #6b7280;

  font-size: 1rem;
  line-height: 1.7;
}

/* Grid */

.services-grid {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 18px;
}

/* Card */

.service-card {
  position: relative;

  padding: 28px;

  min-height: 270px;

  border: 1px solid #e5e7eb;
  border-radius: 18px;

  background: #ffffff;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;

  overflow: hidden;
}

.service-card:hover {
  transform: translateY(-6px);

  border-color: #d1d5db;

  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08);
}

/* Number */

.service-number {
  position: absolute;

  top: 20px;
  right: 22px;

  color: #e5e7eb;

  font-size: 1.1rem;
  font-weight: 800;
}

/* Icon */

.service-icon {
  width: 46px;
  height: 46px;

  display: flex;

  align-items: center;
  justify-content: center;

  margin-bottom: 24px;

  border-radius: 12px;

  background: #111827;

  color: #ffffff;

  font-size: 1.3rem;
}

/* Content */

.service-card h3 {
  margin: 0 0 10px;

  color: #111827;

  font-size: 1rem;
  font-weight: 750;
}

.service-card p {
  margin: 0;

  color: #6b7280;

  font-size: 0.82rem;

  line-height: 1.7;
}

/* Tags */

.service-tags {
  display: flex;

  flex-wrap: wrap;

  gap: 7px;

  margin-top: 20px;
}

.service-tags span {
  padding: 5px 9px;

  border-radius: 999px;

  background: #f3f4f6;

  color: #6b7280;

  font-size: 0.65rem;

  font-weight: 600;
}

/* Tablet */

@media (max-width: 950px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile */

@media (max-width: 600px) {
  .services-section {
    padding: 80px 18px;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .service-card {
    min-height: auto;
  }
}
</style>
