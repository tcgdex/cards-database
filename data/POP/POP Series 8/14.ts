import { Card } from '../../../interfaces'
import Set from '../POP Series 8'

const card: Card = {
	name: {
		en: "Happiny",
	},
	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		440,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Baby Evolution",
			},
			effect: {
				en: "Once during your turn (before your attack), you may put Chansey from your hand onto Happiny (this counts as evolving Happiny) and remove all damage counters from Happiny.",
			},
		},
	],
	attacks: [
		{

			name: {
				en: "Lively",
			},
			effect: {
				en: "Remove 2 damage counters from 1 of your Pokémon.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],





}

export default card
