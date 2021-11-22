import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Dratini",
		fr: "Minidraco"
	},
	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		147,
	],
	hp: 50,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Dragon Dew",
				fr: "Goutte de dragon"
			},
			effect: {
				en: "Remove 2 damage counters from 1 of your Pokémon (remove 1 if there is only 1).",
				fr: "Retirez deux marqueurs de dégât à un de vos Pokémon (ou un s'il n'y en a qu'un)."
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Tail Slap",
				fr: "Coud'keu"
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
