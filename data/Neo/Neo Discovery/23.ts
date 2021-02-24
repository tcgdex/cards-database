import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Houndoom",
	},
	illustrator: "Shin-ichi Yoshida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		229,
	],
	hp: 70,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Houndour",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crunch",
			},
			effect: {
				en: "Until the end of your next turn, if an attack damages the Defending Pokémon (after applying Weakness and Resistance), that attack does 20 more damage to the Defending Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
			},
			effect: {
				en: "Discard 1 Energy card attached to Houndoom or this attack does nothing.",
			},
			damage: 50,

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
