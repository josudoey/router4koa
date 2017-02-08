var instance = null;
module.exports = function (opts) {
  if (!instance) {
    instance = new require("koa-router")(opts);
  }
  return instance;
}

