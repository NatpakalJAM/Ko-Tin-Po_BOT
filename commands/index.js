const music = require('./music/music.js');
const message = require('./message/message.js');

module.exports = {
    music: function (eventMessage) {
        music.musicCom(eventMessage);
    },
    message: function (eventMessage) {
        message.resMsg(eventMessage);
    }
}