import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Klinklang",
		fr: "Cliticlic",
		es: "Klinklang",
		it: "Klinklang",
		pt: "Klinklang",
		de: "Klikdiklak"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		601,
	],

	hp: 140,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Klang",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Metal Blast",
			},
			effect: {
				en: "Does 20 more damage for each Metal Energy attached to this Pokémon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lock Gear",
			},
			effect: {
				en: "Draw cards until you have 6 cards in your hand.",
			},
			damage: 60,

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 280405
	}
}

export default card
