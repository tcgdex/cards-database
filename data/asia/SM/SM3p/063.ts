import { Card } from "models/database/card";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ダメージムーバー",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の場のポケモン1匹にのっているダメカンを3個、自分の別のポケモン1匹にのせ替える。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560221,
			},
		},
	],

	trainerType: "Item",
	rarity: "Uncommon",
};

export default card;
