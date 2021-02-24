import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Golduck",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		55,
	],
	hp: 70,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Psyduck",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Chaos Flash",
			},
			effect: {
				en: "Once during your turn (before your attack), if Golduck is your Active Pokémon, you may flip a coin. If heads, the Defending Pokémon (choose 1 if there are 2) is now Confused. This power can't be used if Golduck is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Psychic",
			],
			name: {
				en: "Special Blow",
			},
			effect: {
				en: "If the Defending Pokémon has any Special Energy cards attached to it, this attack does 30 damage plus 40 more damage.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
