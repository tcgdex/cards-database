import { Card } from "../../../interfaces";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		ja: "スーパーポケモン回収",
	},

	illustrator: "Keiji Kinebuchi",
	category: "Trainer",

	effect: {
		ja: "コインを1回投げオモテなら、自分のポケモン1匹と、ついているすべてのカードを、手札にもどす。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559204,
			},
		},
	],

	trainerType: "Item",
	rarity: "Uncommon",
};

export default card;
