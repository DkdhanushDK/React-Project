import fs from 'fs';
import https from 'https';
import path from 'path';

const images = [
  "https://Appnstruct-prod.imgix.net/files/Appnstruct-holiday-bdc-sparkling-rose-carousel-01.png",
  "https://Appnstruct-prod.imgix.net/files/Appnstruct-skincare-futuredew-carousel-01.png",
  "https://Appnstruct-prod.imgix.net/files/Appnstruct-futuredew-solid-carousel-01.png",
  "https://Appnstruct-prod.imgix.net/files/Appnstruct-mjc-balm-carousel-01.png",
  "https://Appnstruct-prod.imgix.net/files/Appnstruct-skincare-super-pure-carousel-01.png",
  "https://Appnstruct-prod.imgix.net/files/Appnstruct-skincare-solution-carousel-01.png",
  "https://Appnstruct-prod.imgix.net/files/Appnstruct-bdc-wildfig-carousel-1.png",
  "https://Appnstruct-prod.imgix.net/products/Appnstruct-super-bounce-carousel-01_76a56806-4efa-4df0-9beb-2f030da73fa3.png",
  "https://Appnstruct-prod.imgix.net/files/Appnstruct-skincare-afterbaume-carousel-01.png",
  "https://Appnstruct-prod.imgix.net/files/Appnstruct-skincare-pmb-carousel-01.png"
];

const destFolder = path.join(process.cwd(), 'public', 'images');

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
};

(async () => {
  for (let i = 0; i < images.length; i++) {
    const p = images[i];
    const u = new URL(p);
    let originalName = path.basename(u.pathname);
    const dest = path.join(destFolder, `product_${i + 1}.png`);
    console.log(`Downloading ${p} to ${dest}...`);
    try {
      await download(p, dest);
    } catch (e) {
      console.log('Failed:', e);
    }
  }
  console.log("Done");
})();
