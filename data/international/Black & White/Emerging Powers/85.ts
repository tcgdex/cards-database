import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Cinccino",
		'fr-fr': "Pashmilla",
		'es-es': "Cinccino",
		'it-it': "Cinccino",
		'pt-br': "Cinccino",
		'de-de': "Chillabell"
	},

	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		573,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Minccino",
		'fr-fr': "Chinchidou",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Captivate",
				'fr-fr': "Séduction",
			},
			effect: {
				'en-us': "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon.",
				'fr-fr': "Échangez le Pokémon Défenseur avec 1 des Pokémon de Banc de votre adversaire.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fluffy Tail",
				'fr-fr': "Queue Touffue",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
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

	description: {
		'en-us': "Their white fur feels amazing to touch. Their fur repels dust and prevents static electricity from building up.",
	},

	thirdParty: {
		cardmarket: 280050,
		tcgplayer: 84318
	}
}

export default card
