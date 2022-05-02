import jsSHA from "jssha";
export const getAuthorizationHeader = () => {
    const AppID = '2d020623eabe42b88e9f5cd3a49e8553';
    const AppKey = 'jWxxymWNvQKDdVyM9UCvEDdG9fA';
    const GMTString = new Date().toGMTString();
    const ShaObj = new jsSHA('SHA-1', 'TEXT');
    ShaObj.setHMACKey(AppKey, 'TEXT');
    ShaObj.update('x-date: ' + GMTString);
    const HMAC = ShaObj.getHMAC('B64');
    const Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';
    return { 'Authorization': Authorization, 'X-Date': GMTString };
}