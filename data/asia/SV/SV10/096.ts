import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団の監視塔",
		'zh-tw': "火箭隊的監視塔",
		'zh-cn': "火箭隊的監視塔",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		ja: "おたがいの場の[C]ポケモン全員の特性は、すべてなくなる。",
		'zh-tw': "雙方場上所有【無】寶可夢的特性全部消除。",
		'zh-cn': "雙方場上所有【無】寶可夢的特性全部消除。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821928,
				tcgplayer: 628737,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "I",
	rarity: "Uncommon",
};

export default card;
