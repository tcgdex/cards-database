import { Card } from "../../../interfaces";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		ja: "隠密フード",
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンは、相手のポケモンから特性の効果を受けない。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558233,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "C",
	rarity: "Uncommon",
};

export default card;
