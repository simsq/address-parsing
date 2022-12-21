# address-parsing
字符串地址解析成标准格式，可服务端部署，API接口调用。

# steps
npm install <br/>
node ./app.js

# Demo
request：<br/>
`http://127.0.0.1:8866/v1/address/parsing?address=上海市徐汇区古美路111号 小孙 159007007005 收 `<br/>
result:<br/>
`{
    "phone": "15900700700",
    "province": "上海市",
    "city": "上海市",
    "area": "徐汇区",
    "detail": "古美路111号",
    "name": "小孙",
    "postalCode": ""
}`
