import { Card } from "../../../interfaces";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		ja: "エスケープボード",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンは、にげるためのエネルギーが1個ぶん少なくなり、ねむりまたはマヒでも、にげられる。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559890,
			},
		},
	],

	trainerType: "Tool",
	rarity: "Secret Rare",
};

export default card;
