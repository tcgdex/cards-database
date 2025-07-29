import { Card } from '../../../interfaces'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		en: "Nidoqueen",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		31,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Nidorina",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Boyfriends",
			},
			effect: {
				en: "Does 20 damage plus 20 more damage for each Nidoking you have in play.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mega Punch",
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 273935
	}
}

export default card
