import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Weavile",
		'fr-fr': "Dimoret",
		'es-es': "Weavile",
		'it-it': "Weavile",
		'pt-br': "Weavile",
		'de-de': "Snibunna"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		461,
	],

	hp: 90,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Sneasel",
		'fr-fr': "Farfuret",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Hail",
				'fr-fr': "Grêle",
			},
			effect: {
				'en-us': "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Vilify",
				'fr-fr': "Calomnie",
			},
			effect: {
				'en-us': "Discard as many Pokémon as you like from your hand. This attack does 30 damage times the number of Pokémon you discarded.",
				'fr-fr': "Défaussez autant de Pokémon que vous voulez de votre main. Cette attaque inflige 30 dégâts multipliés par le nombre de Pokémon que vous avez défaussés.",
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

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They communicate by clawing signs in boulders and work together to surround enemies.",
	},

	thirdParty: {
		cardmarket: 280944,
		tcgplayer: 90535
	}
}

export default card
