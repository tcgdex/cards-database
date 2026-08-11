import { Card } from "models/database/card";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "活力の壺",
		'zh-tw': "活力之壺",
		'th-th': "ไหเปี่ยมพลัง",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のトラッシュから「いちげきエネルギー」を2枚まで選び、相手に見せて、山札にもどして切る。",
		'zh-tw': "從自己的棄牌區選擇最多2張「一擊能量」卡，在給對手看過後放回牌庫並重洗。",
		'th-th': "เลือกการ์ด [พลังงานจู่โจมครั้งเดียว] จากตำแหน่งทิ้งการ์ดฝ่ายเราได้สูงสุด 2 ใบ ให้ฝ่ายตรงข้ามดู ใส่กลับสำรับการ์ดแล้วสับ",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533532,
				tcgplayer: 569011,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
