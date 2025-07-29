import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Grovyle",
		fr: "Massko",
		es: "Grovyle",
		it: "Grovyle",
		pt: "Grovyle",
		de: "Reptain"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		253,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Treecko",
		fr: "Arcko",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Pound",
				fr: "Écras'Face",
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Cut",
				fr: "Coupe",
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 280885
	}
}

export default card
