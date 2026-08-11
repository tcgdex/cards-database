import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Krokorok",
		fr: "Escroco",
		es: "Krokorok",
		it: "Krokorok",
		pt: "Krokorok",
		de: "Rokkaiman"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		552,
	],

	hp: 90,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Sandile",
		fr: "Mascaïman"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mud-Slap",
				fr: "Coud'Boue"
			},

			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Corkscrew Punch",
				fr: "Poing Tire-Bouchon"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		en: "They live in groups of a few individuals. Protective membranes shield their eyes from sandstorms.",
	},

	thirdParty: {
		cardmarket: 280393,
		tcgplayer: 86538
	}
}

export default card
