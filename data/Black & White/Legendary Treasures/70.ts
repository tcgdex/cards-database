import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		de: "Mollimorba",
		en: "Gothita",
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		574,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Trip Over",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "It stares intently at everything. It can become so obsessed with watching that it doesn't notice attacks.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 281221,
				tcgplayer: 85850
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 281221,
				tcgplayer: 85850
			}
		},
	],
}

export default card
