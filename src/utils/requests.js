const request = require('request')

const getPuzzle = (wordCount, callback) => {
    const url = `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`
    request({url, json: true}, (error, response) => {
        if (response.statusCode === 200) {
            callback(undefined, response.body)
        } else {
            callback('Unable to get Puzzle', undefined)
        }
    })
}

module.exports = getPuzzle
// export {getPuzzle as default}
/* semua ISI dari function async tidak mungkin promise walapun isi fungsi async tersebut  me return promise
* jadi hasi dari function async adalah promise,isi promise itu bukan promise yang lain walaupun mereturn promise
* */