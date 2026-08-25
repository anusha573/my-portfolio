<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Brand -->
      <div class="footer-brand">
        <h3>Anusha Kodamala</h3>

        <p>
          Frontend Developer building responsive and user-friendly web
          applications.
        </p>
      </div>

      <!-- Navigation -->
      <nav class="footer-nav">
        <a href="#home">Home</a>

        <a href="#about">About</a>

        <a href="#skills">Skills</a>

        <a href="#projects">Projects</a>

        <a href="#contact">Contact</a>
      </nav>

      <!-- Social Links -->
      <div class="footer-socials">
        <a
          href="https://github.com/anusha573"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          class="social-link"
        >
          <Icon icon="mdi:github" width="22" height="22" />

          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/anusha-kodamala-766926208/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          class="social-link"
        >
          <Icon icon="mdi:linkedin" width="22" height="22" />

          <span>LinkedIn</span>
        </a>
      </div>
    </div>

    <!-- Bottom -->
    <div class="footer-bottom">
      <p>© {{ currentYear }} Anusha Kodamala. All rights reserved.</p>

      <a href="#home" class="back-to-top"> Back to top ↑ </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

const currentYear = new Date().getFullYear();
</script>

<style scoped>
/* ========================================
   FOOTER
======================================== */

.footer {
  padding: 55px 24px 25px;

  background: #111827;

  color: #ffffff;
}

/* ========================================
   MAIN CONTAINER
======================================== */

.footer-container {
  width: 100%;

  max-width: 1200px;

  margin: 0 auto;

  display: grid;

  grid-template-columns: 1.5fr 1fr 1fr;

  gap: 50px;

  align-items: start;
}

/* ========================================
   BRAND
======================================== */

.footer-brand h3 {
  margin: 0 0 10px;

  color: #ffffff;

  font-size: 1.15rem;

  font-weight: 750;
}

.footer-brand p {
  max-width: 360px;

  margin: 0;

  color: #9ca3af;

  font-size: 0.82rem;

  line-height: 1.7;
}

/* ========================================
   NAVIGATION
======================================== */

.footer-nav {
  display: flex;

  flex-direction: column;

  gap: 10px;
}

.footer-nav a {
  width: fit-content;

  color: #d1d5db;

  font-size: 0.82rem;

  text-decoration: none;

  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

.footer-nav a:hover {
  color: #ffffff;

  transform: translateX(3px);
}

/* ========================================
   SOCIAL LINKS
======================================== */

.footer-socials {
  display: flex;

  flex-direction: column;

  gap: 12px;
}

.social-link {
  display: inline-flex;

  align-items: center;

  gap: 10px;

  width: fit-content;

  color: #d1d5db;

  font-size: 0.82rem;

  font-weight: 600;

  text-decoration: none;

  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

.social-link:hover {
  color: #ffffff;

  transform: translateX(3px);
}

.social-link :deep(svg) {
  flex-shrink: 0;
}

/* ========================================
   FOOTER BOTTOM
======================================== */

.footer-bottom {
  width: 100%;

  max-width: 1200px;

  margin: 45px auto 0;

  padding-top: 20px;

  border-top: 1px solid #374151;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 20px;
}

.footer-bottom p {
  margin: 0;

  color: #9ca3af;

  font-size: 0.72rem;
}

.back-to-top {
  color: #d1d5db;

  font-size: 0.72rem;

  font-weight: 600;

  text-decoration: none;

  transition: color 0.2s ease;
}

.back-to-top:hover {
  color: #ffffff;
}

/* ========================================
   TABLET
======================================== */

@media (max-width: 800px) {
  .footer-container {
    grid-template-columns: 1fr 1fr;

    gap: 35px;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }
}

/* ========================================
   MOBILE
======================================== */

@media (max-width: 600px) {
  .footer {
    padding: 45px 18px 22px;
  }

  .footer-container {
    grid-template-columns: 1fr;

    gap: 30px;
  }

  .footer-brand {
    grid-column: auto;
  }

  .footer-bottom {
    margin-top: 35px;

    flex-direction: column;

    align-items: flex-start;
  }
}
</style>
