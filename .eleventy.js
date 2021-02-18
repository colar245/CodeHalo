module.exports = function (config) {

  config.addPassthroughCopy("src/assets");
  config.addPassthroughCopy("src/sitemap.xml");
  config.addPassthroughCopy("src/robots.txt");
  config.addPassthroughCopy("googled41287c90f49992b.html");
  return {
    dir: {
      input: "src",
      output: "dist",
    }
  };

};