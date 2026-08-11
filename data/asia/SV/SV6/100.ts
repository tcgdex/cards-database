import { Card } from "models/database/card";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ジャミングタワー",
		'zh-tw': "阻礙之塔",
		'th-th': "แจมมิงทาวเวอร์",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいのポケモン全員についている「ポケモンのどうぐ」の効果は、すべてなくなる。",
		'zh-tw': "雙方的所有寶可夢身上附加的「寶可夢道具」卡的效果全部消除。",
		'th-th': "เอฟเฟกต์ของ [ไอเท็มติดโปเกมอน] ที่ติดอยู่กับโปเกมอนของทั้งสองฝ่ายทุกตัว ทั้งหมดจะหายไป",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 767193,
				tcgplayer: 568090,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "H",
	rarity: "Uncommon",
};

export default card;
