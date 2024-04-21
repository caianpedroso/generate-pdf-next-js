// import { NextApiHandler } from "next";
// import { NextApiRequest, NextApiResponse } from "next";
// import puppeteer from "puppeteer";
//
// export default async function handler(
//     request: NextApiRequest,
//     response: NextApiResponse,
// ) {
//     const browser = await puppeteer.launch()
//     const page = await browser.newPage()
//
//     await page.goto('http://localhost:3000')
//     await page.emulateMediaType('screen')
//
//     // Create PDF Buffer
//     const buffer = await page.pdf({ format: 'a4' })
//
//     // Return pdf buffer to caller.
//     response.end(buffer)
//
//     // Close browser **after** we returned the PDF to the caller.
//     await browser.close()
// }


import { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';


const saveAsPdf = async (url: string) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url, {
        waitUntil: 'networkidle0'
    });

    const result = await page.pdf({
        format: 'a4',
    });
    await browser.close();

    return result;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { url } = req.query; // pass the page to create PDF from as param

    res.setHeader(
        'Content-Disposition',
        `attachment; filename="file.pdf"`
    );
    res.setHeader('Content-Type', 'application/pdf');

    const pdf = await saveAsPdf(url as string);

    return res.send(pdf);
};