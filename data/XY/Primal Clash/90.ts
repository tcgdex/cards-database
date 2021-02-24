import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Diggersby",
		fr: "Excavarenne",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		660,
	],
	hp: 110,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Bunnelby",
		fr: "Sapereau",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Ear Dig",
				fr: "Excav'Oreille",
			},
			effect: {
				en: "Flip a coin until you get tails. For each heads, discard the top card of your opponent's deck.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Pour chaque côté face, défaussez la carte du dessus du deck de votre adversaire.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hammer In",
				fr: "Enfoncement",
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
