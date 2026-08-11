import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ポケモン回収サイクロン",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "自分の場のポケモンを1匹選び、そのポケモンと、ついているすべてのカードを、手札にもどす。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863966,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "H",
	rarity: "None",
};

export default card;
