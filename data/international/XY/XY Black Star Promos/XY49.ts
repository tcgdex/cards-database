import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Regirock",
		'fr-fr': "Regirock",
	},

	illustrator: "Kouki Saitou",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		377,
	],

	hp: 110,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Land Maker",
				'fr-fr': "Fabric'Roc",
			},
			effect: {
				'en-us': "Put 2 Stadium cards from your discard pile into your hand.",
				'fr-fr': "Ajoutez 2 cartes Stade de votre pile de défausse à votre main.",
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Stone Edge",
				'fr-fr': "Lame de Roc",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 40 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires.",
			},
			damage: "80＋",

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
		'en-us': "The same rocks that form its body have been found in ground layers around the world.",
	},

	thirdParty: {
		cardmarket: 289712
	}
}

export default card
