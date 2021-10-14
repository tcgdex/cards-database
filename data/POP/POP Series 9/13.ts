import { Card } from '../../../interfaces'
import Set from '../POP Series 9'

const card: Card = {
	name: {
		en: "Chimchar",
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		390,
	],

	hp: 40,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Serial Swipes",
			},
			effect: {
				en: "Flip 4 coins. This attack does 10 damage times the number of heads.",
			},
			damage: "10×",

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sleepy",
			},
			effect: {
				en: "If you have Piplup in play, this attack does 40 damage plus 20 more damage and the Defending Pokémon is now Asleep.",
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],

	description: {
		en: "Its fiery rear end is fueld by gas made in its belly. Even rain can’t extinguish the fire."
	},

	retreat: 1,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	}
}

export default card
