import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Blaine's Moltres",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		146,
	],

	hp: 90,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Phoenix Flame",
			},
			effect: {
				en: "Flip a coin. If tails, shuffle Blaine's Moltres and all cards attached to it into your deck (after doing damage).",
			},
			damage: 90,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 274137,
		tcgplayer: 83875
	}
}

export default card
