const { test, expect } = require('@playwright/test');
const { DatesGeneratorPage } = require('../pages/dates-generator-page');

test.describe('Random Date Generator Automation', () => {
    test('should validate 4 random dates', async ({ page }) => {
        const datesGeneratorPage = new DatesGeneratorPage(page);
        const startDate = new Date('2024-01-05');
        const endDate = new Date('2025-11-25');

        await page.goto('/calendar-dates/');

        // Pick total of 4 random dates
        await datesGeneratorPage.fillTotalOfDates('4');
        await datesGeneratorPage.selectStartDate(startDate);
        await datesGeneratorPage.selectEndDate(endDate);
        await datesGeneratorPage.clickGetDates();

        // Asserting that there are 4 elements returned (easiest way) based on the number of child <br> tags under <p> tag
        await expect(page.locator('p >> br')).toHaveCount(4);

        // Another way is to use Xpath to find the element
        const element = page.locator("//p[@style='line-height: 1.4em; margin-left: 2em']");
        const datesText = await element.textContent();
        const dateLines = datesText.trim().split('\n').filter(line => line.trim());
        expect(dateLines.length).toBe(4);
        
        // Assert the requested range date are in the returned sentence
        const returnedMessage = await page.getByText('They were picked').textContent();
        // Grabs the dates from the returned message using regex
        const dates =  returnedMessage.match(/\d{4}-\d{2}-\d{2}/g);
        // Assert number of dates returned
        expect(dates).toHaveLength(2);
        const [messageStartDate, messageEndDate] = dates;
        expect(messageStartDate).toBe(startDate.toISOString().split('T')[0]);
        expect(messageEndDate).toBe(endDate.toISOString().split('T')[0]);

    });
});
