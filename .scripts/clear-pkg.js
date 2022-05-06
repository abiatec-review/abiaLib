const fs = require("fs");
const path = require('path');

const pkgPath = path.resolve(__dirname, '../package.json');
const savedPkgPath = path.resolve(__dirname, '../saved-package.json');

const pkg = require(pkgPath);

fs.writeFile(savedPkgPath, JSON.stringify(pkg, null, 2), function (err) {
    if (err) throw err;
});

[
    "scripts",
    "devDependencies",
].forEach((el) => {
    delete pkg[el]
});

pkg.version = [pkg.version.slice(0, -1), (pkg.version.slice(-1) * 1 + 1)].join("")

fs.writeFile(pkgPath, JSON.stringify(pkg, null, 2), function (err) {
    if (err) throw err;
});