import taipei_img from '../assets/imgs/city/Taipei.png';
import newtaipei_img from '../assets/imgs/city/New_Taipei.png';
import taoyuan_img from '../assets/imgs/city/Taoyuan.png';
import hsinchu_img from '../assets/imgs/city/Hsinchu.png';
import taichung_img from '../assets/imgs/city/Taichung.png';
import nantou_img from '../assets/imgs/city/Nantou.png';
import chiayi_img from '../assets/imgs/city/Chiayi.png';
import tainan_img from '../assets/imgs/city/Tainan.png';
import kaohsiung_img from '../assets/imgs/city/Kaohsiung.png';
import pingtung_img from '../assets/imgs/city/Pingtung.png';
import yilan_img from '../assets/imgs/city/Yilan.png';
import hualien_img from '../assets/imgs/city/Hualien.png';
import daito_img from '../assets/imgs/city/Daito.png';
import Kinmen_Matsu_img from '../assets/imgs/city/Kinmen_Matsu.png';

const city = {
    taipei: {
        cn: "臺北市",
        en: 'Taipei',
        img: taipei_img
    },
    newtaipei: {
        cn: "新北市",
        en: 'NewTaipei',
        img: newtaipei_img
    },
    taoyuan: {
        cn: "桃園市",
        en: 'Taoyuan',
        img: taoyuan_img
    },
    hsinchu: {
        cn: "新竹市",
        en: 'Hsinchu',
        img: hsinchu_img
    },
    taichung: {
        cn: "台中",
        en: 'Taichung',
        img: taichung_img
    },
    nantou: {
        cn: "南投",
        en: 'NantouCounty',
        img: nantou_img
    },
    chiayi: {
        cn: "嘉義",
        en: 'ChiayiCounty',
        img: chiayi_img
    },
    tainan: {
        cn: "台南",
        en: 'Tainan',
        img: tainan_img
    },
    kaohsiung: {
        cn: "高雄",
        en: 'Kaohsiung',
        img: kaohsiung_img
    },
    pingtung: {
        cn: "屏東",
        en: 'PingtungCounty',
        img: pingtung_img
    },
    yilan: {
        cn: "宜蘭",
        en: 'YilanCounty',
        img: yilan_img
    },
    hualien: {
        cn: "花蓮",
        en: 'HualienCounty',
        img: hualien_img
    },
    daito: {
        cn: "台東",
        en: 'TaitungCounty',
        img: daito_img
    },
    kinmen_matsu: {
        cn: "金門馬祖.澎湖",
        en: 'KinmenCounty',
        img: Kinmen_Matsu_img
    },
};

const cityArray = Object.keys(city);
export { city, cityArray }