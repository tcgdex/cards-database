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
				de: "Schlafpuder"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das verteidigende Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Poisonpowder",
				fr: "Poudre toxik",
				de: "Giftpuder"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Das verteidigende Pokémon ist jetzt vergiftet."
			}

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "It wanders around at night sowing its seeds to create more Oddishes.",
		fr: "Il vagabonde la nuit en semant ses graines pour créer d'autres Mystherbes.",
		de: "Es wandert nachts umher und sät seinen Samen für mehr Myraplas."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274116,
				tcgplayer: 87837
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274116,
				tcgplayer: 87837
			}
		}
	]
}

export default card
