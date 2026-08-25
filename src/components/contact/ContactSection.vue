<template>
  <section id="contact" class="contact-section reveal">
    <div class="contact-container">
      <!-- Section Heading -->
      <div class="section-heading">
        <p class="section-label">GET IN TOUCH</p>

        <h2>
          Let's build something
          <span>great together.</span>
        </h2>

        <p class="section-description">
          Have a project, opportunity or frontend role in mind? I'd love to hear
          from you.
        </p>
      </div>

      <!-- Contact Content -->
      <div class="contact-content">
        <ContactInfo />

        <ContactForm />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ContactInfo from "./ContactInfo.vue";
import ContactForm from "./ContactForm.vue";
</script>

<style scoped>
/* ========================================
   SECTION
======================================== */

.contact-section {
  padding: 110px 24px;

  background: #f9fafb;
}

.contact-container {
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
  max-width: 620px;

  margin: 20px 0 0;

  color: #6b7280;

  font-size: 1rem;

  line-height: 1.7;
}

/* ========================================
   CONTACT CONTENT
======================================== */

.contact-content {
  display: grid;

  grid-template-columns: 0.85fr 1.15fr;

  gap: 70px;

  align-items: start;
}

/* ========================================
   TABLET
======================================== */

@media (max-width: 900px) {
  .contact-content {
    grid-template-columns: 1fr;

    gap: 45px;
  }
}

/* ========================================
   MOBILE
======================================== */

@media (max-width: 600px) {
  .contact-section {
    padding: 80px 18px;
  }

  .section-heading {
    margin-bottom: 45px;
  }
}
</style>
