/**
 * Night Eye Pro Unlock Script
 */

let body = $response.body;

if (body) {
    try {
        let obj = JSON.parse(body);
        
        // 核心修改逻辑
        obj.data.expiredDate = "13 Dec 2099";
        obj.data.isActive = true;
        obj.data.isProVersion = "t";
        obj.data.isLiteVersion = "f"; 
        
        console.log("✅ NightEye: 授权已修正至 2099 年");
        
        $done({ body: JSON.stringify(obj) });
    } catch (e) {
        console.log("❌ NightEye: JSON 解析失败 " + e);
        $done({});
    }
} else {
    $done({});
}
