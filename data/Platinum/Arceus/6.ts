import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Mothim",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		414,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Burmy",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Cloak Party",
			},
			effect: {
				en: "Search your deck for up to 3 in any combination of Burmy and Wormadam, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Assist",
			},
			effect: {
				en: "Search your discard pile for a basic Energy card and attach it to 1 of your Benched Pokémon.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],




}

export default card
