import { Card } from "models/database/card";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヴェラ火山公園",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいのやけどのポケモンは、ポケモンチェックのときに投げるコインがオモテでも、やけどは回復しない。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559370,
			},
		},
	],

	trainerType: "Stadium",
	rarity: "Uncommon",
};

export default card;
