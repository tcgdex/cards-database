import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Gyarados ex",
		'fr-fr': "Léviator ex",
		'de-de': "Garados ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		130,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Magikarp",
		'fr-fr': "Magicarpe"
	},

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Twister",
				'fr-fr': "Ouragan",
				'de-de': "Twister"
			},
			effect: {
				'en-us': "Flip 2 coins. For each heads, choose 1 Energy attached to the Defending Pokémon, if any, and discard it. If both are tails, this attack does nothing.",
				'fr-fr': "Lancez 2 pièces. Pour chaque face, choisissez 1 Énergie attachée au Pokémon Défenseur et défaussez-la. Si vous obtenez 2 piles, cette attaque est sans effet.",
				'de-de': "Flip 2 coins. For each heads, choose 1 Energy attached to the Defending Pokémon, if any, and discard it. If both are tails, this attack does nothing."
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Rage",
				'fr-fr': "Draco-rage",
				'de-de': "Dragon Rage"
			},

			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 3,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 276285,
				tcgplayer: 86004
			},

		},
	]
}

export default card
