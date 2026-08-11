import { Card } from "models/database/card";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Uターンボード",
	},

	illustrator: "sadaji",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけているポケモンは、にげるためのエネルギーが1個ぶん少なくなる。 このカードは、場からトラッシュされるとき、トラッシュせず、手札にもどす。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557247,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "C",
	rarity: "Uncommon",
};

export default card;
