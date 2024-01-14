const tybaltPlugin = require('@tybalt/eleventy-plugin');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./css');
    eleventyConfig.addPlugin(tybaltPlugin, {
        components: ['./components'],
    });

    return {
        passthroughFileCopy: true,
    };
};