import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Basculin",
		'fr-fr': "Bargantua",
		'es-es': "Basculin",
		'it-it': "Basculin",
		'pt-br': "Basculin",
		'de-de': "Barschuft"
	},

	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		550,
	],

	hp: 80,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Splatter",
				'fr-fr': "Crépitement",
			},
			effect: {
				'en-us': "Does 30 damage to one of your oppoent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 30 dégâts à 1 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Red and blue Basculin usually do not get along, but sometimes members of one school mingle with the other's school.",
	},

	thirdParty: {
		cardmarket: 279989,
		tcgplayer: 83732
	}
}

export default card
