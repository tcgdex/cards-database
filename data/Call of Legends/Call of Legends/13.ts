import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Leafeon",
	},
	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		470,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Eevee",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Miasma Wind",
			},
			effect: {
				en: "Does 50 damage times the number of Special Conditions affecting the Defending Pokémon.",
			},
			damage: 50,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Soothing Scent",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],




}

export default card
