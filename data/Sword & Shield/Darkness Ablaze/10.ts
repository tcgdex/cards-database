import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Accelgor",
		fr: "Limaspeed"
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
		fr: "Escargaume"
	},



	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Jet Headbutt",
				fr: "Bélier Volant"
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
