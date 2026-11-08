import { Card } from "models/database/card";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "レッドの挑戦",
	},

	illustrator: "Megumi Mizutani",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードは、自分の手札を2枚トラッシュしなければ使えない。自分の山札にある好きなカードを1枚、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 544431,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "None",
};

export default card;
