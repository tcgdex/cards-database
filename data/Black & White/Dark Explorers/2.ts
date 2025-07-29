import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Ivysaur",
		fr: "Herbizarre",
		es: "Ivysaur",
		it: "Ivysaur",
		pt: "Ivysaur",
		de: "Bisaknosp"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		2,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Bulbasaur",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Sleep Powder",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Poison Powder",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
			},
			damage: 50,

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

	retreat: 3,

	thirdParty: {
		cardmarket: 280330
	}
}

export default card
