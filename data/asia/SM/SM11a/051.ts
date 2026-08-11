import { Card } from "models/database/card";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エネルギーつけかえ",
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のポケモンについている基本エネルギーを1個、自分の別のポケモンにつけ替える。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556717,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "A",
	rarity: "Uncommon",
};

export default card;
