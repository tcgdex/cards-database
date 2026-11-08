import { Card } from "models/database/card";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マチエール",
	},

	illustrator: "Akira Komayama",
	category: "Trainer",

	effect: {
		'ja-jp': "相手の手札を見て、その中にあるポケモンの枚数ぶん、自分の山札を引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 876977,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "J",
	rarity: "Uncommon",
};

export default card;
