import * as cheerio from "cheerio";
import axios from "axios";

async function fetchHTML(url) {
  const response = await axios.get(url);
  return response.data;
}

(async () => {
  const url = "http://localhost/desktop.html";

  try {
    const html = await fetchHTML(url);
    const $ = cheerio.load(html);

    console.log("total a.islib :->", $("a.islib").length);

    $("a.islib").trigger({
      // this is not a function.
      type: "mousedown",
      which: 3,
    });

    // Now you can use `$` to parse and manipulate the HTML content
    // For example:
    console.log($("a.islib")[0]);
  } catch (error) {
    console.error("Error:", error.message);
  }
})();
