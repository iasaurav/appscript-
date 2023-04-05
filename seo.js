/**
 * Simple Google Sheets SEO scraper to extract data from a URL.  
 *
 * @param {"https://keywordsinsheets.com"} url - input the target URL.
 * @param {false} allHeadings [OPTIONAL] Select whether you would like the first heading returned, or all headings returned in a comma-separated list. Default is set to false.   
 * @param {"body"} selector [OPTIONAL] Include a CSS selector to scrape custom content.
 * @customfunction
 */
function seoscraper(url, allHeadings, selector) {

    // Check if the URL is valid
    if (!url) {
        return "You need to enter a valid URL.";
    } else if (!url.includes("http")) {
        return "You need to include the URL protocol eg. HTTP or HTTPs.";
    }

    // Set the default values for allHeadings and header
    allHeadings = allHeadings || false;

    data = [];

    try {
        // Fetch the URL
        const fetch = UrlFetchApp.fetch(url, {
            muteHttpExceptions: true,
            followRedirects: false
        });
        
        // load URL into Cheerio
        const content = fetch.getContentText();
        const $ = Cheerio.load(content);

        // get all of the text in the body
        const body = $("body").text();

        // Function to format text
        const trimText = (text) => text.trim().toLowerCase();

        // get the response code
        const status = fetch.getResponseCode();

        // Get the page title
        const title = $("title").text().trim();

        // Get the meta description
        const description = $("meta[name='description']").attr("content");

        // Get the canonical URL
        const canonical = $("link[rel='canonical']").attr("href");

        // Get the meta robots
        const robots = $("meta[name='robots']").attr("content");

        // get the wordcount of a page
        const wordCount = body.trim().split(/\s+/).length;

        // Get the H1
        const h1 = trimText($("h1").first().text());

        // Get the H2
        const h2 = allHeadings ? $("h2").map((i, e) => trimText($(e).text())).get().toString() : trimText($("h2").first().text());

        // Get the H3
        const h3 = allHeadings ? $("h3").map((i, e) => trimText($(e).text())).get().toString() : trimText($("h3").first().text());

        // Get the content from selector
        const customContent = $(selector).text();

        // Push all of the data into the array if 200 response
        if (status === 200) {
            data.push([status, title, description, h1, h2, h3, robots, canonical, wordCount, customContent]);
        } else {
            data.push([status]);
        }

        return data;

    } catch (err) {
        return "Cannot scrape URL";
    }

}
