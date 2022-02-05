import cheerio from "cheerio";
import fetch from "node-fetch";

export async function checkYoutube(type, id, response) {
  await fetch(`https://www.youtube.com/${type}/${id}/live`)
    .then((res) => {
      if (res.status >= 400) {
        throw new Error("Bad response from server");
      }
      return res.text();
    })
    .then((data) => {
      const $ = cheerio.load(data);
      const url = $("link[rel=canonical]").attr("href");
      let status = url.includes("watch") ? true : false;

      response.status(200).json({
        url: url,
        status: status,
      });
    })
    .catch((err) => {
      response.status(500).send(err);
    });
}
