import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Seismitoad",
		'fr-fr': "Crapustule",
		'es-es': "Seismitoad",
		'it-it': "Seismitoad",
		'pt-br': "Seismitoad",
		'de-de': "Branawarz"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		537,
	],

	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Palpitoad",
		'fr-fr': "Batracné",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Seismic Punch",
				'fr-fr': "Poing Sismique",
			},
			effect: {
				'en-us': "Does 30 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 30 dégâts à chaque Pokémon de Banc (les vôtres et ceux de votre adversaire). (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Splashing Turn",
				'fr-fr': "Tour Éclaboussant",
			},
			effect: {
				'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "By putting power into its bumps, it creates vibrations and increases the power of its punches.",
	},

	thirdParty: {
		cardmarket: 280904,
		tcgplayer: 89060
	}
}

export default card
