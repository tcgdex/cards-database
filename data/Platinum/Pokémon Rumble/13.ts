import { Card } from '../../../interfaces'
import Set from '../Pokémon Rumble'

const card: Card = {
	name: {
		en: "Skuntank",
	},
	illustrator: undefined,
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		435,
	],
	hp: 90,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Stunky",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rage",
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each damage counter on Skuntank.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],




}

export default card
