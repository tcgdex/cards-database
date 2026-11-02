import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Piplup",
		fr: "Tiplouf",
		de: "Plinfa"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		393,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	item: {
		name: {
			fr: "Baie Pecha",
			de: 'Pirsifbeere'

		},
		effect: {
			fr: "Si Tiplouf est Empoisonné, retirez-lui l'État Spécial Empoisonné à la fin du tour de chaque joueur.",
			de: 'Wenn Plinfa vergiftet ist, entferne am Ende jedes Zuges den Speziellen Zustand \'vergiftet\' von Plinfa.'
		}
	},

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Splatter",
				fr: "Crépitement",
				de: "Pirsifbeere"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 10 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				de: "Wenn Plinfa vergiftet ist, entferne am Ende jedes Zuges den Speziellen Zustand „vergiftet“ von Plinfa."
			},

		}
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278120,
		tcgplayer: 88146
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["countdown-calendar"]
		},
		{
			type: "normal",
			stamp: ["dylan-lefavour"]
		}
	]
}

export default card
