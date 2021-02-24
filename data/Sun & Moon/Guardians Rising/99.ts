import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Hakamo-o",
		fr: "Écaïd",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		783,
	],
	hp: 90,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Jangmo-o",
		fr: "Bébécaille",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Headbutt",
				fr: "Coup d’Boule",
			},

			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Dragon Claw",
				fr: "Dracogriffe",
			},

			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
