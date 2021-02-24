import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Chingling",
	},
	illustrator: "Emi Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		433,
	],
	hp: 40,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Baby Evolution",
			},
			effect: {
				en: "Once during your turn (before your attack), you may put Chimecho from your hand onto Chingling (this counts as evolving Chingling) and remove all damage counters from Chingling.",
			},
		},
	],
	attacks: [
		{

			name: {
				en: "Inviting Bell",
			},
			effect: {
				en: "Search your deck for a Supporter card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],





}

export default card
