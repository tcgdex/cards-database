import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Smoochum",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		238,
	],
	hp: 30,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Psykiss",
			},
			effect: {
				en: "Flip a coin. If heads, choose a Special Energy card attached to 1 of your opponent's Pokémon. Your opponent shuffles that card into his or her deck.",
			},

		},
	],






}

export default card
