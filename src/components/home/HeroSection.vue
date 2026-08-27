<template>
  <section id="home" class="hero">
    <div class="hero-container">
      <!-- Left Content -->
      <div class="hero-content">
        <p class="hero-greeting">Hi, I'm <span>Anusha</span> 👋</p>

        <h1>Frontend Developer</h1>

        <p class="hero-description">
          I craft responsive, scalable web applications using Vue.js, Nuxt.js,
          TypeScript, and modern frontend tools — turning ideas into fast,
          intuitive user experiences.
        </p>

        <!-- Main Buttons -->
        <div class="hero-buttons">
          <a href="#projects" class="btn btn-primary">
            View My Work
            <span>→</span>
          </a>

          <a href="#contact" class="btn btn-secondary"> Hire Me </a>
        </div>

        <!-- CV -->
        <div class="cv-button-wrapper">
          <a href="\Anusha_Kodamala_Frontend_Developer_Resume.pdf" download class="cv-button">
            Download CV
            <span>↓</span>
          </a>
        </div>

        <!-- Rotating Funny Message -->
        <div class="fun-message">
          <span :key="currentMessage" class="message-text">
            {{ funnyMessages[currentMessage] }}
          </span>
        </div>
      </div>

      <!-- Right Profile -->
      <div class="hero-image-wrapper">
        <div class="image-background"></div>

        <div class="image-circle">
          <img :src="Me" alt="Anusha Kodamala - Frontend Developer" />
        </div>

        <!-- Experience Card -->
        <div class="floating-card card-one">
          <span>2+</span>
          <small>Years Experience</small>
        </div>

        <!-- Projects Card -->
        <div class="floating-card card-two">
          <span>4</span>
          <small>Projects</small>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <a href="#about" class="scroll-indicator">
      <span>Explore more</span>
      <span>↓</span>
    </a>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import Me from "@/assets/images/profile/Me.png";

const funnyMessages = [
  "🐞 It's not a bug, it's an undocumented feature.",
  "🧠 My code works. I have no idea why.",
  "⌨️ Ctrl+Z is my superpower.",
  "🎯 99 little bugs in the code, 99 little bugs...",
  "🧪 It works on my machine. Ship it anyway.",
  "📦 Import happiness from 'Vue'.",
  "🐙 git commit -m 'fixed it (probably)'",
  "🐢 Push to prod on Friday? Bold move.",
  "🧵 47 tabs open. All essential. Don't ask.",
  "🧵 My browser tabs are basically a cry for help.",
  "🔍 Professional Googler of error messages.",
  "🎨 Making pixels behave with CSS.",
  "🕹️ Living in dark mode since 2020.",
  "🛠️ Turning ideas into components.",
  "⚡ Fast fingers, slower Wi-Fi.",
  "🌐 Making the internet slightly more awesome.",
  "💡 Ideas > sleep.",
];

const currentMessage = ref(0);

let messageInterval: ReturnType<typeof setInterval>;

onMounted(() => {
  messageInterval = setInterval(() => {
    currentMessage.value = (currentMessage.value + 1) % funnyMessages.length;
  }, 5000);
});

onUnmounted(() => {
  clearInterval(messageInterval);
});
</script>

<style scoped>
/* ========================================
   HERO SECTION
======================================== */

.hero {
  position: relative;

  min-height: 100vh;

  display: flex;
  align-items: center;

  overflow: hidden;

  padding: 120px 24px 80px;

  background: var(--bg-primary);

  color: var(--text-primary);

  transition:
    background 0.3s ease,
    color 0.3s ease;
}

/* Decorative background */

.hero::before {
  content: "";

  position: absolute;

  top: -180px;
  right: -180px;

  width: 500px;
  height: 500px;

  border-radius: 50%;

  background: var(--bg-secondary);

  z-index: 0;

  transition: background 0.3s ease;
}

/* ========================================
   HERO CONTAINER
======================================== */

.hero-container {
  position: relative;

  z-index: 1;

  width: 100%;

  max-width: 1200px;

  margin: 0 auto;

  display: grid;

  grid-template-columns: 1.1fr 0.9fr;

  gap: 70px;

  align-items: center;
}

/* ========================================
   CONTENT
======================================== */

.hero-content {
  max-width: 700px;
}

/* Greeting */

.hero-greeting {
  margin-bottom: 18px;

  font-size: 1.1rem;

  font-weight: 600;

  color: var(--text-secondary);

  transition: color 0.3s ease;
}

.hero-greeting span {
  color: var(--text-primary);
}

/* ========================================
   MAIN TITLE
======================================== */

.hero-content h1 {
  margin: 0;

  font-size: clamp(3rem, 6vw, 5.5rem);

  font-weight: 800;

  line-height: 1.05;

  letter-spacing: -0.04em;

  color: var(--text-primary);

  transition: color 0.3s ease;
}

/* ========================================
   DESCRIPTION
======================================== */

.hero-description {
  max-width: 650px;

  margin: 28px 0 32px;

  color: var(--text-secondary);

  font-size: 1.05rem;

  line-height: 1.8;

  transition: color 0.3s ease;
}

/* ========================================
   BUTTONS
======================================== */

.hero-buttons {
  display: flex;

  flex-wrap: wrap;

  gap: 14px;

  margin-bottom: 30px;
}

.btn {
  display: inline-flex;

  align-items: center;

  justify-content: center;

  gap: 10px;

  min-width: 150px;

  padding: 13px 22px;

  border-radius: 10px;

  font-size: 0.9rem;

  font-weight: 700;

  text-decoration: none;

  cursor: pointer;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    background 0.25s ease,
    color 0.25s ease,
    border-color 0.25s ease;
}

/* Primary */

.btn-primary {
  background: var(--button-bg);

  color: var(--button-text);

  border: 1px solid var(--button-bg);
}

.btn-primary:hover {
  transform: translateY(-3px);

  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
}

/* Secondary */

.btn-secondary {
  border: 1px solid var(--border-color);

  background: var(--bg-card);

  color: var(--text-primary);
}

.btn-secondary:hover {
  transform: translateY(-3px);

  border-color: var(--text-primary);

  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.06);
}

/* ========================================
   CV BUTTON
======================================== */

.cv-button-wrapper {
  margin-bottom: 25px;
}

.cv-button {
  display: inline-flex;

  align-items: center;

  justify-content: center;

  gap: 10px;

  padding: 11px 18px;

  border: 1px solid var(--border-color);

  border-radius: 10px;

  background: var(--bg-card);

  color: var(--text-primary);

  font-size: 0.85rem;

  font-weight: 700;

  text-decoration: none;

  transition:
    transform 0.25s ease,
    background 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}

.cv-button:hover {
  transform: translateY(-3px);

  background: var(--bg-secondary);

  border-color: var(--text-primary);

  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
}

/* ========================================
   FUN MESSAGE
======================================== */

.fun-message {
  min-height: 38px;

  display: flex;

  align-items: center;

  margin-bottom: 25px;
}

.message-text {
  display: inline-block;

  padding: 9px 15px;

  border: 1px solid var(--border-color);

  border-radius: 999px;

  background: var(--bg-secondary);

  color: var(--text-secondary);

  font-size: 0.78rem;

  transition:
    background 0.3s ease,
    border-color 0.3s ease,
    color 0.3s ease;

  animation: messageIn 0.5s ease;
}

@keyframes messageIn {
  from {
    opacity: 0;

    transform: translateY(8px);
  }

  to {
    opacity: 1;

    transform: translateY(0);
  }
}

/* ========================================
   IMAGE AREA
======================================== */

.hero-image-wrapper {
  position: relative;

  width: min(420px, 100%);

  aspect-ratio: 1;

  margin: 0 auto;
}

/* Background circle */

.image-background {
  position: absolute;

  inset: 25px;

  border-radius: 50%;

  background: var(--bg-secondary);

  transition: background 0.3s ease;
}

/* Image circle */

.image-circle {
  position: absolute;

  inset: 45px;

  overflow: hidden;

  border-radius: 50%;

  border: 8px solid var(--bg-primary);

  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.12);

  background: var(--bg-secondary);

  transition:
    background 0.3s ease,
    border-color 0.3s ease;
}

.image-circle img {
  width: 100%;

  height: 100%;

  object-fit: cover;

  display: block;
}

/* ========================================
   FLOATING CARDS
======================================== */

.floating-card {
  position: absolute;

  z-index: 10;

  display: flex;

  flex-direction: column;

  min-width: 125px;

  padding: 13px 16px;

  border: 1px solid var(--border-color);

  border-radius: 14px;

  background: var(--bg-card);

  color: var(--text-primary);

  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);

  transition:
    background 0.3s ease,
    border-color 0.3s ease,
    color 0.3s ease,
    box-shadow 0.3s ease;
}

/* NUMBER */

.floating-card span {
  display: block;

  margin: 0;

  color: var(--text-primary) !important;

  font-size: 1.3rem;

  font-weight: 800;

  line-height: 1.2;

  opacity: 1 !important;

  visibility: visible !important;
}

/* LABEL */

.floating-card small {
  display: block;

  margin-top: 4px;

  color: var(--text-secondary) !important;

  font-size: 0.65rem;

  font-weight: 600;

  line-height: 1.4;

  opacity: 1 !important;

  visibility: visible !important;
}

/* Experience */

.card-one {
  top: 18%;

  left: -5%;
}

/* Projects */

.card-two {
  right: -3%;

  bottom: 18%;
}

/* ========================================
   DARK MODE EXTRA PROTECTION
======================================== */

:global(.dark-theme) .floating-card {
  background: #1f2937 !important;

  border-color: #374151 !important;

  color: #f9fafb !important;

  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
}

:global(.dark-theme) .floating-card span {
  color: #ffffff !important;

  opacity: 1 !important;

  visibility: visible !important;
}

:global(.dark-theme) .floating-card small {
  color: #d1d5db !important;

  opacity: 1 !important;

  visibility: visible !important;
}

/* ========================================
   SCROLL INDICATOR
======================================== */

.scroll-indicator {
  position: absolute;

  bottom: 25px;

  left: 50%;

  z-index: 2;

  display: flex;

  transform: translateX(-50%);

  flex-direction: column;

  align-items: center;

  gap: 5px;

  color: var(--text-muted);

  font-size: 0.7rem;

  text-decoration: none;

  transition: color 0.3s ease;
}

/* ========================================
   TABLET
======================================== */

@media (max-width: 900px) {
  .hero {
    padding-top: 100px;
  }

  .hero-container {
    grid-template-columns: 1fr;

    gap: 45px;

    text-align: center;
  }

  .hero-content {
    max-width: 750px;

    margin: 0 auto;
  }

  .hero-description {
    margin-left: auto;

    margin-right: auto;
  }

  .hero-buttons {
    justify-content: center;
  }

  .cv-button-wrapper {
    display: flex;

    justify-content: center;
  }

  .fun-message {
    justify-content: center;
  }

  .hero-image-wrapper {
    width: min(360px, 90%);

    order: -1;
  }

  .card-one {
    left: 0;
  }

  .card-two {
    right: 0;
  }

  .scroll-indicator {
    display: none;
  }
}

/* ========================================
   MOBILE
======================================== */

@media (max-width: 500px) {
  .hero {
    padding: 90px 18px 60px;
  }

  .hero-content h1 {
    font-size: 2.8rem;
  }

  .hero-description {
    font-size: 0.95rem;
  }

  .hero-image-wrapper {
    width: 300px;
  }

  .floating-card {
    min-width: 110px;

    padding: 10px 12px;
  }

  .floating-card span {
    font-size: 1.1rem;
  }

  .floating-card small {
    font-size: 0.6rem;
  }
} /* ========================================
   HERO ENTRANCE ANIMATION
======================================== */

.hero-content {
  animation: heroContentIn 0.8s ease-out both;
}

.hero-image-wrapper {
  animation: heroImageIn 0.9s ease-out 0.15s both;
}

/* ========================================
   HERO CONTENT ANIMATION
======================================== */

@keyframes heroContentIn {
  from {
    opacity: 0;
    transform: translateY(25px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ========================================
   HERO IMAGE ANIMATION
======================================== */

@keyframes heroImageIn {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.96);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* ========================================
   ACCESSIBILITY
======================================== */

@media (prefers-reduced-motion: reduce) {
  .hero-content,
  .hero-image-wrapper {
    animation: none;
  }
}
</style>
