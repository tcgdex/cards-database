import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Simisear",
		'fr-fr': "Flamoutan",
		'es-es': "Simisear",
		'it-it': "Simisear",
		'pt-br': "Simisear",
		'de-de': "Grillchita"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		514,
	],

	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Pansear",
		'fr-fr': "Flamajou",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Flame Burst",
				'fr-fr': "Rebondifeu",
			},
			effect: {
				'en-us': "Does 20 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 20 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
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
				'en-us': "Fury Swipes",
				'fr-fr': "Combo-Griffe",
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 40 damage times the number of heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It loves sweets because they become energy for the fire burning inside its body.",
	},

	thirdParty: {
		cardmarket: 279760,
		tcgplayer: 89225
	}
}

export default card
