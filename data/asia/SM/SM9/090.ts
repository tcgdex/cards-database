import { Card } from "models/database/card";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シオンタウン",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいのプレイヤーは、自分の番ごとに1回、相手の手札を見てよい。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558465,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "C",
	rarity: "Uncommon",
};

export default card;
