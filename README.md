# address-parsing
according to the address library infomation is parsed from the address string

# steps
npm install <br/>
node ./app.js

# Demo
request：
http://127.0.0.1:8866/v1/address/parsing?address=上海市徐汇区古美路111号 小孙 159007007005 收
result:
{
    "phone": "15900700700",
    "province": "上海市",
    "city": "上海市",
    "area": "徐汇区",
    "detail": "古美路111号",
    "name": "小孙",
    "postalCode": ""
}
