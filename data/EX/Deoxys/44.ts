import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Plusle",
		fr: "Posipi",
		de: "Plusle"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		311,
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
				en: "Call for Family",
				fr: "Appel à la famille",
				de: "Call for Family"
			},
			effect: {
				en: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck jusqu'à 2 Pokémon de base et placez-les sur votre Banc. Ensuite, mélangez votre deck.",
				de: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Positive Spark",
				fr: "Étincelle positive",
				de: "Positive Spark"
			},
			effect: {
				en: "Does 20 damage to each of your opponent's Pokémon that has any Poké-Powers. Don't apply Weakness and Resistance.",
				fr: "Inflige 20 dégâts à chacun des Pokémon de votre adversaire possédant des Poké-Powers. Vous ne pouvez pas appliquer la Faiblesse et la Résistance.",
				de: "Does 20 damage to each of your opponent's Pokémon that has any Poke-Powers. Don't apply Weakness and resistance."
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
		tcgplayer: 88164,
		cardmarket: 276447
	},

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["hiroki-yano"]
		},
	]
}

export default card
