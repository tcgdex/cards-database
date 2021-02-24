import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Accelgor",
	},
	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Shelmet",
	},



	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Jet Headbutt",
			},

			damage: 70,

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
