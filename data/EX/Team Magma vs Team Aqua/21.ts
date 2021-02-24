import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Mightyena",
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
				"Fightning",
			],
			name: {
				en: "Overrun",
			},
			effect: {
				en: "Choose 1 of your opponent's Benched Pokémon. This attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 10,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bite Off",
			},
			effect: {
				en: "If the Defending Pokémon is Pokémon-ex, this attack does 40 damage plus 40 more damage.",
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
			type: "Psychic",
			value: "-30"
		},
	],




}

export default card
