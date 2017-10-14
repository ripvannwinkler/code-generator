const minimist = require("minimist");
const defaultAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const generateCode = (length, alphabet) => {
  let a = "";
  for (var i = 0; i < length; i++) {
    const rnd = Math.random() * 1000000;
    const pos = Math.floor(rnd % alphabet.length);
    a += alphabet[pos];
  }
  return a;
};

const printHelp = () => {
  console.log("Usage: node codes.js [options]");
  console.log("");
  console.log("Options:");
  console.log("  -c, --count        number of codes to generate");
  console.log("  -l, --length       character length of each code");
  console.log("  -p, --prefix       prefix each code with this");
  console.log("                     (total length = length - prefix)");
  console.log("  -a, --alphabet     list of characters/digits to use in codes");
  console.log("                     (e.g. -a ABCDEFG123");
  console.log("");
  console.log("Examples:");
  console.log("");
  console.log("  node codes.js -c 50000");
  console.log("    (50,000 codes, default length w/ no prefix)");
  console.log("");
  console.log("  node codes.js -l 8 -c 200 -p AB -a 1234567890");
  console.log("    (200 codes, 8 characters each, numeric only)");
};

const argv = minimist(process.argv.slice(2), {
  default: {
    c: 0,
    a: defaultAlphabet,
    p: "",
    l: 10,
    h: false
  },
  boolean: ["h", "help"]
});

const showHelp = argv.help || argv.h;

if (showHelp) {
  printHelp();
} else {
  const count = argv.count || argv.c;
  const alphabet = argv.alphabet || argv.a;
  const prefix = argv.prefix || argv.p;
  const length = argv.length || argv.l;

  if (count > 0) {
    for (var i = 0; i < count; i++) {
      const code = generateCode(length, alphabet);
      console.log(prefix + code);
    }
  } else {
    console.log("Nothing to do. Try --help");
  }
}
