const fs = require("fs");
const path = require('path');

const pkgPath = path.resolve(__dirname, '../package.json');
const savedPkgPath = path.resolve(__dirname, '../saved-package.json');

const savedPkg = require(savedPkgPath);

fs.writeFile(pkgPath, JSON.stringify(savedPkg, null, 2), function (err) {
    if (err) throw err;
});

fs.unlink(savedPkgPath, function (err) {
    if (err) throw err;
});