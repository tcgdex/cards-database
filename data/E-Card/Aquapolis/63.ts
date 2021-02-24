import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Tyrogue",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		236,
	],
	hp: 30,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Energy Punch",
			},
			effect: {
				en: "Flip a coin. If heads, discard a Special Energy card attached to the Defending Pokémon. If tails, this attack does nothing.",
			},

		},
	],






}

export default card
