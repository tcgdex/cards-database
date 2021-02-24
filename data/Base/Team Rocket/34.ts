import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Electrode",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		101,
	],
	hp: 60,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Voltorb",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rolling Tackle",
			},

			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Energy Bomb",
			},
			effect: {
				en: "Take all Energy cards attached to Dark Electrode and attach them to your Benched Pokémon (in any way you choose). If you have no Benched Pokémon, discard all Energy cards attached to Dark Electrode.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],





}

export default card
