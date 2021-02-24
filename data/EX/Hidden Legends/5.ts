import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Electrode",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		101,
	],
	hp: 70,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Voltorb",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Swift",
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
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
				en: "Mass Destruction",
			},
			effect: {
				en: "Both Electrode and the Defending Pokémon are now Knocked Out. If Electrode has any Special Energy cards attached to it, this attack does nothing.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],





}

export default card
