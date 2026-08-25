<template>
  <article class="project-card">
    <!-- Image -->
    <div class="project-image">
      <img v-if="project.image" :src="project.image" :alt="project.title" />

      <span v-else class="project-placeholder">
        {{ project.title }}
      </span>
    </div>

    <!-- Content -->
    <div class="project-content">
      <p class="project-category">
        {{ project.category }}
      </p>

      <h3 class="project-title">
        {{ project.title }}
      </h3>

      <p class="project-description">
        {{ project.description }}
      </p>

      <!-- Technologies -->
      <div class="project-technologies">
        <span
          v-for="technology in project.technologies"
          :key="technology"
          class="technology"
        >
          {{ technology }}
        </span>
      </div>

      <!-- Links -->
      <div class="project-links">
        <a
          v-if="project.github"
          :href="project.github"
          target="_blank"
          rel="noopener noreferrer"
          class="project-link"
        >
          GitHub →
        </a>

        <a
          v-if="project.liveDemo"
          :href="project.liveDemo"
          target="_blank"
          rel="noopener noreferrer"
          class="project-link"
        >
          Live Demo →
        </a>
      </div>
    </div>
  </article>
</template>
<script setup lang="ts">
interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  liveDemo?: string;
}

defineProps<{
  project: Project;
}>();
</script>

<style scoped>
/* ========================================
   PROJECT CARD
======================================== */

.project-card {
  height: 100%;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  border: 1px solid #e5e7eb;

  border-radius: 18px;

  background: #ffffff;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;
}

.project-card:hover {
  transform: translateY(-6px);

  border-color: #d1d5db;

  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08);
}

/* ========================================
   PROJECT IMAGE
======================================== */

.project-image {
  position: relative;

  width: 100%;

  height: 205px;

  display: flex;

  align-items: center;
  justify-content: center;

  overflow: hidden;

  background: #f3f4f6;
}

.project-image img {
  width: 100%;
  height: 100%;

  object-fit: cover;

  transition: transform 0.5s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.04);
}

/* Placeholder */

.project-placeholder {
  display: flex;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  color: #9ca3af;

  font-size: 1.35rem;

  font-weight: 750;

  letter-spacing: -0.02em;
}

/* ========================================
   CONTENT
======================================== */

.project-content {
  display: flex;

  flex: 1;

  flex-direction: column;

  padding: 22px;
}

/* ========================================
   CATEGORY
======================================== */

.project-category {
  margin: 0 0 8px;

  color: #6b7280;

  font-size: 0.68rem;

  font-weight: 800;

  letter-spacing: 0.14em;

  text-transform: uppercase;
}

/* ========================================
   TITLE
======================================== */

.project-title {
  margin: 0 0 12px;

  color: #111827;

  font-size: 1.4rem;

  font-weight: 750;

  line-height: 1.25;
}

/* ========================================
   DESCRIPTION
======================================== */

.project-description {
  margin: 0 0 20px;

  color: #6b7280;

  font-size: 0.88rem;

  line-height: 1.7;
}

/* ========================================
   TECHNOLOGIES
======================================== */

.project-technologies {
  display: flex;

  flex-wrap: wrap;

  gap: 7px;

  margin-bottom: 24px;
}

.technology {
  display: inline-flex;

  align-items: center;

  padding: 5px 9px;

  border: 1px solid #e5e7eb;

  border-radius: 999px;

  background: #f9fafb;

  color: #374151;

  font-size: 0.68rem;

  font-weight: 600;

  line-height: 1.2;

  white-space: nowrap;
}

/* ========================================
   LINKS
======================================== */

.project-links {
  display: flex;

  align-items: center;

  gap: 18px;

  margin-top: auto;
}

.project-link {
  display: inline-flex;

  align-items: center;

  color: #111827;

  font-size: 0.8rem;

  font-weight: 750;

  text-decoration: none;

  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}

.project-link:hover {
  transform: translateX(3px);

  opacity: 0.6;
}

/* ========================================
   TABLET
======================================== */

@media (max-width: 900px) {
  .project-image {
    height: 210px;
  }
}

/* ========================================
   MOBILE
======================================== */

@media (max-width: 640px) {
  .project-content {
    padding: 20px;
  }

  .project-image {
    height: 190px;
  }

  .project-title {
    font-size: 1.3rem;
  }

  .project-description {
    font-size: 0.85rem;
  }
}
</style>
