module.exports = function (config) {

  config.addPassthroughCopy("src/assets");
  config.addPassthroughCopy("src/sitemap.xml");
  config.addPassthroughCopy("src/robots.txt");
  config.addPassthroughCopy("googled41287c90f49992b.html");
  config.addPassthroughCopy("_redirects");
  return {
    dir: {
      input: "src",
      output: "dist",
    }
  };

};