import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Kabutops δ",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		141,
	],
	hp: 100,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Kabuto",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Vital Drain",
			},
			effect: {
				en: "If the Defending Pokémon is Knocked Out by this attack, remove all Special Conditions and 7 damage counters from Kabutops (all if there are less than 7).",
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thunderous Blow",
			},
			effect: {
				en: "Does 40 damage plus 10 more damage for each Lightning Energy attached to Kabutops.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
