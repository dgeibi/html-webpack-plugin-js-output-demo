module.exports = templateParams => {
  return `var loadjs = '${templateParams.htmlWebpackPlugin.files.js[0]}';`;
};
