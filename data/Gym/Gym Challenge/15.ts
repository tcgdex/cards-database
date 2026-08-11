import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Rocket's Zapdos"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [145],

	hp: 70,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Plasma"
			},
			effect: {
				en: "If there are any Lightning Energy cards in your discard pile, attach 1 of them to Rocket's Zapdos."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Electroburn"
			},
			effect: {
				en: "Rocket's Zapdos does damage to itself equal to 10 times the number of Lightning Energy cards attached to it."
			},
			damage: 70,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88800,
			},
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 88800,
				cardmarket: 274283
			}
		},
	],
}

export default card
