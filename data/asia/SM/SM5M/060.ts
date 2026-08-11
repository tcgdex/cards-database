import { Card } from "../../../interfaces";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		ja: "エスケープボード",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンは、にげるためのエネルギーが1個ぶん少なくなり、ねむりまたはマヒでも、にげられる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559873,
			},
		},
	],

	trainerType: "Tool",
	rarity: "Uncommon",
};

export default card;
