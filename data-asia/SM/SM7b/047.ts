import { Card } from "../../../interfaces";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		ja: "フェアリーチャームドラゴン",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンは、相手のタイプの「ポケモンGX・EX」からワザのダメージを受けない。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558872,
			},
		},
	],

	trainerType: "Tool",
	rarity: "Uncommon",
};

export default card;
