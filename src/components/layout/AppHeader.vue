<template>
  <header :class="['header', { hidden: !isVisible }]">
    <nav class="navbar">
      <!-- Logo / Name -->
      <a href="#home" class="logo">
        <span class="logo-mark">A</span>
        <span>Anusha</span>
      </a>

      <!-- Navigation -->
      <div class="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <!-- Right Actions -->
      <div class="header-actions">
        <!-- Hire Me -->
        <a href="#contact" class="header-button"> Hire Me </a>

        <!-- Theme Toggle -->
        <button
          class="theme-toggle"
          type="button"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="toggleTheme"
        >
          <span v-if="isDark">☀️</span>
          <span v-else>🌙</span>
        </button>
        <button
          type="button"
          class="mobile-menu-button"
          @click="isMenuOpen = !isMenuOpen"
          :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
        >
          <span :class="{ open: isMenuOpen }"></span>
          <span :class="{ open: isMenuOpen }"></span>
          <span :class="{ open: isMenuOpen }"></span>
        </button>
      </div>
    </nav>
    <!-- Mobile Navigation -->
    <div v-if="isMenuOpen" class="mobile-nav">
      <a href="#home" @click="closeMenu">Home</a>
      <a href="#about" @click="closeMenu">About</a>
      <a href="#skills" @click="closeMenu">Skills</a>
      <a href="#projects" @click="closeMenu">Projects</a>
      <a href="#game" @click="closeMenu">Game 🎮</a>
      <a href="#contact" @click="closeMenu">Contact</a>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

/* ========================================
   HEADER VISIBILITY
======================================== */

const isVisible = ref(true);

let lastScrollY = 0;

const handleScroll = () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY < 50) {
    isVisible.value = true;
  } else if (currentScrollY > lastScrollY) {
    // Scrolling down
    isVisible.value = false;
  } else {
    // Scrolling up
    isVisible.value = true;
  }

  lastScrollY = currentScrollY;
};

/* ========================================
   THEME
======================================== */

const isDark = ref(false);

const applyTheme = (dark: boolean) => {
  isDark.value = dark;

  const app = document.querySelector(".app");

  if (app) {
    app.classList.toggle("dark-theme", dark);
  }

  localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
};

const toggleTheme = () => {
  applyTheme(!isDark.value);
};
const isMenuOpen = ref(false);

const closeMenu = () => {
  isMenuOpen.value = false;
};

/* ========================================
   MOUNT
======================================== */

onMounted(() => {
  window.addEventListener("scroll", handleScroll);

  // Load saved theme
  const savedTheme = localStorage.getItem("portfolio-theme");

  if (savedTheme === "dark") {
    applyTheme(true);
  } else {
    applyTheme(false);
  }
});

/* ========================================
   UNMOUNT
======================================== */

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* ========================================
   HEADER
======================================== */

.header {
  position: fixed;

  top: 14px;
  left: 0;

  width: 100%;

  z-index: 1000;

  padding: 0 18px;

  transition:
    transform 0.35s ease,
    opacity 0.35s ease;
}

.header.hidden {
  transform: translateY(-120%);

  opacity: 0;

  pointer-events: none;
}

/* ========================================
   NAVBAR
======================================== */

.navbar {
  width: 100%;

  max-width: 1150px;

  height: 64px;

  margin: 0 auto;

  padding: 0 18px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  border: 1px solid #e5e7eb;

  border-radius: 16px;

  background: rgba(255, 255, 255, 0.92);

  backdrop-filter: blur(12px);

  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);

  transition:
    background 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

/* ========================================
   LOGO
======================================== */

.logo {
  display: flex;

  align-items: center;

  gap: 9px;

  color: #111827;

  font-size: 1rem;

  font-weight: 800;

  text-decoration: none;

  transition: color 0.3s ease;
}

.logo-mark {
  width: 34px;
  height: 34px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 10px;

  background: #111827;

  color: #ffffff;

  font-size: 0.9rem;

  transition:
    background 0.3s ease,
    color 0.3s ease;
}

/* ========================================
   NAVIGATION
======================================== */

.nav-links {
  display: flex;

  align-items: center;

  gap: 28px;
}

.nav-links a {
  position: relative;

  color: #6b7280;

  font-size: 0.85rem;

  font-weight: 600;

  text-decoration: none;

  transition: color 0.2s ease;
}

.nav-links a::after {
  content: "";

  position: absolute;

  left: 0;

  bottom: -7px;

  width: 0;

  height: 2px;

  background: #111827;

  transition: width 0.2s ease;
}

.nav-links a:hover {
  color: #111827;
}

.nav-links a:hover::after {
  width: 100%;
}

/* ========================================
   HEADER ACTIONS
======================================== */

.header-actions {
  display: flex;

  align-items: center;

  gap: 10px;
}

/* ========================================
   THEME TOGGLE
======================================== */

.theme-toggle {
  width: 36px;
  height: 36px;

  display: flex;

  align-items: center;
  justify-content: center;

  padding: 0;

  border: 1px solid #e5e7eb;

  border-radius: 10px;

  background: #ffffff;

  color: #111827;

  font-size: 0.95rem;

  cursor: pointer;

  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s ease;
}

.theme-toggle:hover {
  transform: translateY(-2px);

  background: #f3f4f6;

  border-color: #d1d5db;
}

/* ========================================
   HIRE BUTTON
======================================== */

.header-button {
  padding: 9px 16px;

  border-radius: 9px;

  background: #111827;

  color: #ffffff;

  font-size: 0.8rem;

  font-weight: 700;

  text-decoration: none;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background 0.3s ease;
}

.header-button:hover {
  transform: translateY(-2px);

  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
}

/* ========================================
   DARK THEME
======================================== */

:global(.dark-theme) .navbar {
  border-color: #374151;

  background: rgba(17, 24, 39, 0.92);

  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
}

:global(.dark-theme) .logo {
  color: #f9fafb;
}

:global(.dark-theme) .logo-mark {
  background: #f9fafb;

  color: #111827;
}

:global(.dark-theme) .nav-links a {
  color: #9ca3af;
}

:global(.dark-theme) .nav-links a:hover {
  color: #ffffff;
}

:global(.dark-theme) .nav-links a::after {
  background: #ffffff;
}

:global(.dark-theme) .theme-toggle {
  border-color: #374151;

  background: #1f2937;

  color: #ffffff;
}

:global(.dark-theme) .theme-toggle:hover {
  background: #374151;
}

:global(.dark-theme) .header-button {
  background: #f9fafb;

  color: #111827;
}

/* ========================================
   TABLET
======================================== */

@media (max-width: 800px) {
  .nav-links {
    gap: 15px;
  }

  .nav-links a {
    font-size: 0.75rem;
  }

  .header-button {
    display: none;
  }
}

/* ========================================
   MOBILE
======================================== */

@media (max-width: 600px) {
  .header {
    top: 10px;

    padding: 0 12px;
  }

  .navbar {
    height: 58px;

    padding: 0 12px;
  }

  .nav-links {
    display: none;
  }
}
/* ========================================
   MOBILE MENU BUTTON
======================================== */

.mobile-menu-button {
  display: none;

  width: 40px;
  height: 40px;

  padding: 8px;

  border: 1px solid var(--border-color);
  border-radius: 10px;

  background: var(--bg-card);
  cursor: pointer;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 5px;
}

.mobile-menu-button span {
  width: 20px;
  height: 2px;

  background: var(--text-primary);

  border-radius: 999px;

  transition: 0.25s ease;
}

/* ========================================
   MOBILE NAVIGATION
======================================== */

.mobile-nav {
  display: none;
}

/* ========================================
   MOBILE
======================================== */

@media (max-width: 600px) {
  .nav-links {
    display: none;
  }

  .header-button {
    display: none;
  }

  .mobile-menu-button {
    display: flex;
  }

  .navbar {
    position: relative;
  }

  .mobile-nav {
    position: absolute;

    top: calc(100% + 10px);
    left: 12px;
    right: 12px;

    display: flex;
    flex-direction: column;

    padding: 12px;

    border: 1px solid var(--border-color);
    border-radius: 16px;

    background: var(--bg-card);

    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);

    z-index: 100;
  }

  .mobile-nav a {
    padding: 12px 14px;

    border-radius: 10px;

    color: var(--text-primary);

    font-size: 0.9rem;
    font-weight: 600;

    text-decoration: none;
  }

  .mobile-nav a:hover {
    background: var(--bg-secondary);
  }
}
</style>
