import { Card } from "models/database/card";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ブルーの探索",
	},

	illustrator: "Naoki Saito",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードは、自分の場に特性を持つポケモンがいるなら、使えない。自分の山札にあるトレーナ−ズを2枚まで、相手に見せてから、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 544406,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "None",
};

export default card;
