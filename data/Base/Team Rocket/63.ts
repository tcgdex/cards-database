import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Oddish",
		fr: "Mystherbe",
		de: "Myrapla"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		43,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Sleep Powder",
				fr: "Poudre dodo",
				de: "Sleep Powder"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "The Defending Pokémon is now Asleep."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Poisonpowder",
				fr: "Poudre toxik",
				de: "Poisonpowder"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "The Defending Pokémon is now Poisoned."
			}

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	description: {
		fr: "Il vagabonde la nuit en semant ses graines pour créer d'autres Mystherbes."
	},

	thirdParty: {
		cardmarket: 274116,
		tcgplayer: 87837
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		}
	]
}

export default card
