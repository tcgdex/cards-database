import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		// Potion
		ja: "ポーション",
	},

	rarity: "Common",
	category: "Trainer",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575590
			},
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 577017
			},
		},
	],
};

export default card
