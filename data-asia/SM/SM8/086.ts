import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "フェアリーチャーム草",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "このカードがついているポケモンは、相手のタイプの「ポケモンGX・EX」からワザのダメージを受けない。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558725,
			},
		},
	],

	trainerType: "Tool",
	rarity: "Uncommon",
};

export default card;
