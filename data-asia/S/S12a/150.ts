import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "カミツレのきらめき",
		'zh-tw': "小菊兒的璀璨",
		th: "ประกายแสงของคามิสึเระ",
	},

	illustrator: "Yusuke Ohmura",
	category: "Trainer",

	effect: {
		ja: "自分の「フュージョン」のポケモンを2匹まで選び、山札から「フュージョンエネルギー」を1枚ずつつける。そして山札を切る。",
		'zh-tw': "選擇最多2隻自己的「匯流」寶可夢，從牌庫附給那些寶可夢各1張「匯流能量」卡。並且重洗牌庫。",
		th: "เลือกโปเกมอน ฝ่ายเราได้สูงสุด 2 ตัว นำการ์ด [พลังงานจู่โจมแบบฟิวชัน] จากสำรับการ์ดมาติดตัวละ 1 ใบ แล้วสับสำรับการ์ด",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687712,
				tcgplayer: 571688,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577506,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "None",
};

export default card;
