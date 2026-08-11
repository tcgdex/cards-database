import { Card } from "models/database/card";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マサキの解析",
	},

	illustrator: "Naoki Saito",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札を上から7枚見る。その中にあるトレーナーズを2枚まで、相手に見せてから、手札に加えてよい。残りのカードは山札にもどして切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558464,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "Rare",
};

export default card;
