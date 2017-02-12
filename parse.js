module.exports = function parseDependencies (json, ntarget) {
  let deps = [];
  console.log(json);
  json.forEach(function (rule) {
    console.log(rule.target);
    if (rule.target.indexOf(ntarget) > -1) {
      console.log('yes');
      deps = deps.concat(rule.packages);
    }
  });
  return deps;
};
