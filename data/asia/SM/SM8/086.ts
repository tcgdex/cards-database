import { Card } from "models/database/card";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "フェアリーチャーム草",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードがついているポケモンは、相手のタイプの「ポケモンGX・EX」からワザのダメージを受けない。",
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
