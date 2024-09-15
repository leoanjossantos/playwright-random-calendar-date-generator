import { expect } from '@playwright/test';

export class ReturnedDatesPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.returnedDates = page.locator("//p[@style='line-height: 1.4em; margin-left: 2em']");
    }

    async returnValidDates(totalDates) {
        const datesText = await this.returnedDates.textContent();
        // Split the dates in an array
        const dateLines = datesText.trim().split('\n').filter(line => line.trim());
        
        // Assert dates quantity and whether are valid dates
        expect(dateLines).toHaveLength(totalDates);

        for(let i=0; i < dateLines.length; i++) {
            expect(dateLines[i]).toMatch(/\d{4}-\d{2}-\d{2}/g);
        }
    }

    async hasQueryDatesInReturnedMessage(startDate, endDate) {
        // Assert the requested range date are in the returned sentence
        const returnedMessage = await this.page.getByText('They were picked').textContent();
        // Grabs the dates from the returned message using regex
        const dates =  returnedMessage.match(/\d{4}-\d{2}-\d{2}/g);
        // Assert number of returned dates and compare dates
        expect(dates).toHaveLength(2);
        
        const [messageStartDate, messageEndDate] = dates;

        expect(messageStartDate).toBe(startDate.toISOString().split('T')[0]);
        expect(messageEndDate).toBe(endDate.toISOString().split('T')[0]);
    }   
}
