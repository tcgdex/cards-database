import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		// Psychic Energy
		ja: "基本超エネルギー",
	},

	rarity: "Common",
	category: "Energy",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 577168
			},
		},
		{
			type: "normal",
			subtype: "no-rarity",
		}
	],
};

export default card
