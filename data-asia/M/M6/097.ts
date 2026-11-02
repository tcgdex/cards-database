import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "ぼうけんのランタン",
	},

	illustrator: "inose yukie",
	category: "Trainer",

	effect: {
		ja: "自分の山札から「基本[R]エネルギー」と「基本[L]エネルギー」を1枚ずつ選び、相手に見せて、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 900130,
				tcgplayer: 709250,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "J",
	rarity: "Mega Hyper Rare",
};

export default card;
