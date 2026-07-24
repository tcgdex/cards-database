import { Card } from "../../../interfaces";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		ja: "スーパーポケモン回収",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		ja: "コインを1回投げオモテなら、自分のポケモン1匹と、ついているすべてのカードを、手札にもどす。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561062,
			},
		},
	],

	trainerType: "Item",
	rarity: "Secret Rare",
};

export default card;
