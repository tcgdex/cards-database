import { Card } from "models/database/card";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スカル団のしたっぱ",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		'ja-jp': "相手の手札を見て、その中にあるエネルギーを、2枚トラッシュする。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561659,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Uncommon",
};

export default card;
