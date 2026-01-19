module.exports = function(eleventyConfig) {
  // Copy static assets to output folder
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("css");

  // Watch for changes in these folders
  eleventyConfig.addWatchTarget("./css/");
  eleventyConfig.addWatchTarget("./images/");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};