import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua's Mightyena",
	},
	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		262,
	],
	hp: 80,
	types: [
		"Darkness",
	],

	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Aqua Call",
			},
			effect: {
				en: "Search your deck for Pokémon that has Team Aqua in its name, show up to 3 of them to your opponent, and put them into your hand. Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Wave Splash",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],




}

export default card
