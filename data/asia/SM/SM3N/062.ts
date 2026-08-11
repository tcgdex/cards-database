import { Card } from "models/database/card";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スーパーポケモン回収",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		'ja-jp': "コインを1回投げオモテなら、自分のポケモン1匹と、ついているすべてのカードを、手札にもどす。",
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
