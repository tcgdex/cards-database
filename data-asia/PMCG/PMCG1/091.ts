import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		// Clefairy Doll
		ja: "Clefairy Doll",
	},

	rarity: "Rare",
	category: "Trainer",
	dexId: [35],

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575618
			},
		},
		{
			type: "normal",
			subtype: "no-rarity",
			thirdParty: {
				tcgplayer: 577045
			},
		},
	],
};

export default card
