//require Other js file
// const random = require('../../common/random.js');
// const tenor = require('../../common/tenor_api.js');

//request JSON form URL
// const request = require("request");
// const axios = require("axios");

// var messageRecsive;

module.exports = {
    resMsg: function (message) {
        var messageRecsive = message.content;
        var messageReply = '';

        if (messageRecsive.match(/ให้ข้าดูซิ$/)) {
            messageReply = 'ข้าบอกแล้วไง ว่าข้าทำไม่เป็น~';
            message.reply(messageReply);
        } else if (messageRecsive.match(/ซักทีเถอะน่า$/)) {
            messageReply = 'ก็ได้ๆๆ เซ้าซี้จัง!';
            message.reply(messageReply);
        } else if (messageRecsive.match(/^ได้เวลา$/)) {
            message.delete();
            messageReply = 'ได้เวลา ชงนมแล้ว!';
            message.channel.send('@everyone ' + messageReply);
        } else if (messageRecsive.match(/ฝนขิง/)) {
            messageReply = 'ครับ ฝนขิง';
            message.channel.send(messageReply);
        }

        // console message
        // if (message.author.bot == true) {
        //   console.log('Bot : ' + messageReply);
        // }
    }
}