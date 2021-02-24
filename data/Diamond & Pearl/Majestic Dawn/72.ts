import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Piplup",
		fr: "Tiplouf",
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


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Splatter",
				fr: "Baie Pecha",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
				fr: "Si Tiplouf est Empoisonné, retirez-lui l'État Spécial Empoisonné à la fin du tour de chaque joueur.",
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				fr: "Crépitement",
			},
			effect: {
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 10 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
