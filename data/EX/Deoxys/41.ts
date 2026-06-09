import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Minun",
		fr: "Negapi",
		de: "Minun"
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
				en: "Sniff Out",
				fr: "Flairer",
				de: "Sniff Out"
			},
			effect: {
				en: "Put any 1 card from your discard pile into your hand.",
				fr: "Placez n'importe quelle carte de votre pile de défausse dans votre main.",
				de: "Put any 1 card from your discard pile into your hand."
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Negative Spark",
				fr: "Étincelle négative",
				de: "Negative Spark"
			},
			effect: {
				en: "Does 20 damage to each of your opponent's Pokémon that has any Poké-Bodies. Don't apply Weakness and Resistance.",
				fr: "Inflige 20 dégâts à chacun des Pokémon de votre adversaire possédant des Poké-Bodies. Vous ne pouvez pas appliquer la Faiblesse et la Résistance.",
				de: "Does 20 damage to each of your opponent's Pokémon that has any Poke-Bodies. Don't apply Weakness and Resistance."
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

	thirdParty: {
		tcgplayer: 87484,
		cardmarket: 276444
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
