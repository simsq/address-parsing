const req = require("express/lib/request");
const res = require("express/lib/response");
//import addressParse from './service/address-parse'
const addressParse = require('./service/address-parse')


exports.parsing = (req, res) => {
    var address = req.query.address;
    const options = {
        type: 0, // 哪种方式解析，0：正则，1：树查找
        textFilter: [], // 预清洗的字段
        nameMaxLength: 4, // 查找最大的中文名字长度
        extraGovData: { city: [{ name: 'name', code: 'code', provinceCode: 'provinceCode' }], province: [{ name: 'name', code: 'code' }], area: [{ name: 'name', code: 'code', provinceCode: 'provinceCode', cityCode: 'cityCode' }] }
    }
    const parseResult = addressParse(address, options)
    res.send(parseResult);
}