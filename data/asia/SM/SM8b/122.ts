import { Card } from "../../../interfaces";
import Set from "../SM8b";

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
				cardmarket: 551106,
			},
		},
	],

	trainerType: "Tool",
	rarity: "None",
};

export default card;
