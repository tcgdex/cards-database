import { Card } from '../../../interfaces'
import Set from '../Pokémon Rumble'

const card: Card = {
	name: {
		en: "Lucario",
	},
	illustrator: undefined,
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		448,
	],
	hp: 90,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Riolu",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Metal Claw",
			},

			damage: 40,

		},
		{
			cost: [
				"Fightning",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pulse Blast",
			},

			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
