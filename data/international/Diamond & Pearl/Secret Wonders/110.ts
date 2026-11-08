import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Shuppet",
		'fr-fr': "Polichombr",
		'de-de': "Shuppet"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		353,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Gossip",
				'fr-fr': "Potin",
				'de-de': "Gemunkel"
			},
			effect: {
				'en-us': "Put 1 damage counter on 1 of your opponent's Pokémon.",
				'fr-fr': "Placez 1 marqueur de dégât sur 1 des Pokémon de votre adversaire.",
				'de-de': "Lege 1 Schadensmarke auf 1 Pokémon deines Gegners."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hang Down",
				'fr-fr': "Pendre",
				'de-de': "Herunterhängen"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It loves vengeful emotions and hangs in rows under the eaves of houses where vengeful people live.",
	},

	thirdParty: {
		cardmarket: 277863,
		tcgplayer: 89200
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
