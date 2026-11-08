import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Mewtwo ex",
		'fr-fr': "Mewtwo ex",
		'de-de': "Mewtu ex"
	},

	illustrator: "Katsura Tabata",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [150],

	hp: 100,

	stage: "Basic",
	types: [
		"Psychic"
	],

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Energy Absorption",
				'fr-fr': "Absorption d'énergie",
				'de-de': "Energieaufnahme"
			},
			effect: {
				'en-us': "Attach up to 2 Energy cards from your discard pile to Mewtwo ex.",
				'fr-fr': "Vous pouvez attacher à Mewtwo Ex jusqu'à deux cartes Énergie de votre pile de défausse.",
				'de-de': "Wähle bis zu 2 Energiekarten aus deinem Ablagestapel und lege sie an Mewtu ex an."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Psyburn",
				'fr-fr': "Brûlure psy",
				'de-de': "Psychoverbrennung"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 3,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87428,
				cardmarket: 275749
			}
		}
	]
}

export default card
