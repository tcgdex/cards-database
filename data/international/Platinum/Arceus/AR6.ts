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

	hp: 70,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Lightning Turn",
				'fr-fr': "Tour éclair",
				'de-de': "Blitzartige Drehung"
			},
			effect: {
				'en-us': "Switch Arceus with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez Arceus avec 1 des Pokémon de votre Banc.",
				'de-de': "Tausche Arceus gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
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
				tcgplayer: 83597
			}
		}
	]
}

export default card
