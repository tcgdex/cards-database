import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Pichu",
	},
	illustrator: "Kanako Eo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		172,
	],

	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Baby Evolution",
			},
			effect: {
				en: "Once during your turn (before your attack), you may put Pikachu from your hand onto Pichu (this counts as evolving Pichu) and remove all damage counters from Pichu.",
			},
		},
	],
	attacks: [
		{

			name: {
				en: "Baby Steps",
			},
			effect: {
				en: "Look at the top 5 cards of your deck, choose 1 of them, and put it into your hand. Shuffle the other cards back into your deck.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
