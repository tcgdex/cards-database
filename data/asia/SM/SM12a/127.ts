import { Card } from "models/database/card";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "プレシャスボール",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札にある「ポケモンGX」を1枚、相手に見せてから、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 544271,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "C",
	rarity: "None",
};

export default card;
