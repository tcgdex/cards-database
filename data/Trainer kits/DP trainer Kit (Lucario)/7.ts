import { Card } from '../../../interfaces'
import Set from '../DP trainer Kit (Lucario)'

const card: Card = {
	dexId: [396],
	set: Set,

	name: {
		en: "Starly"
	},

	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	hp: 50,

	types: [
		"Colorless",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gust"
			},
			damage: 10
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quick Attack"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage."
			},
			damage: "10+"
		}
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "10+"
		}
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		}
	],

	description: {
		en: "They flock in great numbers. Though small, they flap their wings with great power."
	},

	retreat: 1
}

export default card
