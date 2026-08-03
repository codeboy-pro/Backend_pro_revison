const ImageKit = require("@imagekit/nodejs");

const imagekitClient = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function uploadFileToImageKit(file) {
      console.log(file);
  const result = await imagekitClient.files.upload({
    file,
    fileName: "music_" + Date.now() + ".mp3",
    folder: "Part_4_Spotify_Backend/music",
  });

  return result;
}

module.exports = {
  uploadFileToImageKit,
};
