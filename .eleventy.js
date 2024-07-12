module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy({
    "node_modules/bootstrap/dist/css/bootstrap.min.css":
      "assets/css/bootstrap.min.css",
    "node_modules/bootstrap/dist/js/bootstrap.min.js":
      "assets/js/bootstrap.min.js",
    "node_modules/jquery/dist/jquery.slim.min.js":
      "assets/js/jquery.slim.min.js",
    "node_modules/popper.js/dist/umd/popper.min.js": "assets/js/popper.min.js",
  });
};
