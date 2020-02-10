const express = require('express')

module.exports.app = ()=>{
    return express()
}
module.exports.port = ()=>{
    return "21006"
}
module.exports.express = ()=>{
    return express
}