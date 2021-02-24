import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Masquerain",
	},
	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		284,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Surskit",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Centrifugal Force",
			},
			effect: {
				en: "Does 20 damage times the number of Colorless Energy in the Defending Pokémon's Retreat Cost (after applying effects to the Retreat Cost).",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Swirling Ripple",
			},
			effect: {
				en: "If your opponent has any Water Pokémon in play, this attack does 30 damage plus 30 more damage and the Defending Pokémon is now Confused.",
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
			type: "Fightning",
			value: "-20"
		},
	],




}

export default card
