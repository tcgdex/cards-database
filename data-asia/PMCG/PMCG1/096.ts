import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		// Double Colorless Energy
		ja: "ダブル無色エネルギー",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Energy",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 577166
			},
		},
		{
			type: "normal",
			subtype: "no-rarity",
			thirdParty: {
				tcgplayer: 674838
			},
		},
	],
};

export default card
