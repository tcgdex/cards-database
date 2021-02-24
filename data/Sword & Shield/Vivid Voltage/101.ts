import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Grapploct",
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 130,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Clobbopus",
	},



	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Full Nelson",
			},
			effect: {
				en: "During your opponent’s next turn, the Defending Pokémon can’t retreat.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Tentacle Buster",
			},
			effect: {
				en: "If this Pokémon used Full Nelson during your last turn, this attack does 120 more damage.",
			},
			damage: "50+",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
