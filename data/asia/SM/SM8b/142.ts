import { Card } from "models/database/card";
import Set from "../SM8b";

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
				cardmarket: 551206,
			},
		},
	],

	trainerType: "Stadium",
	rarity: "None",
};

export default card;
