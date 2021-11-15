import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Miltank",
		fr: "Écrémeuh"
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		241,
	],
	hp: 70,
	types: [
		"Colorless",
	],
	evolveFrom: {
		fr: "Écrémeuh",
	},
	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Collect",
				fr: "Collectionner",
			},
			effect: {
				en: "Draw a card.",
				fr: "Piochez une carte.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Milk",
				fr: "Énergie lait",
			},
			effect: {
				en: "Flip a coin until you get tails. For each heads, remove 2 damage counters from 1 of your Pokémon.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Pour chaque face, retirez à 1 de vos Pokémon 2 marqueurs de dégât.",
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
				en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
			},
			damage: "20+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
