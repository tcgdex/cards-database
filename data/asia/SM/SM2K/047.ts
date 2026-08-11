import { Card } from "models/database/card";
import Set from "../SM2K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エネくじ",
	},

	illustrator: "Yoshinobu Saito",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札を上から7枚見る。その中にあるエネルギーを1枚、相手に見せてから、手札に加えてよい。残りのカードは山札にもどして切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561513,
			},
		},
	],

	trainerType: "Item",
	rarity: "Uncommon",
};

export default card;
