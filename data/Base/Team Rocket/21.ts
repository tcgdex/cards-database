import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Charizard",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		6,
	],
	hp: 80,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Charmeleon",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Nail Flick",
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Continuous Fireball",
			},
			effect: {
				en: "Flip a number of coins equal to the number of Energy cards attached to Dark Charizard. This attack does 50 damage times the number of heads. Discard a number of Energy cards attached to Dark Charizard equal to the number of heads.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],




}

export default card
