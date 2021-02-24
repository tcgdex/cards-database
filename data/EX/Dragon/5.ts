import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Golem",
	},
	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		76,
	],
	hp: 120,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Graveler",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rock Vengeance",
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each damage counter on all of your Active Pokémon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rock Slide",
			},
			effect: {
				en: "Does 20 damage to 2 of your opponent's Benched Pokémon (1 if there is only 1). (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
