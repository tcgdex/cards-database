import { Card } from '../../../interfaces'
import Set from '../HGSS Black Star Promos'

const card: Card = {
	name: {
		en: "Ho-Oh",
		fr: "Ho-Oh"
	},
	illustrator: "Takashi Yamaguchi",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		250,
	],
	hp: 100,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Combustion",
				fr: "Fournaise"
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sacred Fire",
				fr: "Feu sacré"
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 of your opponent's Pokémon. This attack does 80 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
				fr: "Lancez une pièce. Si c'est face, choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 80 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance."
			},

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
