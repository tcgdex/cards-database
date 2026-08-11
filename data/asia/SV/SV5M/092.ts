import { Card } from "models/database/card";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ベルのまごころ",
		'zh-tw': "白露的真心",
		'th-th': "ความจริงใจของเบล",
	},

	illustrator: "En Morikura",
	category: "Trainer",

	effect: {
		'ja-jp': "残りHPが「30」以下の自分のポケモン1匹のHPを、すべて回復する。",
		'zh-tw': "將自己的1隻剩餘HP為「30」以下的寶可夢的HP全部恢復。",
		'th-th': "ฟื้นฟู HP ทั้งหมดของโปเกมอนฝ่ายเรา 1 ตัวที่มี HP เหลือน้อยกว่าหรือเท่ากับ [30]",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 752976,
				tcgplayer: 566243,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "Ultra Rare",
};

export default card;
