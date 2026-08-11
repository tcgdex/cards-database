import { Card } from "models/database/card";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ナタネ",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		'ja-jp': "[草]エネルギーがついている自分のポケモン1匹のHPを「80」回復する。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560014,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Uncommon",
};

export default card;
