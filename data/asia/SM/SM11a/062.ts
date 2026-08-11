import { Card } from "models/database/card";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エスケープボード",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけているポケモンは、にげるためのエネルギーが1個ぶん少なくなり、ねむりまたはマヒでも、にげられる。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 556744,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "B",
	rarity: "Rare Holo",
};

export default card;
