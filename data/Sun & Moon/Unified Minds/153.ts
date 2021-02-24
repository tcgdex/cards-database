import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Latias",
		fr: "Latias",
	},
	illustrator: "chibi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		380,
	],
	hp: 120,
	types: [
		"Dragon",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Energy Arrow",
				fr: "Flèche d’Énergie",
			},
			effect: {
				en: "This attack does 20 damage times the amount of Energy attached to 1 of your opponent's Pokémon to that Pokémon. This damage isn't affected by Weakness or Resistance.",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre d’Énergies attachées à l’un des Pokémon de votre adversaire à ce Pokémon-là. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Speed Wing",
				fr: "Ailes Vives",
			},

			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
