import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "M Lucario-EX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		448,
	],
	hp: 220,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Lucario-EX",
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Rising Fist",
			},
			effect: {
				en: "Discard an Energy attached to your opponent's Active Pokémon.",
			},
			damage: 140,

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
