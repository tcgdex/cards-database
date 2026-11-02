import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "グラビティーマウンテン",
		'zh-tw': "引力山岳",
		'zh-cn': "引力山岳",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		ja: "おたがいの場の2進化ポケモン全員の最大HPは、それぞれ「-30」される。",
		'zh-tw': "雙方場上所有【2階進化】寶可夢的最大HP各「-30」。",
		'zh-cn': "雙方場上所有【2階進化】寶可夢的最大HP各「-30」。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 793540,
				tcgplayer: 587686,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "H",
	rarity: "Uncommon",
};

export default card;
