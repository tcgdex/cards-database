import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カキツバタ",
	},

	illustrator: "GIDORA",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札を上から7枚見て、その中からポケモンとトレーナーズを1枚ずつ選び、相手に見せて、手札に加える。残りのカードは山札にもどして切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864005,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "None",
};

export default card;
