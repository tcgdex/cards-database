import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		// Switch
		ja: "スイッチ",
	},

	rarity: "Common",
	category: "Trainer",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575596
			},
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 577023
			},
		},
	],
};

export default card
