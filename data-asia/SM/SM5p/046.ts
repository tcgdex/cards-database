import { Card } from "../../../interfaces";
import Set from "../SM5p";

const card: Card = {
	set: Set,
	name: {
		ja: "マキシ",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の手札にある[水]エネルギーを2枚トラッシュしなければ使えない。自分の山札にある好きなカードを2枚まで、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559796,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "None",
};

export default card;
