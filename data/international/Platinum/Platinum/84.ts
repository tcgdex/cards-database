import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Nosepass",
		'fr-fr': "Tarinor",
		'de-de': "Nasgnet"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [299],

	hp: 60,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Pull",
				'fr-fr': "Tirer",
				'de-de': "Pull"
			},
			effect: {
				'en-us': "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon.",
				'fr-fr': "Échangez le Pokémon Défenseur avec 1 des Pokémon de Banc de votre adversaire.",
				'de-de': "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Rollout",
				'fr-fr': "Roulade",
				'de-de': "Rollout"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When endangered, it may protect itself by raising its magnetism and drawing iron objects to its body."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 87802,
				cardmarket: 278505
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278505,
				tcgplayer: 87802
			}
		}
	],

}

export default card
