import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua's Mightyena",
	},
	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		262,
	],
	hp: 70,
	types: [
		"Darkness",
	],

	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Bite",
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mystic Fang",
			},
			effect: {
				en: "If the Defending Pokémon is Pokémon-ex, the Defending Pokémon is now Confused.",
			},
			damage: 50,

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
