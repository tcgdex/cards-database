import { Card } from "../../../interfaces";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		ja: "ブリザードタウン",
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		ja: "おたがいの場の残りHPが「40」以下のポケモンは、ワザが使えない。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557251,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "C",
	rarity: "Uncommon",
};

export default card;
