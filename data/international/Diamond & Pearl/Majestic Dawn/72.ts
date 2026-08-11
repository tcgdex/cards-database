import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Piplup",
		'fr-fr': "Tiplouf",
		'de-de': "Plinfa"
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
			'fr-fr': "Baie Pecha",
			'de-de': 'Pirsifbeere'

		},
		effect: {
			'fr-fr': "Si Tiplouf est Empoisonné, retirez-lui l'État Spécial Empoisonné à la fin du tour de chaque joueur.",
			'de-de': 'Wenn Plinfa vergiftet ist, entferne am Ende jedes Zuges den Speziellen Zustand \'vergiftet\' von Plinfa.'
		}
	},

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Splatter",
				'fr-fr': "Crépitement",
				'de-de': 'Verspritzer'
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 10 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				'de-de': 'Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 10 Schadenspunkte zu. Der Schaden dieses angriffs wird durch Schwäche und Resistenz des gewählten Pokémon nicht verändert. '
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
