import {chromium, FullConfig, Page} from '@playwright/test';

async function defaultSetup(config: FullConfig) {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await browser.newPage();
    const baseURL = 'https://demo.playwright.dev/todomvc/';

    await context.tracing.start({ screenshots: true, snapshots: true });
    await page.goto(baseURL);
    let input = page.locator('input');
    await input.fill('testing');
    await context.tracing.stop({path: __dirname + '/trace-global.zip'});
}

export default defaultSetup;
