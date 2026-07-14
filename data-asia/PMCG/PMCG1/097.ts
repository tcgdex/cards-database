import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		// Grass Energy
		ja: "基本草エネルギー",
	},

	rarity: "Common",
	category: "Energy",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 577172
			},
		},
		{
			type: "normal",
			subtype: "no-rarity",
		}
	],
};

export default card
