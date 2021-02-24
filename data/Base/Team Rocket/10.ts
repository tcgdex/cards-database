import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Machamp",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		68,
	],
	hp: 70,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Machoke",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Mega Punch",
			},

			damage: 30,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Fling",
			},
			effect: {
				en: "Your opponent shuffles his or her Active Pokémon and all cards attached to it into his or her deck. This attack can't be used if your opponent has no Benched Pokémon.",
			},

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
