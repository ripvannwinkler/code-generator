#!/usr/bin/env node
"use strict";

const minimist = require("minimist")
const defaultAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const generateCode = (length, alphabet) => {
    let a = "";
    for (var i=0; i<length; i++) {
        const rnd = Math.random()*1000000;
        const pos = Math.floor(rnd % alphabet.length);
        a += alphabet[pos];
    } return a;
}

const argv = minimist(process.argv.slice(2), {
	default: {
		c: 10, 
		a: defaultAlphabet,
		p: "",
		l: 10
	}
});

console.dir(argv);

const count = argv.count || argv.c;
const alphabet = argv.alphabet || argv.a;
const prefix = argv.prefix || argv.p;
const length = argv.length || argv.l;

console.log(count, alphabet, prefix, length);

for (var i = 0; i < count; i++) {
    const code = generateCode(length, alphabet);
    console.log(prefix + code);
}
