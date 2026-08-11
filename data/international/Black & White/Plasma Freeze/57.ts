import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Cofagrigus",
		'fr-fr': "Tutankafer",
		'es-es': "Cofagrigus",
		'it-it': "Cofagrigus",
		'pt-br': "Cofagrigus",
		'de-de': "Echnatoll"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		563,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Yamask",
		'fr-fr': "Tutafeh",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Elongating Arms",
				'fr-fr': "Bras à Rallonges",
			},
			effect: {
				'en-us': "This attack does 30 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 30 dégâts à 1 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Crazy Slap",
				'fr-fr': "Gifle Folle",
			},
			effect: {
				'en-us': "Flip 4 coins. This attack does 40 damage times the number of heads.",
				'fr-fr': "Lancez 4 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Grave robbers who mistake them for real coffins and get too close end up trapped inside their bodies.",
	},

	thirdParty: {
		cardmarket: 280934,
		tcgplayer: 84388
	}
}

export default card
