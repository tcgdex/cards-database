import { Card } from "../../../interfaces";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		ja: "スーパーポケモン回収",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "コインを1回投げオモテなら、自分のポケモン1匹と、ついているすべてのカードを、手札にもどす。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561048,
			},
		},
	],

	trainerType: "Item",
	rarity: "Uncommon",
};

export default card;
