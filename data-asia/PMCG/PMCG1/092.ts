import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		// Scoop Up
		ja: "すくい上げます",
	},

	rarity: "Rare",
	category: "Trainer",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575631
			},
		}
	],
};

export default card
