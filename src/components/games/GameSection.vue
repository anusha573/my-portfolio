<template>
  <section id="game" class="game-section reveal">
    <div class="game-container">
      <!-- ========================================
           LEFT CONTENT
      ======================================== -->

      <div class="game-content">
        <!-- Section Label -->
        <p class="game-label">TAKE A BREAK 🎮</p>

        <!-- Section Heading -->
        <h2>
          Want to
          <span>play with me?</span>
        </h2>

        <!-- Description -->
        <p class="game-description">
          Take a quick break from coding and test your guessing skills. Can you
          find the secret number?
        </p>

        <!-- Game Features -->
        <div class="game-details">
          <span>🎯 Guess the Number</span> <span>⚡ Built with JavaScript</span>
          <span>🏆 Score & High Score</span>
        </div>
      </div>

      <!-- ========================================
           RIGHT GAME PREVIEW
      ======================================== -->

      <div class="game-visual">
        <!-- Game Preview Card -->
        <div class="game-card">
          <!-- Browser-style Dots -->
          <div class="game-card-top">
            <span class="game-dot"></span>
            <span class="game-dot"></span>
            <span class="game-dot"></span>
          </div>

          <!-- Game Icon -->
          <div class="game-icon">🎯</div>

          <!-- Game Title -->
          <h3>Guess My Number</h3>

          <!-- Short Description -->
          <p>Think you've got what it takes?</p>

          <!-- Hidden Number Preview -->
          <div class="fake-number">?</div>

          <!-- Number Range -->
          <div class="game-hint">Can you guess it? 1–20</div>

          <!-- ========================================
               PLAY GAME BUTTON
               Opens the deployed GitHub game
          ======================================== -->

          <a
            href="https://anusha573.github.io/Javascript-Games/"
            target="_blank"
            rel="noopener noreferrer"
            class="game-play-button"
          >
            🎮 Play Game
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ========================================
   GAME SECTION
======================================== */

.game-section {
  padding: 110px 24px;

  background: var(--bg-primary);

  color: var(--text-primary);

  transition:
    background 0.3s ease,
    color 0.3s ease;
}

/* ========================================
   MAIN CONTAINER
======================================== */

.game-container {
  width: 100%;

  max-width: 1100px;

  margin: 0 auto;

  display: grid;

  grid-template-columns: 1.2fr 0.8fr;

  gap: 80px;

  align-items: center;
}

/* ========================================
   LEFT CONTENT
======================================== */

.game-content {
  max-width: 650px;
}

/* Section Label */

.game-label {
  margin-bottom: 12px;

  color: var(--text-secondary);

  font-size: 0.75rem;

  font-weight: 800;

  letter-spacing: 0.16em;
}

/* Heading */

.game-content h2 {
  margin: 0;

  color: var(--text-primary);

  font-size: clamp(2.5rem, 5vw, 4.2rem);

  line-height: 1.1;

  letter-spacing: -0.04em;
}

/* Second Line */

.game-content h2 span {
  display: block;

  color: var(--text-secondary);
}

/* Description */

.game-description {
  max-width: 580px;

  margin: 25px 0;

  color: var(--text-secondary);

  font-size: 1rem;

  line-height: 1.8;
}

/* ========================================
   GAME FEATURES
======================================== */

.game-details {
  display: flex;

  flex-wrap: wrap;

  gap: 10px;

  margin-top: 25px;
}

.game-details span {
  padding: 8px 12px;

  border: 1px solid var(--border-color);

  border-radius: 999px;

  background: var(--bg-secondary);

  color: var(--text-secondary);

  font-size: 0.72rem;

  font-weight: 600;
}

/* ========================================
   GAME VISUAL
======================================== */

.game-visual {
  display: flex;

  justify-content: center;
}

/* ========================================
   GAME CARD
======================================== */

.game-card {
  width: 280px;

  padding: 25px;

  border: 1px solid var(--border-color);

  border-radius: 24px;

  background: var(--bg-card);

  text-align: center;

  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);

  transform: rotate(2deg);

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

/* Card Hover */

.game-card:hover {
  transform: rotate(0deg) translateY(-8px);

  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.14);
}

/* ========================================
   BROWSER DOTS
======================================== */

.game-card-top {
  display: flex;

  gap: 6px;

  margin-bottom: 25px;
}

.game-dot {
  width: 8px;

  height: 8px;

  border-radius: 50%;

  background: var(--border-color);
}

/* ========================================
   GAME ICON
======================================== */

.game-icon {
  margin-bottom: 12px;

  font-size: 2.8rem;
}

/* ========================================
   GAME TITLE
======================================== */

.game-card h3 {
  margin: 0 0 6px;

  color: var(--text-primary);

  font-size: 1.2rem;

  font-weight: 700;
}

/* Game Subtitle */

.game-card p {
  margin: 0;

  color: var(--text-secondary);

  font-size: 0.8rem;
}

/* ========================================
   SECRET NUMBER
======================================== */

.fake-number {
  width: 80px;

  height: 80px;

  margin: 25px auto 15px;

  display: flex;

  align-items: center;

  justify-content: center;

  border: 2px dashed var(--border-color);

  border-radius: 18px;

  color: var(--text-primary);

  font-size: 2.5rem;

  font-weight: 800;
}

/* Number Range */

.game-hint {
  color: var(--text-muted);

  font-size: 0.7rem;

  font-weight: 600;
}

/* ========================================
   PLAY GAME BUTTON
======================================== */

.game-play-button {
  display: inline-flex;

  align-items: center;

  justify-content: center;

  gap: 8px;

  margin-top: 20px;

  padding: 10px 17px;

  border-radius: 10px;

  background: var(--button-bg);

  color: var(--button-text);

  font-size: 0.78rem;

  font-weight: 700;

  text-decoration: none;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    opacity 0.25s ease;
}

/* Play Button Hover */

.game-play-button:hover {
  transform: translateY(-3px);

  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.15);

  opacity: 0.92;
}

/* ========================================
   MOBILE
======================================== */

@media (max-width: 800px) {
  .game-section {
    padding: 80px 18px;
  }

  .game-container {
    grid-template-columns: 1fr;

    gap: 50px;

    text-align: center;
  }

  .game-content {
    margin: 0 auto;
  }

  .game-description {
    margin-left: auto;

    margin-right: auto;
  }

  .game-details {
    justify-content: center;
  }

  .game-visual {
    order: -1;
  }
}

/* ========================================
   SMALL MOBILE
======================================== */

@media (max-width: 500px) {
  .game-card {
    width: 250px;

    padding: 22px;
  }

  .game-content h2 {
    font-size: 2.6rem;
  }

  .game-details span {
    font-size: 0.68rem;
  }
}
</style>
