import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Steenee",
		fr: "Candine",
	},
	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		762,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Bounsweet",
		fr: "Croquine",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Sweet Scent",
				fr: "Doux Parfum",
			},
			effect: {
				en: "Heal 30 damage from 1 of your Pokémon.",
				fr: "Soignez 30 dégâts à l’un de vos Pokémon.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Stomp",
				fr: "Écrasement",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
