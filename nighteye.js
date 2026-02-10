/**
 * Night Eye Pro Unlock Script
 */

let body = $response.body;

if (body) {
    try {
        let obj = JSON.parse(body);
        
        // 核心修改逻辑
        obj.expiredDate = "13 Dec 2099";
        obj.isActive = true;
        obj.isProVersion = "t";
        obj.isLiteVersion = "f"; 
        
        console.log("✅ NightEye: 授权已修正至 2099 年");
        
        $done({ body: JSON.stringify(obj) });
    } catch (e) {
        console.log("❌ NightEye: JSON 解析失败 " + e);
        $done({});
    }
} else {
    $done({});
}