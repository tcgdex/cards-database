import { Card } from "models/database/card";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エネルギーつけかえ",
	},

	illustrator: "Ken Ikuji",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のポケモンについている基本エネルギーを1個、自分の別のポケモンにつけ替える。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559203,
			},
		},
	],

	trainerType: "Item",
	rarity: "Uncommon",
};

export default card;
