import { Card } from '../../../interfaces'
import Set from '../POP Series 7'

const card: Card = {
	name: {
		en: "Flaaffy",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		180,
	],
	hp: 80,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Mareep",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Attract Current",
			},
			effect: {
				en: "Search your deck for a Lightning Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Electromagnetic Kick",
			},
			effect: {
				en: "Flip a coin. If tails, Flaaffy does 10 damage to itself.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],




}

export default card
