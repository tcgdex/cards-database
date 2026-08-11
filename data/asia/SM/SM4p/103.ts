import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "アセロラ",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		ja: "ダメカンがのっている自分のポケモン1匹と、ついているすべてのカードを、手札にもどす。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560136,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "None",
};

export default card;
