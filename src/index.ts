import { chromium } from "playwright";

const xxx = chromium.executablePath();
console.log("xxx ==========>", xxx);
(async () => {
  const context = await chromium.launchPersistentContext(
    "C:\\Users\\chenyitao\\AppData\\Local\\Google\\Chrome\\User Data",
    { headless: false }
  );
  // 启动Chromium浏览器
  // const browser = await chromium.launch({ headless: false });
  // 创建一个新的页面
  const page = await context.newPage();
  // 打开指定网页
  await page.goto("https://www.baidu.com");

  // 等待一段时间，以便观察操作结果
  await page.waitForTimeout(5000);
  page.evaluate(() => {});
})();
