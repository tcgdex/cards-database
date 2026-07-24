import { Card } from "../../../interfaces";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		ja: "フェアリーチャーム 特性",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンは、相手の特性を持つ「ポケモンGX・EX」からワザのダメージを受けない。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558235,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "C",
	rarity: "Uncommon",
};

export default card;
