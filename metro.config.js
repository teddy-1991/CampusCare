const { getDefaultConfig } = require("expo/metro-config");

module.exports = (async () => {
  const config = await getDefaultConfig(__dirname);

  // Add custom extensions if needed
  config.resolver.assetExts.push("scss", "sass", "css");
  config.resolver.sourceExts.push("scss", "sass", "css");

  return config;
})();
