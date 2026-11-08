import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Magmar",
		'fr-fr': "Magmar",
		'es-es': "Magmar",
		'it-it': "Magmar",
		'pt-br': "Magmar",
		'de-de': "Magmar"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		126,
	],

	hp: 80,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'es-es': "Apisonar",
				'it-it': "Carica",
				'pt-br': "Aríete",
				'de-de': "Ramme"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Ember",
				'fr-fr': "Flammèche",
				'es-es': "Ascuas",
				'it-it': "Braciere",
				'pt-br': "Brasa",
				'de-de': "Glut"
			},
			effect: {
				'en-us': "Discard a Fire Energy attached to this Pokémon.",
				'fr-fr': "Défaussez une Énergie Fire attachée à ce Pokémon.",
				'es-es': "Descarta 1 Energía Fire unida a este Pokémon.",
				'it-it': "Scarta un'Energia Fire assegnata a questo Pokémon.",
				'pt-br': "Descarte uma Energia Fire ligada a este Pokémon.",
				'de-de': "Lege 1 an dieses Pokémon angelegte Fire-Energie auf deinen Ablagestapel."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Found near the mouth of a volcano. This fire-breather's body temperature is nearly 2,200 degrees Fahrenheit.",
	},

	thirdParty: {
		cardmarket: 281674,
		tcgplayer: 92179
	}
}

export default card
