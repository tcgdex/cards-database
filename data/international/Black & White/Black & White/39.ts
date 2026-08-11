import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Alomomola",
		'fr-fr': "Mamanbo",
		'es-es': "Alomomola",
		'it-it': "Alomomola",
		'pt-br': "Alomomola",
		'de-de': "Mamolida"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		594,
	],

	hp: 100,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Water Pulse",
				'fr-fr': "Vibraqua",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hydro Pump",
				'fr-fr': "Hydrocanon",
			},
			effect: {
				'en-us': "Does 10 more damage for each Water Energy attached to this Pokémon.",
				'fr-fr': "Inflige 10 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Floating in the open sea is how they live. When they find a wounded Pokémon, they embrace it and bring it to shore.",
	},

	thirdParty: {
		cardmarket: 279776,
		tcgplayer: 83506
	}
}

export default card
