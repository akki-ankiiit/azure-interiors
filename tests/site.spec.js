import { test, expect } from "@playwright/test";

async function openPage(page, path = "/") {
  await page.addInitScript(() => {
    sessionStorage.setItem("hasVisited", "true");
    localStorage.setItem("cookies", "accepted");
  });
  await page.goto(path);
  await expect(page.locator("[data-experience-ready]")).toBeAttached();
  await expect(page.locator("[data-preloader]")).toBeHidden();
}

test("homepage renders, scrolls, and loads its image assets", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await openPage(page);
  await expect(page.locator(".hero-s h1")).toHaveText(/Azure\s*Interiors/);
  await expect(page.locator(".hero-s h1")).toBeVisible();
  await expect
    .poll(() =>
      page
        .locator(".hero-img")
        .first()
        .evaluate((image) => image.complete && image.naturalWidth > 0),
    )
    .toBe(true);
  const overflowing = await page.evaluate(
    () => document.documentElement.scrollWidth > innerWidth + 1,
  );
  expect(overflowing).toBe(false);
  await page.mouse.wheel(0, 1600);
  await expect.poll(() => page.evaluate(() => scrollY)).toBeGreaterThan(300);
  expect(errors).toEqual([]);
});

test("day/night scene control crossfades the hero", async ({
  page,
  isMobile,
}) => {
  test.skip(isMobile, "The day/night controls are hidden on mobile.");
  await openPage(page);
  await page.locator('[data-tab-trigger="night"]').click();
  await expect(page.locator('[data-tab-trigger="night"]')).toHaveClass(
    /is-active/,
  );
  await expect(page.locator('[data-tab-content="night"]')).toHaveCSS(
    "opacity",
    "1",
  );
  // The engine ignores clicks while a crossfade is running, so retry until it settles.
  await expect(async () => {
    await page.locator('[data-tab-trigger="day"]').click();
    await expect(page.locator('[data-tab-trigger="day"]')).toHaveClass(
      /is-active/,
      { timeout: 1000 },
    );
  }).toPass({ timeout: 10000 });
});

test("project filtering honors deep links and reset", async ({ page }) => {
  await openPage(page, "/projects?type=villas");
  const visibleCards = page.locator("[data-filter-item]:visible");
  await expect.poll(() => visibleCards.count()).toBeGreaterThan(0);
  await expect.poll(() => visibleCards.count()).toBeLessThan(12);
  const types = await visibleCards
    .locator("[data-type]")
    .evaluateAll((elements) => elements.map((el) => el.dataset.type));
  expect(types.every((type) => type === "villas")).toBe(true);
  await page.locator("[data-reset]").click();
  await expect(visibleCards).toHaveCount(12);
});

test("booking modal validates and explains unconfigured submission", async ({
  page,
  isMobile,
}) => {
  await openPage(page, "/contact");
  if (isMobile) {
    await page.locator("[data-modal-menu-btn]").click();
    await page.locator("[data-modal-menu] [data-modal-cta-btn]").click();
  } else await page.locator(".header-nav [data-modal-cta-btn]").click();
  const form = page.locator("[data-modal-cta] form");
  await expect(form).toBeVisible();
  await form.locator('input[name="name"]').fill("Alex Morgan");
  await form.locator('input[type="email"]').fill("alex@example.com");
  await form.locator('input[type="tel"]').fill("+916260906952");
  const message = form.locator("textarea");
  if (await message.count())
    await message.fill("I would like to discuss a project.");
  await form.locator("[data-form-btn]").click();
  await expect(form.locator("[data-form-status]")).toContainText(
    "not connected yet",
  );
  await page.keyboard.press("Escape");
  await expect(form).toBeHidden();
});

test("client navigation, project pages, and browser back remain functional", async ({
  page,
  isMobile,
}) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await openPage(page, "/projects");
  await page
    .locator('a[href="/projects/the-malabar-residence"]')
    .first()
    .click();
  await expect(page).toHaveURL(/\/projects\/the-malabar-residence$/);
  await expect(page.locator("h1.project-title")).toHaveText(
    "The Malabar Residence",
  );
  await expect(page.locator("[data-experience-ready]")).toBeAttached();
  await page.goBack();
  await expect(page).toHaveURL(/\/projects$/);
  await expect(page.locator("[data-filter-item]:visible")).toHaveCount(12);
  if (isMobile) {
    await page.locator("[data-modal-menu-btn]").click();
    await page.locator('[data-modal-menu] a[href="/contact"]').click();
  } else await page.locator('.header-nav a[href="/contact"]').click();
  await expect(page).toHaveURL(/\/contact$/);
  await expect(page.locator("main h1").first()).toHaveText("Contact us");
  expect(errors).toEqual([]);
});

test("reduced motion skips the opening loader", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator("[data-experience-ready]")).toBeAttached();
  await expect(page.locator("[data-preloader]")).toBeHidden();
  await expect(page.locator(".hero-s h1")).toBeVisible();
});
