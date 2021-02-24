import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Salamence",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		373,
	],
	hp: 100,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Shelgon",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Intimidating Fang",
			},
			effect: {
				en: "As long as Salamence is your Active Pokémon, any damage done to your Pokémon by an opponent's attack is reduced by 10 (before applying Weakness and Resistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
			],
			name: {
				en: "Dragon Flame",
			},
			effect: {
				en: "You may discard an Energy card attached to Salamence. If you do, this attack does 40 damage plus 20 more damage.",
			},
			damage: 40,

		},
	],






}

export default card
