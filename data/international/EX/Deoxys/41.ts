import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Minun",
		'fr-fr': "Negapi",
		'de-de': "Minun"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		312,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Sniff Out",
				'fr-fr': "Flairer",
				'de-de': "Sniff Out"
			},
			effect: {
				'en-us': "Put any 1 card from your discard pile into your hand.",
				'fr-fr': "Placez n'importe quelle carte de votre pile de défausse dans votre main.",
				'de-de': "Put any 1 card from your discard pile into your hand."
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Negative Spark",
				'fr-fr': "Étincelle négative",
				'de-de': "Negative Spark"
			},
			effect: {
				'en-us': "Does 20 damage to each of your opponent's Pokémon that has any Poké-Bodies. Don't apply Weakness and Resistance.",
				'fr-fr': "Inflige 20 dégâts à chacun des Pokémon de votre adversaire possédant des Poké-Bodies. Vous ne pouvez pas appliquer la Faiblesse et la Résistance.",
				'de-de': "Does 20 damage to each of your opponent's Pokémon that has any Poke-Bodies. Don't apply Weakness and Resistance."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87484,
				cardmarket: 276444
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 87484,
				cardmarket: 276444
			},
		},
	],

}

export default card
