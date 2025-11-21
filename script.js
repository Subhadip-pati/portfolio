// ...existing code...
document.addEventListener('DOMContentLoaded', () => {
  // update footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Typing animation (safe guards if element missing)
  const roles = [
    "B.Tech CSE Student · GNIT",
    "Aspiring Full Stack & ML Developer",
    "Learning Python & Machine Learning",
    "Practicing Databases & SQL",
    "Using Git & GitHub for projects"
  ];
  const typingElement = document.getElementById('typing-role');
  if (typingElement) {
    let roleIndex = 0, charIndex = 0, deleting = false;
    function typeLoop() {
      const current = roles[roleIndex];
      if (!deleting) {
        charIndex++;
        if (charIndex > current.length) {
          deleting = true;
          setTimeout(typeLoop, 1200);
          return;
        }
      } else {
        charIndex--;
        if (charIndex < 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          charIndex = 0;
        }
      }
      typingElement.textContent = current.substring(0, Math.max(0, charIndex));
      const speed = deleting ? 40 : 80;
      setTimeout(typeLoop, speed);
    }
    typeLoop();
  }

  // Scroll reveal
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length) {
    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    revealElements.forEach(el => revealObserver.observe(el));
  }

  // Animate skill bars when visible
  const skillFills = document.querySelectorAll('.skill-level-fill');
  if (skillFills.length) {
    const skillObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const level = parseInt(entry.target.getAttribute('data-level') || '0', 10);
          entry.target.style.width = level + '%';
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    skillFills.forEach(fill => skillObserver.observe(fill));
  }
});
// ...existing code...