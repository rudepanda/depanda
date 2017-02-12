#!/usr/bin/env node

"use strict";

const path = require("path");

// const program = require("commander");
//
// program
//   .version(require("./package.json").version)
//   .parse(process.argv);
//

const json =require(path.join(process.cwd(), "depanda.json"));
console.log(require("./parse")(json, "debian"));

