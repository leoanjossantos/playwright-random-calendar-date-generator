import * as selectors from '../selectors/dates-generator-selectors';

export class DatesGeneratorPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.totalOfDays = page.locator(selectors.totalOfDays);

        this.startDay = page.locator(selectors.startDay);
        this.startMonth = page.locator(selectors.startMonth);
        this.startYear = page.locator(selectors.startYear);

        this.endDay = page.locator(selectors.endDay);
        this.endMonth = page.locator(selectors.endMonth);
        this.endYear = page.locator(selectors.endYear);
    }

    async fillTotalOfDates(totalOfDaysInput) {
        await this.totalOfDays.fill(totalOfDaysInput.toString());
    }

    async selectStartDate(startDate) {
        if (startDate instanceof Date) {
            await this.startDay.selectOption(startDate.getUTCDate().toString());
            // add +1 to the month because it's 0 indexed (0=january)
            await this.startMonth.selectOption((startDate.getUTCMonth()+1).toString()); 
            await this.startYear.selectOption(startDate.getUTCFullYear().toString());
        }
        else {
            console.log('Invalid start date.');
        }
    }

    async selectEndDate(endDate) {
        if (endDate instanceof Date) {
            await this.endDay.selectOption(endDate.getUTCDate().toString());
            // add +1 to the month because it's 0 indexed (0=january)
            await this.endMonth.selectOption((endDate.getUTCMonth()+1).toString());
            await this.endYear.selectOption(endDate.getUTCFullYear().toString());
        }
        else {
            console.log('Invalid end date.');
        }
    }

    async clickGetDates() {
        await this.page.getByRole('button', { name: 'Get Dates' }).click();
    }
}
