import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Tympole",
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		535,
	],

	hp: 60,

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
				en: "Vibration",
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Mud Shot",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281191
	}
}

export default card
