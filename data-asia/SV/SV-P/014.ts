import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "クラッシュハンマー",
		'zh-tw': "寶可夢交替",
	},

	illustrator: "Ayaka Yoshida",
	category: "Trainer",

	effect: {
		ja: "コインを1回投げオモテなら、相手のポケモンについているエネルギーを1個選び、トラッシュする。",
		'zh-tw': "將自己的戰鬥寶可夢與備戰寶可夢互換。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 699711,
				tcgplayer: 587771,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "G",
	rarity: "Promo",
};

export default card;
