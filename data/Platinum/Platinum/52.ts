import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Lombre",
		fr: "Lombre",
	},
	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		271,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Lotad",
		fr: "Nénupiot",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Interrupt",
				fr: "Interruption",
			},
			effect: {
				en: "Flip a coin. If heads, look at your opponent's hand and choose 1 card, then have your opponent shuffle that card into his or her deck.",
				fr: "Lancez une pièce. Si c'est face, regardez la main de votre adversaire et choisissez-y une carte. Ensuite, demandez à votre adversaire de la mélanger à son deck.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gentle Slap",
				fr: "Gifle douce",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
