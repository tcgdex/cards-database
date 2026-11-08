import { Card } from 'models/database/card'
import Set from '../Champion\'s Path'

const card: Card = {
	dexId: [23],

	name: {
		'en-us': "Ekans",
		'fr-fr': "Abo",
		'es-es': "Ekans",
		'it-it': "Ekans",
		'pt-br': "Ekans",
		'de-de': "Rettan"
	},

	illustrator: "Uta",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Darkness",
	],

	attacks: [
		{
			cost: [
				"Colorless",
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
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Tail Snap",
				'fr-fr': "Coud' Queue Sec",
				'es-es': "Pinza Cola",
				'it-it': "Schioccacoda",
				'pt-br': "Surpresa de Cauda",
				'de-de': "Schweifhieb"
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

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		'en-us': "The eggs of bird Pokémon are its favorite food. It swallows eggs whole, so sometimes an egg gets stuck, and Ekans faints."
	},

	thirdParty: {
		cardmarket: 500020,
		tcgplayer: 223025
	}
}

export default card
