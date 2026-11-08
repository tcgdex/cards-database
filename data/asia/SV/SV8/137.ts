import { Card } from "models/database/card";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "夜のタンカ",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のトラッシュからポケモンまたは基本エネルギーを1枚選び、相手に見せて、手札に加える。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 793604,
				tcgplayer: 587702,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "H",
	rarity: "Mega Hyper Rare",
};

export default card;
