import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Rapidash",
	},
	illustrator: "Lee HyunJung",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		78,
	],

	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Ponyta",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Wild Guard",
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to Rapidash by your opponent's Pokémon SP.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Fire Mane",
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rising Lunge",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 50 damage plus 20 more damage.",
			},
			damage: "50+",

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],





}

export default card
