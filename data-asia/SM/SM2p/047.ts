import { Card } from "../../../interfaces";
import Set from "../SM2p";

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
				cardmarket: 561306,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "None",
};

export default card;
