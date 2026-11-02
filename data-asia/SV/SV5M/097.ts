import { Card } from "../../../interfaces";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		ja: "ベルのまごころ",
		'zh-tw': "白露的真心",
		th: "ความจริงใจของเบล",
	},

	illustrator: "Cona Nitanda",
	category: "Trainer",

	effect: {
		ja: "残りHPが「30」以下の自分のポケモン1匹のHPを、すべて回復する。",
		'zh-tw': "將自己的1隻剩餘HP為「30」以下的寶可夢的HP全部恢復。",
		th: "ฟื้นฟู HP ทั้งหมดของโปเกมอนฝ่ายเรา 1 ตัวที่มี HP เหลือน้อยกว่าหรือเท่ากับ [30]",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 752983,
				tcgplayer: 566248,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "Special illustration rare",
};

export default card;
