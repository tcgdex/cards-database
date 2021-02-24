import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Volcarona",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		637,
	],
	hp: 110,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Larvesta",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Scorching Scales",
			},
			effect: {
				en: "Put 4 damage counters instead of 2 on your opponent's Burned Pokémon between turns.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Burning Wind",
			},
			effect: {
				en: "You may discard an Energy attached to this Pokémon. If you do, the Defending Pokémon is now Burned.",
			},
			damage: 70,

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
