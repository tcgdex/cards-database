import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Chansey",
		fr: "Leveinard",
		de: "Chaneira"
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
				en: "Hyper Healing",
				fr: "Hyper guérison",
				de: "Hyper Healing"
			},
			effect: {
				en: "Remove 1 damage counter and all Special Conditions from each of your Active Pokémon.",
				fr: "Retirez à chacun de vos Pokémon Actifs 1 marqueur de dégât et tous leurs États Spéciaux.",
				de: "Remove 1 damage counter and all Special Conditions from each of your Active Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Tackle",
				fr: "Double charge",
				de: "Double Tackle"
			},
			effect: {
				en: "Does 20 damage to each Defending Pokémon.",
				fr: "Inflige 20 dégâts à chaque Pokémon Défenseur.",
				de: "Does 20 damage to each Defending Pokémon."
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

	thirdParty: {
		cardmarket: 276666,
		tcgplayer: 84174
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
