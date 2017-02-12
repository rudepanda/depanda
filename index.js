#!/usr/bin/env node

"use strict";

const path = require("path");
const install = require("./install");
const parse = require("parse");

// const program = require("commander");
//
// program
//   .version(require("./package.json").version)
//   .parse(process.argv);
//

const json = require(path.join(process.cwd(), "depanda.json"));
const pkgs = parse(json, "debian");

install(pkgs, target);

