import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Jolteon",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		135,
	],
	hp: 70,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Eevee",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Attract Current",
			},
			effect: {
				en: "Flip a coin. If heads, search your deck for a Lightning Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Multi Pulse",
			},
			effect: {
				en: "If Jolteon has 3 or more different types of basic Energy cards attached to it, this attack does 40 damage plus 20 more damage and the Defending Pokémon is now Confused.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],




}

export default card
