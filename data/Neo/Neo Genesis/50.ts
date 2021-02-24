import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Sunflora",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		192,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Sunkern",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				en: "Petal Dance",
			},
			effect: {
				en: "Flip 3 coins. This attack does 30 damage times the number of heads. Sunflora is now Confused (after doing damage).",
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





}

export default card
