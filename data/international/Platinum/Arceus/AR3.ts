import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Arceus",
		'fr-fr': "Arceus",
		'de-de': "Arceus"
	},

	illustrator: "Wataru Kawahara",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [493],

	hp: 80,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bright Flame",
				'fr-fr': "Flamme éclatante",
				'de-de': "Helle Flamme"
			},
			effect: {
				'en-us': "Flip a coin. If tails, discard 2 Energy attached to Arceus.",
				'fr-fr': "Lancez une pièce. Si c'est pile, défaussez 2 Énergies attachées à Arceus.",
				'de-de': "Wirf 1 Münze. Bei \"Zahl\" entferne 2 Energien, die an Arceus angelegt sind, und lege sie auf deinen Ablagestapel."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It is described in mythology as the Pokémon that shaped the universe with its 1,000 arms."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 278861,
				tcgplayer: 83594
			}
		}
	]
}

export default card
