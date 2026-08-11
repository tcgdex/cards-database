import { Card } from "models/database/card";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "学習装置",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のバトルポケモンが、相手のポケモンからワザのダメージを受けてきぜつするたび、そのポケモンについている基本エネルギーを1枚選び、このカードをつけているポケモンにつけ替えてよい。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 538653,
				tcgplayer: 569039,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "E",
	rarity: "Secret Rare",
};

export default card;
