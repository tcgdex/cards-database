import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Wurmple",
		fr: "Chenipotte",
		de: "Waumpel"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		265,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Ascension",
				fr: "Ascension",
				de: "Ascension"
			},
			effect: {
				en: "Search your deck for a card that evolves from Wurmple and put it on Wurmple. (This counts as evolving Wurmple.) Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck une carte qui évolue de Chenipotte et placez-la sur Chenipotte. (Vous faites ainsi évoluer Chenipotte.) Ensuite, mélangez votre deck.",
				de: "Search your deck for a card that evolves from Wurmple and out it on Wurmple. (This count as evolving Wurmple.) Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Miracle Essence",
				fr: "Solution miracle",
				de: "Miracle Essence"
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 Special Condition. Each Defending Pokémon is now affected by that Special Condition.",
				fr: "Lancez une pièce. Si c'est face, choisissez 1 État Spécial. Chaque Pokémon Défenseur est maintenant affecté par cet État Spécial.",
				de: "Flip a coin. If heads, choose 1 Special Condition. Each Defending Pokémon is now affected by that Special Condition."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		tcgplayer: 90649,
		cardmarket: 276485
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
