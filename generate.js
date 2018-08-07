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

// prettier-ignore
const printHelp = () => {
  console.log("Usage: node codes.js [options] <# of codes to generate>");
  console.log("");
  console.log("Options:");
  console.log("  -l, --length       character length of each code");
  console.log("  -p, --prefix       prefix each code with this string");
  console.log("  -a, --alphabet     list of characters to use (e.g. ABC123)");
  console.log("");
  console.log("Examples:");
  console.log("");
  console.log("  node codes.js 50000");
  console.log("    (50,000 codes, default length w/ no prefix)");
  console.log("");
  console.log("  node codes.js -l 8 -p AB -a 1234567890 300");
  console.log("    (300 codes, 8 characters each, numeric only with prefix 'AB')");
};

const argv = minimist(process.argv.slice(2), {
  default: {
    a: defaultAlphabet,
    p: "",
    l: 10,
    h: false
  },
  boolean: ["h", "help"],
  stopEarly: true
});

const showHelp = argv.help || argv.h;

if (showHelp) {
  printHelp();
} else {
  const alphabet = argv.alphabet || argv.a;
  const prefix = argv.prefix || argv.p;
  const length = argv.length || argv.l;

  let count = 0;
  if (argv._ && argv._.length) {
    count = argv._[0];
  }

  if (count > 0) {
    for (var i = 0; i < count; i++) {
      const code = generateCode(length, alphabet);
      console.log(prefix + code);
    }
  } else {
    console.log("Nothing to do. Try --help");
  }
}
