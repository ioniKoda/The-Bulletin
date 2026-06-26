// 1 = buttons, 2 = stamps, 3 = blinkies
const images = [
  { filename: '1080p.gif', section: '1' },
  { filename: 'acceptancenow.png', section: '1' },
  { filename: 'antinft.gif', section: '1' },
  { filename: 'archive.png', section: '1' },
  { filename: 'bantimetravel.png', section: '1' },
  { filename: 'bestvieweddesktop.gif', section: '1' },
  { filename: 'button_tibet.gif', section: '1' },
  { filename: 'chameleonbutton.gif', section: '1' },
  { filename: 'chill_pill.gif', section: '1' },
  { filename: 'css.png', section: '1' },
  { filename: 'fckfb.gif', section: '1' },
  { filename: 'fckgoogle.gif', section: '1' },
  { filename: 'fckingwww.gif', section: '1' },
  { filename: 'firefox4.gif', section: '1' },
  { filename: 'folder2.gif', section: '1' },
  { filename: 'gb.gif', section: '1' },
  { filename: 'google_stand.gif', section: '1' },
  { filename: 'got_html.gif', section: '1' },
  { filename: 'graphicdesign.png', section: '1' },
  { filename: 'hailsatan.gif', section: '1' },
  { filename: 'happyhalloween.gif', section: '1' },
  { filename: 'hash_now.gif', section: '1' },
  { filename: 'hatemac.jpg', section: '1' },
  { filename: 'hatems.jpg', section: '1' },
  { filename: 'hostedbyneocities.png', section: '1' },
  { filename: 'html_learn_it_today.gif', section: '1' },
  { filename: 'imissxp.gif', section: '1' },
  { filename: 'internetprivacy.gif', section: '1' },
  { filename: 'jojo.gif', section: '1' },
  { filename: 'julesneohome.gif', section: '1' },
  { filename: 'lain.gif', section: '1' },
  { filename: 'linux_mint.gif', section: '1' },
  { filename: 'linux_powered.gif', section: '1' },
  { filename: 'minecraft.png', section: '1' },
  { filename: 'mspaint.gif', section: '1' },
  { filename: 'neocitiesbutton1.gif', section: '1' },
  { filename: 'newbutton.gif', section: '1' },
  { filename: 'newlambda.gif', section: '1' },
  { filename: 'nocookie.gif', section: '1' },
  { filename: 'noodle.gif', section: '1' },
  { filename: 'parental.gif', section: '1' },
  { filename: 'pictochat.gif', section: '1' },
  { filename: 'piracy.gif ', section: '1' },
  { filename: 'planetb.gif', section: '1' },
  { filename: 'pokemon.gif', section: '1' },
  { filename: 'pothead.gif', section: '1' },
  { filename: 'powernavibadge.jpg', section: '1' },
  { filename: 'right2repair.png', section: '1' },
  { filename: 'roly-saynotoweb3.gif', section: '1' },
  { filename: 'saulgoodman.gif', section: '1' },
  { filename: 'stardew_valley.gif', section: '1' },
  { filename: 'steam.gif', section: '1' },
  { filename: 'sucks.gif', section: '1' },
  { filename: 'tf.gif', section: '1' },
  { filename: 'the_void.gif', section: '1' },
  { filename: 'thirdimpact.png', section: '1' },
  { filename: 'trn.png', section: '1' },
  { filename: 'tumblrapocolypse.png', section: '1' },
  { filename: 'ubuntu.png', section: '1' },
  { filename: 'vscbutton.gif', section: '1' },
  { filename: 'www.gif', section: '1' },
  { filename: 'believe.png', section: '1' },
  { filename: 'cheezit.gif', section: '1' },
  { filename: 'handcoded.gif', section: '1' },
  { filename: 'keyboard.png', section: '1' },
  { filename: 'mailput.gif', section: '1' },
  { filename: 'mousewheel.gif', section: '1' },
  { filename: 'neocities.png', section: '1' },
  { filename: 'nofuckingthanks.gif', section: '1' },
  { filename: 'playstation.gif', section: '1' },
  { filename: 'pureevil.gif', section: '1' },
  { filename: 'rave.gif', section: '1' },
  { filename: 'caffeine.gif', section: '1' },
  { filename: 'queercoded.png', section: '1' },
  { filename: '3ds.png', section: '1' },
  { filename: 'alien.gif', section: '1' },
  { filename: 'badapple.gif', section: '1' },
  { filename: 'bigfloppa.gif', section: '1' },
  { filename: 'bingus.gif', section: '1' },
  { filename: 'buttonfirealpacagf.png', section: '1' },
  { filename: 'capybaraNOW.png', section: '1' },
  { filename: 'catscapemeow.gif', section: '1' },
  { filename: 'changeyourgendertoday.gif', section: '1' },
  { filename: 'deletetiktok.jpg', section: '1' },
  { filename: 'deletetwitter.jpg', section: '1' },
  { filename: 'dontfeedai.gif', section: '1' },
  { filename: 'dreamcast.gif', section: '1' },
  { filename: 'eatglue.jpg', section: '1' },
  { filename: 'free_palestine.gif', section: '1' },
  { filename: 'gameboy.png', section: '1' },
  { filename: 'gbanowww.png', section: '1' },
  { filename: 'github.png', section: '1' },
  { filename: 'kittyrun.gif', section: '1' },
  { filename: 'kriswheretfarewe.png', section: '1' },
  { filename: 'legostarwars.png', section: '1' },
  { filename: 'likecomputer.jpg', section: '1' },
  { filename: 'ms.webp', section: '1' },
  { filename: 'n64.png', section: '1' },
  { filename: 'notfriendlytomobile.gif', section: '1' },
  { filename: 'possumsnow.png', section: '1' },
  { filename: 'poweredbyautism.png', section: '1' },
  { filename: 'prideflag.png', section: '1' },
  { filename: 'sburb.gif', section: '1' },
  { filename: 'sega.gif', section: '1' },
  { filename: 'supermonkeyball.png', section: '1' },
  { filename: 'thismachine.png', section: '1' },
  { filename: 'toebeansNOW.gif', section: '1' },
  { filename: 'torrents.gif', section: '1' },
  { filename: 'transgender.png', section: '1' },
  { filename: 'turntable.gif', section: '1' },
  { filename: 'vhs.webp', section: '1' },
  { filename: 'w0rm-party.gif', section: '1' },
  { filename: 'webdesign.png', section: '1' },
  { filename: 'wii.png', section: '1' },
  { filename: 'xbox.jpg', section: '1' },
  { filename: 'yippee.gif', section: '1' },
  { filename: 'youwerediagnosedwithgay.gif', section: '1' },
  { filename: '2020SUCKS.png', section: '1' },
  { filename: 'antinazi.gif', section: '1' },
  { filename: 'blm.png', section: '1' },
  { filename: 'brat.png', section: '1' },
  { filename: 'brat.jpg', section: '1' },
  { filename: 'glados.gif', section: '1' },
  { filename: 'ice.gif', section: '1' },
  { filename: 'lgbtq-bi.png', section: '1' },
  { filename: 'tv.gif', section: '1' },
  { filename: 'misc-cdda.png', section: '1' },
  { filename: 'paywalls.gif', section: '1' },
  { filename: 'rushedsite.png', section: '1' },
  { filename: 'ukraine.gif', section: '1' },
  { filename: 'w33d.gif', section: '1' },
  { filename: 'windows.gif', section: '1' },
  { filename: 'bringbacktechliteracy.gif', section: '1' },
  { filename: 'cistem.jpg', section: '1' },
  { filename: 'computer.gif', section: '1' },
  { filename: 'ena.png', section: '1' },
  { filename: 'fish.webp', section: '1' },
  { filename: 'mariokart.png', section: '1' },
  { filename: 'nokia.gif', section: '1' },
  { filename: 'splatoon.jpg', section: '1' },
  { filename: 'terriblegod.jpg', section: '1' },
  { filename: 'patd.gif', section: '1' },
  { filename: '164.gif', section: '2' },

  //{ filename: '', section: '' },
];

function displayImages() {
  const sections = {};

  document.querySelectorAll('.gallery-section').forEach(section => {
    const sectionId = section.id;
    sections[sectionId] = section.querySelector('.gallery');
  });

  Object.values(sections).forEach(gallery => gallery.innerHTML = '');

  images.forEach(image => {
    const img = document.createElement('img');
    img.src = `../assets/webgraphics/${image.filename}`;
    img.alt = image.filename;

    console.log(img.src);

    switch(image.section) {
      case "1":
        img.style.width = '88px';
        img.style.height = '31px';
        break;
      case "2":
        img.style.width = '99px';
        img.style.height = '56px';
        break;
      case "3":
        img.style.width = '1px';
        img.style.height = '1px';
        break;
      default: 
        break;
    }

    if (sections[image.section]) {
      sections[image.section].appendChild(img);
    }
  });
}

document.addEventListener('DOMContentLoaded', displayImages);