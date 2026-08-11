import { Card } from "models/database/card";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "デンジ",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札にあるグッズと[雷]エネルギーを1枚ずつ、相手に見せてから、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 544401,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "B",
	rarity: "None",
};

export default card;
