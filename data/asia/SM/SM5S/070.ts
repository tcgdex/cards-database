import { Card } from "models/database/card";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ナタネ",
	},

	illustrator: "You Iribi",
	category: "Trainer",

	effect: {
		'ja-jp': "[草]エネルギーがついている自分のポケモン1匹のHPを「80」回復する。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560024,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Ultra Rare",
};

export default card;
