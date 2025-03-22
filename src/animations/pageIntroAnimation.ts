import gsap from "gsap";

export const pageIntroAnimation = (
  titleEl: HTMLElement | null,
  contentEl: HTMLElement | null
) => {
  if (!titleEl || !contentEl) return;

  const tl = gsap.timeline();

  tl.fromTo(
    contentEl,
    { y: 50, autoAlpha: 0 },
    {
      y: 0,
      autoAlpha: 1,
      duration: 0.4,
      ease: "power2.out",
    }
  ).fromTo(
    titleEl,
    { y: -70, autoAlpha: 0 },
    {
      y: 0,
      autoAlpha: 1,
      duration: 0.4,
      ease: "bounce.out",
    }
  );

  return tl;
};
