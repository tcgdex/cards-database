import { Card } from "models/database/card";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "フルメタルラボ",
		'zh-tw': "全金屬實驗室",
		'th-th': "ฟูลเมทัลแล็บ",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいの[M]ポケモンが、相手のポケモンから受けるワザのダメージは「-30」される。",
		'zh-tw': "雙方的【鋼】寶可夢，受到對手的寶可夢招式的傷害「-30」點。",
		'th-th': "แดเมจของท่าต่อสู้ที่โปเกมอน[โลหะ]ของทั้งสองฝ่าย จะได้รับจากโปเกมอนฝ่ายตรงข้ามจะถูก [-30]",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752954,
				tcgplayer: 566221,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "H",
	rarity: "Uncommon",
};

export default card;
