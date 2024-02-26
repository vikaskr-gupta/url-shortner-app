const crypto = require('crypto');

class UrlShortner {
    static generateShortUrl(){
        return crypto.randomBytes(6).toString('hex');
    }
}

module.exports = UrlShortner;