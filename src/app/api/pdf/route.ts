import { NextApiHandler } from "next";
import { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";

export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse,
) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('http://localhost:3000')
    await page.emulateMediaType('screen')

    // Create PDF Buffer
    const buffer = await page.pdf({ format: 'a4' })

    // Return pdf buffer to caller.
    response.end(buffer)

    // Close browser **after** we returned the PDF to the caller.
    await browser.close()
}
