const axios = require("axios");

module.exports = {
    random_gif: function (key, callback) {
        var query = key.replace(/ /g, "-");
        var url = 'https://api.tenor.com/v1/random?limit=1&q=' + query;
        axios.get(url)
            .then(function (response) {
                var img = response.data.results[0].itemurl
                if (img == null || img == '') {
                    img = response.data.results[0].url
                }
                callback(img)
            })
            .catch(function (error) {
                callback(null)
            });
    }
}