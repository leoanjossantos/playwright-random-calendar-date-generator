import { start } from 'repl';

const { expect } = require('@playwright/test');
export class DatesGeneratorPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.totalOfDays = page.locator('input[name="num"]');

        this.startDay = page.locator('select[name="start_day"]');
        this.startMonth = page.locator('select[name="start_month"]');
        this.startYear = page.locator('select[name="start_year"]');

        this.endDay = page.locator('select[name="end_day"]');
        this.endMonth = page.locator('select[name="end_month"]');
        this.endYear = page.locator('select[name="end_year"]');
    }

    async fillTotalOfDates(totalOfDaysInput) {
        await this.totalOfDays.fill(totalOfDaysInput);
    }

    async selectStartDate(startDate) {
        if (startDate instanceof Date) {
            await this.startDay.selectOption(startDate.getUTCDate().toString());
            await this.startMonth.selectOption((startDate.getUTCMonth()+1).toString()); // add +1 into the month because it is 0 indexed (0=january)
            await this.startYear.selectOption(startDate.getUTCFullYear().toString());
        }
        else {
            console.log('Invalid start date');
        }
    }

    async selectEndDate(endDate) {
        if (endDate instanceof Date) {
            await this.endDay.selectOption(endDate.getUTCDate().toString());
            await this.endMonth.selectOption((endDate.getUTCMonth()+1).toString()); // add +1 into the month because it is 0 indexed (0=january)
            await this.endYear.selectOption(endDate.getUTCFullYear().toString());
        }
        else {
            console.log('Invalid start date');
        }
    }

    async clickGetDates() {
        await this.page.getByRole('button', { name: 'Get Dates' }).click();
    }
}
