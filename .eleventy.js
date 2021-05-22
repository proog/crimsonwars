module.exports = function (eleventyConfig) {
  const { Liquid } = require("liquidjs");
  const engine = new Liquid({
    extname: ".html",
    dynamicPartials: true,
    strict_filters: true,
    root: ["_includes"],
  });

  eleventyConfig.setLibrary("liquid", engine);
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("favicon.ico");
};
