const { copyFileSync, mkdirSync, rmSync, readdirSync, statSync, existsSync } = require('fs');
const { join, relative } = require('path');

const root = process.cwd();
const outDir = join(root, 'out');

function copyDir(src, dest) {
  if (!existsSync(dest)) mkdirSync(dest, { recursive: true });
  for (const entry of readdirSync(src, { withFileTypes: true })) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else if (entry.isFile()) {
      copyFileSync(srcPath, destPath);
    }
  }
}

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

copyDir(join(root, '.next', 'server', 'pages'), outDir);
copyDir(join(root, '.next', 'static'), join(outDir, '_next', 'static'));
copyDir(join(root, 'public'), outDir);

console.log('Export complete:', relative(root, outDir));
