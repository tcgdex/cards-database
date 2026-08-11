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
			type: "holo",
			thirdParty: {
				cardmarket: 877366,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "J",
	rarity: "Ultra Rare",
};

export default card;
