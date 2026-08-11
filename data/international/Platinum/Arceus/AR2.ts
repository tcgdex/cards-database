import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Arceus",
		'fr-fr': "Arceus",
		'de-de': "Arceus"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [493],

	hp: 90,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Leaf Refresh",
				'fr-fr': "Feuille revigorante",
				'de-de': "Blätterheilung"
			},
			effect: {
				'en-us': "Remove 3 damage counters from each of your Benched Pokémon.",
				'fr-fr': "Retirez 3 marqueurs de dégât à chacun des Pokémon de votre Banc.",
				'de-de': "Entferne 3 Schadensmarken von jedem Pokémon auf deiner Bank."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It is said to have emerged from an egg in a place where there was nothing, then shaped the world."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 278861,
				tcgplayer: 83593
			}
		}
	]
}

export default card
