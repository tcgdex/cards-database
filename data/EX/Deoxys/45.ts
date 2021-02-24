import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Shelgon",
	},
	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		372,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Bagon",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Hard Protection",
			},
			effect: {
				en: "Prevent all damage done to Shelgon by attacks from your Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Fire",
			],
			name: {
				en: "Rock Smash",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fire",
			value: "-30"
		},
		{
			type: "Fightning",
			value: "-30"
		},
	],




}

export default card
