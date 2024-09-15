import { test } from '@playwright/test';
import { DatesGeneratorPage } from '../pages/dates-generator-page';
import { ReturnedDatesPage } from '../pages/returned-dates-page';

test.describe('Random Date Generator Automation', () => {
    test('should validate 4 random dates', async ({ page }) => {
        const datesGeneratorPage = new DatesGeneratorPage(page);
        const returnedDatesPage = new ReturnedDatesPage(page);

        const startDate = new Date('2024-01-05');
        const endDate = new Date('2025-11-25');
        const totalDates = 4;

        await page.goto('/calendar-dates/');

        // Pick total of 4 random dates
        await datesGeneratorPage.fillTotalOfDates(totalDates);
        await datesGeneratorPage.selectStartDate(startDate);
        await datesGeneratorPage.selectEndDate(endDate);
        await datesGeneratorPage.clickGetDates();
        // Assert returned dates
        await returnedDatesPage.returnValidDates(totalDates);
        // Assert startDate and endDate are in the returned message
        await returnedDatesPage.hasQueryDatesInReturnedMessage(startDate, endDate);
    });
});
