const images = document.querySelectorAll(".animated-img");

images.forEach((img) => {
  const randomX = Math.random() * (window.innerWidth - 150);
  const randomY = Math.random() * (window.innerHeight - 100);

  gsap.set(img, {
    x: 70 + randomX,
    y: 100,
    opacity: 0,
  });

  gsap.to(img, {
    opacity:1,
    duration: 1 + Math.random() * 0.5,
    y: randomY + 100,
    yoyo: true,
    ease: "bounce.out",
    duration: 2 + Math.random() * 1.5,
    delay: 1, 
    rotate: 360 * Math.random(),
    scale: 1.2 + Math.random() * 0.5,
  });
});