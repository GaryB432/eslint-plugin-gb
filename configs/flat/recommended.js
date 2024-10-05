const basePlugins = require("./base.js");

module.exports = basePlugins.map((p) => ({
  ...p,
  name: "gb/recommended/rules",
}));
