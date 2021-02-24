import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Lileep",
		fr: "Lilia",
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		345,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Root Fossil",
		fr: "Wurzelfossil",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Astonish",
				fr: "Etonnément",
			},
			effect: {
				en: "Choose 1 card from your opponent's hand without looking. Look at that card you chose, then have your opponent shuffle that card into his or her deck.",
				fr: "Choisissez sans regarder une carte de la main de votre adversaire. Regardez-la et demandez à votre adversaire de la mélanger à son deck.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Absorb",
				fr: "Vol-vie",
			},
			effect: {
				en: "Remove 2 damage counters from Lileep.",
				fr: "Retirez à Lilia 2 marqueurs de dégât.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 2,



}

export default card
