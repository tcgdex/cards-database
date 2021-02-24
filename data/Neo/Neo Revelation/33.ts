import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Magcargo",
	},
	illustrator: "Shin-ichi Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		219,
	],
	hp: 80,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Slugma",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Magma Pool",
			},
			effect: {
				en: "If Magcargo is your Active Pokémon and moves to the Bench, remove 1 Fire Energy card attached to Magcargo, if any, and attach it to the new Active Pokémon. (You can't use an Energy card that you used to pay for the Retreat Cost.)",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Lava Flow",
			},
			effect: {
				en: "You may discard any number of Energy cards attached to Magcargo when you use this attack. If you do, this attack does 40 damage plus 20 more damage for each Energy card you discarded in this way.",
			},
			damage: 40,

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
