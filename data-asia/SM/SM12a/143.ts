import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "Uターンボード",
	},

	illustrator: "sadaji",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンは、にげるためのエネルギーが1個ぶん少なくなる。 このカードは、場からトラッシュされるとき、トラッシュせず、手札にもどす。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 544351,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "C",
	rarity: "None",
};

export default card;
