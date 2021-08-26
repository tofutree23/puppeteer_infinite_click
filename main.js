const puppeteer = require("puppeteer");

(async function main() {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1080, height: 720 },
  });

  const tab = await browser.newPage();
  await tab.goto("https://popcat.click/");

  setInterval(async () => {
    await tab.click("#app");
  }, 100);

  browser.on("targetdestroyed", () => {
    console.log("Destroyed");
    process.exit();
  });

  browser.on("disconnect", () => {
    console.log("DISCONNECTD");
    process.exit();
  });
})();
