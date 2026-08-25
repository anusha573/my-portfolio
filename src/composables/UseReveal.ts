import { onMounted, onUnmounted } from "vue";

export function useReveal() {
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    const elements = document.querySelectorAll(".reveal");

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");

            // Reveal only once
            observer?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    elements.forEach((element) => observer?.observe(element));
  });

  onUnmounted(() => {
    observer?.disconnect();
  });
}
