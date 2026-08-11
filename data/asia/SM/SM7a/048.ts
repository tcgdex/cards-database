import { Card } from "../../../interfaces";
import Set from "../SM7a";

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
				cardmarket: 558936,
			},
		},
	],

	trainerType: "Item",
	rarity: "Uncommon",
};

export default card;
