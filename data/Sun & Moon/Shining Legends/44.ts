import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Golurk",
		fr: "Golemastoc",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		623,
	],
	hp: 140,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Golett",
		fr: "Gringolem",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Triple Smash",
				fr: "Triple Éclate",
			},
			effect: {
				en: "Flip 3 coins. This attack does 60 more damage for each heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 60 dégâts supplémentaires pour chaque côté face.",
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Golurk Hammer",
				fr: "Maillet Golemastoc",
			},

			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 4,



}

export default card
