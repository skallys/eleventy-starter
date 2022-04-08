module.exports = function (eleventyConfig) {
  // You can return your Config object (optional).
  return {
    dir: {
      input: "src",
      output: "dist"
    },
    passthroughFileCopy: true
  };
};
