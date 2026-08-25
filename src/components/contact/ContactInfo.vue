<template>
  <div class="contact-info">
    <p class="section-label">CONTACT</p>

    <h2>Let's work together.</h2>

    <p class="description">
      I'm open to frontend development opportunities, collaborations and
      interesting projects. Feel free to reach out—I'd love to connect.
    </p>

    <!-- Contact Details -->
    <div class="contact-details">
      <!-- Email -->
      <a href="mailto:anushakodamala573@gmail.com" class="contact-item">
        <span class="icon">
          <Icon icon="mdi:email-outline" />
        </span>

        <div>
          <span class="label">Email</span>
          <span class="value">anushakodamala573@gmail.com</span>
        </div>
      </a>

      <!-- Location -->
      <div class="contact-item">
        <span class="icon">
          <Icon icon="mdi:map-marker-outline" />
        </span>

        <div>
          <span class="label">Location</span>
          <span class="value">Hyderabad</span>
        </div>
      </div>

      <!-- GitHub -->
      <a
        href="https://github.com/anusha573"
        target="_blank"
        rel="noopener noreferrer"
        class="contact-item"
      >
        <span class="icon">
          <Icon icon="mdi:github" />
        </span>

        <div>
          <span class="label">GitHub</span>
          <span class="value">View my GitHub</span>
        </div>
      </a>

      <!-- LinkedIn -->
      <a
        href="https://www.linkedin.com/in/anusha-kodamala-766926208/"
        target="_blank"
        rel="noopener noreferrer"
        class="contact-item"
      >
        <span class="icon">
          <Icon icon="mdi:linkedin" />
        </span>

        <div>
          <span class="label">LinkedIn</span>
          <span class="value">Connect with me</span>
        </div>
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<style scoped>
/* ========================================
   CONTACT INFO
======================================== */

.contact-info {
  max-width: 520px;
}

/* ========================================
   LABEL
======================================== */

.section-label {
  margin: 0 0 10px;

  color: #6b7280;

  font-size: 0.72rem;

  font-weight: 800;

  letter-spacing: 0.16em;
}

/* ========================================
   TITLE
======================================== */

h2 {
  margin: 0 0 16px;

  color: #111827;

  font-size: clamp(2rem, 4vw, 2.8rem);

  line-height: 1.2;

  letter-spacing: -0.03em;
}

/* ========================================
   DESCRIPTION
======================================== */

.description {
  max-width: 480px;

  margin: 0 0 32px;

  color: #6b7280;

  font-size: 0.95rem;

  line-height: 1.8;
}

/* ========================================
   CONTACT DETAILS
======================================== */

.contact-details {
  display: flex;

  flex-direction: column;

  gap: 14px;
}

/* ========================================
   CONTACT ITEM
======================================== */

.contact-item {
  display: flex;

  align-items: center;

  gap: 14px;

  padding: 12px;

  border: 1px solid transparent;

  border-radius: 14px;

  color: inherit;

  text-decoration: none;

  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s ease;
}

.contact-item:hover {
  background: #ffffff;

  border-color: #e5e7eb;

  transform: translateX(4px);
}

/* ========================================
   ICON
======================================== */

.icon {
  width: 44px;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  border: 1px solid var(--border-color);
  border-radius: 12px;

  color: var(--text-primary);
}

.icon :deep(svg) {
  width: 21px;
  height: 21px;
}

.contact-item:hover .icon {
  background: #111827;

  border-color: #111827;

  color: #ffffff;
}

/* ========================================
   TEXT
======================================== */

.label,
.value {
  display: block;
}

.label {
  margin-bottom: 3px;

  color: #9ca3af;

  font-size: 0.7rem;

  font-weight: 700;

  letter-spacing: 0.03em;
}

.value {
  color: #111827;

  font-size: 0.9rem;

  font-weight: 600;

  word-break: break-word;
}

/* ========================================
   MOBILE
======================================== */

@media (max-width: 600px) {
  .contact-info {
    max-width: 100%;
  }

  h2 {
    font-size: 2rem;
  }

  .description {
    font-size: 0.9rem;
  }
}
</style>
