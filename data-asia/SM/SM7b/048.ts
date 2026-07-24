import { Card } from "../../../interfaces";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		ja: "マツバ",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		ja: "このカードは、前の相手の番に、自分の[超]ポケモンがきぜつしていなければ使えない。相手の手札を見て、その中にあるカードを2枚、相手の山札にもどして切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558873,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Uncommon",
};

export default card;
