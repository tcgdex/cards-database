import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Corphish",
		fr: "Ecrapince",
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		341,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Knock Off",
				fr: "Sabotage",
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 card from your opponent's hand without looking and discard it.",
				fr: "Lancez une pièce. Si c'est face, choisissez sans regarder une carte de la main de votre adversaire et défaussez-la.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Irongrip",
				fr: "Poigne de fer",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		fr: "Sa nature robuste lui permet de vivre sur n'importe quel terrain. Ses pinces ne lâchent jamais prise."
	}
}

export default card
