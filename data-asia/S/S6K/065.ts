import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "キクコ",
		'zh-tw': "菊子",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		ja: "自分のバトルポケモンにのっているダメカンを3個まで選び、相手のバトルポケモンにのせ替える。",
		'zh-tw': "選擇最多3個自己的戰鬥寶可夢身上放置的傷害指示物，改放於對手的戰鬥寶可夢身上。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560853,
				tcgplayer: 569293,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
