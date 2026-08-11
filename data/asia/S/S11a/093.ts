import { Card } from "models/database/card";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エネルギーつけかえ",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のポケモンについている基本エネルギーを1個、自分の別のポケモンにつけ替える。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 673410,
				tcgplayer: 570856,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "F",
	rarity: "Mega Hyper Rare",
};

export default card;
