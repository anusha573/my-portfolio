<template>
  <div class="app" :class="{ 'dark-theme': isDark }">
    <AppHeader />

    <main>
      <HeroSection />

      <AboutSection />

      <SkillsSection />

      <ProjectsSection />

      <GameSection />

      <ContactSection />
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

import AppHeader from "./components/layout/AppHeader.vue";
import HeroSection from "./components/home/HeroSection.vue";
import AboutSection from "./components/about/AboutSection.vue";
import SkillsSection from "./components/skills/SkillsSection.vue";
import ProjectsSection from "./components/projects/ProjectsSection.vue";
import GameSection from "./components/games/GameSection.vue";
import ContactSection from "./components/contact/ContactSection.vue";
import AppFooter from "./components/layout/AppFooter.vue";

const isDark = ref(false);

/* ========================================
   LOAD SAVED THEME
======================================== */

onMounted(() => {
  const savedTheme = localStorage.getItem("portfolio-theme");

  if (savedTheme === "dark") {
    isDark.value = true;
  }
});
</script>

<style>
/* ========================================
   GLOBAL THEME VARIABLES
======================================== */

:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f9fafb;
  --bg-card: #ffffff;

  --text-primary: #111827;
  --text-secondary: #6b7280;
  --text-muted: #9ca3af;

  --border-color: #e5e7eb;

  --button-bg: #111827;
  --button-text: #ffffff;
}

/* ========================================
   DARK THEME
======================================== */

.dark-theme {
  --bg-primary: #0f172a;
  --bg-secondary: #111827;
  --bg-card: #1f2937;

  --text-primary: #f9fafb;
  --text-secondary: #d1d5db;
  --text-muted: #9ca3af;

  --border-color: #374151;

  --button-bg: #f9fafb;
  --button-text: #111827;
}

/* ========================================
   GLOBAL
======================================== */

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;

  background: var(--bg-primary);

  color: var(--text-primary);

  font-family:
    Inter,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;

  transition:
    background 0.3s ease,
    color 0.3s ease;
}

* {
  box-sizing: border-box;
}

a {
  transition:
    color 0.25s ease,
    background 0.25s ease,
    border-color 0.25s ease;
}

.app {
  min-height: 100vh;

  background: var(--bg-primary);

  color: var(--text-primary);

  transition:
    background 0.3s ease,
    color 0.3s ease;
}

/* ========================================
   DARK MODE - COMMON SECTIONS
======================================== */

.dark-theme .about-section,
.dark-theme .contact-section,
.dark-theme #skills {
  background: var(--bg-secondary);
}

.dark-theme .project-card,
.dark-theme .highlight-card,
.dark-theme .contact-form,
.dark-theme .skill-card {
  background: var(--bg-card);

  border-color: var(--border-color);
}

.dark-theme input,
.dark-theme textarea {
  background: #111827;

  border-color: var(--border-color);

  color: #f9fafb;
}

.dark-theme input::placeholder,
.dark-theme textarea::placeholder {
  color: #6b7280;
}

/* ========================================
   DARK MODE TEXT
======================================== */

.dark-theme h1,
.dark-theme h2,
.dark-theme h3,
.dark-theme p,
.dark-theme span {
  transition:
    color 0.3s ease,
    background 0.3s ease;
}

/* ========================================
   MOBILE
======================================== */

@media (max-width: 600px) {
  body {
    overflow-x: hidden;
  }
}
</style>
