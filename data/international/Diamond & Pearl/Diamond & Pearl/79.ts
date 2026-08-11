import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Combee",
		'fr-fr': "Apitrini",
		'de-de': "Wadribie"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		415,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Soliciting Nectar",
				'fr-fr': "Nectar alléchant",
				'de-de': "Anlockender Nektar"
			},
			effect: {
				'en-us': "Switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. The new Defending Pokémon is now Asleep.",
				'fr-fr': "Échangez 1 des Pokémon de Banc de votre adversaire avec 1 des Pokémon Défenseurs. Le nouveau Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Tausche 1 Verteidigendes Pokémon gegen 1 Pokémon auf der Bank deines Gegners aus. Das neue Verteidigende Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gust",
				'fr-fr': "Tornade",
				'de-de': "Windstoß"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "A Pokémon formed by three others. It busily carries sweet floral honey to VESPIQUEN.",
		'fr-fr': "Un Pokémon qui en regroupe trois autres. Il est toujours occupé à apporter du nectar à Apireine."
	},

	thirdParty: {
		cardmarket: 277578,
		tcgplayer: 84392
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
