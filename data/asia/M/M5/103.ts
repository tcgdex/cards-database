import { Card } from "models/database/card";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エネルギーつけかえ",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の場のポケモンについている基本エネルギーを1個選び、自分の別のポケモンにつけ替える。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 888648,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "J",
	rarity: "Ultra Rare",
};

export default card;
