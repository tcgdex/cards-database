import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Chansey",
		'fr-fr': "Leveinard",
		'de-de': "Chaneira"
	},

	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		113,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Hyper Healing",
				'fr-fr': "Hyper guérison",
				'de-de': "Hyper Healing"
			},
			effect: {
				'en-us': "Remove 1 damage counter and all Special Conditions from each of your Active Pokémon.",
				'fr-fr': "Retirez à chacun de vos Pokémon Actifs 1 marqueur de dégât et tous leurs États Spéciaux.",
				'de-de': "Remove 1 damage counter and all Special Conditions from each of your Active Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double Tackle",
				'fr-fr': "Double charge",
				'de-de': "Double Tackle"
			},
			effect: {
				'en-us': "Does 20 damage to each Defending Pokémon.",
				'fr-fr': "Inflige 20 dégâts à chaque Pokémon Défenseur.",
				'de-de': "Does 20 damage to each Defending Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84174,
				cardmarket: 276666
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 84174,
				cardmarket: 276666
			},
		}
	],
}

export default card
