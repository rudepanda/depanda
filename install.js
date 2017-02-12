const shellescape = require("shell-escape");
const child_process = require("child_process");

module.exports = function installDependencies(deps, target) {
  child_process.exec(shellescape(["sudo"].concat(require("./platforms.json")[target]).concat(deps)), function (error, stdout, stderr) {
    if (error) console.error("Error while installing: " + error);
    else console.log(stdout);
    console.log(stderr);
  });
};
