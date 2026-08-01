document.addEventListener("DOMContentLoaded", () => {
  const circles = document.querySelectorAll(".circle-badge");
  
  circles.forEach(circle => {
    circle.addEventListener("click", () => {
      const columnGroup = circle.closest(".column-card-group");
      const contentCard = columnGroup.querySelector(".content-card");
      
      // Toggles the text card between hidden and visible when clicked
      if (contentCard.style.display === "none" || contentCard.style.display === "") {
        contentCard.style.display = "block";
      } else {
        contentCard.style.display = "none";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const groups = document.querySelectorAll('.column-card-group');
  const cards = document.querySelectorAll('.content-card');

  groups.forEach(group => {
    const targetId = group.getAttribute('data-target');
    const targetCard = document.getElementById(targetId);

    // Show card on hover
    group.addEventListener('mouseenter', () => {
      cards.forEach(c => c.classList.remove('active'));
      groups.forEach(g => g.classList.remove('active'));
      
      targetCard.classList.add('active');
      group.classList.add('active');
    });

    // Click to toggle/lock open
    group.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = group.classList.contains('active');

      cards.forEach(c => c.classList.remove('active'));
      groups.forEach(g => g.classList.remove('active'));

      if (!isActive) {
        targetCard.classList.add('active');
        group.classList.add('active');
      }
    });
  });

  // Hide when clicking outside
  document.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('active'));
    groups.forEach(g => g.classList.remove('active'));
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll("#gallery-page-bg .gallery-item");

    galleryItems.forEach(item => {
        const overlay = item.querySelector(".caption-overlay");
        const captionText = item.getAttribute("data-caption");

        if (overlay && captionText) {
            overlay.textContent = captionText;

            item.addEventListener("mouseenter", () => {
                overlay.style.opacity = "1";
            });

            item.addEventListener("mouseleave", () => {
                overlay.style.opacity = "0";
            });
        }
    });
});