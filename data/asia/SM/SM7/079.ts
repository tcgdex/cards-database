import { Card } from "models/database/card";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ギリギリポーション",
	},

	illustrator: "Ayaka Yoshida",
	category: "Trainer",

	effect: {
		'ja-jp': "残りHPが「30」以下の自分のポケモン1匹のHPを「120」回復する。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559040,
			},
		},
	],

	trainerType: "Item",
	rarity: "Uncommon",
};

export default card;
