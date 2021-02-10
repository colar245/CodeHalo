module.exports = function (config) {

  config.addPassthroughCopy("src/assets");
  config.addPassthroughCopy("src/sitemap.xml");
  config.addPassthroughCopy("src/robot.txt");
  return {
    dir: {
      input: "src",
      output: "dist",
    }
  };

};
