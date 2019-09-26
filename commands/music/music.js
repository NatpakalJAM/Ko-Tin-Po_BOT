const botConfig = require('../../config/config.json');
const YouTube = require("discord-youtube-api");
const ytdl = require('ytdl-core');

const youtube = new YouTube(botConfig.YouTube_API);
const streamOptions = {
    seek: 0,
    volume: 1
};

module.exports = {
    musicCom: function (message) {
        var voice_channel = message.member.voiceChannel;
        if (!voice_channel) {
            return message.reply("ก่อนอื่นต้อง! joinห้องก่อนสิ");
        }

        youtubeSearch(message.content.replace('k play ', '')).then(function (url) {
            voice_channel.join().then(connection => {
                const stream = ytdl(url, {
                    filter: 'audioonly'
                });
                const dispatcher = connection.playStream(stream, streamOptions)
                    .on("end", () => {
                        // console.log("Music Ended")
                        voice_channel.leave();
                    })
                    .on("error", error => {
                        console.error(error);
                    });
            });
        });
    }
}

async function youtubeSearch(messageRecsive) {
    var video;
    // var messageRecsive = message.content.replace('music ', '');
    if (messageRecsive.match(/^http/)) {
        video = await youtube.getVideo(messageRecsive).catch(e => {
            console.log(e)
            throw e
        });
    } else {
        video = await youtube.searchVideos(messageRecsive).catch(e => {
            console.log(e)
            throw e
        });
    }
    var returnURL = video.url;
    return returnURL;
}