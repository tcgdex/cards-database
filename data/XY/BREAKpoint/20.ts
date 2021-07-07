import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Slowbro",
		fr: "Flagadoss",
	},
	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		80,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Slowpoke",
		fr: "Ramoloss",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Careless Head",
				fr: "Tête Imprudente",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 50 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts supplémentaires.",
			},
			damage: "10+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Walk-Off Homer",
				fr: "But Vainqueur",
			},
			effect: {
				en: "If you use this attack when you have only 1 Prize card left, you win this game.",
				fr: "Si vous utilisez cette attaque alors qu'il ne vous reste qu'une seule carte Récompense, vous gagnez cette partie.",
			},

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
