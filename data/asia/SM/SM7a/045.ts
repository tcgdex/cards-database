import { Card } from "models/database/card";
import Set from "../SM7a";

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
				cardmarket: 558933,
			},
		},
	],

	trainerType: "Item",
	rarity: "Uncommon",
};

export default card;
