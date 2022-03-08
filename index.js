const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log('Server Works !!! At port 4000');
});

async function asyncCall(URL, res) {
    let info = await ytdl.getInfo(URL);
    console.log(info.videoDetails.title);

    res.header('Content-Disposition', `attachment; filename="${info.videoDetails.title}.mp3"`);
    ytdl(URL, {
        format: 'mp3'
    }).pipe(res);
};

app.get('/download', (req,res) => {
    var URL = req.query.URL;
    videoTitle = asyncCall(URL, res);

});