const yaml = require('js-yaml')
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const tinyHTML = require('@sardine/eleventy-plugin-tinyhtml')

/**
 * @param {import("@11ty/eleventy").UserConfig} eleventyConfig
 * @returns {ReturnType<import("@11ty/eleventy/src/defaultConfig")>}
 */
module.exports = (eleventyConfig) => {
  eleventyConfig.addDataExtension('yaml', (contents) => yaml.load(contents))

  eleventyConfig.addPlugin(syntaxHighlight)
  eleventyConfig.addPlugin(tinyHTML)

  eleventyConfig.addPassthroughCopy('docs/css')

  eleventyConfig.addFilter('remod', (value, namespace) => ({
    ...value,
    name: `${namespace}.${value.name}`,
  }))

  return {
    passthroughFileCopy: true,
    dir: {
      input: 'docs',
      includes: '_includes',
      data: '_data',
    },
  }
}
